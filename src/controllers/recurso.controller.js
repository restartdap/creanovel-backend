const { request, response } = require('express');
const recursoServices = require('../services/recurso.services');

const postRecurso = async (req = request, res = response) => {
    try {
        const { recursoInfo, dataRecurso } = req.body;
        const dbRecurso = await recursoServices.createRecurso(
            recursoInfo,
            dataRecurso
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

module.exports = {
    postRecurso
}