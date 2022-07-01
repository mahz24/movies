const movieService = require("../services/movie.service");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMoviesByTittle(tittle);
    res.status(200).json({
      movies,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllMovies };
