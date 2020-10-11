import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {

  board: Board[] = [];

  constructor(private boardService: BoardService) {
    debugger;
    this.getAllBoard(1,1,3);
   }

  ngOnInit(): void {
  }

  getAllBoard(userId: number, page: number, rows: number): void {
    this.boardService.getAllBoard(userId, page, rows).subscribe( 
      response => {
        this.board = response;
      }
    );
  }

}
