import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'editticketform',
  templateUrl: './edit-ticket-form.component.html',
  styleUrls: ['./edit-ticket-form.component.css']
})
export class EditTicketFormComponent implements OnInit {
 
  ticketForm: FormGroup;

  @Input() ticket;
  @Input() pkValue;

  constructor(private fb: FormBuilder) {
    // this.ticket = this.fb.group({
    //   vorfall_nr: '',
    //   beschwerdegrund_name: ''
    // });

  }

  ngOnInit() {

    // this.ticket.setValue({
    //   vorfall_nr: this.ticket.vorfall_nr || -1,
    //   name: this.ticket.beschwerdegrund_name || ''
    // });

  }

 

}
