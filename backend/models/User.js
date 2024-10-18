const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ 
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);