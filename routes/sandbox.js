const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('sandbox',{nameList:[{firstName:'Tron',lastName:'Win'},{firstName:'Phuc',lastName:'Nguyen'},{firstName:'Unknown',lastName:'Unknown'}]})
});

module.exports = router;