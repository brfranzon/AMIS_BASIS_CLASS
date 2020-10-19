import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Greeter } from '../app/classes/greeter';
//import { Snake } from '../app/classes/snake';
//import { ConcreteCreator1 } from '../app/factory-method/fm';
//import { employeeFactory } from './factory-method/fm-person';
//import { TVsDataRecord } from './factory-method/vs';
//import { HttpClient } from '@angular/common/http';

import { Schueler } from '../app/VS/VSDataObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  //constructor(private schueler: Schueler){}
  constructor(protected _http: HttpClient) {}

  schueler: Schueler = new Schueler(this._http);
  dataSchueler: Schueler;
  dataKurs: Schueler;

  subscriptionSchueler: Subscription;
  subscriptionKurs: Subscription;

  ngOnInit(): void {
    /*  this.schueler.DataGetAll('DataAllSchueler').subscribe((data) => {
      (this.dataSchueler = data), console.log('schueler', this.dataSchueler);
    });


    this.schueler.DataGetAll('DataAllKurse').subscribe((data) => {
      (this.dataKurs = data),  console.log('kurs', this.dataKurs)
    }); 
  */

    this.subscriptionSchueler = 
    
    this.schueler
      .DataLoad('DataAllSchueler')
      .subscribe
      ((data) => {
        (this.dataSchueler = data),
        console.table(this.dataSchueler);
      });

    this.subscriptionKurs = this.schueler
      .DataLoad('DataAllKurse')
      .subscribe((data) => {
        (this.dataKurs = data), console.table(this.dataKurs);
      });



    this.schueler.DataSuche('DataAllKurse', '2').subscribe(
      (d) => {console.log(d)}
    );

  }



  ngOnDestroy() {
    this.subscriptionSchueler.unsubscribe();
    this.subscriptionKurs.unsubscribe();
  }


}
