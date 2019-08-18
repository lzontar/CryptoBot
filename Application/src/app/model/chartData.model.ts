export class ChartDataDTO {
  coinList: Map<string, CoinGraphDTO[]>;
}

export class CoinGraphDTO {
  coinId: string;
  date: Date;
  price: number;
}
