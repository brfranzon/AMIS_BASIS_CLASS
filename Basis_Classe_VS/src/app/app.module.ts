import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Schueler } from './VS/VSDataObject';
import { GenericTableComponent } from './TVListViewBasis/generic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewSchuerlerComponent } from './list-view-schuerler/list-view-schuerler.component';
import { ListViewKursComponent } from './list-view-kurs/list-view-kurs.component';


@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    ListViewSchuerlerComponent,
    ListViewKursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [Schueler],
  bootstrap: [AppComponent]
})
export class AppModule { }
