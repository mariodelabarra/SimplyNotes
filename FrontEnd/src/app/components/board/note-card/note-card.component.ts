import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/board';
import { Note } from 'src/app/models/note';
import { BoardService } from 'src/app/services/board.service';
import { DeleteTaskComponent } from '../task/delete-task/delete-task.component';
import { NewTaskComponent } from '../task/new-task/new-task.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  boardId: number;
  boardData: Board;
  notes: Note[] = [];

  deleteTaskMode: boolean = false;

  constructor(private routerActive: ActivatedRoute, private boardService: BoardService,
              public dialog: MatDialog, private render: Renderer2) {
    this.boardId = this.routerActive.snapshot.params.id;
    this.boardService.getBoardData(this.boardId).subscribe(
      resp => {
        this.boardData = resp;
        this.notes = this.boardData.notes;
      }
    )
   }

  ngOnInit(): void {
  }

  newTask(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      panelClass: 'modal-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteTask(): void {
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      panelClass: 'modal-dialog',
      //data: board
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateCheckBox(taskId: number, event: any): void{
    debugger;
    this.render.setStyle(`task-name-${taskId}`, "color", "green");
  }

}
