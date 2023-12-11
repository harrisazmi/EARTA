const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//const mongourl = 'mongodb+srv://user1:user1@cluster0.o1lspnq.mongodb.net/?retryWrites=true&w=majority';
//password inside is not good practice, therefore put in .env
// install dotenv
dotenv.config();
//console.log(process.env.MONGO_URL); check for process, is it there?
mongoose.connect(process.env.MONGO_URL);



app.get('/test', (req, res) => {
    res.json('test ok')
});

app.listen(3333);

//username - user1
//password - user1