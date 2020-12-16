//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view.component.ts
//  Notes:  View component (base class)
//
//
//  H I S T O R Y
//
//  2020-11-25  TC   Genesis
//------------------------------------------------------------------------------

import { Component, Input, Output, OnInit }       from '@angular/core';
import { Router }                                 from '@angular/router';
import { promise } from 'protractor';



//======[ TvsViewRouteParams ]==================================================

// $Rev TC 2020-11-18 TODO:
// Dies sollte noch in eine eigene Datei verlagert werden!
//
// Die Routing-Parameter dienen dazu, ggf. zusätzlich benötigte Parameter für
// das Routing spezifizieren zu können.
//
// Beispielsweise könnte eine konkrete Edit View zwei zusätzliche Paramter (außer
// dem Standardparameter PKValue benötigen). Die zugehörige konkrete List View
// kann dann über die RouteParams diese zusätzlichen Parameter hinzufügen.
//


//
// TvsViewRouteParamsItem
//
// Filter Item
//
export class TvsViewRouteParamsItem {


  //------ Properties (PUBLIC)
  public  readonly    Name:                   String;
  public              Value:                  any;


  //------ Constructor

  constructor(a_sName: String, a_vValue?: any) {
      this.Name     = a_sName;
      this.Value    = a_vValue;
  } // contructor


  //------ Methods (PUBLIC)

  // ./.

} // TvsViewRouteParamsItem




//
// TvsViewRouteParams
//
// Parameter list for additional routing parameters
//
export class TvsViewRouteParams extends Array {


  //--------------------------------------------------------------------------
  // Method:  ItemAdd
  // Notes:   Add a new item
  //--------------------------------------------------------------------------

  // ...


  //--------------------------------------------------------------------------
  // Method:  ItemsClear
  // Notes:   Remove all items
  //--------------------------------------------------------------------------

  // ...

} // TvsViewRouteParams



//======[ TvsView ]=============================================================



//
// TvsViewProperties
//
// View properties: base class
//
// Container to encapsulate all properties for views, thereby allowing easy
// reusing of this list of properties. This includes not just simple or complex
// properties like "ViewTitle" or "Filter", but also event handler methods.
//
export class TvsViewProperties {

  // Properties: Allgemein
  public    TestModeLayout:               Boolean               = false;
  public    ViewTitle:                    String                = '';
  public    RouteParams:                  TvsViewRouteParams    = new TvsViewRouteParams();

  // Properties: Section-Sichtbarkeit (beschreibbar im HTML per property binding)
  public    SectionIsVisible_ViewTitle:   Boolean               = true;
  public    SectionIsVisible_Detail1:     Boolean               = true;
  public    SectionIsVisible_Detail2:     Boolean               = true;


  public    DataModel:                    any                         ;

  public    Url:                          string                       ;

  // Event handler
  // ./.

} // TvsViewProperties



//
// TvsView
//
// Base class for all views
//
@Component({
  selector:     'vs-view',
  templateUrl:  './vs-view.component.html',
  styleUrls:   ['./vs-view.component.css']
})
export class TvsView implements OnInit {

  //------ Properties (PRIVATE)
  
  // ./.


  //------ Properties (PUBLIC)

  @Input()  ViewProperties:       TvsViewProperties     = new TvsViewProperties();


  // Anmerkung:
  //
  // Auf die Elemente von ViewProperties kann zwar im HTML lesend zugegriffen werden (z.B. mit *ngIf oder *ngFor
  // oder {{xxx}}), aber nicht schreibend (per property binding)!  *grummel*
  // Deshalb werden hier alle Elemente von ViewProperties, auf die direkt schreibend per property binding
  // zugegriffen werden soll, nochmal als eigenständige @Input-Properties deklariert und mit einer Schreib-
  // zugriffsmethode versehen. Durch die Schreibzugriffsmethode wird sichergestellt, dass der entsprechende
  // Wert automatisch auch über "ViewProperties" zur Verfügung steht - das ist wichtig für das property
  // bindung im Selektor der Basisklasse.
  //
  // Übrigens funktioniert hier nur ENTWEDER @Output ODER @Input! *grrrr*
  // In diesem Zusammenhang wird aber wohl nur @Input benötigt...

  @Input()  set SectionIsVisible_ViewTitle(a_bValue: Boolean) {
                  // console.log('TvsView: set ViewTitleIsVisible = ' + a_bValue);
                  this.ViewProperties.SectionIsVisible_ViewTitle = a_bValue
                }
  @Input()  set SectionIsVisible_Detail1(a_bValue: Boolean) {
                  // console.log('TvsView: set SectionIsVisible_Detail1 = ' + a_bValue);
                  this.ViewProperties.SectionIsVisible_Detail1 = a_bValue
                }
  @Input()  set SectionIsVisible_Detail2(a_bValue: Boolean) {
                  // console.log('TvsView: set SectionIsVisible_Detail2 = ' + a_bValue);
                  this.ViewProperties.SectionIsVisible_Detail2 = a_bValue
                }



  //------ Constructor

  // ACHTUNG:
  // Das Argument "router" muss explizit als private, protected oder public definiert werden,
  // da sonst "router" nicht in Methoden dieser Klasse zur Verfügung steht.

  constructor(protected router: Router) {
    // ./.
  } // constructor



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  dispatchRoute
  //
  // Notes:   Kapselt den Aufruf von router.navigate
  //
  //          Durch diese Kapselung wirken sich Änderung an der Art, wie der
  //          Route-String mit seinen Parametern konstruiert wird, nur auf
  //          die router-Methoden in dieser Basisklasse aus.
  //
  //          Dies gilt insbesondere, da wir einen generischen Dispatcher
  //          benötigen, der auf Basis der Programmfunktions-ID arbeitet,
  //          um die Benutzerzugriffsrechte zu berücksichtigen.
  //
  //          Anmerkung:
  //          Dies ist hier nur die allererste Implentierung für Tests des
  //          grundsätzlichen Verfahrens und basiert auf dem Angular-Routing.
  //          Eine der nächsten Implementierungen wird eine Methode dispatchProgFunc
  //          sein, welche die Programmfunktions-ID berücksichtigt
  //--------------------------------------------------------------------------

  protected dispatchRoute(a_routeData: any[]): void {
    console.log('TvsView.dispatchRoute():  a_routeData = ' + a_routeData);
    this.router.navigate(a_routeData);
  } // dispatchRoute


  //--------------------------------------------------------------------------
  // Method:  dispatchProgFunc
  //
  // Notes:   Dispatcht auf Basis der Programmfunktions-ID
  //--------------------------------------------------------------------------

  protected dispatchProgFunc(a_sProgFuncID: String): void {
    alert('Function not implemented: TvsView.dispatchProgFunc()');
  } // dispatchProgFunc



  //------ NG event handler

  ngOnInit(): void {
      
  }

  DataLoad(){
    console.log('Data Load')
  }

} // TvsView


