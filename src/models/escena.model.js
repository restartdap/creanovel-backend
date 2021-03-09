const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escenaSchema = new Schema({
    novela: {
        type: Schema.Types.ObjectId,
        ref: 'Novela'
    },
    recursos: [{
        type: Schema.Types.ObjectId,
        ref: "Recurso"
    }]
});

module.exports = mongoose.model("Escena", escenaSchema);