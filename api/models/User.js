const mongoose = require('mongoose');


//Defining User Schema
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true },
        password: String
    }, { timestamps: true }
);

//export const UserModel = mongoose.model('User', UserSchema);


const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel