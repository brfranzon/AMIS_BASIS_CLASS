import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { TicketViewTicketList }     from './components/ticket/ticket-view-ticket-list/ticket-view-ticket-list.component';
import { TicketViewNoteList }       from './components/ticket/ticket-view-note-list/ticket-view-note-list.component';
import { TicketViewLogList }        from './components/ticket/ticket-view-log-list/ticket-view-log-list.component';


const routes: Routes = [
    { path: 'ticketViewTicketList',         component: TicketViewTicketList }
  , { path: 'ticketViewNoteList',           component: TicketViewNoteList }
  , { path: 'ticketViewLogList',            component: TicketViewLogList }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


