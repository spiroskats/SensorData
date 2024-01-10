import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sensor } from './sensor';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private sensorUrl = "/dht-sensors" 

  constructor(
    private http: HttpClient
  ) { }

  getSensors (): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.sensorUrl);
  }

}
