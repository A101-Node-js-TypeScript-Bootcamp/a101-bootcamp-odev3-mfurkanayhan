const express = require("express");
const routes = express.Router();
const categoryController = require("../controllers/Category");

routes.post("/", categoryController.add);
routes.get("/", categoryController.get);
routes.put("/", categoryController.put);
routes.delete("/", categoryController.delete);
module.exports = routes;
