import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  pathRoutes = {
    HOME : '/home',
    TASK1 : '/task1',
    TASK2 : '/task2',
    PROJECT : '/main',
  }

  goToHome() {
    this.router.navigate(['home'])
  }
  logout() {
    this.auth.logout();
  }
}
