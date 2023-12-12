const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserModel = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');

//const mongourl = 'mongodb+srv://user1:user1@cluster0.o1lspnq.mongodb.net/?retryWrites=true&w=majority';
//password inside is not good practice, therefore put in .env
// install dotenv
dotenv.config();
//console.log(process.env.MONGO_URL); check for process, is it there?


async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if there is an error connecting to MongoDB
    }
}

connectToMongo();

// mongoose.connect(process.env.MONGO_URL, (err) => {
//     if (err) throw err;
// });

jwtSecret = process.env.JWT_SECRET;
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));


app.get('/test', (req, res) => {
    res.json('test ok')
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const createdUser = await UserModel.create({ username, password });
        jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                _id: createdUser._id,
            });
        }) //._id is for mangoose 1st index
    } catch (err) {
        if (err) throw err;
    }


});



app.listen(3333);

//username - user1
//password - user1

//model for user, split into a new folder for easier handling