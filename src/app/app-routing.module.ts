import { NgModule, Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  //{path:"",redirectTo:"/login",pathMatch:"full"},
  { path: "",component: LoginComponent },
  {path:"register",component:RegisterComponent}
];

@NgModule(
  {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  }
)

export class AppRoutingModule
{

}