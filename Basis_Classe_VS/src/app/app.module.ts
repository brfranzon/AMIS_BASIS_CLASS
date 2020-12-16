import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Schueler } from './TVsDataObject/TvsDataObject';
import { TVsViewDataList } from './TVsViewDataList/TVsViewDataList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewSchuerlerComponent } from './SchuelerViewList/list-view-schuerler.component';
import { ListViewKursComponent } from './KursViewList/list-view-kurs.component';
import { TvsViewDataFilter } from './TvsViewDataFilter/TvsViewDataFilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search.pipe';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ComponentTest1Component } from './component-test1/component-test1.component';
import { A, TvsMeldung } from './TvsMeldung';


@NgModule({
  declarations: [
    AppComponent,
    TVsViewDataList,
    ListViewSchuerlerComponent,
    ListViewKursComponent,
    TvsViewDataFilter,
    SearchPipe,
    ComponentTestComponent,
    ComponentTest1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [Schueler,  A, TvsMeldung],
  bootstrap: [AppComponent]
})
export class AppModule { }
