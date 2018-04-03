const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const UserSchema = new SCHEMA({

    UserName: {
        type: String,
        required: [true, 'User Name is compulsory']
    },
    Email: {
        type: String,
        unique: true,
        required: [true, 'Email is compulsory']
    },
    Mobile: {
        type: Number,
        unique: true,
        required: [true, 'Mobile is compulsory']
    }
});
module.exports = MONGOOSE.model('user', UserSchema);