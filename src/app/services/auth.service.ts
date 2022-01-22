import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router) { }

  login(user: User) {
    if((user.uname === 'abc' && user.pword === '1234')) {
      this.loggedIn.next(true);    
      return 200;
    } else return 403;
  }

  logout(){
    //api to clear up
    //remove localstorage token data
    this.loggedIn.next(false)
    this.router.navigate(['login'])
  }
}
