import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WebUtil } from '../framework/webUtil';
import { DataService } from '../comService/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  @Output() hiddenSegmentSelected = new EventEmitter<boolean>();
  @Output() webUtilChanged = new EventEmitter<WebUtil>();
  @Input() hiddenMenu: boolean;

  webUtil: WebUtil;
  segmentSelected: string;

  constructor(dataService: DataService) {
    this.webUtil = new WebUtil();
    dataService.getCryptoCurrencyData().subscribe((data: any) => data.payload.map((coinData) => {
      this.webUtil.addCoin(coinData);
    }));
    this.webUtilChanged.emit(this.webUtil);
   }

   ngOnInit() {
  }
   ngOnChanges(changes: SimpleChanges): void {
     if (changes.hiddenMenu && this.hiddenMenu) {
         this.segmentSelected = '';
     }
   }

  selectSegment(segmentSelected: string) {
    if (segmentSelected !== this.segmentSelected) {
      this.segmentSelected = segmentSelected;
    } else {
      this.segmentSelected = '';
    }
    if (this.hiddenMenu) {
      this.hiddenSegmentSelected.emit();
      this.segmentSelected = segmentSelected;
    }
  }

  onCurrencySelection(coin: any) {
    this.webUtil.setCurrency(coin);
    this.webUtilChanged.emit(this.webUtil);
  }
  onTimeSelection(timeInterval: any) {
    this.webUtil.setTimeInterval(timeInterval);
    this.webUtilChanged.emit(this.webUtil);
  }
  onIndicatorsSelection(checkedIndicator: string) {
    this.webUtil.setIndicator(checkedIndicator);
    this.webUtilChanged.emit(this.webUtil);
  }
}
