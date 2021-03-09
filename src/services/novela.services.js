const novelaModel = require('../models/novela.model');
const { primeraLetraMayuscula } = require("../helpers/helpers");

exports.createNovela = async (novelaInfo) => {
    try {
        novelaInfo.titulo = primeraLetraMayuscula(novelaInfo.titulo.toLowerCase());

        const newNovela = new novelaModel({
            ...novelaInfo
        });

        return await newNovela.save();
    } catch (error) {
        throw error;
    }
}

exports.findById = async (novelaId) => {
    try {
        return await novelaModel.findById(novelaId).populate('escenas').exec();
    } catch (error) {
        throw error;
    }
};

exports.getAllNovelas = async () => {
    try {
        return await novelaModel.find().exec();
    } catch (error) {
        throw error;
    }
};

exports.getAllNovelasWithEscenas = async () => {
    try {
        return await novelaModel.find().populate('escenas').exec();
    } catch (error) {
        throw error;
    }
};

exports.addEscena = async (novelaId, escena) => {
    try {
        const novela = await novelaModel.findById(novelaId).exec();
        await novela.escenas.push(escena);
        await novela.save();
    } catch (error) {
        throw error;
    }
};