import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  object : {};
  abc :{
    Confidence : []
  }
  def :{
    Prediction : []
  }
  private _jsonURL;
  private cust_id;
  private prediction;
  private confidence;
  private isPreferred;
  private cust1;
  private cust2;
  private cust3;
  private cust4;
  constructor(private http : HttpClient,private user :UserService,private router:Router) { 
    console.log("Getting the JSON data");
  }
  
  ngOnInit() {
    console.log(this.user.userId);
    console.log(this.user.methodId);
    var fixedURL = 'https://msamiran94.pythonanywhere.com/Customer';
    this.cust_id=this.user.userId;
    if(this.cust_id=='cust1'){
      this._jsonURL = fixedURL+'_1';
      this.cust1 = true;
    }
    else if(this.cust_id=='cust2'){
      this._jsonURL = fixedURL+'_2';
      this.cust2 = true;
    }
    else if(this.cust_id=='cust3'){
      this._jsonURL = fixedURL+'_3';
      this.cust3 = true;
    }
    else if(this.cust_id=='cust4'){
      this._jsonURL = fixedURL+'_4';
      this.cust4 = true;
    }
    
    //console.log(this._jsonURL);
    let obs = this.http.get(this._jsonURL);
    obs.subscribe(
      data => {
        this.object = data ;
        this.abc = data as any;
        this.def = data as any;	 // FILL THE ARRAY WITH DATA.
        this.confidence = this.abc.Confidence;
        this.prediction =this.def.Prediction;
          console.log(this.object);
          console.log(this.confidence);
          console.log(this.prediction);
         if(this.prediction=='Non-Preferred'){
            this.isPreferred = false;
         } 
         else if(this.prediction=='Preferred'){
          this.isPreferred = true;
         }
      }
    );

    
  }

  toggleTrends(eventName : any){
    this.router.navigate(['trends']);
  }
  guideAlert(this){
    if(this.isPreferred == true){
      alert("The quote can be accepted for business!! Half-yearly health check up is advised!");
    }
    if(this.isPreferred == false){
      alert("The quote should be rejected!!");
    }
  }
}
