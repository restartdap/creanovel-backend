const { request, response } = require('express');
const novelaServices = require('../services/novela.services');

const getNovela = async (req = request, res = response) => {
    try {
        const id = req.params.id.toString();
        const novela = await novelaServices.findById(id);
        return res.json({
            ok: true,
            novela
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

const getNovelas = async (req = request, res = response) => {
    try {
        const novelas = await novelaServices.getAllNovelas();
        return res.json({
            ok: true,
            novelas
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

const postNovela = async (req = request, res = response) => {
    try {
        const { titulo, descripcion, estado } = req.body;
        const escenas = [];
        const dbNovela = await novelaServices.createNovela({
            titulo,
            descripcion,
            estado,
            escenas
        });

        return res.json({
            ok: true,
            novela: dbNovela
        });

    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

module.exports = {
    getNovela,
    getNovelas,
    postNovela
};