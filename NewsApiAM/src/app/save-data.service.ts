import {Http} from "@angular/http"
import {Injectable} from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class SaveDataService{
    constructor(
     private http:Http
    ){}
    postUrl=`http://localhost:4200/articles`
  saveInDb(article:any){
     console.log('artcile in save db got here',article);
     return this.http.post(this.postUrl,article)     
  }



  getSavedArticles():Observable<any>{
      console.log('sending request to get articles');
      return this.http.get(this.postUrl);
  }
  deleteArticles(article):Observable<any>{
      console.log(article);
      let deleteUrl=`
      http://localhost:4200/articles/${article._id}
      `
      return this.http.delete(deleteUrl)
                    
  }

  updateData(article){
      let url=`
      http://localhost:4200/updateData/${article._id}
      `
      return this.http.patch(url,article);
  }
  submitUser(user){
    let url=`
    http://172.23.238.168:4200/users/
    `
      return this.http.post(url,user)
  }
  verifyUser(user){
    let url=`
    http://localhost:4200/login/
    `
      return this.http.post(url,user)
  }
}