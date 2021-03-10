const recursoModel = require('../models/recurso.model');
const conversacionModel = require('../models/conversacion.model');
const escenaServices = require('../services/escena.services');

exports.createRecurso = async (recursoInfo, recursoData) => {
    try {
        const recurso = recursoInfo;
        const data = recursoData;
        const { tipoRecursoActual } = recurso;
        const dbContenido = await saveRecursoContent(tipoRecursoActual, data);
        const escena = await escenaServices.findById(recurso.escena);
        if (!escena) {
            throw { message: "Escena not found", status: 404 }
        }
        const newRecurso = new recursoModel({
            ...recursoInfo,
            recursoActual: dbContenido._id
        });
        const dbRecurso = await newRecurso.save();
        await escenaServices.addRecurso(recursoInfo.escena, dbRecurso);
        return dbRecurso;
    } catch (error) {
        throw error;
    }
};

async function saveRecursoContent(tipoRecurso, data) {
    try {
        switch (tipoRecurso) {
            case "conversacion":
                const recurso = await conversacionModel({
                    ...data
                });
                return await recurso.save();
            default:
                throw { message: "El tipo de recurso enviado no es el correcto", status: 400 }
        }
    } catch (error) {
        throw error;
    }
}