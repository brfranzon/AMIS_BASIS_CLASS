
import { TvsDataObject }          from '../../$vsLib_Candidates/vsDataObject';


export class TestModelBase {

  public    fldName1:               String      = 'Doe';
  public    fldName2:               String      = 'John';

  constructor() { }

} // TestModelBase


export class TestModelExt extends TestModelBase {

  public    fldAnschrWohnPLZ:       String      = '63263';
  public    fldAnschrWohnOrt:       String      = 'Neu-Isenburg';
  public    fldAnschrWohnStr:       String      = 'Testweg';
  public    fldAnschrWohnHausNr:    String      = '4';

  constructor() {
    super();
    this.fldName2             = 'Jane';
   }

} // TestModelExt


