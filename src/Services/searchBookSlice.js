import { createSlice } from "@reduxjs/toolkit";
import services from "./services";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const searchBookSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {
    getSearchBook: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getSearchBookSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload.data;
    },
    getSearchBookFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getSearchBook, getSearchBookSuccess, getSearchBookFailure } =
  searchBookSlice.actions;

export default searchBookSlice.reducer;

export const fetchSearchBook = (book) => async (dispatch) => {
  dispatch(getSearchBook());
  try {
    const response = await services.search(book);
    dispatch(getSearchBookSuccess(response));
  } catch (err) {
    console.log("err: ", err);
    dispatch(getSearchBookFailure());
  }
};
