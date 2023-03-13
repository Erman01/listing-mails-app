import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(
      signInForm.value.username,
      signInForm.value.password
    );
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }

    this.authenticationService.authenticate(signInData).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/mails']);
    });
  }
}
