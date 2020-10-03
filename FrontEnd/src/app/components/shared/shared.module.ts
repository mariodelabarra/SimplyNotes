import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [NavBarComponent, SideNavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NavBarComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
