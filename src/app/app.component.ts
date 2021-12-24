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

  selectionList=["me","hope","pla"]

  luckyNumber = 1

  isClearDisabled = true
  chosenNumber = 1
  numbersList = [1,2,3,4,5,6,
    7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
    22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
    37,38,39,40,41,42,43,44,45,46,47,48,49,50,
  ];
  calculateDivisibleBy(nb: number){
    this.chosenNumber = nb;
    (nb === 1) ? this.isClearDisabled = true : this.isClearDisabled = false
  }
}
