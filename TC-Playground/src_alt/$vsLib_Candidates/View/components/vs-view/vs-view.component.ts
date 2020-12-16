//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vs-view.component.ts
//  Notes:  View component (base class)
//
//
//  H I S T O R Y
//
//  2020-11-10  TC   Genesis
//------------------------------------------------------------------------------

import { Component, Input, Output, OnInit }       from '@angular/core';



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

  // Properties
  public    ViewTitle:                  String          = '';
  public    ViewTitleIsVisible:         Boolean         = true;

  public    SectionIsVisible_Detail1:   Boolean         = true;
  public    SectionIsVisible_Detail2:   Boolean         = true;

  // Event handler
  // ./.
  public    ActionEditRoute: string;


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

  // @Input()  ViewTitle:            String                = '<ViewTitle>';             // ersetzt durch TvsViewProperties
  @Input()  ViewProperties:       TvsViewProperties     = new TvsViewProperties();
  
  // @Input()  ViewTitleIsVisible:   Boolean               = true;


  // Anmerkung:
  //
  // Auf die Elemente von ViewProperties kann zwar im HTML lesend zugegriffen werden (z.B. mit *ngIf oder *ngFor
  // oder {{xxx}}), aber nicht schreibend (per property binding)!  *grummel*
  // Deshalb werden hier alle Elemente von ViewProperties, auf die direkt schreibend per property binding
  // zugegriffen werden soll, nochmal als eigenständige @Input-Properties deklariert und mit einer Schreib-
  // zugriffsmethode versehen. Durch die Schreibzugriffsmethode wird sichergestellt, dass der entsprechende
  // Wert automatisch auch über "ViewProperties" zur Verfügung steht - das ist wichtitg für das property
  // bindung im Selektor der Basisklasse.
  //
  // Übrigens funktioniert hier nur ENTWEDER @Output ODER @Input! *grrrr*
  // In diesem Zusammenhang wird aber wohl nur @Input benötigt...

  // @Output() get ViewTitleIsVisible(): Boolean {return this.ViewProperties.ViewTitleIsVisible}
  @Input()  set ViewTitleIsVisible(a_bValue: Boolean) {
                  // console.log('TvsView: set ViewTitleIsVisible = ' + a_bValue);
                  this.ViewProperties.ViewTitleIsVisible = a_bValue
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

  constructor() {
    // ./.
  } // constructor



  //------ Methods (PUBLIC)


  //--------------------------------------------------------------------------
  // Method:  xxxx
  // Notes:   ...
  //--------------------------------------------------------------------------

  // ...


  //------ NG event handler

  ngOnInit(): void {
  }

} // TvsView


