//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view.component.ts
//  Notes:  View component (base class)
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------

import { Component, Input, OnInit }    from '@angular/core';



@Component({
  selector:     'vs-view',
  templateUrl:  './vs-view.component.html',
  styleUrls:   ['./vs-view.component.css']
})
export class TvsView implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)

  // public    ViewTitle:            String        = '<ViewTitle>';
  @Input()  ViewTitle:            String        = '<ViewTitle>';



  //------ Constructor

  constructor() {
    // ./.
  } // constructor



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

  // ...


  //------ NG event handler

  ngOnInit(): void {
  }

} // TvsView


