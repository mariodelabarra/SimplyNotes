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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './auth/AuthHttpInterceptor';

//Auth
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

//Service
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
  providers: [AuthService, AuthGuard, UserService, TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
