import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos de Componentes
import { AngularMaterialModule } from '../app/angular-material.module';
import { LoginRegisterModule } from './components/login-register/login-register.module';
import { HomeModule } from './components/home/home.module';
import { BoardModule } from './components/board/board.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { LayoutModule } from '@angular/cdk/layout';

//HTTP
import { HttpClientModule } from '@angular/common/http';

//Auth
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    LoginRegisterModule,
    HomeModule,
    BoardModule,
    SidenavModule,
    LayoutModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
