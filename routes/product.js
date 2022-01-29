const express = require("express");
const routes = express.Router();
const productService = require("../services/product");


routes.get("/", await productService.getProducts());
routes.get("/:productId", productService.getProduct(productId));
routes.get("/", productService.getDiscountedProducts());
routes.delete("/", productService.deleteProduct(productId));
routes.update("/", productService.updateProductStock(productId, stock));

module.exports = routes;