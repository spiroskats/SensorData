import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DATAS } from '../mock-data';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  columnsToDisplay = ['id','temperature','humidity'];
  selectedData?: Data;
  datas : Data[] = [];
  
  
  constructor( private dataService: DataService, private messageService: MessageService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id !== null){
    this.dataService.getData(id).subscribe({
      next: datas => {
        this.datas = datas;
      },
      error: er => {
        console.log('Kati kati')
        console.log(er)
      }
      });
    }
  }
  navigateToHome($event: MouseEvent) {
    this.router.navigate(["/"])
    }

}
