import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardRoutingModule } from './board-routing.module';



@NgModule({
  declarations: [BoardListComponent],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
