import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule } from '@angular/material';
import { AllSourcesComponent } from './all-sources/all-sources.component';
import { MatGridListModule, MatCardModule} from '@angular/material';
import { ApiDataService } from './api-data.service';
import { HttpModule } from '@angular/http';
import { CardComponent } from './all-sources/card/card.component';
import {Routes,RouterModule} from '@angular/router';
import { ArticlesComponent } from './articles/articles.component'
import { DemoComponent } from './all-sources/demo.component';
import { ArticleCardComponent } from './articles/article-card/article-card.component';
import { SaveDataService } from './save-data.service';
import { ReadingListComponent, DialogOverviewExampleDialogComponent } from './reading-list/reading-list.component';
import { MatDialogModule, MatListModule, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatChipsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    AllSourcesComponent,
    CardComponent,
    ArticlesComponent,
    DemoComponent,
    ArticleCardComponent,
    ReadingListComponent,
    DialogOverviewExampleDialogComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
  MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule, MatButtonModule,MatGridListModule,MatCardModule,
    MatGridListModule,MatCardModule,
    MatDialogModule,MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatChipsModule,
    RouterModule.forRoot([
     {
       path:'login',
       component:LoginComponent
     },{
       path:'',
       redirectTo:'/login',
       pathMatch:'full'
     },
     {
       path:'articles/:id',
       component:ArticlesComponent
     },{
       path:'demo',
       component:DemoComponent
     },{
        path:'readingList',
        component:ReadingListComponent
     },{
       path:'register',
       component:RegisterComponent
     },
     {
       path:'dashboard/:user',
       component:AllSourcesComponent
     }
    ])
  ],
  entryComponents:[DialogOverviewExampleDialogComponent],
  providers: [ApiDataService,SaveDataService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
