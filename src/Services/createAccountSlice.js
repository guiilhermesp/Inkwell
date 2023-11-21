import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./Database/db";

const initialState = {
  data: false,
  loading: false,
  error: false,
};

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    createAccount: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    createAccountSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload.data;
    },
    createAccountFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { createAccount, createAccountSuccess, createAccountFailure } =
  createAccountSlice.actions;

export default createAccountSlice.reducer;

export const fetchCreateAccount = (form) => async (dispatch) => {
  dispatch(createAccount());
  try {
    const response = await addUser(form);
    const data = await response;
    dispatch(createAccountSuccess({ data }));
  } catch (err) {
    console.log("err: ", err);
    dispatch(createAccountFailure());
  }
};
