import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../app/api.js";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: !!localStorage.getItem("token"),
    errorMessage: "",
    displayName: "",
    image: "",
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.displayName = "";
      state.image = "";
      state.token = "";
      localStorage.setItem("token", "");
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
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
      state.errorMessage = "Authentication is failed";
      state.isAuth = false;
      state.displayName = "";
      state.image = "";
      state.token = "";
      localStorage.setItem("token", "");
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
