import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getBoardList(user: number, page: number, rows: number): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.urlService}/board/GetAllBoard/${user}/${page}/${rows}`);
  }

  getBoardData(boardId: number): Observable<Board> {
    return this.http.get<Board>(`${environment.urlService}/board/GetBoardData/${boardId}`);
  }


}
