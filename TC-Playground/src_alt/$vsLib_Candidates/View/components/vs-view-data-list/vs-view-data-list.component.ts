//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view-data-list.component.ts
//  Notes:  View component: Basisklasse für Views, die dynamische Daten als
//          Listenansicht darstellen
//
//
//  H I S T O R Y
//
//  2020-11-10  TC   Genesis
//------------------------------------------------------------------------------

const   m_sDir_vsLib: String = 'src/$vsLib_Candidates/';

import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as vsViewData                from 'src/$vsLib_Candidates/View/components/vs-view-data/vs-view-data.component';
import * as vsDataFilter              from 'src/$vsLib_Candidates/vsDataFilter';



//
// TvsViewPropertiesList
//
// View properties: List View
//
export class TvsViewPropertiesList extends vsViewData.TvsViewPropertiesData {

  // Properties
  public    FilterMain:           vsDataFilter.TvsDataFilter      = new vsDataFilter.TvsDataFilter();
  // ...

  // Event handler
  // ...

} // TvsViewPropertiesList



//
// TvsViewDataList
//
// Base class: List View
//
@Component({
  selector:     'vs-view-data-list',
  templateUrl:  './vs-view-data-list.component.html',
  styleUrls:   ['./vs-view-data-list.component.css']
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

  @Input()    ViewProperties:   TvsViewPropertiesList           = new TvsViewPropertiesList();
  //------ Constructor

  constructor(private route: Router) {
    super();
     this.ViewProperties.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctUndefined,  'Filter_Basis',     'Filter aus der Basisklasse');

    this.ViewProperties.ActionEditRoute = '';
    this.ausgabe();
    console.log(this.ViewProperties.ActionEditRoute);
  } // constructor

  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------



  //------ NG event handler

  ngOnInit(): void {
  }

  EditClick(test: string) {

    console.log(test);
    console.log(this.ViewProperties.ActionEditRoute);
    console.log(this.route);
    this.route.navigate([this.ViewProperties.ActionEditRoute, test]);

    //this.route.navigate(['/view-edit', test]);

  }

  protected ausgabe(): void {
    this.ViewProperties.ActionEditRoute = 'Falscher Link';
  }

  // protected action(): void {
  //   console.log('Aktion');
  // }

  // handleMe(event: any) {
  //   console.log(event);
  // }


} // TvsViewDataList


