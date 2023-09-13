
const SoundsModel = require('./SoundsModel')


// GET
module.exports.getSounds = async(req, res) => {
    const mySounds = await SoundsModel.find()
    res.send(mySounds)
}

// POST
module.exports.saveSound = async(req, res) => {
    const { image, title, category, soundLink } = req.body;
    SoundsModel.create({ image, title, category, soundLink })
    .then((data) => {console.log('Sound is added!')
    res.send(data)
    })
}

// DELETE
module.exports.deleteSound = async (req, res) => {
    const { _id } = req.params;
    SoundsModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a Sound!'))
    .catch((error) => {
        console.log(error);
        res.status(500).send('Error deleting sound');
    });
};

// EDIT
module.exports.editSound = async(req, res) => {
    const { _id, image, title, category, soundLink } = req.body;
    SoundsModel.findByIdAndUpdate(_id, { image, title, category, soundLink })
    .then(() => res.send('Edited a Sound'))
}