import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchBookSlice from "./searchBookSlice";
import specificBookSlice from "./specificBookSlice";
import searchSubjectSlice from "./searchSubjectSlice";

const reducer = combineReducers({
  searchBookSlice,
  searchSubjectSlice,
  specificBookSlice,
});
export const store = configureStore({ reducer });
