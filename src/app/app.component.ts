import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Sensor Data Depiction';

  constructor(private router: Router){}

  navigateToSensors($event: MouseEvent) {
    this.router.navigate(['/sensors'])
    }

}
