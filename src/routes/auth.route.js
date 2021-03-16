const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth.controller');

router.post("/", authController.postAuth);

module.exports = router;