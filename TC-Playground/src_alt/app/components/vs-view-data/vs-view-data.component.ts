//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten darstellen
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------

import { Component, OnInit }    from '@angular/core';

import { TvsView }              from '../vs-view/vs-view.component';



@Component({
  selector:     'vs-view-data',
  templateUrl:  './vs-view-data.component.html',
  styleUrls:   ['./vs-view-data.component.css']
})
export class TvsViewData extends TvsView implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

} // TvsViewData
