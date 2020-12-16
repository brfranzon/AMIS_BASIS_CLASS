import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { AppRoutingModule }                   from './app-routing.module';


// vsLib
import { TvsViewDataList }                    from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';

// app components
import { AppComponent }                       from './app.component';
import { TestView01Component }                from './components/test-view01/test-view01.component';
import { MainView }                           from './components/$main/main-view.component';
import { TicketViewTicketList }               from './components/ticket/ticket-view-ticket-list/ticket-view-ticket-list.component';
import { TicketViewLogList }                  from './components/ticket/ticket-view-log-list/ticket-view-log-list.component';
import { TicketViewNoteList }                 from './components/ticket/ticket-view-note-list/ticket-view-note-list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';

import { DynamicTabsDirective, mainPlaceholderDirective } from './components/tabs/dynamic-tabs.directive';
import { MenuListComponent } from './components/Menu/menu-list.component';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.Service';
import { TicketModelTicket } from 'src/$vsLib_Candidates/vsDataModel';
import { EditTicketFormComponent } from './editComponents/edit-ticket-form.component';
import { DispatchService } from './services/dispatch.service';

@NgModule({
  declarations: [
      AppComponent
    , TestView01Component
    , TvsViewDataList
    , MainView
    , TicketViewTicketList
    , TicketViewLogList
    , TicketViewNoteList
    , DynamicTabsDirective,
    mainPlaceholderDirective
    , TabsComponent
    , TabComponent
    , MenuListComponent,
      EditTicketFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [
     TicketService,
     TicketModelTicket,
     DispatchService
    ],
  bootstrap: [AppComponent],
    // register the dynamic components here
  entryComponents: [TabComponent]

  // , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


