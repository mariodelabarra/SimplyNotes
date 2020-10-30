import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from 'src/app/models/board';
import { User } from 'src/app/models/user';
import { CacheService } from 'src/app/services/cache.service';
import { BoardService } from '../../../services/board.service';
import { DeleteBoardComponent } from '../delete-board/delete-board.component';
import { EditBoardComponent } from '../edit-board/edit-board.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css'],
  providers: [BoardService]
})
export class BoardListComponent extends CacheService implements OnInit {

  boards: Board[] = [];
  user: User;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor(private boardService: BoardService, public dialog: MatDialog) {
    super();
    this.user = JSON.parse(this.getItem('user')) as User;
    this.getBoard(this.user.id,1,10);
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

  editBoard() {
    const dialogRef = this.dialog.open(EditBoardComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteBoard(){
    const dialogRef = this.dialog.open(DeleteBoardComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
