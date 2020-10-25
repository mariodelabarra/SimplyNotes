import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/board';
import { Note } from 'src/app/models/note';
import { Task } from 'src/app/models/task';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  boardId: number;
  boardData: Board;
  notes: Note[] = [];

  constructor(private routerActive: ActivatedRoute, private boardService: BoardService) {
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

}
