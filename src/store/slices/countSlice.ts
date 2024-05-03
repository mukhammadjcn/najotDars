import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  count: number;
}
const initialState: IState = {
  count: 0,
};

const countSlice = createSlice({
  name: "countSlice",
  initialState: initialState,
  reducers: {
    plusNumber(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    minusNumber(state, action: PayloadAction<number>) {
      state.count = state.count - action.payload;
    },
  },
});

export const { plusNumber, minusNumber } = countSlice.actions;
export default countSlice.reducer;
