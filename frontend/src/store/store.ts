import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "./login/loginStore";
import LabelingSliceReducer from "./labeling/labelingStore";
import HipMapSliceReducer from "./hipMap/hipMapStore";

export const store = configureStore({
  reducer: {
    userReducer: LoginSliceReducer,
    labelingReducer: LabelingSliceReducer,
    hipMapReducer: HipMapSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
