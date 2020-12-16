import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.css']
})
export class ViewEditComponent implements OnInit {

  PKValue: any;

  constructor(private routes: ActivatedRoute) {

    this.routes.params.subscribe(params => {
      this.PKValue = params['id'];
      });
  }

  ngOnInit(): void {
  }

}
