const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const {ValidationError} = require('sequelize');

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
app.use(csurf({
  cookie: {
            secure:isProduction,
            sameSite: isProduction && 'Lax',
            httpOnly: true,
        }
    })
);
app.use(routes); //connect all routes


//Error handling

//Not Found (404)
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
  });
//Sequelize errors
app.use((err, _req, _res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
      }
      next(err);
})
//Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
      title: err.title || 'Server Error',
      message: err.message,
      errors: err.errors,
      stack: isProduction ? null : err.stack,
    });
  });


module.exports = app;