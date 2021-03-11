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
        refPath: 'tipoRecursoActual'
    },
    tipoRecursoActual: {
        type: String,
        required: true,
        enum: recursosValidos
    }
});

module.exports = mongoose.model("Recurso", recursoSchema);