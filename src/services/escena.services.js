const escenaModel = require('../models/escena.model');
const novelaServices = require('../services/novela.services');

exports.createEscena = async (escenaInfo) => {
    try {
        const novela = await novelaServices.findById(escenaInfo.novela);
        if (!novela) {
            throw { message: "Novela not found", status: 404 }
        }
        const escena = new escenaModel({
            ...escenaInfo
        });
        const dbEscena = await escena.save();
        await novelaServices.addEscena(escenaInfo.novela, dbEscena);
        return dbEscena;
    } catch (error) {
        throw error;
    }
};

exports.findById = async (escenaId) => {
    try {
        return await escenaModel.findById(escenaId).populate('recursos').exec();
    } catch (error) {
        throw error;
    }
};

exports.addRecurso = async (escenaId, recurso) => {
    try {
        console.log("Medidas desesp 1");
        const escena = await escenaModel.findById(escenaId).exec();
        await escena.recursos.push(recurso);
        await escena.save();
        console.log("Medidas desesp 2");
    } catch (error) {
        throw error;
    }
};

exports.getAllEscenas = async () => {
    try {
        return await escenaModel.find().exec();
    } catch (error) {
        throw error;
    }
};

exports.getAllEscenasWithRecursos = async () => {
    try {
        return await escenaModel.find().populate('recursos').exec();
    } catch (error) {
        throw error;
    }
};