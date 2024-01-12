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
  loading: boolean = false;
  
  constructor( private dataService: DataService, private messageService: MessageService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.data['DataResolver']);
    // this.datas=this.route.snapshot.data['DataResolver'];
    this.getData();
  }
  getData(): void{
    this.datas=this.route.snapshot.data['DataResolver'];
    // this.loading=true;
    // const id: string | null = this.route.snapshot.paramMap.get('id');
    // if(id !== null){
    // this.dataService.getData(id).subscribe({
    //   next: datas => {
    //     this.datas = datas;
    //     // this.loading=false;
    //   },
    //   error: er => {
    //     console.log('Kati kati')
    //     console.log(er)
    //     // this.loading=false;
    //   },
    //   complete: () => {
    //     this.loading=false;
    //   }
    //   });
    // }
  }
  navigateToHome($event: MouseEvent) {
    this.router.navigate(["/"])
    }

}
