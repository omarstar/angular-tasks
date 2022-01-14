import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname:string, pword:string) {
    return (uname === 'abc' && pword === '1234') ?
       200 : 403
  }

  logout(){
    //api to clear up
    //remove localstorage token data
    this.router.navigate(['login'])
  }
}
