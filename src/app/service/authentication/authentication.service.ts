import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly mockedUser = new SignInData('erman', '1234');
  isAuthenticated = false;

  constructor(private router: Router) {}

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;

      this.router.navigate(['mails']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): boolean {
    return (
      this.checkUsername(signInData.getUserName()) &&
      this.checkPassword(signInData.getPassword())
    );
  }
  private checkUsername(username: string) {
    return username === this.mockedUser.getUserName();
  }
  private checkPassword(password: string) {
    return password === this.mockedUser.getPassword();
  }
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
