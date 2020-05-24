import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserSignup } from '../../user-signup';
import { SignupServiceService } from '../../signup-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  private newUserSignup: UserSignup = new UserSignup();

  constructor(private fb: FormBuilder, private signupService: SignupServiceService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  get f() { return this.signupForm.controls; }

  onSubmitSignup() {

    this.newUserSignup = this.signupForm.value as UserSignup;
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.signupService.register(this.newUserSignup)
    .subscribe(
      error => console.log(error),
      response => console.log(response));


  }
}
