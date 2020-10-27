import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schueler } from '../TVsDataObject/TvsDataObject';

@Component({
  selector: 'list-view-kurs',
  templateUrl: './list-view-kurs.component.html',
  styleUrls: ['./list-view-kurs.component.css'],
})
export class ListViewKursComponent implements OnInit {
  schueler: Schueler = new Schueler(this._http);
  dataKurs: any;
  searchResult;
  filterName;
  showTable: boolean;

  constructor(protected _http: HttpClient) {}

  ngOnInit(): void {
  //  this.schueler.DataLoad('DataKurs').subscribe((data) => {
  //    (this.dataKurs = data), console.table(this.dataKurs);
  //  });
  }

  OnSearch(event) {
       this.searchResult = event;

    if (this.searchResult.length > 3) {
      this.schueler
        .DataLoad(
          'DataKursFindByParams',
          this.filterName,
          this.searchResult
        )
        .subscribe((data) => (this.dataKurs = data));
      this.showTable = true;
    }

    if (this.searchResult.length < 1) {
      this.showTable = false;
    }
  }


  
  getFilterName(event) {
    this.filterName = event;
  }
}
