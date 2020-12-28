import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  incorrectAttempt: boolean = false;
  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.incorrectAttempt = false;
  }

  onSubmit() {
    this.authService.logIn(this.email, this.password)
    setTimeout(() => {
      this.incorrectAttempt = true
    }, 1500);
  }
}
