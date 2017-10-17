import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ApiDataService } from '../api-data.service';
import { SaveDataService } from '../save-data.service';
@Component({
  selector: 'my-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  allArticles: any;
  constructor(
    private route:ActivatedRoute,
    private apiDataService:ApiDataService,
    private router:Router,
    private saveDataService:SaveDataService
  ) { 
    
  }
  ngOnInit(): void {
    console.log('in articles component');
    this.route.paramMap
    .switchMap((params: ParamMap) => this.apiDataService.getArticlesOfSource(params.get('id')))
    .subscribe((response) => 
               { 
                   this.allArticles=response.json().articles;       
                console.log(this.allArticles); 
                this.allArticles.forEach(element => {
                  if(localStorage.getItem(element.title)==null){
                  element['state']='Save To Read Later'
                  element['disable']=false
                  }
                  else{
                      element['state']='Saved'
                      element['disable']=true
                  }
              });
                   
               })
    
   }
  
   saveToReadLater(article:any){
    //article['id']=article.title+'$'+article.publishedAt
    console.log('trying to save',(article));
    article['state']='Saved'
    article['disable']=true
    this.saveDataService.saveInDb(article)
     .subscribe(response=>{
        
         //this.saveTheId(article.id);
        localStorage.setItem(article.title,'true');
     });


}
}
