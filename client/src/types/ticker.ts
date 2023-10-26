export interface Ticker {
  id: string;
  socketId: string;
  isFrom: boolean;
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yield: string;
  last_trade_time: string;
}
