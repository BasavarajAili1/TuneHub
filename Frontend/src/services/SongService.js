// Update SongService.js
import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8081/viewSongs";
const REST_API_GET_URL = "http://localhost:8081";
const REST_API_PUT_URL = "http://localhost:8081";
const REST_API_DELETE_URL = "http://localhost:8081";

export const listSongs = () => {
  return axios.get(REST_API_BASE_URL);
};

export const getSong = (id) => axios.get(REST_API_GET_URL +'/' + id);

export const updateSong = (id, song) => axios.put(REST_API_PUT_URL + '/' + id, song);

export const deleteSong = (id) => axios.delete(REST_API_DELETE_URL + '/' + id);
