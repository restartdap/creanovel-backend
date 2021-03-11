const { request, response } = require('express');
const escenaServices = require('../services/escena.services');

const postEscena = async (req = request, res = response) => {
    try {
        const { novela, recursos } = req.body;
        const escena = await escenaServices.createEscena({
            novela, recursos
        });

        res.status(200).json({
            ok: true,
            escena
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
};

const getEscenas = async (req = request, res = response) => {
    try {
        const escenas = await escenaServices.getAllEscenas();
        return res.json({
            ok: true,
            escenas
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

module.exports = {
    postEscena,
    getEscenas
};