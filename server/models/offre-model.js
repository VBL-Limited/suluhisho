const { model, Schema } = require('mongoose');

const OffreSchema = new Schema({
    nom_organisation: {
        type: String,
        required: true
    },
    poste: {
        type: String,
        required: true
    },
    lieu_affectation: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        default: Date.now()
    },
    date_limite: {
        type: Date,
        required: true
    },
    details_offre: {
        type: String,
        required: true
    },
    adresse_mail: {
        type: String,
        required: true
    }  
});

module.exports = model('Offre', OffreSchema);