const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
    },
    to: {
        type: Array,
        default: [],
        required: true
    },
    cc: {
        type: Array,
        default: []
    },
    bcc: {
        type: Array,
        default: []
    },
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
    }
}, {timestamps: true})

module.exports = mongoose.model("Message", MessageSchema)