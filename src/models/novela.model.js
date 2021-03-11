const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const novelaSchema = Schema({
    titulo: {
        type: String,
        required: [true, "El titulo es obligatorio"],
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: false,
        default: "Sin descripción",
        trim: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: false
    },
    escenas: [{
        type: Schema.Types.ObjectId,
        ref: "Escena"
    }]
});

module.exports = mongoose.model("Novela", novelaSchema);