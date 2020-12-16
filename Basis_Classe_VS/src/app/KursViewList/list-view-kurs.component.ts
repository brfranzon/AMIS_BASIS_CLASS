import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Schueler } from '../TVsDataObject/TvsDataObject';
import { TVsViewDataList } from '../TVsViewDataList/TVsViewDataList.component';
import { TvsDataFilterItem } from '../TvsDataFilterItem';


@Component({
  selector: 'list-view-kurs',
  templateUrl: './list-view-kurs.component.html',
  styleUrls: ['./list-view-kurs.component.css'],
})
export class ListViewKursComponent extends TVsViewDataList implements OnInit {
  

  data: any =   [
    { "Nachname" : "Winkler",  "Telefone": "123455"  },
    { "Nachname":  "Wolfgang", "Telefone": "546466"  },
    { "Nachname":  "Bla Bla",  "Telefone": "093284"  }
  ];





  schueler: Schueler = new Schueler(this._http);
  dataKurs: any;
  searchResult;
  filterName;
  showTable: boolean;

  constructor(protected _http: HttpClient) {
    super();
  }

  ngOnInit(): void {
  //  this.schueler.DataLoad('DataKurs').subscribe((data) => {
  //    (this.dataKurs = data), console.table(this.dataKurs);
  //  });
  this.Filter.push(new TvsDataFilterItem('Filter 10 - Kurs vom Schüler!'));
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
