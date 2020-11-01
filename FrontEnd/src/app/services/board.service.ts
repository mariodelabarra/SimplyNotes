import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  postBoardData(newBoard: Board): Observable<Response> {
    return this.http.post(`${environment.urlService}/board`, newBoard)
    .pipe(
      map((response: any) => response));
  }

  editBoard(editBoard: Board): Observable<Response> {
    return this.http.put(`${environment.urlService}/board`, editBoard)
    .pipe(
      map((response: any) => response)
    );
  }

}
