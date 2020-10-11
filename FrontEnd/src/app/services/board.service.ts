import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getAllBoard(userId: number, page: number, rows: number): Observable<Board[]> {
    debugger;
    return this.http.get<Board[]>(`${environment.urlService}/board/${userId}`);
  }

}
