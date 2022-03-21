import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './Movie/movie-card/movie-card.component';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './Services/movie.service';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';
import { UserLogInComponent } from './Users/user-log-in/user-log-in.component';
import { UserRegistrationComponent } from './Users/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { AuthenticateService } from './Services/authenticate.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { AlertifyService } from './Services/alertify.service';

const appRoutes: Routes =[
  { path:'', component: UserLogInComponent},
  { path:'user/login', component: UserLogInComponent},
  { path:'movie-list', component: MovieListComponent },
  { path:'movie-details/:id', component: MovieDetailsComponent },
  { path:'user/registration', component: UserRegistrationComponent},
  { path:'**', component: UserLogInComponent } //always keep it in the end as its for routes that leads to nowhere

]

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    NavbarComponent,
    MovieDetailsComponent,
    UserLogInComponent,
    UserRegistrationComponent,
    FilterPipe,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
     MovieService,
     UserService,
     AuthenticateService,
     AlertifyService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
