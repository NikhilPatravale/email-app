const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    empId:{
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requried: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    }
})

UserSchema.path('empId').validate(async (empId) => {
    const empidCount = await mongoose.models.users.countDocuments({
        empId
    })
    return !empidCount
}, 'Emp Id already exists')

UserSchema.path('email').validate(async (email) => {
    const emailCount = await mongoose.models.users.countDocuments({
        email
    })
    return !emailCount
}, 'Email already exists')


module.exports = mongoose.model("users", UserSchema)