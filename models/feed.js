const mongooose = require('mongoose');

/* Feed Schema Attribute / characteristics  / fields */
var FeedSchema = new mongooose.Schema({
    uuid: { type: String, unique: true },
    createTimestamp: String,
    simCountry: String,
    recommended: [{
        siteId: String,
        videoId: String,
        title: String,
        thumbnail: String,
        subtitle: String
    }]
})


module.exports = mongooose.model('feed', FeedSchema);
