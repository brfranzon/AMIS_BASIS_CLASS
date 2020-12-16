
import { Component }                        from '@angular/core';
import { Router }                           from '@angular/router';

import { TestModelBase, TestModelExt }      from './models/test.model';

// vsLib
import * as vsDataSet                       from '../$vsLib_Candidates/vsDataSet';
import * as vsDataObject                    from '../$vsLib_Candidates/vsDataObject';
import * as vsDataFilter                    from '../$vsLib_Candidates/vsDataFilter';

// Experiment: kann man die AppComponeten von unseren vsLib-Klassen ableiten?
// import * as vsViewDataList            from 'src/$vsLib_Candidates/View/components/vs-view-data-list/vs-view-data-list.component';




@Component({
  selector:     'app-root',
  templateUrl:  './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent {
// export class AppComponent extends vsViewDataList.TvsViewDataList {   // Experiment: kann man die AppComponeten von unseren vsLib-Klassen ableiten?

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)

  //-- OBSOLETE -> verschoben nach MainView
  // public    appTitle:               String      = 'AMIS®7 goes WEB';
  // public    appDescriptionShort:    String      = 'MyPlayground (TC) | Spielwiese für Experimente';



  //------ Constructor

  constructor(router: Router) {
  } // constructor

  // Experiment: kann man die AppComponeten von unseren vsLib-Klassen ableiten?
  // constructor(router: Router) {
  //   super(router);
  // } // constructor



  //------ Event Handler

  ngOnInit(): void {

  }

  
} // AppComponent


