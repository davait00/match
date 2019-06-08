require('dotenv').config();
const Match = require('../models/Match');

exports.registerMatches = (req, res) => {

const match = new Match({
    clubs: req.body.clubs,
    score: req.body.score, 
    clubs2: req.body.clubs2,
    score2: req.body.score2
});

match.save().then(data => {
    match.get(data, (match) => {
        res.send(match);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "Matches is already exist"});
        
    } res.status(500).send({message: err});
 });
};

exports.match = (req, res) => {
    Match.findById(req.params.id).exec(function(err, match) {
        if (match) {
            res.send({
                match: {
                    id: match.id,
                    clubs:          match.clubs || '',
                    score:          match.score || '',           
                    clubs2:         match.clubs2 || '',
                    score2:         match.score2 || ''
                }
            })
        } else {
            res.status(400).send({
                message: 'Match not found'
            });
        }
    });
};
