const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserModel = require('./models/User');
const jwt = require('jsonwebtoken');

//const mongourl = 'mongodb+srv://user1:user1@cluster0.o1lspnq.mongodb.net/?retryWrites=true&w=majority';
//password inside is not good practice, therefore put in .env
// install dotenv
dotenv.config();
//console.log(process.env.MONGO_URL); check for process, is it there?
mongoose.connect(process.env.MONGO_URL);
jwtSecret = process.env.JWT_SECRET;



app.get('/test', (req, res) => {
    res.json('test ok')
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const createdUser = await UserModel.create({ username, password });
    jwt.sign({ userId: createdUser._id }, jwtSecret, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).status(201).json('ok');
    }) //._id is for mangoose 1st index
});



app.listen(3333);

//username - user1
//password - user1

//model for user, split into a new folder for easier handling