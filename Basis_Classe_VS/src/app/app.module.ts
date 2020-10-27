import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Schueler } from './TVsDataObject/TvsDataObject';
import { GenericTableComponent } from './TVsListViewBasis/generic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewSchuerlerComponent } from './ListViewSchuerler/list-view-schuerler.component';
import { ListViewKursComponent } from './ListViewKurs/list-view-kurs.component';
import { TvsViewDataFilterComponent } from './TvsViewDataFilter/TvsViewDataFilter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    ListViewSchuerlerComponent,
    ListViewKursComponent,
    TvsViewDataFilterComponent,
    SearchPipe
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
  providers: [Schueler],
  bootstrap: [AppComponent]
})
export class AppModule { }
