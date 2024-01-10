import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from "./data";
import { catchError, map, tap } from 'rxjs/operators';
import { DATAS } from './mock-data';
import { MessageService } from './message.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private dataUrl = "/dht-sensors/"
  
  constructor( 
    private http: HttpClient,
    
    private messageService: MessageService
  ) { }

  getData (id : string): Observable<Data[]>{
    const url = "/dht-sensors/" + id + "/data"
    return this.http.get<Data[]>(url);
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
