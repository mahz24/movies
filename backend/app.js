const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const { movieRoute } = require("./routes/movie.route");

const app = express();

app.use(express.json());

app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

app.use("/api/v1/movies", movieRoute);

module.exports = { app };
