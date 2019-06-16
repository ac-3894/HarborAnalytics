import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trendImage:any = "assets/images/feature.jpg";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goback(eventName : any){
    this.router.navigate(['select']);
  }

  
}
