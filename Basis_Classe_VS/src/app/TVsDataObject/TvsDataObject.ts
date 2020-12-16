import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';

export abstract class TvsDataObject {
  URLSchuelerJson = 'http://localhost:3000/schueler'; //'../../assets/dataSchueler.json';
  URLKurseJson = 'http://localhost:2000/kurse'; //'../../assets/dataKurse.json';

  baseURL: string;
  dataMain: any;
  dataMainSub: any;
  searchParam: any;

  public abstract DataLoad(name: string, params, value: any);
  constructor(protected _http: HttpClient) {}

  findAll(baseURL: string) {
    return this._http.get(baseURL);
    // get(url, params?, headers?, data?)
  }

  FindByParams(baseURL: string, p?: any, value?: any) {
    //let params = new HttpParams();
     let params = new HttpParams().set(`${p}`, value);
    //const obj = {name: 'Clementina', nachname: 'Bret'}
    //const params = new HttpParams({fromObject: obj});
  
    return this._http.get(baseURL, { params: params });
  }

  getJSON() {
    return '[{ "id": 1,  "author": "Thomas Mann" }, { "id": 2,  "author": "Gabriel Garcia Marquez" }]';
  }
}


@Injectable()
export class Schueler extends TvsDataObject {
  constructor(protected _http: HttpClient) {
    super(_http);
  }

  public DataLoad(name: string, params?: any, value?: any) {
    switch (name) {
      case 'DataAllSchueler':
        return this.findAll(this.URLSchuelerJson);

      case 'DataSchuelerFindByParams':
        return this.FindByParams(this.URLSchuelerJson, params, value);

      case 'DataKursFindByParams':
          return this.FindByParams(this.URLKurseJson, params, value);

      case 'DataKurs':
        return this.findAll(this.URLKurseJson);

      // case 'JSON':
      //   return this.getJSON();
    }
  }
}

/*
  public DataSuche(name: string, id: any): Observable<any> {
    switch (name) {
      case 'DataAllSchueler':
        return this.SucheNachID(this.URLSchuelerJson, id);

      case 'DataKurs':
        return this.SucheNachID(this.URLKurseJson, id);
    }
  }
*/

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


     //updateData(){
  //  this.update = this.dataMain;
  //  console.log(this.update);
  //  }

        // console.log('JSON in dem DataLoad', JSON.parse(this.getJSON()))
        // return this.find(this.URLSchuelerJson);
        //  console.log('dataMain in dem DataLoad', this.dataMain)

        
  /*
  DeleteNachID(baseURL: string, id: any) {
    return this._http.delete(baseURL + '/' + id);
  }

  UpdateNachID(baseURL: string, id: any) {
    return this._http.put(baseURL + '/' + id, {});
  }

   //public abstract DataSuche(name: string, id: any): Observable<any>;
  // DataDelete
  // DataUpdate

   console.log('JSON in dem contructor', JSON.parse(this.getJSON()));
    console.log('dataMain in dem contructor', this.dataMain);
  */
