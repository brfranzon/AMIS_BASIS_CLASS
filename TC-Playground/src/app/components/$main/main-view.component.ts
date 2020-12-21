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
import { ActiveComponentsService } from 'src/app/services/activeComponents.Service';
import { DispatchService } from 'src/app/services/dispatch.service';
import { mainPlaceholderDirective } from '../tabs/dynamic-tabs.directive';

import { TabsComponent } from '../tabs/tabs.component';
import { TicketViewLogList } from '../ticket/ticket-view-log-list/ticket-view-log-list.component';
import { TicketViewNoteList } from '../ticket/ticket-view-note-list/ticket-view-note-list.component';
import { TicketViewTicketList } from '../ticket/ticket-view-ticket-list/ticket-view-ticket-list.component';

import { TActiveComponent } from './../../../$vsLib_Candidates/vsCommon';


@Component({
  selector: 'main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainView extends vsViewDataList.TvsViewDataList implements OnInit {
  //------ Properties (PRIVATE)

  //------ Properties (PUBLIC)
  @ViewChild(mainPlaceholderDirective)  mainPlaceholder: mainPlaceholderDirective;

  public appTitle: String = 'AMIS®7 goes WEB';
  public appDescriptionShort: String = 'MyPlayground (TC) | Spielwiese für Experimente';

  //------ Constructor

  constructor(
    protected router: Router,
    protected _http: HttpClient,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected  dispatchService: DispatchService,
    public     _activeComponentsService: ActiveComponentsService
    ) {
      super(router, _http, _componentFactoryResolver, dispatchService);
    } // constructor

    //------ Methods (PUBLIC)

    //--------------------------------------------------------------------------
    // Method:  xxxx
    // Notes:   ...
    //--------------------------------------------------------------------------

    // ./.


  menuItems: any[] = [];


  ngOnInit(): void {
    this.menuItems = [
      {  id: 1,    tabTyp: 'listView',    name: 'Tickets',    comp: TicketViewTicketList      },
      {  id: 2,    tabTyp: 'listView',    name: 'Notizen',    comp: TicketViewNoteList        },
      {  id: 3,    tabTyp: 'listView',    name: 'Log',        comp: TicketViewLogList         },
      {  id: 4,    tabTyp: 'editView',    name: 'TicketEdit', comp: EditTicketFormComponent   },
    ];

     console.log('Init mainPlaceholder: ', this.mainPlaceholder);


     // dispatch
    this.dispatchService.changeEmitter().subscribe(

      data => {console.log('data from dispatch: ', data);}


    )

  }
 
  menuTabTemplate(menu) {
    this.RetrieveComp(menu);
  }


  RetrieveComp(a_menu: any): void {
    let componentFactory  = this._componentFactoryResolver.resolveComponentFactory(a_menu.comp);
    let viewContainerRef  = this.mainPlaceholder.viewContainer;
  
    let iFound: number = -1;

    console.log('menu2: ', a_menu);

    if (a_menu.tabTyp === 'listView')
    {
      for(let i = 0; i < this._activeComponentsService.ActiveComponents.length; i++)
      {
          if (this._activeComponentsService.ActiveComponents[i].ProgFuncID === a_menu.id) {
              console.log('gefunden: ', i);
              iFound = i;
            }
      }
    }

    if (iFound === -1)
    {
          // Neu erzeugen und anzeigen

          const instance: any = viewContainerRef.createComponent(componentFactory);

          let ac: TActiveComponent = new  TActiveComponent();

          ac.ProgFuncID   = a_menu.id;
          ac.PKValue      = '';
          ac.ViewRef      = instance;
          ac.tabTitle     = a_menu.name;
          ac.tabID        = this._activeComponentsService.ActiveComponents.length;
          ac.isCloseable  = (a_menu.tabTyp == 'listView');
          console.log('closeable: ', ac.isCloseable);

          this._activeComponentsService.ActiveComponents.push(ac);

          this.selectTab(ac);
    }
    else {
      // Vorhandene Instance anzeigen
       this.selectTab(this._activeComponentsService.ActiveComponents[iFound]);
    }
  }

  selectTab(a_tab: TActiveComponent) {
    // deactivate all tabs
     this._activeComponentsService.ActiveComponents.forEach(tab => (tab.active = false));
    // activate the tab the user has clicked on.
    a_tab.active = true;

    this.mainPlaceholder.viewContainer.detach(0);
    this.mainPlaceholder.viewContainer.insert(a_tab.ViewRef.hostView);
  }

  closeTab(tab: TActiveComponent) {
    console.log('CloseTab');
    let viewContainerRef  = this.mainPlaceholder.viewContainer;
    for (let i = 0; i < this._activeComponentsService.ActiveComponents.length; i++) {
         if (this._activeComponentsService.ActiveComponents[i] === tab) {

          // remove the tab from our array
          this._activeComponentsService.ActiveComponents.splice(i, 1);

          // set tab index to 1st one
          console.log('tab: ', this._activeComponentsService.ActiveComponents[this._activeComponentsService.ActiveComponents.length - 1]);
          this.selectTab(this._activeComponentsService.ActiveComponents[this._activeComponentsService.ActiveComponents.length - 1]);
          break;
        }
      }
    }


} // MainView

























