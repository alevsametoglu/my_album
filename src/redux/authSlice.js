import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api.js";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    errorMessage: "",
    displayName: "",
    image: "",
    token: "",
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.displayName = "";
      state.image = "";
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProfile.fulfilled, (state, action) => {
      console.log(action);
      state.isAuth = true;
      state.displayName = action.payload.displayName;
      state.image = action.payload.image;
    });
    builder.addCase(loadProfile.rejected, (state, action) => {
      console.log(action);
      state.isAuth = false;
      state.errorMessage = "Authentication is failed";
    });
  },
});
const loadProfile = createAsyncThunk("auth/getCurrentUser", async () => {
  const response = await api.getCurrentUser();
  return response;
});

// Action creators are generated for each case reducer function
const authActions = { ...authSlice.actions, loadProfile };
const authReducer = authSlice.reducer;

export { authActions, authReducer };
