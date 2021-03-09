const { request, response } = require('express');
const escenaServices = require('../services/escena.services');

postEscena = async (req = request, res = response) => {
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

module.exports = {
    postEscena
};