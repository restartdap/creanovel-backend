const { request, response } = require('express');
const Novela = require('../models/novela.model');
const { primeraLetraMayuscula } = require("../helpers/helpers");

const getNovela = (req = request, res = response) => {
    const id = req.params.id;

    Novela.findById(id, (err, dbNovela) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            novela: dbNovela
        });
    });
};

const getNovelas = (req = request, res = response) => {
    Novela.find().exec((err, novelas) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            novelas
        });
    });
};

const postNovela = (req = request, res = response) => {
    const body = req.body;
    const titulo = primeraLetraMayuscula(body.titulo.toLowerCase());
    const { descripcion, estado } = body;

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

        return res.json({
            ok: true,
            novela: dbNovela
        });
    });
};

module.exports = {
    getNovela,
    getNovelas,
    postNovela
};