const path = require('path');
const express = require('express');
var bodyParser = require('body-parser'); 
const viewRouter = require('./routes/viewRoutes');
const uploadfile = require('express-fileupload');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(bodyParser.json());
app.use(uploadfile());
app.use('/',viewRouter);



module.exports = app;
