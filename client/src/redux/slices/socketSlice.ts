import { createSlice } from "@reduxjs/toolkit"
import { typeConnect } from "../../types/typeConnect"

export interface webSocketState {
  connect: typeConnect
}

const initialState: webSocketState = {
  connect: typeConnect.Disconnected,
}

const socketSlice = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    wsConnect: (state) => {
      state.connect = typeConnect.Connected
    },
    wsDisconnect: (state) => {
      state.connect = typeConnect.Disconnected
    },
    send: () => {},
  },
})
export const { wsConnect, wsDisconnect, send } = socketSlice.actions
export default socketSlice.reducer
