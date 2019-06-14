import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  name = 'anony';

  constructor(private user : UserService) { }

  ngOnInit() {
    this.name = this.user.username;
  	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}
