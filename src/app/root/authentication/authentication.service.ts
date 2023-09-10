import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      void this.router.navigate(['/login']);
    }
    return this.isAuthenticated();
  }

  login(username: string, password: string): Observable<any> {
    // query credentials from database

    return new Observable(observer => {
      observer.next();
      localStorage.setItem('token', username);
      observer.complete();
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    void this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token === 'admin';
  }
}
