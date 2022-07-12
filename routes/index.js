const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const name = req.cookies.userName;
    (name) ? res.render('index',{name}): res.redirect('/hello');
});

router.get('/hello',(req,res) => {
    const userName = req.cookies.userName;
    (userName) ? res.redirect('/') : res.render('hello');
})

router.post('/hello',(req,res) => {
    res.cookie('userName',req.body.userName);
    res.redirect('/')
});

router.post('/goodbye',(req,res) => {
    res.clearCookie('userName');
    res.redirect('/hello');
});

module.exports = router;