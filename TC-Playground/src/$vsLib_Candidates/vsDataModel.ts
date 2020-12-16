export class TvsDataModel{

    constructor(){}

    public deserialize(input: any) {
      Object.keys(this).forEach((element) => {
        this[element] = input[element];
      });

      return this;
  
     }

}

// TDataModelTicket: TicketModelTicket
  
export class TicketModelTicket extends TvsDataModel{
    
    
    public   vorfall_nr:                any = null;
    public   beschwerdegrund_name:      any = null;
    public   vorfall_meldung_datum:     any = null;

    //public   vorfall_letztekundenaktion: any = null;

    constructor(){
      super();
    }
 
  
  }



















// Interface
export interface ModelTicket{
    beschgrundart_name   :               any,
    beschwerdegrund_name :               any,
    vorfall_nr           :               any;
    id?                  :               any;
}

