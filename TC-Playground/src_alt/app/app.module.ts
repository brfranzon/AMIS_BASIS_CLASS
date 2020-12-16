import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }   from '@angular/core';

// vsLib
import { TvsViewDataList }      from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';

// app components
import { AppComponent }         from './app.component';
import { TestView01Component }  from './components/test-view01/test-view01.component';

import { AppRoutingModule } from './routing'; // CLI imports AppRoutingModule
import { ViewEditComponent } from './components/view-edit/view-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      AppComponent,
      TestView01Component, 
      TvsViewDataList, 
      ViewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  // , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


