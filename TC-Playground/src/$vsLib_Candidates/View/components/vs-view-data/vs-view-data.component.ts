//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten darstellen
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------

import { Component, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';

import * as vsView                    from 'src/$vsLib_Candidates/View/components/vs-view/vs-view.component';



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

  constructor(protected router: Router) {
    super(router);
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


