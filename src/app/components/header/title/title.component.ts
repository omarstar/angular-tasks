import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  paramsValue = ''
  ngOnInit(): void {
    this.paramsValue = this.route.snapshot.params['cat']
  }

}
