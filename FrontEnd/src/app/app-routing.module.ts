import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { BoardModule } from './components/board/board.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'board', loadChildren: () => BoardModule },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
