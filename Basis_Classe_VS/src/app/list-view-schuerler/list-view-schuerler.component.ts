import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schueler } from '../../app/VS/VSDataObject';


@Component({
  selector: 'list-view-schuerler',
  templateUrl: './list-view-schuerler.component.html',
  styleUrls: ['./list-view-schuerler.component.css']
})
export class ListViewSchuerlerComponent implements OnInit {

 //constructor(private schueler: Schueler){}
 constructor(protected _http: HttpClient) {}

 schueler: Schueler = new Schueler(this._http);
 dataSchueler: Schueler;
 MsgError;

 subscriptionSchueler: Subscription;
 subscriptionKurs: Subscription;

 ngOnInit(): void {
    this.getData();
 }

 getData(){
  this.schueler
     .DataLoad('DataAllSchueler').subscribe
     ((data) => {
       (this.dataSchueler = data),
       console.table(this.dataSchueler);
     },

     error => this.MsgError = error
     
     );
 }

 ngOnDestroy() {
   this.subscriptionSchueler.unsubscribe();  
 }

 ngAfterContentInit(){
   console.log('teste', this.dataSchueler) 
 }

  //mainData = this.getData();
}
