import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class TicketService {

  constructor(private _http: HttpClient) {}

  public RetrieveData(a_sUrl: string, a_classService: any): Observable<any[]> {
   
    const data:  any[] = [];

    return this._http.get(a_sUrl)
      .pipe(
        map((responseData: any) => {
         for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            data.push(new a_classService().deserialize({...responseData[key]}));
          }
         }
         return data;
      })
    );


  }




  // public RetrieveData(): Observable<any[]> {
  //   return this._http
  //     .get<any[]>('https://mhbackend-11f5d.firebaseio.com/Tickets.json')
  //     .pipe(
  //       map((responseData) => {
  //         const postsArray: any[] = [];

  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key] });
  //           }
  //         }
          
  //         let newArr = 
  //         postsArray.map((item) => {
  //             return {
  //               vorfall_nr: item.vorfall_nr,
  //               beschgrundart_name: item.beschgrundart_name,
  //             };
         
  //         });

  //         console.log('newArr', newArr);
  //         return newArr;
  //       })
  //     );
  // }

  ngOnInit(): void {}
  
}