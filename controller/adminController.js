const YTSearch = require('youtube-api-search');

const { mysql } = require('../config/dbConnection');
const Feed = require('../models/feed');
const { API_KEY } = require('../config/constants')

module.exports = {
    addUserFeed, push
}

function addUserFeed(req, res, next) {
    try {

    } catch (error) {

    }

    mysql.query('SELECT uuid, createTimestamp, simCountry FROM Installation where uuid = ?', ['00001209-6eac-4c4a-b930-b02da785a6a7'], (err, result) => {
        //to convert into an final array
        result = JSON.stringify(result);
        result = JSON.parse(result);

        result.forEach(element => {
            var feed = new Feed();
            YTSearch({
                key: API_KEY,
                term: "Messi"
            }, (videos) => {

                feed.uuid = element.uuid;
                feed.createTimestamp = element.createTimestamp;
                feed.simCountry = element.simCountry;
                feed.recommended = videos;

                feed.save(err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    res.send(`uuid: ${element.uuid} saved to database`)
                })
            });
        });
    })
}

function push() {
    
}