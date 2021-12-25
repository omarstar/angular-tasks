import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  items:any[] = []
  
  @Output()
  selectedItemEmitter = new EventEmitter();
  
  constructor() {}
  
  ngOnInit(): void {
    console.log('in child', this.items)
  }

  selectItem(item:Object){
    this.selectedItemEmitter.emit(item);
  }
}
