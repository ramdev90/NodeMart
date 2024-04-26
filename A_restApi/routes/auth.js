const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.post("/logIn", authController.postLogin);
router.post("/signUp", authController.postSingUp);
// need to add here other routes


module.exports = router;
