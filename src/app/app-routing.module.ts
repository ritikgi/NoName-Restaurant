import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomeComponent},
  {path:'servicees',component:ServiceesComponent},
  {path:'team',component:TeamComponent},
  {path:'register' , component:RegisterComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
