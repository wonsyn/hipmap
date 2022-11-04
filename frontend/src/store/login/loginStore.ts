import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

export const fetchLoginThunk = createAsyncThunk(
  "user/fetchLogin",
  async (
    { id, password }: { id: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `
        ${process.env.REACT_APP_BACKEND_URL}/user/login`,
        {
          username: id,
          password,
        }
      );

      console.log(response);
      const token = JSON.stringify({
        accessToken: response.data.tokens.accessToken,

        refreshToken: response.data.tokens.refreshToken,
      });
      localStorage.setItem("token", token);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
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
      localStorage.removeItem("token");
    },
    userModify: (state, action) => {
      state.user = {
        ...state.user,
        nickname: action.payload.nickname,
        labeling: action.payload.labeling,
      };
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
    builder.addCase(fetchLoginThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLoginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = true;
      state.token = {
        access_token: action.payload.tokens.accessToken,
        refresh_token: action.payload.tokens.refreshToken,
      };
      state.user = {
        user_id: action.payload.user.userId,
        email: action.payload.user.email,
        labeling: action.payload.user.labeling,
        nickname: action.payload.user.nickname,
        isAdmin: action.payload.user.isAdmin,
        username: action.payload.user.username,
      };
    });
    builder.addCase(fetchLoginThunk.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout,userModify } = LoginSlice.actions;

export const loginState = (state: RootState) => state.userReducer;

export default LoginSlice.reducer;
