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
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './afterlogin/header/header.component';
import { MainComponent } from './afterlogin/main/main.component';
import { AlhomeComponent } from './alhome/alhome.component';
import { AdminnnnComponent } from './adminnnn/adminnnn.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    SignupComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    AlhomeComponent,
    AdminnnnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
