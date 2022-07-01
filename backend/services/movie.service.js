const { Op } = require("sequelize");
const { Movie } = require("../model/movie");

const movieService = {
  async getAllMoviesByTittle(tittle = "") {
    return await Movie.findAll({
      where: { tittle: { [Op.like]: `%${tittle}%` } },
    });
  },
};
module.exports = movieService;
