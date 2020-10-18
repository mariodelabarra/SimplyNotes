import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BoardListComponent } from './board-list/board-list.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [HomeComponent, BoardListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
