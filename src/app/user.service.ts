import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLoggedIn;
  public userId;
  public methodId;
  public username;

  constructor() {
     this.isUserLoggedIn = false;
     
  }
  setUserLoggedIn(name) {
  	this.isUserLoggedIn = true;
    this.username = name;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }
  setUserSelected(custName){
    this.userId = custName;

  }
  setmethodSelected(methodname){
    this.methodId = methodname;
  }

  
}
