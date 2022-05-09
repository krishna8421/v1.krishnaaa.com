import { configureStore } from '@reduxjs/toolkit'
import valReducer from "@slices/valSlice"

export function makeStore() {
  return configureStore({
    reducer: valReducer
  })
}

const store = makeStore()

export default store
