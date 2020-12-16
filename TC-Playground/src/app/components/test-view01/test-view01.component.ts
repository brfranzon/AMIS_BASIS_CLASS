import { Component, ComponentFactoryResolver, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';

import * as vsDataFilter              from 'src/$vsLib_Candidates/vsDataFilter';
import * as vsViewDataList            from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';
import { TicketService } from 'src/app/services/ticket.Service';
import { HttpClient } from '@angular/common/http';
import { DispatchService } from 'src/app/services/dispatch.service';



@Component({
  selector:     'test-view01',
  templateUrl:  './test-view01.component.html',
  styleUrls:   ['./test-view01.component.css']
})
export class TestView01Component extends vsViewDataList.TvsViewDataList implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)
  
  // ./.



  //------ Constructor

  constructor(router: Router, protected _http: HttpClient,  
              protected _componentFactoryResolver: ComponentFactoryResolver,
              protected  eventService: DispatchService) {
    super(router, _http, _componentFactoryResolver, eventService);

    console.log('TestView01Component.constructor()');

    //------ So war es bisher...

    // // Allgemeines
    // this.ViewTitle    = 'Test View 01';

    // // Filterkriterien
    // this.FilterMain.ItemsClear();
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Name',       'Hallo');
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Vorname',    1234);
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctCheckBox,   'Aktiv',      true);


    //------ Jetzt nach Einführung von ViewProperties...

    // Allgemeines
    this.ViewProperties.ViewTitle     = 'Test View 01';

    // // Filterkriterien
    this.ViewProperties.FilterMain.ItemsClear();
    this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Name',       'Hallo');
    this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Vorname',    1234);
    this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctCheckBox,   'Aktiv',      true);

  } // constructor



  //------ Methods (PROTECTED)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------


  public retrieveTestMsg(a_sMsg: String): String {
    console.log('TestView01Component.retrieveTestMsg() / a_sMsg = ' + a_sMsg)

    let sMsg:   String;
  
    sMsg = super.retrieveTestMsg(a_sMsg);

    return 'Huhu :)';
  } // retrieveTestMsg



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------



  //------ NG event handler

  ngOnInit(): void {
  }

} // TestView01Component


