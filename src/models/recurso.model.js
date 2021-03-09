const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recursosValidos = {
    values: ["CONVERSACION", "DECISION", "ANIMACION", "ESCENA"],
    message: "{VALUE} no es un tipo de recurso valido"
}

const recursoSchema = new Schema({
    recurso: {
        type: mongoose.Types.ObjectId,
        default: null,
        refPath: 'tipoRecurso'
    },
    tipoRecurso: {
        type: String,
        default: null,
        enum: recursosValidos
    },
    recursoAnterior: {
        type: mongoose.Types.ObjectId,
        default: null,
        refPath: 'tipoRecursoAnterior'
    },
    tipoRecursoAnterior: {
        type: String,
        default: null,
        enum: recursosValidos
    }
});

module.exports = mongoose.model("Recurso", recursoSchema);