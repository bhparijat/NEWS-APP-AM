import { Component, OnInit,Inject } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
 savedArticles;
 
  constructor(
    private saveDataService:SaveDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.saveDataService.getSavedArticles()
        .subscribe((res)=>{
           this.savedArticles=res.json();
           console.log('finally have it',this.savedArticles)
        })
  }
  deleteArticle(article){
    
    this.saveDataService.deleteArticles(article)
    .subscribe((response)=>
    {
       this.savedArticles=this.savedArticles.filter(art=>art!==article)
    //    if(this.savedArticles.length===0){
    //     this.displayWarning=true;
    // }
    })
    
    
}
getTextToModal(selectedArticle){


  let dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
   
    data: { title:selectedArticle.title,
      description:selectedArticle.description,
      toSave:false
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    if(result != null)
    selectedArticle.description = result;
   console.log('modified description',selectedArticle.description);
   this.customizeArticle(selectedArticle);
  });

}
customizeArticle(selectedArticle){
  
   this.saveDataService.updateData(selectedArticle)
       .subscribe((res)=>{console.log('article customized')})
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'customize-dialog.html',
  styleUrls:['customize-dialog.css']
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    console.log('no click called');
    
    this.dialogRef.close();
  }

}

