const express = require("express");
const app = express();

const api = require("./routes/api");

const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(express.json());

app.use(jwt());
app.use("/api", api);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
