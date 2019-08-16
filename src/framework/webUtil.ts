import { CryptoCurrDTO } from 'src/app/main/model/cryptoCurr.model';

export class WebUtil {
  modelList: CryptoCurrDTO[];
  constructor() {
    this.modelList = [];
  }
  addCoin(data: any) {
    const coin: CryptoCurrDTO = new CryptoCurrDTO();
    coin.assetId = data.assetId;
    coin.name = data.name;
    coin.originalSymbol = data.originalSymbol;
    coin.price = data.price;
    this.modelList.push(coin);
  }
}
