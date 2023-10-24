import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchBookSlice from "./searchBookSlice";
import specificBookSlice from "./specificBookSlice";
import searchSubjectSlice from "./searchSubjectSlice";
import loginSlice from "./loginSlice";
import createAccountSlice from "./createAccountSlice";

const reducer = combineReducers({
  searchBookSlice,
  searchSubjectSlice,
  specificBookSlice,
  loginSlice,
  createAccountSlice,
});
export const store = configureStore({ reducer });
