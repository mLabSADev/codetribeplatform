import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoaderState {
  loaded: boolean;
}
const initialState: LoaderState = {
  loaded: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload;
    },
  },
});
export const { loaded } = loaderSlice.actions;
export default loaderSlice.reducer;
