import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';
import { User } from 'src/app/models/user';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  newNoteForm: FormGroup;

  note: Note;
  boardId: number;

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<NewNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public noteService: NoteService) {
      this.boardId = parseInt(data);
     }

  ngOnInit(): void {
    this.buildNewNoteForm();
  }

  buildNewNoteForm(): void {
    this.newNoteForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      description: ['', [Validators.maxLength(255)]]
    })
  }

  saveNote() {
    if(this.newNoteForm.dirty && this.newNoteForm.valid) {
      let noteAux: Note = Object.assign({}, this.note, this.newNoteForm.value);
      let user: User = JSON.parse(JSON.parse(localStorage.getItem('user')));
      noteAux.userId = user.id;
      noteAux.boardId = this.boardId;
      this.noteService.newNote(noteAux).subscribe(
        resp => {
          this.dialogRef.close();
        }
      )
    }else if(!this.newNoteForm.dirty){
      this.newNoteForm.reset();
    }
  }

}
