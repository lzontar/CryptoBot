import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-crypto-bot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    this.apiCall();
  }
  apiCall() {
    // const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'a13511b6-9177-444f-819a-21922804e73d'
      },
      json: true,
      gzip: true
    };

    // rp(requestOptions).then(response => {
    //   console.log('API call response:', response);
    // }).catch((err) => {
    //   console.log('API call error:', err.message);
    // });
  }
}
