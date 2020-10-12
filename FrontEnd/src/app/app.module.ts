import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Angular Material
import { AngularMaterialModule } from './angular-material.module';

//Components Module
import { SharedModule } from './components/shared/shared.module';
import { LoginRegisterModule } from "./components/login_register/login_register.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './components/board/board.module';
import { HomeModule } from './components/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Service
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    SharedModule,
    HomeModule,
    BoardModule,
    LoginRegisterModule,
    LayoutModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
