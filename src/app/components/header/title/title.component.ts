import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  paramsValue = ''

  url = 'https://api.github.com/users'
  users: any;
  isLoading = false;

  ngOnInit(): void {
    this.paramsValue = this.route.snapshot.params['cat']
    this.getUsers()
  }

  getUsers() {
    this.isLoading = true;
    this.http.get(this.url).subscribe(res=>{
      console.log(res)
      this.users = res
      this.isLoading = false
    },(error)=>console.log(error),()=>{console.log('finished!')})
  }

}
