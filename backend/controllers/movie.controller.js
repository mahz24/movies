const movieService = require("../services/movie.service");

const getAllMovies = async (req, res) => {
  try {
    const { tittle } = req.query;

    if (!tittle) {
      res.status(400).json({
        message: "Tittle query param is required",
      });
      return;
    }

    const movies = await movieService.getAllMoviesByTittle(tittle);
    res.status(200).json({
      movies,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllMovies };
