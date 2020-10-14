import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HommieComponent } from './hommie/hommie.component';
import { YogaComponent } from './yoga/yoga.component';
import { WeightTraningComponent } from './weight-traning/weight-traning.component';
import { HomeWorkoutComponent } from './home-workout/home-workout.component';
import { HommihomeComponent } from './hommihome/hommihome.component';
import { EastDelhiComponent } from './east-delhi/east-delhi.component';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomeComponent},
  {path:'servicees',component:ServiceesComponent},
  {path:'team',component:TeamComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'hommie',component:HommieComponent},
  {path:'yoga',component:YogaComponent},
  {path:'weight-traning',component:WeightTraningComponent},
  {path:'home-workout',component:HomeWorkoutComponent},
  {path:'hommihome',component:HommihomeComponent},
  {path:'east-delhi',component:EastDelhiComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
