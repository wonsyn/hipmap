import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "./login/loginStore";

export const store = configureStore({
  reducer: {
    userReducer: LoginSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
