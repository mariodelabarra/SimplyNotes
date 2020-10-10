import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const homeRoutes: Routes = [
  { path: '', children: [ { path: '', component: LoginComponent } ]},
  { path: '', children: [ { path: 'register', component: RegisterComponent}]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
