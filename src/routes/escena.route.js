const { Router } = require('express');
const router = Router();
const { postEscena, getEscenas } = require('../controllers/escena.controller');

router.post("/", postEscena);
router.get("/", getEscenas);

module.exports = router;