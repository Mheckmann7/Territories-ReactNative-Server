const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6; 

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true, 
    },

    password: String, 
}, { timestamps: true });

//before a user document is saved to the database the password is hashed
//hooks into the cycle, before it saves calls function(next)
userSchema.pre('save', function (next) {
    const user = this;
    //this keyword points to the document that is about to be saved 
    if (!user.isModified("password")) return next();
    //dont hash the password if it hasn't been modified, i.e. they modify their email or userName
    bcrypt.hash(user.password, SALT_ROUNDS, function (error, hash) {
        if (error) return next(error) //hands off error object to mongoose
        user.password = hash;
        next(); 
    });
});

module.exports = mongoose.model('User', userSchema);

// email: {
//     type: String,
//     unique: true,
//     lowercase: true,
// },