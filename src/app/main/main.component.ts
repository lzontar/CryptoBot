import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import {WebUtil} from '../../framework/webUtil';
import { CryptoCurrDTO } from '../../shared/model/cryptoCurr.model';
@Component({
  selector: 'app-crypto-bot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
/**/
export class MainComponent implements OnInit {
  webUtil: WebUtil;

  constructor(dataService: DataService) {
    this.webUtil = new WebUtil();
    dataService.getCryptoCurrencyData().subscribe((data: any) => data.payload.map((coinData) => {
      this.webUtil.addCoin(coinData);
    }));
  }

  ngOnInit() {
  }

  checkData() {
    console.log(this.webUtil);
  }
}
