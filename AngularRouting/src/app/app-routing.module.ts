import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
// we will define route for a dynamic view
const routes: Routes = [
  {
    component:LoginComponent,
    path:'userlogin'
  },
  {
    component:EmployeesComponent,
    path:'showemployees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
