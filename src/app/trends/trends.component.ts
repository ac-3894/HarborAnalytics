import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  trendImage:any = "assets/images/feature.jpg";
  constructor() { }

  ngOnInit() {
  }

}
