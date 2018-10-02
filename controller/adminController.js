const YTSearch = require('youtube-api-search');

const { mysql } = require('../config/dbConnection');
const Feed = require('../models/feed');
const Push = require('../models/push');
const { API_KEY } = require('../config/constants')

module.exports = {
    addUserFeed, push
}

function addUserFeed(req, res, next) {

    mysql.query('SELECT uuid, createTimestamp, simCountry FROM Installation where simCountry LIKE ?', ['sv'], (err, result) => {

        //to convert into an final array
        result = JSON.stringify(result);
        result = JSON.parse(result);

        result.forEach((element, index) => {
            var feed = new Feed();
            YTSearch({
                key: API_KEY,
                term: "Messi"
            }, (videos) => {

                feed.uuid = element.uuid;
                feed.createTimestamp = element.createTimestamp;
                feed.simCountry = element.simCountry;

                var recommended = videos.map((video) => {
                    return {
                        siteId: 'Youtube',
                        videoId: video.id.videoId,
                        title: video.snippet.title,
                        thumbnail: video.snippet.thumbnail,
                        subTitle: video.snippet.description
                    }
                })
                feed.recommended = recommended;

                feed.save(err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                })
            });
            if (result.length == index) {
                res.send(`Saved to database`);
            }
        });
    })

}

async function push() {
    Feed.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            return
        }
        docs.forEach((doc, index) => {
            doc.recommended.forEach((video, i) => {
                Push.findOne({ push: { videoId: video.videoId } }, (error, pushDoc) => {
                    if (pushDoc.length) {
                        // push api
                        // save to push model
                        break;
                    }
                })
            })
        })
    })
}