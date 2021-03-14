const { Router } = require('express');
const router = Router();
const { getNovela, getNovelas, postNovela } = require('../controllers/novela.controller');
const { check } = require('express-validator');

router.get("/:id", getNovela);
router.get("/", getNovelas);
router.post("/", postNovela);

module.exports = router;