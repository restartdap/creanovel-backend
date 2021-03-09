const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversacionSchema = new Schema({
    recurso: {
        type: Schema.Types.ObjectId,
        ref: "Recurso"
    },
    texto: {
        type: String,
        required: true,
        default: "Aquí va un mensaje",
        trim: true
    },
    recursoPosterior: {
        type: mongoose.Types.ObjectId,
        default: null,
        refPath: 'tipoRecursoPosterior'
    },
    tipoRecursoPosterior: {
        type: String,
        default: null,
        enum: recursosValidos
    }
});

module.exports = mongoose.model("Conversacion", conversacionSchema);