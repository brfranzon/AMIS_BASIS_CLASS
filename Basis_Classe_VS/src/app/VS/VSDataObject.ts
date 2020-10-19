import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

export abstract class VSDataObject {
  URLSchuelerJson = 'http://localhost:2000/schueler'; //'../../assets/dataSchueler.json';
  URLKurseJson = 'http://localhost:3000/kurse'; //'../../assets/dataKurse.json';


  public abstract DataLoad(name: string): Observable<any>;
  public abstract DataSuche(name: string, id: any): Observable<any>;
  // DataDelete
  // DataUpdate

  constructor(protected _http: HttpClient) {}

  findAll(baseURL: string) {
    return this._http.get(baseURL);
  }

  SucheNachID(baseURL: string, id: any) {
      return  this._http.get(baseURL + "/" + id);
  }
}

  

 /*
  DeleteNachID(DataQuellename: string, id: any){
    switch (DataQuellename) {
      case 'DataAllSchueler':
        return  this._http.delete(this.URLSchuelerJson + "/" + id);

      case 'DataAllKurse':
        return  this._http.delete(this.URLKurseJson + "/" + id);
    }
  }

  UpdateNachID(DataQuellename: string, id: any){
    switch (DataQuellename) {
      case 'DataAllSchueler':
        return  this._http.put(this.URLSchuelerJson + "/" + id, {});

      case 'DataAllKurse':
        return  this._http.put(this.URLKurseJson + "/" + id, {});
    }
  }
*/

@Injectable()
export class Schueler extends VSDataObject {
  constructor(protected _http: HttpClient) {
    super(_http);
  }

  public DataLoad(name: string): Observable<any> {
    switch (name) {
      case 'DataAllSchueler':
        return this.findAll(this.URLSchuelerJson);

      case 'DataKurs':
        return this.findAll(this.URLKurseJson);
    }
  }

  public DataSuche(name: string, id: any): Observable<any> {
    switch (name) {
      case 'DataAllSchueler':
        return this.SucheNachID(this.URLSchuelerJson, id);

      case 'DataKurs':
        return this.SucheNachID(this.URLKurseJson, id);
    }
  }

  /*
  DataSuche(name: string, id: any){
    return this.SucheNachID(name, id);
  }
 */
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
