import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { BoardModule } from './components/board/board.module';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginRegisterModule } from './components/login_register/login_register.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'board', loadChildren: () => BoardModule },
  { path: '', loadChildren: () => LoginRegisterModule },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
