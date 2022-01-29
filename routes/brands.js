const express = require("express");
const routes = express.Router();
const Brandscontroller = require("../controllers/Brands");

routes.get("/", Brandscontroller.multiGetBrands);
routes.get("/:brandsName", Brandscontroller.singleGetBrands);
module.exports = routes;
