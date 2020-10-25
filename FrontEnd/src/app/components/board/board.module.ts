import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [BoardComponent, NoteCardComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    AngularMaterialModule
  ]
})
export class BoardModule { }
