const { Router } = require('express');
const router = Router();
const { postEscena } = require('../controllers/escena.controller');

router.post("/", postEscena);

module.exports = router;