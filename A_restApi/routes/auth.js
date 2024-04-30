const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.post("/logIn", authController.postLogin);
// curl --location 'http://localhost:3001/api/logIn' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "email": "ramdev.r@techroversolutions.com",
//     "password": "Ramdev"
// }'

router.post("/signUp", authController.postSingUp);
// curl --location 'http://localhost:3001/api/signUp' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "email": "ramdev.r@techroversolutions.com",
//     "password": "Ramdev"
// }'

module.exports = router;
