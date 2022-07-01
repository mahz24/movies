const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const Movie = db.define(
  "movie",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    locations: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    production_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actor_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actor_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actor_3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fun_facts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distributor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Movie };
