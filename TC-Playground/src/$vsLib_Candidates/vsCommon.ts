//------------------------------------------------------------------------------
//  vedisys Library
//
//  File:   vsCommon.ts
//  Notes:  Common types, functions, classes etc.
//
//
//  H I S T O R Y
//
//  2020-10-30  TC   Genesis
//------------------------------------------------------------------------------


//
// TvsCommonControlType     [OBSOLETE?]
//
// Enumeration of control types
//
export enum TvsCommonControlType {
    ctUndefined     = "ctUndefined",
    ctTextBox       = "ctTextBox",
    ctComboBox      = "ctComboBox",
    ctDatePicker    = "ctDatePicker",
    ctCheckBox      = "ctCheckBox"
} // TvsCommonControlType

export class TActiveComponent {
    active:      boolean = false;
    isCloseable: boolean = false;
  
    PKValue:     any = '';
    ProgFuncID:  any = '';
    ViewRef:     any = '';
    tabTitle:    any = '';
    tabID:       any = '';
  }


