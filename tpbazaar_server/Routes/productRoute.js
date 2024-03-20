const express = require("express");
const { getProduct, getProductDetail } = require("../Controller/product");
const ProductRoute = express.Router();


ProductRoute.get("/customer/product", getProduct)
ProductRoute.get("/customer/productDetail", getProductDetail)

module.exports = ProductRoute;

