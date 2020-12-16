//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vsServiceWeb.ts
//  Notes:  Service classes for web service calls
//
//
//  H I S T O R Y
//
//  2020-11-23  TC   Genesis
//------------------------------------------------------------------------------

import * as vsCommon        from './vsCommon';



//======[ Parameter Classes ]===================================================



//
// TvsServiceParams
//
// Base class for all parameter classes
//
export class TvsServiceParams {

} // TvsServiceParams



//
// TvsServiceParamsInput
//
// Base class for all input parameter classes
//
export class TvsServiceParamsInput extends TvsServiceParams {

  //------ Properties (PRIVATE)

  // ./.


  //------ Properties (PUBLIC)

  public      AppID:                    String        = '';         // Application ID - identifiziert eindeutig eine App (ebe|mobile, shop, bm, school etc.)
  public      AppSoftwareVerNum1:       Number        = null;
  public      AppSoftwareVerNum2:       Number        = null;
  public      AppSoftwareVerNum3:       Number        = null;

  public      SessionID:                String        = '';
  public      MandantID:                String        = '';

  public      DeviceNum:                String        = '';
  public      DeviceIMEINum:            String        = '';


} // TvsServiceParamsInput



//
// TvsServiceParamsOutput
//
// Base class for all output parameter classes
//
export class TvsServiceParamsOutput extends TvsServiceParams {


  //------ Properties (PUBLIC)

  public      ServiceSoftwareVerNum1:     Number        = null;
  public      ServiceSoftwareVerNum2:     Number        = null;
  public      ServiceSoftwareVerNum3:     Number        = null;
  public      ServiceSoftwareVerString:   String        = null;

  public      SessionID:                  String        = '';
  public      MandantID:                  String        = '';
  public      MandantName:                String        = '';

  public      LoginID:                    String        = '';

  // Im Fehlerfall wird hier ein Fehlercode zurückgegeben. Dies ist normalerweise der Name einer Exception
  // -Klasse. Die Exception-Klassen werden gesondert dokumentiert. Außerdem wird ein sprechender Fehlertext
  // gemäß der aufgetretenen Exception zurückgeliefert.
  //
  // HINWEIS:
  // Für eine Fallunterscheidung der Fehlerbehandlung darf grundsätzlich nur das Feld ErrCode
  // verwendet werden (nicht ErrMessage)!
  public      ErrCode:                    String        = '';
  public      ErrMessage:                 String        = '';

  // Dient bei Bedarf zur Rückgabe eines freien Textes – wird in der Regel nur AMIS-intern für Debug-Zwecke genutzt
  public      DebugInfoText:              String        = '';


} // TvsServiceParamsOutput




//======[ Service Classes ]=====================================================



//
// TvsService
//
// Base class for all services
//
export class TvsService {

} // TvsService



//
// TvsServiceData
//
// Base class for all data services
//
export class TvsServiceData extends TvsService {


  //------ Constructor

  constructor () {
    super();
  } // constructor

} // TvsServiceData



//
// TvsServiceAction
//
// Base class for all action services
//
export class TvsServiceAction extends TvsService {


  //------ Constructor

  constructor () {
    super();
  } // constructor

} // TvsServiceAction


