import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Board } from 'src/app/models/board';
import { Note } from 'src/app/models/note';
import { Task } from 'src/app/models/task';
import { Constant } from 'src/app/models/constant';
import { BoardService } from 'src/app/services/board.service';
import { TaskService } from 'src/app/services/task.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  board: Board;
  note: Note;
  task: Task;

  dataType: string;
  dataName: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<DeleteModalComponent>,
  private boardService: BoardService,
  private noteService: NoteService,
  private taskService: TaskService) {
    this.completeData(data);
   }

  ngOnInit(): void {
  }

  completeData(data: any) {
    if(data.hasOwnProperty(Constant.noteProperty)){
      this.note = data;
      this.dataType = Constant.noteType;
      this.dataName = this.note.title;
    }
    else if(data.hasOwnProperty(Constant.taskProperty)) {
      this.task = data;
      this.dataType = Constant.taskType;
      this.dataName = this.task.name;
    }
    else {
      this.board = data;
      this.dataType = Constant.boardType;
      this.dataName = this.board.name;
    }
  }

  deleteData(): void {
    if(this.board != null) {
      this.boardService.deleteBoard(this.board.id).subscribe(
        resp => {
          this.dialogRef.close();
        }
      );
    }else if(this.note != null) {
      this.noteService.deleteNote(this.note.id).subscribe(
        resp => {
          this.dialogRef.close();
        }
      );
    }else {
      this.taskService.deleteTask(this.task.id).subscribe(
        resp => {
          this.dialogRef.close();
        }
      );
    }
  }

}
