import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';
import { Data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<Data[]> {
  
  constructor(private dataService: DataService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Data[]> {
    console.log("Doulevei")
    // return of(true);
    const id: string | null = route.paramMap.get('id');
    if (id == null){
      throw console.error("den doulevei");
      
    }
    return this.dataService.getData(id)
  }
}
