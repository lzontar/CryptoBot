import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
declare var require: any;

@Component({
  selector: 'app-crypto-bot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(dataService: DataService) {
     dataService.getCryptoCurrencyData().subscribe((data: any) => console.log(JSON.stringify(data)));
  }

  ngOnInit() {
  }
  readData() {
  }
}
