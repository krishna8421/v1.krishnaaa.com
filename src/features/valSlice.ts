import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '@app/store'

interface ValState {
  val: number
}

const initialState: ValState = {
  val: 0
}

export const valSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.val += 1
    },
    decrement: state => {
      state.val -= 1
    }
  }
})

export const { increment, decrement } = valSlice.actions

export const selectVal = (state: AppState) => state.val

export default valSlice.reducer