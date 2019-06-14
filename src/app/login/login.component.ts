import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private user : UserService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
  	console.log(event);
  	var username = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn(username);
      this.router.navigate(['select']);
    } 
  	
  }
}
