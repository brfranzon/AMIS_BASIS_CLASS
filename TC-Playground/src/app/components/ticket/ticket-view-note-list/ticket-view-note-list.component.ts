//------------------------------------------------------------------------------
//  MyPlayground (TC)
//
//  File:   ticket-view-note-list.component.ts
//  Notes:  Tickets: Notizen (List View)
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
import { DispatchService } from 'src/app/services/dispatch.service';
import { TicketService } from 'src/app/services/ticket.Service';



@Component({
  selector:     'app-ticket-view-note-list',
  templateUrl:  './ticket-view-note-list.component.html'
})
export class TicketViewNoteList extends vsViewDataList.TvsViewDataList implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)
  
  // ./.



  //------ Constructor

  constructor(
    router: Router, 
    protected _http: HttpClient, 
    protected _componentFactoryResolver: ComponentFactoryResolver,
    eventService: DispatchService)
    {

    super(router, _http, _componentFactoryResolver, eventService);

    this.ViewProperties.ViewTitle     = 'Notizen...';
    // this.ViewProperpies.data model = new ticketModelTickets();
  
  } // constructor


  //------ Methods (PUBLIC)
  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

 

  //------ NG event handler

  ngOnInit(): void {
  } // ngOnInit


} // TicketViewNoteList


