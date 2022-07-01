const { db } = require("./utils/database");
const { app } = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

db.authenticate()
  .then(() => console.log("Database already"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`Server running in port ${PORT}`)
);

process.on("SIGINT", () => {
  server.close(async () => {
    await db.close();
  });
});

process.on("SIGTERM", () => {
  server.close(async () => {
    await db.close();
  });
});
