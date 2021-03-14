const { Router } = require('express');
const router = Router();
const { postRecurso, getRecurso } = require('../controllers/recurso.controller');
const { check } = require('express-validator');

router.post("/", postRecurso);
router.get("/:id", getRecurso);

module.exports = router;