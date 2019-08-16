import { CryptoCurrDTO } from 'src/shared/model/cryptoCurr.model';
/*
  Class that operates with extracted data
*/
export class WebUtil {
  modelList: CryptoCurrDTO[];
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
}
