const { request, response } = require('express');
const Novela = require('../models/novela.model');

const getNovela = (req = request, res = response) => {

};

const postNovela = (req = request, res = response) => {
    const { titulo, descripcion, estado } = req.body;

    const novela = new Novela({
        titulo,
        descripcion,
        estado
    });

    novela.save((err, dbNovela) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            novela: dbNovela
        });
    });
};

module.exports = {
    postNovela
};