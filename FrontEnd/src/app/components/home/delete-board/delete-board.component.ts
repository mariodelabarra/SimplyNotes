import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Board } from 'src/app/models/board';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-delete-board',
  templateUrl: './delete-board.component.html',
  styleUrls: ['./delete-board.component.css']
})
export class DeleteBoardComponent implements OnInit {

  board: Board;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Board,
              private dialogRef: MatDialogRef<DeleteBoardComponent>,
              private boardService: BoardService) { 
                this.board = data;
              }

  ngOnInit(): void {
  }

  deleteBoard(): void {
    debugger;
    this.boardService.deleteBoard(this.board.id).subscribe(
      resp => {
        this.dialogRef.close();
      }
    );
  }

}
