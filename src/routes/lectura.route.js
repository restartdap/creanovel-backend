const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const lecturaController = require('../controllers/lectura.controller');

router.post("/", lecturaController.postLectura);
router.get("/", lecturaController.getRecursoLectura);

module.exports = router;