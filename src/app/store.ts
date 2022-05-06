import { configureStore } from '@reduxjs/toolkit'
import valReducer from "@features/valSlice"

export function makeStore() {
  return configureStore({
    reducer: valReducer
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store