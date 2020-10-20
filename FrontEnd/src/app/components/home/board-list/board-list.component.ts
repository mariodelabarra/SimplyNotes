import { Component, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent implements OnInit {

  boards: Board[] = [];

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor(private boardService: BoardService) {
    this.getBoard(3,1,3);
   }

  ngOnInit(): void {
  }

  getBoard(userId: number, page: number, rows: number): void {
    this.boardService.getBoardList(userId, page, rows).subscribe(
      resp => {
        this.boards = resp;
      }
    );
  }

}
