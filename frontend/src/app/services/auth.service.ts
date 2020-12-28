import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public angular2TokenService: Angular2TokenService, private router: Router) {
  }

  logIn(email: string, password: string) {
    this.angular2TokenService.signIn({
      email: email,
      password: password
    }).subscribe(
      res => this.router.navigate(['/homepage']),
      error => console.log(error)
    );
  }

  logOut() {
    this.angular2TokenService.signOut().subscribe(
      (res: any) => console.log(res),
      (error: any) => console.log(error)
    );
  }
}
