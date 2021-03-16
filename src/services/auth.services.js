const usuarioServices = require('./usuario.services');
const jwt = require('jsonwebtoken');

exports.authUsuario = async (username, password) => {
    try {
        const usuario = await usuarioServices.checkUserPassword(username, password);
        const payload = {
            usuario: {
                id: usuario._id
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