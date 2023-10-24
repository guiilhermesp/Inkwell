import { createSlice } from "@reduxjs/toolkit";
import { checkCredentials } from "./Database/db";

const initialState = {
  data: false,
  loading: false,
  error: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state) => {
      state.loading = true;
      state.error = false;
      state.data = false;
    },
    getLoginSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.data = true;
    },
    getLoginFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = false;
    },
  },
});

export const { getLogin, getLoginSuccess, getLoginFailure } =
  loginSlice.actions;

export default loginSlice.reducer;

export const fetchLogin = (form) => async (dispatch) => {
  dispatch(getLogin());
  try {
    const response = checkCredentials(form);
    dispatch(getLoginSuccess());
    sessionStorage.setItem('isLogged', !!response)
  } catch (err) {
    console.log("err: ", err);
    dispatch(getLoginFailure());
  }
};
