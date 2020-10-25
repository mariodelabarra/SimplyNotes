import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Board } from 'src/app/models/board';
import { User } from 'src/app/models/user';
import { BoardService } from 'src/app/services/board.service';
import { WhiteSpaceValidators } from '../../../validators/whiteSpaceValidators';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {

  newBoardForm: FormGroup;
  board: Board;
  user: User;

  constructor(public dialogRef: MatDialogRef<NewBoardComponent>,
              private formBuilder: FormBuilder,
              private boardService: BoardService) { }

  ngOnInit(): void {
    this.buildNewBoardForm();
  }

  buildNewBoardForm(): void {
    this.newBoardForm = this.formBuilder.group({
      name: ['', [Validators.required, WhiteSpaceValidators.cannotContainSpace]],
      description: [''],
    })
  }

  saveBoard() {
    if(this.newBoardForm.dirty && this.newBoardForm.valid){
      const board = Object.assign({}, this.board, this.newBoardForm.value);
      let user = Object.assign({}, this.user, JSON.parse(localStorage.getItem('user')));
      board.userCreate = user.id;
      debugger;
      this.boardService.postBoardData(board).subscribe(
        resp => {
          this.dialogRef.close();
        }
      );
      
    }else if(!this.newBoardForm.dirty){
      this.newBoardForm.reset();
    }
  }

}
