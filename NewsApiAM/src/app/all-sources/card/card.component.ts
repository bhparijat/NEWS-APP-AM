import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import {AllSourcesComponent} from '../all-sources.component';

@Component({
    selector: 'my-card',
    templateUrl: 'card.component.html',
    styleUrls:['card.component.css']
})

export class CardComponent implements OnInit {
    @Input()sources:any;
    @Output() passIdToSourceComponent= new EventEmitter<string>();
    constructor() { }

    ngOnInit() { }
    viewArticlesForSource(id:string){
        console.log('this is card component');
     this.passIdToSourceComponent.emit(id);
    }
}