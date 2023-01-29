import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loaderSlice";
export const store = configureStore({
  reducer: {
    loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcch = typeof store.dispatch;
