const { model } = require("mongoose");

const conversacionSchema = new Schema({
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