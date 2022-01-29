const express = require("express");
const routes = express.Router();
const brandsroutes = require("./brands");
const categoriesRoutes = require("./categories");
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const categoryRoutes = require("./category");
const productRoutes = require("./product");

//! Endpoints
routes.use("/brands", brandsroutes);
routes.use("/categories", categoriesRoutes);
routes.use("/login", loginRoutes);
routes.use("/register", registerRoutes);
routes.use("/category", categoryRoutes);
routes.use("/product", productRoutes);
module.exports = routes;
