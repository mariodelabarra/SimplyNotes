import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/board';
import { Note } from 'src/app/models/note';
import { Task } from 'src/app/models/task';
import { BoardService } from 'src/app/services/board.service';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { NewNoteComponent } from './new-note/new-note.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  boardId: number;
  boardData: Board;
  notes: Note[] = [];

  deleteNoteMode: boolean;

  deleteTaskMode: boolean;
  deleteTaskModeNote: number;

  constructor(private routerActive: ActivatedRoute, private boardService: BoardService,
              public dialog: MatDialog, private renderer: Renderer2) {
    
    this.deleteNoteMode = false;
    this.deleteTaskMode = false;
    this.boardId = this.routerActive.snapshot.params.id;
    this.getAllBoardData();
   }

  ngOnInit(): void {
  }

  getAllBoardData(){
    this.boardService.getBoardData(this.boardId).subscribe(
      resp => {
        this.boardData = resp;
        this.notes = this.boardData.notes;
      }
    )
  }

  newNote() {
    const dialogRef = this.dialog.open(NewNoteComponent, {
      panelClass: 'modal-dialog',
      data: this.boardId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBoardData();
      console.log('The dialog was closed');
    });
  }

  deleteNote(note: Note) {
    if(this.deleteNoteMode){
      const dialogRef = this.dialog.open(DeleteModalComponent, {
        panelClass: 'modal-dialog',
        data: note
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.getAllBoardData();
        this.deleteNoteMode = false;
        console.log('The dialog was closed');
      });
    }
  }

  newTask(noteId: number): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      panelClass: 'modal-dialog',
      data: noteId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBoardData();
      console.log('The dialog was closed');
    });
  }

  deleteTaskFunction(noteId: number): void {
    this.deleteTaskMode = !this.deleteTaskMode;
    this.deleteTaskModeNote = noteId;
  }

  deleteTask(task: Task): void {
    if(this.deleteTaskMode && (this.deleteTaskModeNote == task.noteId)){
      const dialogRef = this.dialog.open(DeleteModalComponent, {
        panelClass: 'modal-dialog',
        data: task
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.getAllBoardData();
        this.deleteTaskMode = false;
        console.log('The dialog was closed');
      });
    }
  }

  updateCheckBox(task: Task, event: any): void{
  }

}
