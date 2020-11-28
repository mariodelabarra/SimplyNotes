import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { NewBoardComponent } from './board/new-board/new-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBoardComponent } from './board/edit-board/edit-board.component';


@NgModule({
  declarations: [HomeComponent, BoardListComponent, NewBoardComponent, EditBoardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewBoardComponent]
})
export class HomeModule { }
