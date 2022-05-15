import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    selectedTrackUri: "",
    searchResult: [],
    searchKey: "",
  },
  reducers: {
    selectTrack: (state, action) => {
      console.log(action);
      state.selectedTrackUri = action.payload;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    clearSearchKey: (state) => {
      state.searchKey = "";
    },
  },
});

const appActions = { ...appSlice.actions };
const appReducer = appSlice.reducer;

export { appActions, appReducer };
