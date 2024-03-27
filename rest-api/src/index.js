const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const { DB_URL, PORT, DB_NAME } = require('./constants');



app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:4200'],
    credentials: true
  }));


app.get('/test', (req, res) => {
    res.cookie('test', 'testtest');

    res.end();
});

app.post('/test', (req, res) => {
    res.cookie('test', 'testtest');

    res.end();
});





mongoose.connect(DB_URL + DB_NAME)
    .then(() => console.log(`DB Successfully Connected!`))
    .catch(err => console.log(`DB Error: ${err.message}`));


app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));