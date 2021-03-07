const { Router } = require('express');
const router = Router();
const { getNovela, getNovelas, postNovela } = require('../controllers/novela.controller');

router.get("/:id", getNovela);
router.get("/", getNovelas);
router.post("/", postNovela);

module.exports = router;