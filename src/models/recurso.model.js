const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recursosValidos = {
    values: ["conversacion", "decision", "animacion", "imagen", null],
    message: "{VALUE} no es un tipo de recurso valido"
};

const recursoSchema = new Schema({
    escena: {
        type: mongoose.Types.ObjectId,
        refPath: 'Escena'
    },
    recursoActual: {
        type: mongoose.Types.ObjectId,
        required: true,
        refPath: 'tipoRecurso'
    },
    tipoRecursoActual: {
        type: String,
        required: true,
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