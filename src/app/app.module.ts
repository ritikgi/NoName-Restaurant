import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { NavComponent } from './nav/nav.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TeamComponent } from './team/team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AdminnnnComponent } from './adminnnn/adminnnn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HommieComponent } from './hommie/hommie.component';
import { YogaComponent } from './yoga/yoga.component';
import { WeightTraningComponent } from './weight-traning/weight-traning.component';
import { HomeWorkoutComponent } from './home-workout/home-workout.component';
import { HommihomeComponent } from './hommihome/hommihome.component';
import { EastDelhiComponent } from './east-delhi/east-delhi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ServiceesComponent,
    NavComponent,
    BlogsComponent,
    TeamComponent,
    AboutusComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AdminnnnComponent,
    HommieComponent,
    YogaComponent,
    WeightTraningComponent,
    HomeWorkoutComponent,
    HommihomeComponent,
    EastDelhiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
