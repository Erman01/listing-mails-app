import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  authenticate(signInData: SignInData): Observable<any> {
    return this.httpClient
      .post<any>(
        'https://hire-our-grads-backend.azurewebsites.net/test/login',
        {
          username: signInData.username,
          password: signInData.password,
        }
      )
      .pipe(
        map((data) => {
          this.isAuthenticated = true;
          return data;
        })
      );
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
