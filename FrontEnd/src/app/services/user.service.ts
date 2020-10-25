import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }

  getUserByEmail(user: User): Observable<User> {
    return this.http.post<User>(`${environment.urlService}/user/GetUserByEmail`, user);
  }
}
