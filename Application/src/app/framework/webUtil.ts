import { CryptoCurrDTO } from 'src/app/model/cryptoCurr.model';
import { DisplaySettingsDTO } from '../model/displaySettings.model';
import { ChartDataDTO } from '../model/chartData.model';
/*
  Class that operates with extracted data
*/
export class WebUtil {
  modelList: CryptoCurrDTO[];
  displaySettings: DisplaySettingsDTO = new DisplaySettingsDTO();
  chartData: ChartDataDTO;
  maxDataLength = 14400;
  constructor() {
    this.modelList = [];
  }
  addCoin(data: any) {
    if (data.cryptoType) {
      const coin: CryptoCurrDTO = new CryptoCurrDTO();
      coin.assetId = data.assetId;
      coin.name = data.name;
      coin.originalSymbol = data.originalSymbol;
      coin.price = data.price;
      this.modelList.push(coin);
    }
  }
  setCurrency(coin: any) {
    coin = this.checkForUndefined(coin);
    this.displaySettings.currency = coin;
  }
  setTimeInterval(timeInterval: any) {
    timeInterval = this.checkForUndefined(timeInterval);
    this.displaySettings.timeInterval = timeInterval;
  }
  setIndicator(checkedIndicator: string) {
    const ix = this.displaySettings.selectedIndicators.findIndex(x => x === checkedIndicator);
    if (ix === -1) {
      this.displaySettings.selectedIndicators.push(checkedIndicator);
    } else {
      delete this.displaySettings.selectedIndicators[ix];
    }
  }
  checkForUndefined(data: string) {
    return data === 'undefined' ? undefined : data;
  }

  pushData(result: any): void {
    if (this.chartData === undefined) {
      this.defineChartData();
    }
    this.chartData.coinList.forEach((list, key) => {
      if (list.length > this.maxDataLength) {
        list.pop();
      }
      list.push(result.payload.find((x) => x.assetId === key));
      this.chartData.coinList.set(key, list);
    });
  }

  defineChartData() {
    this.modelList.map((x) => {
      this.chartData.coinList.set(x.assetId, []);
    });
  }
}
