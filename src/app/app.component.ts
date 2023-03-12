import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { faBars, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'listing-mails-app';
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(public authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}
