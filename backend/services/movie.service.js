const { Movie } = require("../model/movie");

const movieService = {
  async getAllMoviesByTittle() {
    return await Movie.findAll();
  },
};
module.exports = movieService;
