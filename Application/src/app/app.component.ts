import { Component } from '@angular/core';
import { WebUtil } from './framework/webUtil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CryptoBot';
  hiddenMenu = true;
  webUtil: WebUtil;

  toggleMenu(menuIsShown: boolean) {
    this.hiddenMenu = menuIsShown;
  }
  hiddenSegmentSelected() {
    this.hiddenMenu = !this.hiddenMenu;
  }
  setWebUtil(updatedWebUtil: any) {
    this.webUtil = updatedWebUtil;
  }
}
