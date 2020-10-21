import { HttpClient } from '@angular/common/http';
import {  OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schueler } from '../../app/VS/VSDataObject';


@Component({
  selector: 'list-view-kurs',
  templateUrl: './list-view-kurs.component.html',
  styleUrls: ['./list-view-kurs.component.css']
})


export class ListViewKursComponent implements OnInit {

  schueler: Schueler = new Schueler(this._http);
  dataKurs: any;
 
  constructor(protected _http: HttpClient) { }

  ngOnInit(): void {
    this.schueler
    .DataLoad('DataKurs').subscribe(
      (data) => {
      (this.dataKurs = data),
      console.table(this.dataKurs);
    }); 
  }

}
