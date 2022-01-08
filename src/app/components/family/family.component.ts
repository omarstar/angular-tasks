import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor (private router: Router){}

  title = 'zero-hero';
  
  isApproved = false
  approve(status:boolean){
    this.isApproved = status
  }

  selectionList=["me","hope","pla"]

  @ViewChild('input_lucky_number',{static: true}) customLuckyNumberInput! : any;
  
  luckyNumber = null

  ngOnInit(): void {
      this.customLuckyNumberInput.nativeElement.focus();
  }

  str1 = ""
  goToNextPage() {
    this.str1 = "loading content ..."
    setTimeout(()=>{
      console.log("loading complete!")
      this.router.navigate(['task1'])
    },2000)
  }

}
