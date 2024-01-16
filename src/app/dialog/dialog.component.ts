import { Component, Inject, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Sensor } from '../sensor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  // @Input() name : String='';
  // @Input() devEUI : String='';
  sensorForm : FormGroup;
  
  
  isEditDialog: boolean = false;


  constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {sensor: Sensor}) 
  { 
    this.isEditDialog = !!data.sensor
    this.sensorForm = this.formBuilder.group({
      name: [this.isEditDialog? data.sensor.dht_sensor_name : '',Validators.compose([Validators.required])],
      devEUI: [this.isEditDialog? data.sensor.dev_eui:'',Validators.compose([Validators.required])],
      // id: [this.isEditDialog? data.sensor.id: '']
    })

  }

  ngOnInit(): void {

  }
  addSensor($event: MouseEvent) {
    
      if(this.isEditDialog==false){
        if (!this.sensorForm.controls['name'].value || !this.sensorForm.controls['devEUI'].value){
          return
        }
        let sensor: Sensor={
          dht_sensor_name: this.sensorForm.controls['name'].value,
          dev_eui: this.sensorForm.controls['devEUI'].value
        };
        console.log(sensor)
        this.dashboardService.addSensor(sensor as Sensor).subscribe({
          next: value =>{
            console.log(value)
            this.dialogRef.close(value);
          },
          
      })
    }
    else{
      if (!this.sensorForm.controls['name'].value || !this.sensorForm.controls['devEUI'].value || !this.sensorForm.controls['id'].value){
        return
      }
      let sensor: Sensor={
        dht_sensor_name: this.sensorForm.controls['name'].value,
        dev_eui: this.sensorForm.controls['devEUI'].value,
        id: this.data.sensor.id
      };
      this.dashboardService.editSensor(sensor as Sensor).subscribe({
        next: value =>{
          this.dialogRef.close(value);
        },
        
    })
    }
  }



  removeSensor($event: MouseEvent){
    throw new Error('Method not iplemented.');
  }
}
