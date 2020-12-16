//------------------------------------------------------------------------------
//  MyPlayground (TC)
//
//  File:   ticket-view-ticket-list.component.ts
//  Notes:  Tickets: Ticketsatmmdaten (List View)
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------

import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit}          from '@angular/core';
import { Router }                     from '@angular/router';

import * as vsViewDataList            from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';
import { TicketModelTicket } from 'src/$vsLib_Candidates/vsDataModel';
import { DispatchService } from 'src/app/services/dispatch.service';


@Component({
  selector:     'app-ticket-view-ticket-list',
  templateUrl:  './ticket-view-ticket-list.component.html'
})

export class TicketViewTicketList extends vsViewDataList.TvsViewDataList implements OnInit {

  //------ Properties (PRIVATE)
  // ./.
  //------ Properties (PUBLIC)
  // ./.

  //------ Constructor

  constructor(  
         protected         router:                    Router,
         protected         http:                      HttpClient,
         protected        _componentFactoryResolver:  ComponentFactoryResolver,
         dispatchService:                                DispatchService
    ) {

    super(router, http, _componentFactoryResolver, dispatchService);
 
    this.ViewProperties.ViewTitle     =                  'Tickets'                                                ;
    this.ViewProperties.Url           =                  'https://mhbackend-11f5d.firebaseio.com/Tickets.json'    ;
    this.ViewProperties.DataModel =                       TicketModelTicket                                       ;

    } // constructor


  //------ NG event handler 
 

  //------ Methods (PUBLIC)
  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

 



} // TicketViewTicketList



