const { Router } = require('express');
const router = Router();
const { postNovela } = require('../controllers/novela.controller');

router.post("/", postNovela);

module.exports = router;