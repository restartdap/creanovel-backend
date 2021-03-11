const { Router } = require('express');
const router = Router();
const { postRecurso, getRecurso } = require('../controllers/recurso.controller');

router.post("/", postRecurso);
router.get("/:id", getRecurso);

module.exports = router;