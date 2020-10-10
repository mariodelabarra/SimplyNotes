import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';

const boardRoutes: Routes = [
  { path: '', children: [{ path: '', component: BoardComponent }]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(boardRoutes)
  ],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
