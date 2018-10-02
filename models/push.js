const mongooose = require('mongoose');

/* Feed Schema Attribute / characteristics  / fields */
var PushSchema = new mongooose.Schema({
    uuid: { type: String, unique: true },
    sentOn: Date,
    recieveOn: Date,
    dismissedOn: Date,
    openedOn: Date,
    push: [{}]
})


module.exports = mongooose.model('push', PushSchema);
