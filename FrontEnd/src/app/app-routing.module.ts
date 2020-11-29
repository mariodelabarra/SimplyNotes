import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterModule } from 'src/app/components/login-register/login-register.module';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav/sidenav.component';
import { HomeModule } from 'src/app/components/home/home.module';
import { LogoutComponent } from 'src/app/components/login-register/logout/logout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BoardModule } from 'src/app/components/board/board.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';


const routes: Routes = [
  {path: '', loadChildren: () => LoginRegisterModule},
  {path: 'dashboard', component: SidenavComponent, children: [
    {path: 'home', loadChildren: () => HomeModule, canLoad: [AuthGuard]},
    {path: 'profile', loadChildren: () => ProfileModule, canLoad: [AuthGuard]},
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
