const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lecturas: {
        type: Schema.Types.ObjectId,
        ref: 'Lectura'
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema);