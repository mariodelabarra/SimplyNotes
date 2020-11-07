import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteBoardComponent } from '../delete-board/delete-board.component';
import { NewBoardComponent } from '../new-board/new-board.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newBoard(): void{
      const dialogRef = this.dialog.open(NewBoardComponent, {
        panelClass: 'modal-dialog',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }


}
