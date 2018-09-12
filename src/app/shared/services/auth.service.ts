import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isAuth = false;

  constructor() { }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}

