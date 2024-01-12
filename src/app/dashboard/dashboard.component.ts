import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { DashboardService } from '../dashboard.service';
import { Sensor } from '../sensor';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sensors: Sensor[]=[];
  datas: Data[]=[];
  selectedSensor?: Sensor;

  constructor(public dialog: MatDialog, private dataService: DataService, private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getData();
    this.getSensors();
  }

  getSensors():void{
    this.dashboardService.getSensors().subscribe({
      next: sensors => {this.sensors = sensors},
      error: er => {console.log(er)}
    });
  }
  onSelect(sensor: Sensor): void{
    this.selectedSensor = sensor;

  }
  navigateToSensor($event: MouseEvent, sensor: Sensor) {
    this.router.navigate(['/sensors',sensor.id]);
    
  }
  dialogToAdd($event: MouseEvent) {
    this.dialog.open( DialogComponent )
}
}
