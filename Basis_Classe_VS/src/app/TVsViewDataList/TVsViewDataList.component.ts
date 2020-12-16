import { Template } from '@angular/compiler/src/render3/r3_ast';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ContentChild,
  TemplateRef,
  QueryList,
  ContentChildren,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TvsDataFilterItem } from '../TvsDataFilterItem';
import { TvsDataMenuItem } from '../TvsDataMenuItem';

// import component Schueler
import { ListViewSchuerlerComponent } from '../SchuelerViewList/list-view-schuerler.component';

@Component({
  selector: 'TVsViewDataList',
  templateUrl: './TVsViewDataList.component.html',
  styleUrls: ['./TVsViewDataList.component.css'],
})
export class TVsViewDataList implements OnInit {

  constructor( ) {

    ListViewSchuerlerComponent.
    getSubject().
    subscribe((response) => {
      this.doSomething(response);
    });
  }

  public doSomething(response: any): void {
    console.log('In der Basis - Event triggered', response);
  }



  // Ng-Template
  @ContentChild(TemplateRef) X;
  @Input() items: any;
  @Input() meldung;
  @Input() Filter: TvsDataFilterItem[] = [];
  @Input() menuvalues: TvsDataMenuItem[] = [];
  @Input() menuTitle: string;

  @Input() eventFromChild;

  

  ngOnInit(): void {

    console.log( 'Eigenschaft from View Properties', this.meldung);//.onMyEvent.subscribe((value: string) => console.log('Triggered!', value)) );
    
    console.log( 'Method from View Properties', this.meldung.Meldung() );

   // console.log( 'Event from View Properties...', this.meldung.sendMessageEvent() );

    this.Filter.push(
       new TvsDataFilterItem( 'Filter 2 - Name: bei der Basis definiert!' )
    );

    // console.log('Event from child in der Basis: ', this.eventFromChild);

  }


  @Input() data: any[];
  @Input() headers: any[];

  edit: boolean = false;
  idEdit: any;
  @Input() userFilter: any;

  getHeaders() {
    let headers: string[] = [];

    if (this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }

  getNestedObject(key: string, item: Array<any>) {
    Object.keys(item).forEach((key) => {
      if (key === 'address') {
        console.log(item[key].city);
      }
    });
    return key != 'address' ? item[key] : item[key].city;
  }

  Edit(item) {
    this.edit = true;
    this.idEdit = item;
    console.log('edit!', this.idEdit);
  }
}
