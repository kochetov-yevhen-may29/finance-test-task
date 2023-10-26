import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import socketReduser from "../redux/slices/socketSlice"
import tickerReduser from "../redux/slices/tickerSlice"
import { webSocketMiddleware } from "./middleware/webSocket"

export const store = configureStore({
  reducer: {
    webSocket: socketReduser,
    tickers: tickerReduser,
  },
  middleware: [webSocketMiddleware],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
