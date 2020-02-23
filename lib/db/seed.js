const data = require('./data.json');
const PS3 = require('../models/PS3');

const PS3Data = data.map(
    item => {
        const ps3 = {}
        ps3.name = item.name
        ps3.deck = item.deck
        ps3.platforms = item.platforms
        ps3.image = item.image
        ps3.original_release_date = item.original_release_date
        ps3.site_detail_url = item.site_detail_url
        return ps3
    }
)

console.log(PS3Data)

PS3.remove({})
    .then(()=> {
        PS3.create(PS3Data)
            .then(ps3 => {
                console.log(ps3)
            })
            .catch(err => {
                console.log(err)
            })
    })