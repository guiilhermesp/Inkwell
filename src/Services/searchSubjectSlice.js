import { createSlice } from "@reduxjs/toolkit";
import services from "./services";

let handleSubject;

const initialState = {
  // data: [],
  // loading: false,
  // error: false,
  // [SOLVE] on multiple requests: data, loading and error are on response without been connected with any subject
};

const searchSubjectSlice = createSlice({
  name: "searchSubject",
  initialState,
  reducers: {
    getSearchSubject: (state) => {
      state[handleSubject] = {
        loading: true,
        error: false,
        data: [],
      };
    },
    getSearchSubjectSuccess: (state, actions) => {
      state[handleSubject] = {
        loading: false,
        error: false,
        data: actions.payload.data,
      };
    },
    getSearchSubjectFailure: (state) => {
      state[handleSubject] = {
        loading: false,
        error: true,
        data: [],
      };
    },
  },
});

export const {
  getSearchSubject,
  getSearchSubjectSuccess,
  getSearchSubjectFailure,
} = searchSubjectSlice.actions;

export default searchSubjectSlice.reducer;

export const fetchSearchSubject = (subject) => async (dispatch) => {
  for (const content of subject) {
    handleSubject = content;
    dispatch(getSearchSubject(content));
    try {
      const response = await services.subject(content);
      dispatch(getSearchSubjectSuccess(response, content));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getSearchSubjectFailure(content));
    }
  }
};
