import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getMoviesInfo = async () => {
  try {
    return api.get("/movies");
  } catch (err) {
    console.log(err);
    return false;
  }
};
