import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { BoardModule } from './components/board/board.module';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Angular Material Module
import { MaterialModule } from './material.module';

//Components Module
import { SharedModule } from './components/shared/shared.module';
import { LoginRegisterModule } from "./components/login_register/login_register.module";


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BoardModule,
    LoginRegisterModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
