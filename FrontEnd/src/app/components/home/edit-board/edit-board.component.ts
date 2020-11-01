import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Board } from 'src/app/models/board';
import { User } from 'src/app/models/user';
import { BoardService } from 'src/app/services/board.service';
import { WhiteSpaceValidators } from 'src/app/validators/whiteSpaceValidators';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {

  editBoardForm: FormGroup;
  board: Board;
  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Board,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditBoardComponent>,
              private boardService: BoardService) {
   }

  ngOnInit(): void {
    this.buildEditBoardForm();
  }

  buildEditBoardForm(): void {
    this.editBoardForm = this.formBuilder.group({
      name: [this.data.name, [Validators.required, WhiteSpaceValidators.cannotContainSpace]],
      description: [this.data.description]
    })
  }

  editBoard() {
    if(this.editBoardForm.dirty && this.editBoardForm.valid){
      const board = Object.assign({}, this.board, this.editBoardForm.value);
      this.data.name = board.name;
      this.data.description = board.description;
      this.boardService.editBoard(this.data).subscribe(
        resp => {
          this.dialogRef.close();
        }
      );
      
    }else if(!this.editBoardForm.dirty){
      this.editBoardForm.reset();
    }
  }

}
