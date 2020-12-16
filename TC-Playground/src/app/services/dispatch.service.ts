import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  
  export class DispatchService{

    constructor(){ }

    onEventChange: EventEmitter<any> = new EventEmitter();
   
    dispatch(id?: any, pkValue?: any,  data?: any, template?: any) {

      // console.log('data from the service:', data);
      this.onEventChange.emit(data);

    }

    getChangeEmitter() {
      return this.onEventChange;
    }

    //  // return this.onEventChange;
    // editEvent(param){
    //       console.log('param', param)
    // }

  }