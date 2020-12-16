//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vsDataObject.ts
//  Notes:  Container class for data
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------

import * as vsDataSet           from './vsDataSet';
import * as vsDataFilter        from './vsDataFilter';


//
// TvsDataObject
//
// Data Object (Container for untyped data sets)
//
export class TvsDataObject {

    //------ PRIVATE
    private     _DataMain:      JSON;


    //------ PUBLIC
    public      Filter:         vsDataFilter.TvsDataFilter      = new vsDataFilter.TvsDataFilter();
    public      DataMain:       JSON;



    //------ Constructor

    constructor() {
     console.log('VsDataObjetc');
    } // constructor



    //------ Methods (PUBLIC)
    //public DataLoad(name: string): Observable<any>;

   
    

    //--------------------------------------------------------------------------
    // Method:  Refresh
    // Notes:   Load the data - this method should NEVER be overridden in child classes!
    //--------------------------------------------------------------------------

    public Refresh() {
    } // Refresh

} // TvsDataObject


