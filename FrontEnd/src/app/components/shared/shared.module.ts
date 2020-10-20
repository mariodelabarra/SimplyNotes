import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [NotFoundComponent, SpinnerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [NotFoundComponent, SpinnerComponent]
})
export class SharedModule { }
