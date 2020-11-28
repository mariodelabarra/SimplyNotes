import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  
  newNote(note: Note): Observable<Response> {
    return this.http.post(`${environment.urlService}/note`, note).pipe(
      map((resp: any) => resp));
  }

  deleteNote(noteId: number): Observable<Response> {
    return this.http.delete(`${environment.urlService}/note/${noteId}`).pipe(
      map((response: any) => response));
  }

}
