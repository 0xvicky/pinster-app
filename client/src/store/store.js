import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth";
import pins from "./pins";
export const store = configureStore({
  reducer: {
    auth,
    pins
  }
});
