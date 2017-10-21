import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveDataService } from './save-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route: any;
  sourceId: string;
  constructor(
    private router:Router,
    private saveDataService:SaveDataService
  ){}
  passIdToRootComponent(id:string){
    console.log('this is app root and id is',id);
    this.sourceId=id;
    //this.router.navigate(['articles',this.sourceId]);
  }
  getSavedArticles(){
    this.router.navigate(['/readingList'])
  }
  goToRegister(){
    this.router.navigate(['/register'])
  }
  goToDashboard(){
    this.router.navigate(['/dashboard'])
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
}
