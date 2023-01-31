const { Schema, model } = require('mongoose')
const datesSchema = require('./datesModel')

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    logs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'date'
        }
    ]
}, 
{timestames:  true});

const User = model('user', userSchema);

module.exports = User;