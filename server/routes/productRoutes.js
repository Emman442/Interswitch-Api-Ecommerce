const express = require("express");
const upload = require("../utils/imageUpload");
const { createProduct } = require("../Controllers/productController");
const router = express.Router()

router.post("/create-product", upload.single('image'), createProduct);
module.exports = router