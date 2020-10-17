import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class SidenavModule { }
