const { request, response, json } = require('express');
const authServices = require('../services/auth.services');

exports.postAuth = async (req = request, res = response) => {
    try {
        const { username, password } = req.body.datos;
        const token = await authServices.authUsuario(username, password);
        res.status(200).json({
            ok: true,
            token
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
};