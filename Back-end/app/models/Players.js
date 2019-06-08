const mongoose = require('mongoose');

const PlayersSchema = mongoose.Schema ({
    goalkeeper:             String,
    defender1:              String,
    defender2:              String,
    defender3:              String,
    defender4:              String,
    midfielder1:            String,
    midfielder2:            String,
    midfielder3:            String,
    midfielder4:            String,
    attack1:                String,
    attack2:                String  
});

module.exports = mongoose.model('Players', PlayersSchema);