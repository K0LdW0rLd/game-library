const fetch = require ('node-fetch');
const fs = require('fs');
const axios = require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
const GAME_KEY= process.env.API_KEY

const url = `https://www.giantbomb.com/api/games/?api_key=${GAME_KEY}&format=json&limit=5&platforms=146&field_list=genres,name,deck,platforms,site_detail_url,image,original_release_date`

// fetch(url)
//     .then(res=>res.json())
//     .then(res => {
//         let gameLibrary = JSON.stringify(res)
//         fs.writeFile('./lib/db/data.json', gameLibrary, err => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('success')
//             }
//         })
//     })
//     .catch(function (error) {
//         console.log('The error is ' + error);
//     })

// axios({
//     url: "https://api-v3.igdb.com/games",
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'user-key': GAME_KEY
//     },
//     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
//   })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.error(err);
//     });

    //Getting the fetch data
    fetch(url)
    .then(res=> res.json())
    // .then(res => JSON.parse(res))
    .then(res => console.log(res))
    .catch(function (error) {
                console.log('The error is ' + error);
            })