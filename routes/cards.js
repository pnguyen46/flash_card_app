const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
const {cards} = data;

router.get('/',(req,res) => {
    const randNum = Math.floor(Math.random(cards.length) * cards.length);
    res.redirect(`/cards/${randNum}`)
})


router.get('/:id',(req,res)=>{
    const id  = req.params.id;
    const side  = req.query.side || 'question';
    const { hint } = cards[id];
    const text = cards[id][side];
    const name = req.cookies.userName;
    const template = {text,id,name,side};

    if(side === 'question'){
        template.hint = hint;
        template.sideToShow = 'answer';
        template.sideToDisplay = 'Answer'
    }else if(side === 'answer'){
        template.sideToShow = 'question';
        template.sideToDisplay = 'Question';
    }
    res.render('card',template);
});

module.exports = router;