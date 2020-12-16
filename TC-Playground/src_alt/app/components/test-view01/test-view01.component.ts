import { Component, OnInit }          from '@angular/core';

import * as vsDataFilter              from 'src/$vsLib_Candidates/vsDataFilter';
import * as vsViewDataList            from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';
import { Router } from '@angular/router';



@Component({
  selector:     'test-view01',
  templateUrl:  './test-view01.component.html',
  styleUrls:   ['./test-view01.component.css']
})
export class TestView01Component extends vsViewDataList.TvsViewDataList implements OnInit {

  //------ Properties (PRIVATE)

  // ./.


  //------ Properties (PUBLIC)

  // ./.



  //------ Constructor

  constructor(route: Router) {

    super(route);

    //------ So war es bisher...

    // // Allgemeines
    // this.ViewTitle    = 'Test View 01';

    // // Filterkriterien
    // this.FilterMain.ItemsClear();
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Name',       'Hallo');
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Vorname',    1234);
    // this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctCheckBox,   'Aktiv',      true);


    //------ Jetzt nach Einführung von ViewProperties...

    // Allgemeines
    this.ViewProperties.ViewTitle     = 'Test View 01';

    // // Filterkriterien
    // this.ViewProperties.FilterMain.ItemsClear();
    this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Name',       'Hallo');
    // this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Vorname',    1234);
    // this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctCheckBox,   'Aktiv',      true);
    // this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctDatePicker, 'Datum',      '01.01.2021');

  } // constructor


  ngOnInit(): void {
  }


  //------ NG event handler
  protected ausgabe(): void{
    this.ViewProperties.ActionEditRoute = '/view-edit';
  }

 

} // TestView01Component


