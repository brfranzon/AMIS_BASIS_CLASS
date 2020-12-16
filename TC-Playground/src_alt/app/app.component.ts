
import { Component }                        from '@angular/core';

import { TestModelBase, TestModelExt }      from './models/test.model';

// vsLib
import * as vsDataSet                       from '../$vsLib_Candidates/vsDataSet';
import * as vsDataObject                    from '../$vsLib_Candidates/vsDataObject';
import * as vsDataFilter                    from '../$vsLib_Candidates/vsDataFilter';




@Component({
  selector:     'app-root',
  templateUrl:  './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent {
  public    appTitle:               String      = 'AMIS®7school|web';
  public    appDescriptionShort:    String      = 'Das Portal zur Schülerticketverwaltung im Web | Für Kostenträger, Schulen und Eltern/Schüler';

  private   classDataMain           = TestModelExt;
  public    dataMain:               TestModelExt;
  // public    dataMain:               TestModelBase;

  public    DOMain:                 vsDataObject.TvsDataObject    = new vsDataObject.TvsDataObject();
  public    FilterMain:             vsDataFilter.TvsDataFilter    = new vsDataFilter.TvsDataFilter();


  constructor() {
    this.dataMain     = new this.classDataMain();


    //------ Anschrift

    // this.dataMain.fldName1   = 'Doe';
    // this.dataMain.fldName2   = 'Jane';
    this.dataMain.fldAnschrWohnHausNr   = '42';


    //------ Filter Items

    // this.DOMain.Filter.push(new vsDataFilter.TvsDataFilterItem(vsDataFilter.TvsControlType.ctTextbox,   'Name'));
    // this.DOMain.Filter.push(new vsDataFilter.TvsDataFilterItem(vsDataFilter.TvsControlType.ctTextbox,   'Vorname'));
    // this.DOMain.Filter.push(new vsDataFilter.TvsDataFilterItem(vsDataFilter.TvsControlType.ctComboBox,  'Schule'));

   this.FilterMain.ItemsClear();
   this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Filter_1',     'Hallo');
   this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctTextBox,    'Filter_2',     1234);
   this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctCheckBox,   'Filter_3',     true);
   this.FilterMain.ItemAdd(vsDataFilter.TvsControlType.ctUndefined,  'Filter_4');

    // this.FilterMain.length = 0;
    // this.FilterMain.ItemsClear();

  } // constructor

} // AppComponent


