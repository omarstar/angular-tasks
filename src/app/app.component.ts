import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zero-hero';
  
  isApproved = false
  approve(status:boolean){
    this.isApproved = status
  }

  numbers=["me","hope","pla"]

  luckyNumber = 1
}
