import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OnInit, Pipe } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Schueler } from '../TVsDataObject/TvsDataObject';

@Component({
  selector: 'list-view-schuerler',
  templateUrl: './list-view-schuerler.component.html',
  styleUrls: ['./list-view-schuerler.component.css'],
})
export class ListViewSchuerlerComponent implements OnInit {
  schueler: Schueler = new Schueler(this._http);
  dataSchueler: any;

  MsgError;
  mainData: any;
  searchResult;
  filterName;
  showTable: boolean;
  subscriptionSchueler: Subscription;

  constructor(protected _http: HttpClient) {}

  ngOnInit(): void {}

  OnSearch(event) {
    this.searchResult = event;

    if (this.searchResult.length > 3) {
      this.schueler
        .DataLoad(
          'DataSchuelerFindByParams',
          this.filterName,
          this.searchResult
        )
        .pipe(debounceTime(250), distinctUntilChanged())
        .subscribe((data) => (this.dataSchueler = data));
      this.showTable = true;
    }

    if (this.searchResult.length < 1) {
      this.showTable = false;
    }
  }

  getFilterName(event) {
    this.filterName = event;
  }

  Click() {
    // console.log('data after oninit ---', this.dataSchueler)
  }

  //, this.dataFromSubs(this.dataSchueler)
  //dataFromSubs(data: any){
  // this.mainData = data;
  // console.log('data2:', this.mainData);
  // }

  // ngOnDestroy() {
  //  this.subscriptionSchueler.unsubscribe();
  // }

  //mainData = this.getData();
}
