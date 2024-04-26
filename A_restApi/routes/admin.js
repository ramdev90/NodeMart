const express = require("express");
const isAuth = require('../../middleware/is-auth');

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/products", isAuth, adminController.getProducts);
router.post("/product", isAuth, adminController.postProduct);
router.put("/product/:productId", isAuth, adminController.putProduct);

router.get('/products/:productId', isAuth, adminController.getProductById);

module.exports = router;
