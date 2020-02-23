// Import model
const PS3 = require('../models/PS3');

module.exports = {
    index: (req, res) => {
        PS3.find({})
            .then((ps3) => {
                res.json(ps3)
            })
    }
}