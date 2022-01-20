import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  loginForm!: FormGroup;



  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.errorMsg = ""
    this.loginForm= this.fb.group({
      fName: ['zz',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      lName: ['last',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      pword: ['',[Validators.required,Validators.minLength(5)]],
      address: this.fb.group({
        street: [''],
        city: [''],
      })
    })
  //   this.loginForm= new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl('last',Validators.required),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //   })
  // })
    console.log(this.loginForm)
  }

  loginValidation() {
    if(this.username.trim().length === 0){
      this.errorMsg = constants.unameFieldEmpty;
    } else if(this.password.trim().length === 0) {
      this.errorMsg = constants.pwordFieldEmpty;
    } else {
      this.errorMsg = ""
      let res = this.auth.login({uname: this.username, pword: this.password})
      if(res === 200){
        this.router.navigate(['home'])
      }
      if(res === 403){ 
        this.errorMsg = constants.InvalidCredentials
      }
    }
  }

  updateProfile() {
    this.loginForm.patchValue({
      fName: 'me',
      address: {
        city: 'cici'
      }
    })
    console.log(this.loginForm)
  }

  get user(){
    return {
      fname: this.loginForm.get('fName'),
      lname: this.loginForm.get('lName'),
      email: this.loginForm.get('email'),
      pword: this.loginForm.get('pword')
    }
  }

  loginUser(){
    console.log(this.loginForm)
    this.loginForm.reset();
  }

}
