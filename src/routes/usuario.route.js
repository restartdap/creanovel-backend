const { Router } = require('express');
const router = Router();
const { postUsuario, postLogIn } = require('../controllers/usuario.controller');
const { check } = require('express-validator');

router.post("/", postUsuario);
router.post("/login", postLogIn);

module.exports = router;