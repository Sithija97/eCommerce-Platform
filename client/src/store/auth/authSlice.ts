import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialAuthState, loginInputs, registerInputs } from "../../models";
import authService from "../../services/auth";
const initialState: initialAuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  modalType: "login",
  show: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (payload: registerInputs, thunkAPI) => {
    try {
      const response = await authService.register(payload);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload: loginInputs, thunkAPI) => {
    try {
      const response = await authService.login(payload);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    setShow: (state, { payload }) => {
      state.show = payload;
    },
    setModalType: (state, { payload }) => {
      state.modalType = payload;
    },
  },
  extraReducers: () => {},
});

export const { logout, setModalType, setShow } = authSlice.actions;

export default authSlice.reducer;
