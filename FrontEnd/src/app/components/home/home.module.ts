import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BoardListComponent } from './board-list/board-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, BoardListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class HomeModule { }
