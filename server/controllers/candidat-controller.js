const Candidat = require('../models/candidat-model');

exports.create = async (req, res) => {
    try {
        const {
            nom,
            postnom,
            prenom,
            email,
            adresse,
            profession,
            anne_experience
        } = req.body;

        const newCandidat = new Candidat({ ...req.body} );
        const saveCandidat = await newCandidat.save();
        return res.status(201).json(saveCandidat);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.getAll = async (req, res) => {
    try {
        const allCandidats = await Candidat.find();
        return res.status(200).json(allCandidats);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.getOne = async (req, res) => {
    try {
        const candidat = await Candidat.findOne({poste});
        if(!candidat) return res.status(404).json("Ce candidat n'existe pas !");

        return res.status(200).json(candidat);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.update = async (req, res) => {
    try {
        const {
            nom,
            postnom,
            prenom,
            email,
            adresse,
            profession,
            anne_experience
        } = req.body;

        const updateCandidat = await Candidat.findOneAndUpdate({ _id: req.params.id }, { ... req.body }, { new: true});
        if(!updateCandidat) return res.status(400).json("Erreur lors de la mise à jour du candidat!");

        return res.status(201).json(updateCandidat);
    } catch (error) {
        return res.status(400).json({ error });
    }
};


exports.remove = async (req, res) => {
    try {        

        const removeCandidat = await Candidat.findOneAndRemove({ _id: req.params.id });
        if(!removeCandidat) return res.status(404).json("Ce candidat n'existe pas!");

        return res.status(200).json(removeCandidat);
    } catch (error) {
        return res.status(400).json({ error });
    }
}