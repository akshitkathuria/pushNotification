const mongooose = require('mongoose');

/* Feed Schema Attribute / characteristics  / fields */
var FeedSchema = new mongooose.Schema({
    uuid: { type: String, unique: true },
    sentOn: Date,
    recieveOn: Date,
    dismissedOn: Date,
    openedOn: Date,
    
})


module.exports = mongooose.model('feed', FeedSchema);
