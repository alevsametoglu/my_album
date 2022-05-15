import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../app/api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    favTrack: {
      errorMessage: "",
      loading: false,
      items: [],
    },
    favArtist: {
      errorMessage: "",
      loading: false,
      items: [],
    },
  },
  reducers: {
    clearUserInfo: (state) => {
      state.favArtist.items = [];
      state.favTrack.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFavoriteTracks.pending, (state) => {
      state.favTrack.loading = true;
      state.favTrack.errorMessage = "";
      state.favTrack.items = [];
    });
    builder.addCase(loadFavoriteTracks.fulfilled, (state, action) => {
      state.favTrack.loading = false;
      state.favTrack.items = action.payload;
    });
    builder.addCase(loadFavoriteTracks.rejected, (state, action) => {
      state.favTrack.loading = false;
      state.favTrack.errorMessage = action.message;
    });

    builder.addCase(loadFavoriteArtists.pending, (state) => {
      state.favArtist.loading = true;
      state.favArtist.errorMessage = "";
      state.favArtist.items = [];
    });
    builder.addCase(loadFavoriteArtists.fulfilled, (state, action) => {
      state.favArtist.loading = false;
      state.favArtist.items = action.payload;
    });
    builder.addCase(loadFavoriteArtists.rejected, (state, action) => {
      state.favArtist.loading = false;
      state.favArtist.errorMessage = action.message;
    });
  },
});

const loadFavoriteTracks = createAsyncThunk("user/loadFavoriteTracks", async () => {
  const response = await api.user.getTopTracks();
  return response;
});

const loadFavoriteArtists = createAsyncThunk("user/loadFavoriteArtists", async () => {
  const response = await api.user.getTopArtists();
  return response;
});

// Action creators are generated for each case reducer function
const userActions = { ...userSlice.actions, loadFavoriteArtists, loadFavoriteTracks };
const userReducer = userSlice.reducer;

export { userActions, userReducer };
