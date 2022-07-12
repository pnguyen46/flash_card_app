const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

app.set('view engine','pug');
app.set('views',__dirname + '/templates');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/static',express.static('public'))


const mainRoute = require('./routes');
const cardRoute = require('./routes/cards');
const sandRoute = require('./routes/sandbox')

app.use(mainRoute);
app.use('/cards',cardRoute);
app.use('/sandbox',sandRoute)

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status);
    res.render('error',{error});
});


