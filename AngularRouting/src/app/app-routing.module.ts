import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { GuardService } from './services/guard.service';
// we will define route for a dynamic view

const routes: Routes = [
  {component:LoginComponent, path:'userlogin'},
  {component:EmployeesComponent,path:'showemployees',  canActivate: [GuardService] },
  {component:HomeComponent,path:'home'},
  {component:HomeComponent,path:''},
  {component:PageNotFoundComponent, path:'**'},
  {component:SalaryDetailsComponent, path:"salarydetails/:eid"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
