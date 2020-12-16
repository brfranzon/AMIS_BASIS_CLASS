export enum TvsDataFilterControlType{

ctTextbox =  'ctTextbox',
ctCheckbox =  'ctCheckbox',

}


export class TvsDataFilterItem{
     
    controlType: TvsDataFilterControlType;
    caption: string;
    value: any;


    constructor(a_sCaption: string, a_ct?: TvsDataFilterControlType, a_vValue?: any ){
      this.caption = a_sCaption;
      this.controlType = a_ct;
      this.value = a_vValue;
    }
    
}