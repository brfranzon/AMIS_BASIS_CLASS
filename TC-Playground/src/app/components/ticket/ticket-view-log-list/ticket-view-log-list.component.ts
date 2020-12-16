//------------------------------------------------------------------------------
//  MyPlayground (TC)
//
//  File:   ticket-view-log-list.component.ts
//  Notes:  Tickets: Protokoll (List View)
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------

import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';

import * as vsViewDataList            from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';
import { DispatchService} from 'src/app/services/dispatch.service';
import { TicketService } from 'src/app/services/ticket.Service';



@Component({
  selector:     'app-ticket-view-log-list',
  templateUrl:  './ticket-view-log-list.component.html',
  styleUrls:   ['./ticket-view-log-list.component.css']
})
export class TicketViewLogList extends vsViewDataList.TvsViewDataList implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)
  
  // ./.



  //------ Constructor

  constructor(router: Router, private http: HttpClient, protected _componentFactoryResolver: ComponentFactoryResolver, 
    protected  eventService: DispatchService) {
    super(router, http, _componentFactoryResolver, eventService);

    this.ViewProperties.TestModeLayout  = true;         
    this.ViewProperties.ViewTitle       = 'Log';

  } // constructor



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

  // ./.



  //------ NG event handler

  ngOnInit(): void {
  } // ngOnInit

  
} // TicketViewLogList


