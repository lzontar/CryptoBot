import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getCryptoCurrencyData() {
        const header = new HttpHeaders();
        header.append('X-CMC_PRO_API_KEY', 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c');
        header.append('Content-Type', 'application/json');
        header.append('Access-Control-Allow-Origin', '*');
        return this.http.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', { headers: header });
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map