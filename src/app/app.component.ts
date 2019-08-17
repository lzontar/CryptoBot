import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CryptoBot';
  hiddenMenu: boolean = true;

  toggleMenu(menuIsShown: boolean) {
    this.hiddenMenu = menuIsShown;
  }
  hiddenSegmentSelected() {
    this.hiddenMenu = !this.hiddenMenu;
  }
}
