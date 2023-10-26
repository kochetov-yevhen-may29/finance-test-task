import { webSocketState } from "../redux/slices/socketSlice";
import { TickerState } from "../redux/slices/tickerSlice";

export interface AppState {
  webSocket: webSocketState;
  tickers: TickerState;
};
