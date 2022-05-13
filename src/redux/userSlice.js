import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Api";
const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ firstName, lastName }) => {
    const response = await api.updateProfile(firstName, lastName);
    console.log(response);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      console.log(action);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      console.log(action.payload);
      console.log("aaaaaaa");
    });
  },
});

// Action creators are generated for each case reducer function
const userActions = { ...userSlice.actions, updateProfile };
const userReducer = userSlice.reducer;

export { userActions, userReducer };
