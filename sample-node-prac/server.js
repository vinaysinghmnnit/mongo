const express = require('express');
const bodyParser = require('body-parser');
const MONGOOSE = require('mongoose');

const routes = require('./Routes/allroutes');
// Initialize Express Framework
const app = express();

// Database Connection
MONGOOSE.connect(
    'mongodb://localhost:27017/samplenodedb')
    .then(
    () => {
        console.log('Db Connected');
    },
    err => {
        console.log('Connection Problem\n' + err);
    }
    );

MONGOOSE.Promise = global.Promise;

// Body-parser Midleware
app.use(bodyParser.json());

// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', routes);

// Error Handling Middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});
app.listen(
    process.env.port || 3000,
    () => {
        console.log('server started...');
    },
    err => {
        if (err) {
            console.log(err);
        }
    });
