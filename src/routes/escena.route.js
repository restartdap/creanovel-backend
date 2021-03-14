const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const escenaController = require('../controllers/escena.controller');

router.post("/", escenaController.postEscena);
router.get("/", escenaController.getEscenas);

module.exports = router;