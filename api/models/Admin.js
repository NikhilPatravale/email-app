const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    empId:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        rquired: true
    }
}, {timestamps: true})

module.exports = mongoose.model('admin', AdminSchema)