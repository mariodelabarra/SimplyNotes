import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { CacheService } from './cache.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }

  createNewUser(user: User): Observable<Response> {
    return this.http.post(`${environment.urlService}/user`, user)
      .pipe(map((response: any) => response));
  }

  getUserByEmail(user: User): Observable<User> {
    return this.http.post<User>(`${environment.urlService}/user/GetUserByEmail`, user);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.urlService}/user`, user).pipe(
      map((response: any) => response));
  }
}
