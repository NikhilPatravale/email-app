const mongoose = require('mongoose')

const DraftSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
    },
    to: {
        type: Array,
        default: [],
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
    },
    body: {
        type: String,
    },
    deleted: {
        type: Boolean,
    }
}, {timestamps: true})

module.exports = mongoose.model("Draft", DraftSchema)