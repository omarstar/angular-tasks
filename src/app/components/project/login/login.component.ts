import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { constants } from 'src/app/utils/Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""
  errorMsg = ""

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.errorMsg = ""
  }

  loginValidation() {
    if(this.username.trim().length === 0){
      this.errorMsg = constants.unameFieldEmpty;
    } else if(this.password.trim().length === 0) {
      this.errorMsg = constants.pwordFieldEmpty;
    } else {
      this.errorMsg = ""
      let res = this.auth.login(this.username, this.password)
      if(res === 200){
        this.router.navigate(['home'])
      }
      if(res === 403){ 
        this.errorMsg = constants.InvalidCredentials
      }
    }
  }
}
