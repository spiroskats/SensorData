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
  addSensor (sensor: Sensor): Observable<Sensor>{
    return this.http.post<Sensor>(this.sensorUrl,sensor)
  }
  editSensor (sensor: Sensor): Observable<Sensor>{
    
    return this.http.put<Sensor>(this.sensorUrl+"/"+sensor.id,sensor)
  }
  getSensors (): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.sensorUrl);
  }
  deleteSensor (sensor: Sensor): Observable<Sensor>{
    return this.http.delete<Sensor>(this.sensorUrl+"/"+sensor.id)
  }

}
