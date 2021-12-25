import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  filteredItems: any[] = [];
  items = [
    {type:'animal',name:'Dog'},
    {type:'color',name:'Green'},
    {type:'fruit',name:'Banana'},
    {type:'animal',name:'Frog'},
    {type:'fruit',name:'Apple'},
    {type:'color',name:'Purple'},
    {type:'animal',name:'Bird'},
    {type:'fruit',name:'Grapes'},
    {type:'fruit',name:'Mango'},
    {type:'animal',name:'Cat'},
    {type:'fruit',name:'Cherry'},
    {type:'color',name:'orange'},
  ];
  selectedItem = {};
  isAnySelected = false;

    ngOnInit() {
      this.filteredItems = [...this.items]
      this.isAnySelected = false;
    }

  filterBy(type:String){
    this.filteredItems = [...this.items.filter(el => el.type === type)]
    console.log('n parent',this.filteredItems)
    this.isAnySelected = false
    return this.filteredItems;
  }

  selectItem(item:any){
    this.selectedItem = item
    this.isAnySelected = true
  }

}
