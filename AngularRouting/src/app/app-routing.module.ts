import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// we will define route for a dynamic view
const routes: Routes = [
  {
    component:LoginComponent,
    path:'userlogin'
  },
  {

  },
  {
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
