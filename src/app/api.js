import axios from "axios";
import { util } from "./util";

axios.defaults.headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};

const setDefaultToken = (token) => {
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
const getCurrentUser = () => {
  return axios
    .get("https://api.spotify.com/v1/me")
    .then((response) => {
      console.log(response);
      return {
        displayName: response.data.display_name,
        image: response.data.images?.[0]?.url || "",
      };
    })
    .catch((x) => {
      console.log(x);
      throw x.response.data;
    });
};

const searchArtists = (searchKey) => {
  return axios
    .get("https://api.spotify.com/v1/search", {
      params: { q: searchKey, type: "artist" },
    })
    .then((response) => {
      return response.data.artists.items.map((artist) => ({
        id: artist.id,
        name: artist.name,
        image: artist.images?.[0]?.url,
      }));
    })
    .catch((x) => {
      throw x.response.data.error;
    });
};

const getUserTopItems = (type) =>
  axios
    .get(`https://api.spotify.com/v1/me/top/${type}`)
    .then((response) => response.data.items)
    .catch((x) => {
      console.log(x);
      throw x.response.data.error;
    });

const album = {
  getTracks: (albumId) => {
    return axios
      .get(`https://api.spotify.com/v1/albums/${albumId}/tracks `)
      .then((response) => util.getTracksFromItems(response.data.items))
      .catch((x) => {
        console.log(x);
        throw x.response.data.error;
      });
  },
};

const user = {
  getFollowedArtist: () =>
    axios
      .get("https://api.spotify.com/v1/me/following", {
        params: { type: "artist" },
      })
      .then((response) => response.data.artists.items)
      .catch((x) => {
        console.log(x);
        throw x.response.data.error;
      }),
  getTopArtists: () => getUserTopItems("artists").then(util.getArtistsFromItems),
  getTopTracks: () => getUserTopItems("tracks").then(util.getTracksFromItems),
};
const artist = {
  getById: (id) =>
    axios.get(`https://api.spotify.com/v1/artists/${id} `).then((response) => {
      return { name: response.data.name, followers: response.data.followers.total, image: response.data.images?.[0]?.url };
    }),
  getAlbumList: (artistId) =>
    axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`).then((response) => util.getAlbumsFromItems(response.data.items)),
  getTopTracks: (artistId) =>
    axios
      .get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, { params: { market: "FR" } })
      .then((response) => util.getTracksFromItems(response.data.tracks)),
};

const api = {
  searchArtists,
  setDefaultToken,
  getCurrentUser,
  album,
  user,
  artist,
};
export default api;
