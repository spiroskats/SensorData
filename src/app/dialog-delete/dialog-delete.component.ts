import { Component, Inject, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {


  constructor(
    private dashboardService: DashboardService, 
    public dialogRef: MatDialogRef<DialogDeleteComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {sensor: Sensor}
    ) { }

  ngOnInit(): void {
  }
  deleteSensor($event: MouseEvent) {
    this.dashboardService.deleteSensor(this.data.sensor).subscribe({
      next: value =>{
        this.dialogRef.close(value);
      },
    })
  }
}
