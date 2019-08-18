import { Component, OnInit, Input } from '@angular/core';
import {WebUtil} from '../framework/webUtil';

@Component({
  selector: 'app-crypto-bot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
/*Main component*/
export class MainComponent implements OnInit {
  @Input() webUtil: WebUtil;
  @Input() hiddenMenu: boolean;
  constructor() { }

  ngOnInit() {
  }
}
