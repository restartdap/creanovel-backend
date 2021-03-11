const { request, response } = require('express');
const recursoServices = require('../services/recurso.services');

const postRecurso = async (req = request, res = response) => {
    try {
        const { recursoInfo, recursoData } = req.body;
        const dbRecurso = await recursoServices.createRecurso(
            recursoInfo,
            recursoData
        );
        return res.json({
            ok: true,
            recurso: dbRecurso
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
};

const getRecurso = async (req = request, res = response) => {
    try {
        const id = req.params.id.toString();
        const recurso = await recursoServices.findById(id);
        return res.json({
            ok: true,
            recurso
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        });
    }
};

module.exports = {
    getRecurso,
    postRecurso
}