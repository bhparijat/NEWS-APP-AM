import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import {MatCardAvatar} from '@angular/material'
import {MatButtonModule} from '@angular/material'
@Component({
  selector: 'my-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
@Input() article:any;
@Output() saveToReadLater=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
   readLaterOutput(article){
     this.saveToReadLater.emit(article);
   }
}
