import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'anony';
  constructor(private user : UserService) { }

  ngOnInit() {
    this.name = this.user.username;
  }

}
