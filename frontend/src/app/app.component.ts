import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mudrasa';

  constructor(
    public angular2TokenService: Angular2TokenService,
    public authService: AuthService
  ) {
    this.angular2TokenService.init(environment.tokenAuthConfig);
  }
}
