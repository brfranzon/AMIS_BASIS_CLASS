//------------------------------------------------------------------------------
//  MyPlayground (TC)
//
//  File:   main-view.component.ts
//  Notes:  Main View
//
//
//  Die Verwendung einer eigenen MainView für die Gestaltung des "Anwendungsrahmens",
//  anstatt hierfür direkt die AppComponent zu verwenden, bietet folgende Vorteile:
//
//    # Man kann die MainView von eigenen vsLib-Basisklassen ableiten.
//
//    # Über verschiedene Basisklassen kann man verschiedene Layouts und Funktionalitäten
//      für unterschiedliche Arten von Applikationen zur Verfügung stellen.
//      Beispielsweise speziell optimierte Versionen für mobile Geräte unter Verwendeung
//      von IONIC etc.
//
//  Aktuell könnte man zwar auch die AppComponent von einer vsLib-Klasse ableiten,
//  da diese noch nicht von irgendeiner Angular-Klasse abgeleitet ist. Jedoch könnte
//  sich das in zukünftigen Versionen des Angular-Frameworks theoretisch mal ändern.
//  Durch die Verwendung einer eigenen MainView sind wir von Anfang an unabhängig
//  von derartigen Änderungen.
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------

import { HttpClient } from '@angular/common/http';
import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

import * as vsViewDataList from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';
import { EditTicketFormComponent } from 'src/app/editComponents/edit-ticket-form.component';
import { DispatchService } from 'src/app/services/dispatch.service';

import { TabsComponent } from '../tabs/tabs.component';
import { TicketViewTicketList } from '../ticket/ticket-view-ticket-list/ticket-view-ticket-list.component';

@Component({
  selector: 'main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainView extends vsViewDataList.TvsViewDataList implements OnInit {
  //------ Properties (PRIVATE)

  //------ Properties (PUBLIC)

  public appTitle: String = 'AMIS®7 goes WEB';
  public appDescriptionShort: String =
    'MyPlayground (TC) | Spielwiese für Experimente';

  //------ Constructor

  constructor(
    protected router: Router,
    protected _http: HttpClient,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected  dispatchService: DispatchService
  ) {
    super(router, _http, _componentFactoryResolver, dispatchService);

   




  } // constructor

  //------ Methods (PUBLIC)

  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

  // ./.

  //------ Event Handler

  public doOnClickNavTickets(): void {
    // alert('Aufruf: Tickets (Liste)');
    // this.router.navigate(['/ticketViewTicketList']);
    // this.dispatchProgFunc('Ticket_Stamm_Ticket');
    this.dispatchRoute(['ticketViewTicketList']);
  }

  public doOnClickNavNotes(): void {
    // alert('Aufruf: Notizen (Liste)');
    // this.dispatchProgFunc('Ticket_Data_Notes');
    this.dispatchRoute(['/ticketViewNoteList']);
  }

  public doOnClickNavLog(): void {
    // alert('Aufruf: Log (Liste)');
    // this.dispatchProgFunc('Ticket_Data_Log');
    this.dispatchRoute(['/ticketViewLogList']);
  }

  //------ NG event handler
  @ViewChild('ticketview')             ticketviewTemplate;
  @ViewChild('ticketNote')             ticketNoteTemplate;
  @ViewChild('ticketLog' )             ticketLogTemplate ;

  @ViewChild(TabsComponent) tabsComponent;

  compList: any[] = [];
 
  //@ViewChild('template', { read: ViewContainerRef }) formRef: ViewContainerRef;
 
  ngOnInit(): void {

    this.compList = [
      {  id:  1,     viewArt:  "listView",   pkValue: '',    name: "Tickets",    comp:    this.ticketNoteTemplate         },
      {  id:  2,     viewArt:  'listView',   pkValue: '',    name: 'Notizen',    comp:    this.ticketNoteTemplate         },
      {  id:  3,     viewArt:  'listView',   pkValue: '',    name: 'Log',        comp :   this.ticketLogTemplate          },
    ];    


  this.dispatchService.getChangeEmitter().subscribe(
    (res) => {
     this.tabsComponent.openTab(
       `Editing ${res.name}`,
       this.ticketviewTemplate,
       res,
       true
     );}
    );

  }

  /**********************************
   * 1. Versuch
   **********************************/
  menuTabTemplate(menu: any) {

   this.dispatchService.dispatch(menu.id, '', menu, '');
      
  //   switch (menu.id) {
  //     case 1:
  //       this.tabsComponent.openTab(
  //         `Editing ${menu.name}`,
  //         this.ticketviewTemplate,
  //         menu,
  //         true
  //       );
  //       break;

  //     case 2:
  //       this.tabsComponent.openTab(
  //         `Editing ${menu.name}`,
  //         this.ticketNoteTemplate,
  //         menu,
  //         true
  //       );
  //       break;

  //     case 3:
  //       this.tabsComponent.openTab(
  //         `Editing ${menu.name}`,
  //         this.ticketLogTemplate,
  //         menu,
  //         true
  //       );
  //       break;
  //   }

 }




  @ViewChild('ticketEdit')                                     ticketEditTemplate;
  onOpenEdit() {
    this.tabsComponent.openTab('TicketEditNeu', this.ticketEditTemplate, {}, true);
   }
 


} // MainView






//  this.eventService.emitEvent(menu.id);

//   this.eventService.getChangeEmitter()
// .subscribe(

//   (res) => {

//    this.tabsComponent.openTab(
//        `Editing ${res.name}`,
//        this.ticketviewTemplate,
//        res,
//        true
//      );
//   
//  }
  
//   );




















