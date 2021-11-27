const { model, Schema } = require('mongoose');

const ProfileSchema = new Schema({

    profession: {
        type: String,
        required: true
    },
    anne_experience:{
        type: String,
        required: true
    }
});

const CandidatSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    postnom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    profile: ProfileSchema    
});

module.exports = model('Candidat', CandidatSchema);