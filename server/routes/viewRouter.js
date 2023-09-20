const express = require("express");
const viewsController = require("../Controllers/viewsController");
const router = express.Router();

router.get("/", viewsController.getProductsPage);
router.get("/Payment", viewsController.getPaymentsPage);
module.exports = router;
