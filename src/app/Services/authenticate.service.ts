import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authenticateUser(user: any){
    let userArray =[];
    if(localStorage.getItem('Users')){
      userArray = JSON.parse(localStorage.getItem('Users'));
    }
    return userArray.find(
      (p: { userName: string; userPassword: string; }) =>
       p.userName === user.userName && p.userPassword === user.userPassword);
  }
}
