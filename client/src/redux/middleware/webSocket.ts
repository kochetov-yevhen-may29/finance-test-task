import { Middleware } from "@reduxjs/toolkit"
import { Socket, io } from "socket.io-client"
import { AppState } from "../../types/appState"
import appConfig from "../../app-config-socket.json"
import { addTickers } from "../slices/tickerSlice"
import { webSocketState } from "../slices/socketSlice"
import { typeConnect } from "../../types/typeConnect"

let socket: Socket;

export const webSocketMiddleware: Middleware<{}, AppState> =
  (store) => (next) => (action) => {
    const webSocketState: webSocketState = store.getState().webSocket;
    if (!socket && webSocketState.connect === typeConnect.Connected) {
      socket = io(appConfig.webSocket.connect)
      socket.emit("start")
      socket.on("connect", () => {
        console.log("Connected")
        if (webSocketState.connect === typeConnect.Disconnected) {
          socket.disconnect();
          console.log('Disconected')
        }
      })
      socket.on("connect_error", () => {
        console.log("No connection")
      })
      socket.on("ticker", (tickers) => {
        store.dispatch(addTickers(tickers))
      })
    }
    next(action)
  }
