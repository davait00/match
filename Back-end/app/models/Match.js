const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema ({
    clubs:          String,
    score:          String,
    clubs2:         String,
    score2:         String
});
module.exports = mongoose.model('Match', MatchSchema);