import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SignupServiceService } from '../../signup-service.service';
import { UserLogin } from '../../user-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  private newUserLogin: UserLogin = new UserLogin();

  constructor(private fb: FormBuilder, private signupServe: SignupServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.newUserLogin = this.loginForm.value as UserLogin;
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }
    this.signupServe.login(this.newUserLogin)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );

  }

}
