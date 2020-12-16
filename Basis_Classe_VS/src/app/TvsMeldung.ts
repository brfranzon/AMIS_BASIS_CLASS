import { EventEmitter, Output, Renderer2 } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

 // Events
 const msgEvent: EventEmitter<any> = new EventEmitter();
 const timeZone: EventEmitter<string> = new EventEmitter();

 @Injectable()

export class TvsMeldung{

    constructor(){ }

    msg: string = "Eingenschaft aus der abgeleiteten Klasse!";
    
    Meldung(){
        return 'Method für die Meldung!';
    }
    
    private _onMyEvent = new Subject<string>();
    
    public get onMyEvent(): Observable<any> {
       return this._onMyEvent.asObservable();
    }

    public trigger(value: string) {
         this._onMyEvent.next(value);
   }

   // 
   public EntryAdded: EventEmitter<any> = new EventEmitter<any>();

   public handlePlayerInput(text: string): void {
          this.EntryAdded.emit('Event Player...');
   }
   
}




import { Injectable } from '@angular/core';


@Injectable()
export class A {
  
  _sm: EventEmitter<any>;

  constructor() {
    this._sm = new EventEmitter();
  }
  
}