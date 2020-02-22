const fetch = require ('node-fetch');
const fs = require('fs');
const axios = require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
const GAME_KEY= process.env.API_KEY

const url = `https://www.giantbomb.com/api/games/?api_key=${GAME_KEY}&format=json&limit=2000&platforms=35&field_list=name,deck,platforms,site_detail_url,image,original_release_date`

fetch(url)
    .then(res=>res.json())
    .then(res => {
        let gameLibrary = JSON.stringify(res)
        fs.writeFile('./lib/db/data.json', gameLibrary, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })
    .catch(function (error) {
        console.log('The error is ' + error);
    })

    // //Getting the fetch data
    // fetch(url)
    // .then(res=> res.json())
    // .then(res => console.log(res))
    // .catch(function (error) {
    //             console.log('The error is ' + error);
    //         })