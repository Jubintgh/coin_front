const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//module imports
const routes = require('./routes');
//check enviroment
const {enviroment} = require('./config');
const isProduction = enviroment === 'production';

//create server
const app = express();

app.use(morgan('dev'));
app.use(cookieParser()); // parse cookies
app.use(express.json()); // parse JSON bodies
if(!isProduction) app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false
}))
app.use(
    csurf({
        cookie: {
            secure:isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        }
    })
);
app.use(routes); //connect all routes




module.exports = app;