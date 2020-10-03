import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';

const boardRoutes: Routes = [
  { path: '', children: [ { path: '', component: BoardListComponent } ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(boardRoutes)
  ],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
