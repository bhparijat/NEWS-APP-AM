import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
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
    private saveDataService:SaveDataService
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
   this.saveDataService.submitUser(this.registerUser)
     .subscribe(res=>{
       console.log('here in response',res.json());
       if(res){
         this.router.navigate(['/login']);
       }
     })
  
 }

}
