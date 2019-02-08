const controller = require('./controller');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('You are connected to the database!')
})

app.get('/api/houses', controller.getHouses);

const PORT = process.env.SERVER_PORT || 4000
app.listen(PORT, console.log(`I'm listening on port ${PORT}`));