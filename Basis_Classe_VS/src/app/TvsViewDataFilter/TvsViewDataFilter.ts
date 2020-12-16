import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'TvsViewDataFilter',
  templateUrl: './TvsViewDataFilter.html',
  styleUrls: ['./TvsViewDataFilter.css'],
})

export class TvsViewDataFilter {


  searchName; searchNachname: string; 
  @Output() queryResultName = new EventEmitter<any>();
  @Output() queryResultNachname = new EventEmitter<any>();

  @Output() filterName = new EventEmitter<any>();
  @Output() filterNachname = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.filterName.emit('name');
    this.filterNachname.emit('nachname');
  }
  
  Aktualisieren() {
      console.log('F5...')
      this.queryResultName.emit(this.searchName);    
      this.queryResultNachname.emit(this.searchNachname);
  }
}

/*

   @Input()  schueler: any;
  readonly FIELDS = 'name,description,version,homepage';
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.results = this.queryField.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      // tap(value => console.log(value)),
      switchMap((value) =>
        this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.FIELDS,
          },
        })
      ),
      tap((res: any) => (this.total = res.total)),
      map((res: any) => res.results)
    );
  }

  OnSearch() {
   // this.search.emit(e.target.value);
   // console.log(e.target.value);
    const fields = 'name,description,version,homepage';
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      const params_ = {
        search: value,
        fields: fields,
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

      this.results = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => (this.total = res.total)),
        map((res: any) => res.results)
      );
    }
  }
*/
