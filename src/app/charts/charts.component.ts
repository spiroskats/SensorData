import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Data } from '../data';
import { DataService } from '../data.service';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chartOption: EChartsOption= {}
  datas : Data[] = [];
  temperature: number[]=[];
  constructor(private dataService: DataService, private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initChartOption();
  }

  initChartOption(): void{
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.dataService.getData(id).subscribe({
        next: datas => {
          this.datas = datas;
          for (let i = 0; i<50; i++){
        
            this.temperature.push(this.datas[i].temperature);
          }
        },
        error: er => {
          console.log('Kati kati')
          console.log(er)
        }
        });
  }
    console.log(this.temperature);
    this.chartOption= {
      xAxis: {
        data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.temperature,
          type: 'line',
        },
      ],
    };
  }
}
