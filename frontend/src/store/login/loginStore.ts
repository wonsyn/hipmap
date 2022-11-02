import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface userLoginState {
  token: {
    access_token: string;
    refresh_token: string;
  };
  user: {
    user_id: string;
    username: string;
    nickname: string;
    labeling: string;
    email: string;
    isAdmin: boolean;
  };
  auth: boolean;
}

const initialState: userLoginState = {
  token: {
    access_token: "",
    refresh_token: "",
  },
  user: {
    user_id: "",
    username: "",
    nickname: "",
    labeling: "",
    email: "",
    isAdmin: false,
  },
  auth: false,
};

export const LoginSlice = createSlice({
  name: "LoginStore",
  initialState,
  reducers: {
    login: (state) => {
      console.log("test");
      state.user.user_id = "test";
      state.user.username = "테스트계정";
      state.user.nickname = "테스트닉네임";
      state.user.labeling = "조선힙스터";
      state.user.email = "test@test.com";
      state.user.isAdmin = false;
      state.auth = true;
    },
    logout: (state) => {
      state.user = {
        user_id: "",
        username: "",
        nickname: "",
        labeling: "",
        email: "",
        isAdmin: false,
      };
      state.auth = false;
    },
  },
});

export const { login, logout } = LoginSlice.actions;

export const loginState = (state: RootState) => state.userReducer;

export default LoginSlice.reducer;
