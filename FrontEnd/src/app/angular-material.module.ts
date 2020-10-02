import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Button
import {MatButtonModule} from '@angular/material/button';
//Icon
import {MatIconModule} from '@angular/material/icon';
//Divider
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
