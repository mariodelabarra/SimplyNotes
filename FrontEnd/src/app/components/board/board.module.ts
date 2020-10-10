import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    BoardRoutingModule,
    AngularMaterialModule
  ]
})
export class BoardModule { }
