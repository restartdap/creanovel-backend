const { request, response } = require('express');
const lecturaServices = require('../services/lectura.services');
const { validationResult } = require('express-validator');

exports.getLecturas = async (req = request, res = response) => {
    try {
        const { idLecturas } = req.body;
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

exports.getRecursoLectura = async (req = request, res = response) => {
    try {
        const { lecturaId, novelaId } = req.body;
        const lectura = await lecturaServices.getLecturaById(lecturaId, novelaId);
        res.json({
            ok: true,
            lectura
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};

exports.postLectura = async (req = request, res = response) => {
    try {
        const { lecturaId, novelaInfo } = req.body;
        console.log(novelaInfo);
        const lecturas = await lecturaServices.addLectura(lecturaId, novelaInfo);
        res.json({
            ok: true,
            lecturas
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error
        });
    }
};