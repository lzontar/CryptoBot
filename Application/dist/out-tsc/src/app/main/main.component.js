import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MainComponent = class MainComponent {
    constructor(dataService) {
        dataService.getCryptoCurrencyData().subscribe((data) => console.log(JSON.stringify(data)));
    }
    ngOnInit() {
    }
    readData() {
    }
};
MainComponent = tslib_1.__decorate([
    Component({
        selector: 'app-crypto-bot-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss']
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map