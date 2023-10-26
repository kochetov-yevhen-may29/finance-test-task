import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Ticker } from "../../types"
import { RootState } from "../store"

export interface TickerState {
  tickers: Ticker[]
}

const initialState: TickerState = {
  tickers: [],
}

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    addTickers: (state, action: PayloadAction<Ticker[]>) => {
      state.tickers = action.payload
    },
  },
})

export const tickerState = (state: RootState) => state.tickers

export const { addTickers } = tickerSlice.actions

export default tickerSlice.reducer
