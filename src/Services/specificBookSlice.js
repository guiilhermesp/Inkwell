import { createSlice } from "@reduxjs/toolkit";
import services from "./services";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const specificBookSlice = createSlice({
  name: "specificBook",
  initialState,
  reducers: {
    getSpecificBook: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getSpecificBookSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload.data;
    },
    getSpecificBookFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getSpecificBook,
  getSpecificBookSuccess,
  getSpecificBookFailure,
} = specificBookSlice.actions;

export default specificBookSlice.reducer;

export const fetchSearchBook = (book) => async (dispatch) => {
  dispatch(getSpecificBook());
  try {
    const response = await services.specificBook(book);
    dispatch(getSpecificBookSuccess(response));
  } catch (err) {
    console.log("err: ", err);
    dispatch(getSpecificBookFailure());
  }
};
