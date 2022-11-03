import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../utils/http-commons";
import type { RootState } from "../store";

interface userLoginState {
  isLoading: boolean;
  token: {
    access_token: string;
    refresh_token: string;
  };
  user: {
    user_id: number;
    username: string;
    nickname: string;
    labeling: string;
    email: string;
    isAdmin: string;
  };
  auth: boolean;
}

export interface signUpType {
  user_id: string;
  username: string;
  labeling: string;
  email: string;
  password: string;
}

export const fetchSignUpThunk = createAsyncThunk(
  "user/fetchSignUp",
  async (
    { user_id, labeling, password, email, username }: signUpType,
    tunkAPI
  ) => {
    // const { user_id, labeling, password, email, username } = params;
    console.log(user_id, labeling, password, email, username);
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/user/regist`,
      {
        email: email,
        labeling: labeling,
        nickname: username,
        password: password,
        username: user_id,
      }
    );
    console.log(response);
    return response.data;
  }
);

const initialState: userLoginState = {
  isLoading: false,
  token: {
    access_token: "",
    refresh_token: "",
  },
  user: {
    user_id: 0,
    username: "",
    nickname: "",
    labeling: "",
    email: "",
    isAdmin: "",
  },
  auth: false,
};

export const LoginSlice = createSlice({
  name: "LoginStore",
  initialState,
  reducers: {
    login: (state) => {
      console.log("test");
      state.user.user_id = 0;
      state.user.username = "테스트계정";
      state.user.nickname = "테스트닉네임";
      state.user.labeling = "조선힙스터";
      state.user.email = "test@test.com";
      state.user.isAdmin = "";
      state.auth = true;
    },
    logout: (state) => {
      state.user = {
        user_id: 0,
        username: "",
        nickname: "",
        labeling: "",
        email: "",
        isAdmin: "",
      };
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSignUpThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignUpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(fetchSignUpThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { login, logout } = LoginSlice.actions;

export const loginState = (state: RootState) => state.userReducer;

export default LoginSlice.reducer;
