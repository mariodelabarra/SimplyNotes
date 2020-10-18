import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../auth/role.enum';
import { AuthService, IAuthStatus } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  protected currentAuthStatus: IAuthStatus;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = (this.authService.getAuthStatus()))
    );
  }

  canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin();
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkPermissions(childRoute);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermissions(next);
  }

  protected checkLogin() { //Chequea si tiene un token
    if((this.authService.getToken() == null || this.authService.getToken() === '')) {
      alert("You must login to continue");
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  protected checkPermissions(route?: ActivatedRouteSnapshot) {
    let roleMatch = true;

    if(route) {
      const expectedRole = route.data.expectedRole;
      if(expectedRole) {
        roleMatch = this.currentAuthStatus.role === expectedRole || this.currentAuthStatus.role === Role.Admin;
      }
    }

    if(!roleMatch) {
      alert("You do not have the permissions to view this resource.");
      this.router.navigate['dashboard/'];
      return false;
    }

    return true;
  }
  
}
