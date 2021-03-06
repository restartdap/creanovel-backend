const usuarioModel = require("../models/usuario.model");
const lecturaServices = require('./lectura.services');

exports.createUsuario = async (usuarioInfo) => {
    try {
        const newUsuario = new usuarioModel({
            ...usuarioInfo
        });
        const dbUsuario = await newUsuario.save();
        const dbLectura = await lecturaServices.createLecturas({
            usuario: dbUsuario._id,
            novelas: []
        });
        dbUsuario.lecturas = dbLectura._id;
        await dbUsuario.save();
        const payload = {
            usuario: {
                id: dbUsuario._id
            }
        };
        const token = await jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 3600
        });
        return token;
    } catch (error) {
        throw error;
    }
};

exports.checkUserPassword = async (username, password) => {
    try {
        const dbUsuario = await usuarioModel.findOne({ username, password }, "_id name email username lecturas").exec();
        if (!dbUsuario) {
            throw { message: "Los datos son incorrectos o no existe el usuario", status: 400 };
        }
        return dbUsuario;
    } catch (error) {
        throw error;
    }
};