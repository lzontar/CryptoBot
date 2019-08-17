import { CryptoCurrDTO } from 'src/app/model/cryptoCurr.model';
import { DisplaySettingsDTO } from '../model/displaySettings.model';
/*
  Class that operates with extracted data
*/
export class WebUtil {
  modelList: CryptoCurrDTO[];
  displaySettings: DisplaySettingsDTO = new DisplaySettingsDTO();
  constructor() {
    this.modelList = [];
  }
  addCoin(data: any) {
    if(data.cryptoType) {
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
  checkForUndefined(data: string) {
    return data === 'undefined' ? undefined : data;
  }
}
