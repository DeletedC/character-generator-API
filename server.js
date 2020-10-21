const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const mongoose = require('mongoose');

//////////////////////////
// GLOBALS
//////////////////////////
// List of urls our API will accept calls from
const whitelist = ['http://localhost:3000']

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

///////////////////////////
// DATABASE
///////////////////////////

const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/character-generator';

// ERROR or DISCONNECTION
db.on('error', (err) => {
    console.log(`${err.message} \nIs Mongod not running?`);
});

db.on('disconnected', () => {
    console.log('Mongo is now disconnected.');
});

// OPENING CONNECTION
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true});
db.once('open', () => {
console.log('connected to mongoose...');
});


///////////////////////////
// MODELS
///////////////////////////


///////////////////////////
// CONTROLLERS
///////////////////////////

const charactersController = require('./controllers/charactersController');

/////////////////////
// MIDDLEWARE
////////////////////

// cors middlewear, configured by corsOptions
app.use(cors());
app.use(express.json());

app.use('/characters', charactersController);

////////////////////////
// ROUTES
///////////////////////

app.get('/', (req, res) => {
    res.send("Hello from Character Generator API!");
});

/////////////////////////
// LISTENER
/////////////////////////

app.listen(PORT, () => {
    console.log(`Port: ${PORT} \nHello, Seattle. I'm listening...`);
});