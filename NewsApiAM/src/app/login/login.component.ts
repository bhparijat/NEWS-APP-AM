import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { Router } from '@angular/router';
import { SaveDataService } from '../save-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser:{
    username:String,
    password:String
  }
  failedTologIn;
  constructor(
    private router:Router,
    private saveDataService:SaveDataService
  ) { }

  ngOnInit() {
    this.loginUser={
      username:'', 
      password:''
    };
    this.failedTologIn=false;
  }
  onLoginSubmit(form){
    console.log(form.controls['userName'].value);
    console.log(form.controls['password'].value);
    this.loginUser.username = form.controls['userName'].value;
    this.loginUser.password  = form.controls['password'].value;
    this.saveDataService.verifyUser(this.loginUser)
    .subscribe(res=>{
        if(res.status == 200){
          console.log(res.status);
          this.router.navigate(['/dashboard']);
        }else{
          this.failedTologIn=true;
        }
    });
  }

}
