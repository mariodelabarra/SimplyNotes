import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) {}

    //Intercepta el HTTP request para agregarle el Token en el header de la request
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = this.authService.getToken();
        const authRequest = req.clone( { setHeaders: {authorization: `Bearer ${jwt}`}});
        
        return next.handle(authRequest).pipe(
            catchError((err, caught) => {
                if(err.status === 401) {
                    this.router.navigate(['']), {
                        queryParams: { redirectUrl: this.router.routerState.snapshot.url },
                    }
                }
                return observableThrowError(err);
            })
        )
    
    }
}