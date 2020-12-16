//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data-list.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten als
//          Listenansicht darstellen
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------

import { Component, Input, OnInit }   from '@angular/core';

import * as vsViewData                from '../vs-view-data/vs-view-data.component';
import * as vsDataFilter              from '../../../$vsLib_Candidates/vsDataFilter';



@Component({
  selector:     'vs-view-data-list',
  templateUrl:  './vs-view-data-list.component.html',
  styleUrls:   ['./vs-view-data-list.component.css']
})
export class TvsViewDataList extends vsViewData.TvsViewData implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)
  
  @Input()    FilterMain:       vsDataFilter.TvsDataFilter      = new vsDataFilter.TvsDataFilter();


  //------ Constructor

  constructor() {
    super();
  } // constructor



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------



  //------ NG event handler

  ngOnInit(): void {
  }

} // TvsViewDataList


