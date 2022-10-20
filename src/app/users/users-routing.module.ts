import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { PasswordComponent } from '../password/password/password.component';


const routes: Routes = [

  {
    path: '',
    component: UserTableComponent
  },
  {
    path:'register',
    component:PasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
