import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  postTask(task: Task): Observable<Response> {
    return this.http.post(`${environment.urlService}/task`, task).pipe(
      map((resp: any) => resp));
  }

  deleteTask(taskId: number): Observable<Response> {
    return this.http.delete(`${environment.urlService}/task/${taskId}`).pipe(
      map((response: any) => response)
    );
  }

}
