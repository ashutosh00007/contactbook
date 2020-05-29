import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactinfoComponent } from './pages/contactinfo/contactinfo.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '',component:ContactinfoComponent},
  {path: 'user',component:SignupComponent},
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
