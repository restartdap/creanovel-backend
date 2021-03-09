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