const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema ({
    firstScore: String,
    secondScore: String
});

module.exports = mongoose.model('Score', ScoreSchema);