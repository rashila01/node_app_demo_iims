const mongoose = require('mongoose');
// const {Schema} = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:{type: String},
    lastname:{type: String},
    address:{type: String},
    phone:{type: String},
    age:{type: Number},
    status:{type: Boolean},
    createdAt:{type:Date, default:Date.now},
});

module.exports = mongoose.model('User', UserSchema);