import { HttpClient } from '@angular/common/http';
import { EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Component, Directive } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Schueler } from '../TVsDataObject/TvsDataObject';

import { TvsDataFilterItem } from '../TvsDataFilterItem';
import { TVsViewDataList } from '../TVsViewDataList/TVsViewDataList.component';
import { TvsDataMenuItem } from '../TvsDataMenuItem';
import { TvsMeldung } from '../TvsMeldung';
import { A } from '../TvsMeldung';


@Component({
  selector: 'list-view-schuerler',
  templateUrl: './list-view-schuerler.component.html',
  styleUrls: ['./list-view-schuerler.component.css']
})

export class ListViewSchuerlerComponent extends TVsViewDataList
  implements OnInit {

    text:string;
    tvsMeldung: TvsMeldung = new TvsMeldung();

  constructor(
    protected _http: HttpClient,
    private _a: A    
    ) 
      {super();
  }

  schueler: Schueler = new Schueler(this._http);
  dataSchueler: any;
  MsgError;
  mainData: any;
  searchResult;
  filterName;
  filterNachname;
  showTable: boolean;
  subscriptionSchueler: Subscription;

  data: any =   [
    { "name" : "Ford", "models": "Mustang"  },
    { "name":  "BMW",  "models": "X5" },
    { "name":  "Fiat", "models":"Panda" }
  ];


  // Instanz als PB: OK!
   // event handler als PB

  //output decorator
  eventFromChild: any;
  @Output() eventFromChild1: EventEmitter<any> =   new EventEmitter();;


  //hostlistener
  @HostListener('document:mousemove', ['event'])
  public mouse(e: any):void {
      this.getEvent();
  }


  //Subject
  private static subject = new Subject<string>();

  public static getSubject(): Observable<string> {
    return ListViewSchuerlerComponent.subject.asObservable();
  }

  public onClick(): void {
    ListViewSchuerlerComponent.subject.next('hehehehehehe');
  }


  public submitCommand(): void {
    // Send the event on to the service for processing
    this.tvsMeldung.handlePlayerInput('Test event Player...');
    
  }
  
  ngOnInit(): void {

    this.tvsMeldung;//.onMyEvent.subscribe((value: string) => console.log('Triggered!', value));
    //this._tvsMeldung.trigger('Hello World')

    // Instanz als PB
    // this.tvsMeldung;
    console.log(this._a);
    var arr = Object.keys(this.tvsMeldung).map(key => ({type: key, value: this.tvsMeldung[key]}));
    
    //console.log('Meldung in der abgeleiteten Klasse', this.tvsMeldung);
    
    // Filter als PB
    // this.Filter.push(new TvsDataFilterItem('Filter 1 - Nachname: beim Schüler definiert!'));

    // Menu als PB
    
    // this.menuTitle = "Aktualisieren"
    // this.menuvalues.push(new TvsDataMenuItem('Value 1'));
    // this.menuvalues.push(new TvsDataMenuItem('Value 2'));

    // Event Handler als PB?
    //this.getEvent();
    //this.eventFromChild = "Event from child!"


  }

  closeHandler(){
      //  console.log(this.tvsMeldung.sendMessageEvent());
      console.log('Test Event!');
  }


  handleClick(event: any){
    this.eventFromChild = event;
    console.log(event);

    // output decorator
    // console.log(this.eventFromChild1);
  }


  private getEvent():void {
  //  console.log('Event!')
 }



  getFilterName(event) {
    this.filterName = event;
  }

  getFilterNachname(event) {
    console.log(event);
    this.filterNachname = event;
  }

  OnSearchName(event) {
    this.searchResult = event;

    this.schueler
      .DataLoad('DataSchuelerFindByParams', this.filterName, this.searchResult)
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((data) => (this.dataSchueler = data));
    this.showTable = true;
  }

  OnSearchNachname(event) {
    this.searchResult = event;
    this.schueler
      .DataLoad(
        'DataSchuelerFindByParams',
        this.filterNachname,
        this.searchResult
      )
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((data) => (this.dataSchueler = data));
    this.showTable = true;
  }
}
