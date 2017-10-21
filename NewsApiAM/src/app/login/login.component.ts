import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule,MatSnackBar} from '@angular/material';
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
  failedToLogIn;
  constructor(
    private router:Router,
    private saveDataService:SaveDataService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.loginUser={
      username:'', 
      password:''
    };
    this.failedToLogIn=false;
    console.log('initialized',this.failedToLogIn);
  }
  onLoginSubmit(form){
    console.log(form.controls['userName'].value);
    console.log(form.controls['password'].value);
    this.loginUser.username = form.controls['userName'].value;
    this.loginUser.password  = form.controls['password'].value;
    this.saveDataService.verifyUser(this.loginUser)
    .subscribe(res=>{
      console.log(res);
      let id=res['_body'];
      console.log('id is ',id);
        if(id.length!==0){
          console.log('found response',res);
          let url='/dashboard/'+String(id);
          this.router.navigate([url]);
        }else{
          console.log('cound not find response',res)
          this.failedToLogIn=true;
          console.log('initialized changed',this.failedToLogIn);
          let msg = 'Either Username or password is incorrect.Try again';
          this.snackBar.open(msg,'undo',{duration:5000});
        }
    });
  }
 goToRegister(){
   this.router.navigate(['/register']);
 }
}
