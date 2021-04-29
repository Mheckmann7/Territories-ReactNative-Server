const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6; 

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true, 
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: String, 
}, { timestamps: true });

//before a user document is saved to the database the password is hashed
//hooks into the cycle, before it saves calls function(next)

userSchema.pre('save', function (next) {
    const user = this;
        //this keyword points to the document that is about to be saved 
    if (!user.isModified("password")) return next();
        //dont hash the password if it hasnt been modified
})

module.exports = mongoose.model('User', userSchema);