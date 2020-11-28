import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { NewNoteComponent } from './note-card/new-note/new-note.component';
import { EditNoteComponent } from './note-card/edit-note/edit-note.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BoardComponent, NoteCardComponent, NewNoteComponent, EditNoteComponent, NewTaskComponent, EditTaskComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }
