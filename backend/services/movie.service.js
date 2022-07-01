const { Movie } = require("../model/movie");

const movieService = {
  async getAllMoviesByTittle(tittle = "") {
    return await Movie.findAll();
  },
};
module.exports = movieService;
