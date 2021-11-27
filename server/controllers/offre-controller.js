const Offre = require('../models/offre-model');

exports.create = async (req, res) => {
    try {
        const {
            nom_organisation,
            poste,
            lieu_affectation,
            date_publication,
            date_limite,
            details_offre,
            email
        } = req.body;

        const newOffre = new Offre({ ...req.body} );
        const saveOffre = await newOffre.save();
        return res.status(201).json(saveOffre);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.getAll = async (req, res) => {
    try {
        const allOffres = await Offre.find();
        return res.status(200).json(allOffres);
    } catch (error) {
        return res.status(404).json({ error });
    }
};

exports.getOne = async (req, res) => {
    try {
        const offre = await Offre.findOne({poste});
        if(!offre) return res.status(404).json("Cet offre n'existe pas !");

        return res.status(200).json(allOffres);
    } catch (error) {
        return res.status(400).json({ error });
    }
};

exports.update = async (req, res) => {
    try {
        const {
            nom_organisation,
            poste,
            lieu_affectation,
            date_publication,
            date_limite,
            details_offre,
            email
        } = req.body;

        const updateOffre = await Offre.findOneAndUpdate({ _id: req.params.id }, { ... req.body }, { new: true});
        if(!updateOffre) return res.status(400).json("Erreur lors de la mise à jour de l'offre!");

        return res.status(201).json(updateOffre);
    } catch (error) {
        return res.status(400).json({ error });
    }
};


exports.remove = async (req, res) => {
    try {        

        const removeOffre = await Offre.findOneAndRemove({ _id: req.params.id });
        if(!removeOffre) return res.status(404).json("Cet offre n'existe pas!");

        return res.status(200).json(removeOffre);
    } catch (error) {
        return res.status(400).json({ error });
    }
}