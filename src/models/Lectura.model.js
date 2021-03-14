const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturaSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    novelas: [{
        novelaId: {
            type: Schema.Types.ObjectId,
            ref: 'Novela',
            required: true
        },
        recursoId: {
            type: Schema.Types.ObjectId,
            ref: 'Recurso',
            required: true
        }
    }]
});

module.exports = mongoose.model("Lectura", lecturaSchema);