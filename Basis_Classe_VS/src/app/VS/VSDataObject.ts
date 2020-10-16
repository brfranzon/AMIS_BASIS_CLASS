import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export abstract class VSDataObject {
  URLSchuelerJson = 'http://localhost:2000/schueler';//'../../assets/dataSchueler.json';
  URLKurseJson = 'http://localhost:3000/kurse'; //'../../assets/dataKurse.json';

   tttt: string;
  constructor(protected _http: HttpClient) {}
  public abstract DataLoad(name: string): Observable<any>;
  public abstract DataSuche(name: string, id: any): Observable<any>;


  DataGetAll(DataQuellename: string): Observable<any> {
    switch (DataQuellename) {
      case 'DataAllSchueler':
        return this._http.get(this.URLSchuelerJson);

      case 'DataAllKurse':
        return this._http.get(this.URLKurseJson);
    }
  }

  SucheNachID(DataQuellename: string, id: any) {

    switch (DataQuellename) {
      case 'DataAllSchueler':
        return  this._http.get(this.URLSchuelerJson + "/" + id);

      case 'DataAllKurse':
        return  this._http.get(this.URLKurseJson + "/" + id);
    }

  }
  
}

@Injectable()
export class Schueler extends VSDataObject {
  constructor(protected _http: HttpClient) {
    super(_http);
  }

  DataLoad(name: string): Observable<any> {
      return this.DataGetAll(name);
  }

  DataSuche(name: string, id: any){
    return this.SucheNachID(name, id);
  }


}

/*
@Injectable()
export class Kurse extends VSDataObject {

    constructor(protected _http: HttpClient){
        super();
    };


    DataLoad(){
        this.DataMain = this._http.get('../../assets/dataKurse.json');
        return this.DataMain;
    }
}


  switch (name) {
      case 'DataAllKurse':
        return this.DataGetAll('DataAllKurse');

      case 'DataAllSchueler':
        return this.DataGetAll('DataAllSchueler');
    }


       switch (DataQuellename) {
      case 'DataAllSchueler':
        return this._http.get(this.URLSchuelerJson + '/' + id);

      case 'DataAllKurse':
        return this._http.get(this.URLKurseJson + '/' + id);
    }
  */

