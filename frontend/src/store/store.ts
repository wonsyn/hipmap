import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "./login/loginStore";
import LabelingSliceReducer from "./labeling/labelingStore";

export const store = configureStore({
  reducer: {
    userReducer: LoginSliceReducer,
    labelingReducer: LabelingSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
