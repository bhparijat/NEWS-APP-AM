import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';
@Component({
    selector:'all-sources',
    templateUrl:'./all-sources.component.html',
    styleUrls:['./all-sources.component.css']
})
export class AllSourcesComponent implements OnInit{
   // @Output() passIdToRootComponent=new EventEmitter<string>();
    sourcesArray:any;
    sources:any;
    showAlert:boolean;
    gotData:boolean;
    ngOnInit(): void {
        this.showAlert=false;
        this.gotData=false;
    }
    constructor(
        private apiDataService: ApiDataService,
        private router:Router
    ) { }
   
    onSearch(){
        this.apiDataService.fetchSourcesFromApi()
          .subscribe((response)=>{
              this.sourcesArray=response
            this.sources=JSON.parse(this.sourcesArray._body).sources;
            this.gotData=true;
            this.showAlert=true;
            console.log(this.sources);
          })
    }
    passIdToSourceComponent(id:string){
        console.log('this is source component',id);
      //this.passIdToRootComponent.emit(id);
     this.router.navigate(['/articles',id]);
    }

}
