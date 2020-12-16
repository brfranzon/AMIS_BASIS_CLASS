//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data-list.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten als
//          Listenansicht darstellen
//
//
//  Klassenhierarchie:
//
//  TvsView
//   |
//   +-- TvsViewData
//     |
//     +-- TvsViewDataList
//     |
//     +-- TvsViewDataEdit
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------
const m_sDir_vsLib: String = 'src/$vsLib_Candidates/';

import { HttpClient } from '@angular/common/http';
import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import * as vsViewData from 'src/$vsLib_Candidates/View/components/vs-view-data/vs-view-data.component';
import * as vsDataFilter from 'src/$vsLib_Candidates/vsDataFilter';
import { TicketModelTicket } from 'src/$vsLib_Candidates/vsDataModel';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { EditTicketFormComponent } from 'src/app/editComponents/edit-ticket-form.component';
import { DispatchService } from 'src/app/services/dispatch.service';
import { TicketService } from 'src/app/services/ticket.Service';

//
// TvsViewPropertiesList
//
// View properties: List View
//
export class TvsViewPropertiesList extends vsViewData.TvsViewPropertiesData {
  // Properties
  public FilterMain: vsDataFilter.TvsDataFilter = new vsDataFilter.TvsDataFilter();
  // ...

  // Event handler
  // ...
} // TvsViewPropertiesList

// TvsViewDataList
// Base class: List View

@Component({
  selector: 'vs-view-data-list',
  templateUrl: './vs-view-data-list.component.html',
  styleUrls: ['./vs-view-data-list.component.css'],
})
export class TvsViewDataList extends vsViewData.TvsViewData implements OnInit {
  //------ Properties (PRIVATE)

  // ./.

  //------ Properties (PUBLIC)

  //#### So war es bisher...
  // @Input()    FilterMain:       vsDataFilter.TvsDataFilter      = new vsDataFilter.TvsDataFilter();

  //#### Jetzt nach Einführung von ViewProperties...

  // Anmerkung zu der nachfolgenden Deklaration von ViewProperties:
  //
  // Die Property ViewProperties wird ja bereits in der obersten View-Basisklasse TvsView eingeführt,
  // also von dort geerbt. In TvsView ist ViewProperties vom Typ TvsViewProperties und diese Klasse
  // besitzt noch nicht die Property FilterMain, welche erst mit TvsViewPropertiesList eingeführt wird.
  // Deshalb würde es beim Compilieren zu einem Fehler kommen, wenn eine Klasse versucht, auf
  // ViewProperties.FilterMain zuzgreifen (was in einer abgeleiteten konkreten View-Klasse erfolgen
  // wird).
  //
  // Aus diesem Grund muss hier in TvsViewDataList die Deklaration von ViewProperties erneut erfolgen,
  // damit diese in allen Instanzen und Ableitungen von TvsViewDataList den passenden Typ hat. Da die
  // Klasse TvsViewPropertiesList abgeleitet ist von TvsViewProperties, sind diese zuweisungskompatibel.

  @Input() ViewProperties: TvsViewPropertiesList = new        TvsViewPropertiesList()  ;

  tickets:  TicketModelTicket[]                  =            [];
  do:       TicketService                        = new        TicketService(this._http);
  _object = Object;


  @ViewChild(EditTicketFormComponent)                editTicketTemplate : EditTicketFormComponent ;
  @Output() editTicketBtn                             = new EventEmitter<any>();

  tab: TabsComponent = new TabsComponent(this._componentFactoryResolver); 
 


  constructor(protected router: Router,
              protected _http : HttpClient,
              protected _componentFactoryResolver: ComponentFactoryResolver,
              protected  dispatchService: DispatchService) {
    super(router);
  }


  ngOnInit(): void {
      this.do.RetrieveData(this.ViewProperties.Url,
                           this.ViewProperties.DataModel)
      .subscribe(
           (data) => {
            this.tickets = data;
      });
 }

 onEdit(e: any){

  console.log('click', e);
  this.dispatchService.dispatch(1, e.vorfall_nr, e, 'Template für das Formular');
  
  }

  //------ Methods (PUBLIC)

  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

  public doOnClickTest(): void {
    this.actionTest();
  } // doOnClickTest

  public actionTest(): void {

    let sMsg: String;

    sMsg = 'Hallo';
    sMsg = this.retrieveTestMsg(sMsg);

    alert(sMsg);
  } // actionTest

  public retrieveTestMsg(a_sMsg: String): String {
    console.log('TvsViewDataList.retrieveTestMsg() / a_sMsg = ' + a_sMsg);
    return a_sMsg;
  } // retrieveTestMsg

 

} // TvsViewDataList
