const { request, response, json } = require('express');
const usuarioServices = require('../services/usuario.services');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const postUsuario = async (req = request, res = response) => {
    try {
        const { name, username, email, password } = req.body.datos;
        const token = await usuarioServices.createUsuario({
            name,
            username,
            email,
            password
        });

        return res.status(200).json({
            ok: true,
            token
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

const postLogIn = async (req = request, res = response) => {
    try {
        const { username, password } = req.body;
        const usuarioData = await usuarioServices.logIn(username, password);
        return res.status(200).json({
            ok: true,
            usuario: usuarioData
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

module.exports = {
    postUsuario,
    postLogIn
}