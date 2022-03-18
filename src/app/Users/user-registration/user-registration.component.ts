import { getFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: IUser;
  userSubmitted: boolean;
  constructor(private fBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   userEmail: new FormControl(null, [Validators.required, Validators.email]),
    //   userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   userConfirmPassword: new FormControl(null, [Validators.required])
    // }, 
    // this.PasswordMatchingValidator
    // );
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registrationForm = this.fBuilder.group({
      userName: [null, Validators.required],
      userEmail: [null, [Validators.required, Validators.email]],
      userPassword: [null, [Validators.required, Validators.minLength(8)]],
      userConfirmPassword: [null, [Validators.required]]
    }, {validators: this.PasswordMatchingValidator
    });
  }

  onSubmit(){
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      //console.log(this.registrationForm);
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.UserData()); //store the user in browser's local storage
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

  PasswordMatchingValidator(fg: AbstractControl) :Validators {
    return fg.get('userPassword').value === fg.get('userConfirmPassword').value ? null : {'notmatched': true}; 
  } 
 
  UserData(): IUser{
    return this.user = {
      userName : this.UserName.value,
      userEmail: this.UserEmail.value,
      userPassword: this.UserPassword.value
    }
  }

  //getter methods for each property
  get UserName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get UserEmail(){
    return this.registrationForm.get('userEmail') as FormControl;
  }
  get UserPassword(){
    return this.registrationForm.get('userPassword') as FormControl;
  }
  get UserConfirmPassword(){
    return this.registrationForm.get('userConfirmPassword') as FormControl;
  }
}
