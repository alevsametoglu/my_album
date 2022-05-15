import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    selectedTrackUri: "",
  },
  reducers: {
    selectTrack: (state, action) => {
      console.log(action);
      state.selectedTrackUri = action.payload;
    },
  },
});

const appActions = { ...appSlice.actions };
const appReducer = appSlice.reducer;

export { appActions, appReducer };
