import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice.js";
import { authReducer } from "./authSlice.js";

import { userReducer } from "./userSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    app: appReducer,
  },
});
