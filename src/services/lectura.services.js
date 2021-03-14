const lecturaModel = require("../models/Lectura.model");
const novelaServices = require('./novela.services');
const recursoServices = require('./recurso.services');

exports.createLecturas = async (lecturaInfo) => {
    try {
        const { usuario, novelas = [] } = lecturaInfo;
        const newLectura = new lecturaModel({
            usuario,
            novelas
        });
        return await newLectura.save();
    } catch (error) {
        throw error;
    }
};

exports.addLectura = async (lecturaId, novelaInfo) => {
    try {
        const { novelaId, recursoId } = novelaInfo;
        console.log(novelaInfo);
        const lectura = await lecturaModel.findById(lecturaId).exec();
        await lectura.novelas.push({
            novelaId,
            recursoId
        });
        return await lectura.save();
    } catch (error) {
        throw error;
    }
};

exports.getLecturaById = async (lecturaId, novelaId) => {
    try {
        console.log("novelaId:", novelaId);
        const dbLectura = await lecturaModel.findById(lecturaId).exec();

        const lectura = dbLectura.novelas.reduce((novela) => {
            return (novela.novelaId.toString() === novelaId);
        });
        return lectura;
    } catch (error) {
        throw error;
    }
};