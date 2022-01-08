import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  items: Item[] = []
  
  @Output()
  selectedItemEmitter = new EventEmitter();
  
  constructor() {}
  
  ngOnInit(): void {
  }

  selectItem(item:Object){
    this.selectedItemEmitter.emit(item);
  }
}
