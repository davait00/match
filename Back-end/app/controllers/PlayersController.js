require('dotenv').config();
const Players = require('../models/Players');

exports.registerPlayers = (req, res) => {
  const players = new Players({
        goalkeeper:               req.body.goalkeeper,
        defender1:                req.body.defender1,
        defender2:                req.body.defender2,
        defender3:                req.body.defender3,
        defender4:                req.body.defender4,
        midfielder1:              req.body.midfielder1,
        midfielder2:              req.body.midfielder2,
        midfielder3:              req.body.midfielder3,
        midfielder4:              req.body.midfielder4,
        attack1:                  req.body.attack1,
        attack2:                  req.body.attack2
    });
    
    players.save().then(data => {
        players.get(data, (players) => {
            res.send(players);
        });
    }).catch(err => {
        if(err.code === 11000) {
            res.status(400).send({message: "Players is already exist"});
            
        } res.status(500).send({message: err});
    });

};
exports.get_players = (req, res) => {
    Players.find().exec(function(err, players){
        if (players.length) {
            players = players.map((player) => {
                return {
                    id: player.id,
                    goalkeeper:     player.goalkeeper || '',
                    defender1:      player.defender1  || '',
                    defender2:      player.defender2 || '',
                    defender3:      player.defender3 || '',
                    defender4:      player.defender4 || '',
                    midfielder1:    player.midfielder1 || '',
                    midfielder2:    player.midfielder2 || '',
                    midfielder3:    player.midfielder3 || '',
                    midfielder4:    player.midfielder4 || '',
                    attack1:        player.attack1 || '',
                    attack2:        player.attack2 || ''
                }
            });
            res.send({
              players 
            })
        } else {
            res.status(400).send({
                message: "Players not found"
            });
        }
    });
};