//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vsDataFilter.ts
//  Notes:  Container for filter items
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------

import * as vsCommon        from './vsCommon';



//
// TvsControlType
//
// Enumeration of input control types to be created for a filter item
//
export enum TvsControlType {
    ctUndefined     = "ctUndefined",
    ctTextBox       = "ctTextBox",
    ctComboBox      = "ctComboBox",
    ctDatePicker    = "ctDatePicker",
    ctCheckBox      = "ctCheckBox"
} // TvsControlType



//
// TvsDataFilterItem
//
// Filter Item
//
export class TvsDataFilterItem {

    //------ Properties (PRIVATE)
    // ./.


    //------ Properties (PUBLIC)
    public  readonly    ControlType:            TvsControlType      = TvsControlType.ctUndefined;
    public  readonly    Caption:                String;
    public              Value:                  any;



    //------ Constructor

    constructor(a_ct: TvsControlType, a_sCaption: String, a_vValue?: any) {
        this.ControlType    = a_ct;
        this.Caption        = a_sCaption;
        this.Value          = a_vValue;
    } // contructor



    //------ Methods (PUBLIC)

    // ...


} // TvsDataFilterItem



//
// TvsDataFilter
//
// Container for filter items
//
export class TvsDataFilter extends Array {

    //------ Properties (PRIVATE)
    // ./.


    //------ Properties (PROTECTED)
    // ./.


    //------ Properties (PUBLIC)
    // ./.



    //------ Methods (PUBLIC)


    //--------------------------------------------------------------------------
    // Method:  ItemAdd
    // Notes:   Add a new item
    //--------------------------------------------------------------------------

    public ItemAdd(a_ct: TvsControlType, a_sCaption: String, a_vValue?: any): TvsDataFilterItem {

        let item        = new TvsDataFilterItem(a_ct, a_sCaption);
        item.Value      = a_vValue;
        
        this.push(item);

        return item;

    } // ItemAdd


    //--------------------------------------------------------------------------
    // Method:  ItemsClear
    // Notes:   Remove all items
    //--------------------------------------------------------------------------

    public ItemsClear(): void {
        this.length = 0;
    } // ItemsClear


} // TvsDataFilter


