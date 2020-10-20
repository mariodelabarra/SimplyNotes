import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterModule } from './components/login-register/login-register.module';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { HomeModule } from './components/home/home.module';
import { LogoutComponent } from './components/login-register/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { BoardModule } from './components/board/board.module';


const routes: Routes = [
  {path: '', loadChildren: () => LoginRegisterModule},
  {path: 'dashboard', component: SidenavComponent, children: [
    {path: 'home', loadChildren: () => HomeModule, canLoad: [AuthGuard]},
    {path: 'board/:id', loadChildren: () => BoardModule, canLoad: [AuthGuard]},
    {path: 'logout', component: LogoutComponent, canLoad: [AuthGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
