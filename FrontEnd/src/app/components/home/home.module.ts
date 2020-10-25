import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BoardListComponent } from './board-list/board-list.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { NewBoardComponent } from './new-board/new-board.component';
import { DeleteBoardComponent } from './delete-board/delete-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, BoardListComponent, NewBoardComponent, DeleteBoardComponent],
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
