import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  [key:string]:unknown
}
export const initialState: CounterState = {
  value: 0,
  text:"Increment Counter"
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, actionPayload: PayloadAction<number>) => {
      state.value+= actionPayload.payload;
    },
  },
});

export default CounterSlice.reducer;
export const { increment } = CounterSlice.actions;