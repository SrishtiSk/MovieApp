import { Injectable } from '@angular/core';
import { IUser } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: IUser){
    let users =[];
    if(localStorage.getItem('Users')) {
      users =JSON.parse(localStorage.getItem('Users'));
      users =[user, ...users]; //core.js:6210 ERROR TypeError: users is not iterable
      console.log(users);
    }
    else{
      users =[user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
