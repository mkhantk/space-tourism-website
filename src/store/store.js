import { configureStore } from "@reduxjs/toolkit";
import varticalNavReducer from "./varticalSlice";
const store = configureStore({
  reducer: {
    varticalNav: varticalNavReducer,
  },
});
export default store;
