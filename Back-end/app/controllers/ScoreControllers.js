require('dotenv').config();
const Score = require('../models/Score');

exports.registerScore = (req, res) => {

const score = new Match({
    firstScore: req.body.firstScore,
    secondScore: req.body.secondScore
});

score.save().then(data => {
    score.get(data, (score) => {
        res.send(score);
    });
}).catch(err => {
    if(err.code === 11000) {
        res.status(400).send({message: "Score is already exist"});
        
    } res.status(500).send({message: err});
  });
};

exports.score = (req, res) => {
    Score.find(req.score).exec(function(err, score) {
        if (score) {
            res.send({
                score: {
                    id: score.id,
                    firstScore: score.firstScore || '',
                    secondScore: score.firstScore || ''
                }
            })
        } else {
            res.status(400).send({
                message: 'Score not found'
            });
        }
    });
};