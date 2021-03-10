const { Router } = require('express');
const router = Router();
const { postRecurso } = require('../controllers/recurso.controller');

router.post("/", postRecurso);

module.exports = router;