import axios from "axios";

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
const getAlbums = (id) => {
  return axios
    .get(`https://api.spotify.com/v1/artists/${id}/albums`)
    .then((response) => {
      return response.data.items.map((item) => ({
        image: item.images?.[0]?.url,
        name: item.name,
        id: item.id,
      }));
    })
    .catch((x) => {
      throw x.response.data.error;
    });
};
const getAlbumTracks = (id) => {
  return axios
    .get(`https://api.spotify.com/v1/albums/${id}/tracks `)
    .then((response) => response.data.items)
    .catch((x) => {
      console.log(x);
      throw x.response.data.error;
    });
};
const getUserArtist = () => {
  return axios
    .get("https://api.spotify.com/v1/me/following", {
      params: { type: "artist" },
    })
    .then((response) => response.data.artists.items)
    .catch((x) => {
      console.log(x);
      throw x.response.data.error;
    });
};
const api = {
  searchArtists,
  setDefaultToken,
  getCurrentUser,
  getAlbums,
  getAlbumTracks,
  getUserArtist,
};
export default api;
