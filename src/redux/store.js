// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
