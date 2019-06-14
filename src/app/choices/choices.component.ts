import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  netImage:any = "assets/images/cca.jpg";

  constructor(private router:Router,private user : UserService) { }

  ngOnInit() {
  }

  chooseMethod(choice){
    event.preventDefault();
  	console.log(choice);
  	
  }

  openCity(evt : any, custName : any): any {
    
    var i, tabcontent, tablinks;
    this.user.setUserSelected(custName);
    console.log(custName);
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(custName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  toggleMethod(event : any, methodname : any){
    console.log(methodname);
    this.user.setmethodSelected(methodname);
    this.router.navigate(['results']);
  }

  toggleTrends(eventName : any){
    this.router.navigate(['trends']);
  }
}
