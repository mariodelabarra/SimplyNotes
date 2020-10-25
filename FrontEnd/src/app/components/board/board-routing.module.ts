import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from 'src/app/auth/role.enum';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BoardComponent } from './board/board.component'; 

const routes: Routes = [
  {path: '', component: BoardComponent/*, canActivate: [AuthGuard], data: { expectedRole: Role.User }*/ }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
