//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten darstellen
//
//
//  H I S T O R Y
//
//  2020-11-10  TC   Genesis
//------------------------------------------------------------------------------

import { Component, OnInit }    from '@angular/core';

import * as vsView              from 'src/$vsLib_Candidates/View/components/vs-view/vs-view.component';



export class TvsViewPropertiesData extends vsView.TvsViewProperties {

  // Properties
  // ...

  // Event handler
  // ...

} // TvsViewPropertiesData



//
// TvsViewDataList
//
// Base class: Data View
//
@Component({
  selector:     'vs-view-data',
  templateUrl:  './vs-view-data.component.html',
  styleUrls:   ['./vs-view-data.component.css']
})
export class TvsViewData extends vsView.TvsView implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)
  
  // ./.



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

} // TvsViewData


