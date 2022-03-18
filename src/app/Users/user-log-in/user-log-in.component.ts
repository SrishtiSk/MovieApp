import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Services/authenticate.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {

  constructor(private authService: AuthenticateService,
          private router: Router) { }

   ngOnInit(): void {
  }

  onLogin(logInFrom: NgForm){
    console.log(logInFrom.value);
    const token = this.authService.authenticateUser(logInFrom.value);
    if(token){
      localStorage.setItem('token', token.userName);
      //console.log('Log in Successful!');
      this.router.navigate(['/movie-list']);
    }
    else {
      console.log('Login failed');
    }
  }

}
