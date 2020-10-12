import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [SideNavComponent, NotFoundComponent],
  imports: [
    RouterModule,
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
