import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule, MatSnackBar } from '@angular/material';
import { SaveDataService } from '../save-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser:{
    username:String,
    email:String,
    contact:String,
    password:String,
    confirmPassword:String
  }
  constructor(
    private router:Router,
    private saveDataService:SaveDataService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.registerUser={
      username:'',
      email:'',
      contact:'',
      password:'',
      confirmPassword:''
    };
  }
 onSubmit(form:any){
   console.log('register user name',this.registerUser.username)
  // console.log('checking form itself',form)
   console.log(form.controls['name'].value,form.controls['email'].value);
   console.log(form.controls['password'].value,form.controls['phoneNumber'].value);
   console.log(form.controls['confirmPassword'].value);
   this.registerUser.username = form.controls['name'].value;
   this.registerUser.email = form.controls['email'].value;
   this.registerUser.contact = form.controls['phoneNumber'].value;
   this.registerUser.password = form.controls['password'].value;
   this.registerUser.confirmPassword = form.controls['confirmPassword'].value;
   if(this.registerUser.confirmPassword !== this.registerUser.password){
    this.snackbar.open(
      'password and confirm password did not match please try again!',
      'undo',
      {
        duration:9000
      }
    )
   }
   else{
        this.saveDataService.submitUser(this.registerUser)
          .subscribe(res=>{
            console.log('here in response',res.json());
            if(res){
              this.router.navigate(['/login']);
            }
          })
    }
  
 }
goToLogIn(){
  this.router.navigate(['/login']);
}
}
