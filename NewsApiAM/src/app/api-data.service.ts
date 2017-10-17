import {Http} from '@angular/http';
import {Component,Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
@Injectable()
export class ApiDataService{
    constructor(private http:Http){}
    sourceUrl='https://newsapi.org/v1/sources';
    articlesApiUrl:string;
    fetchSourcesFromApi():Observable<any>{
      return  this.http.get(this.sourceUrl);
    }
    getArticlesOfSource(source:any):Observable<any>{
      this.articlesApiUrl =`
      https://newsapi.org/v1/articles?source=${source}&apiKey=95fc3b85d10e42a7ab4be2a1ae54dcce`
    return this.http.get(this.articlesApiUrl);
  }
}