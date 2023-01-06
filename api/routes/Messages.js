const {Router} = require('express');
const router = Router();
const MessageModel = require('../models/Message');
const UserModel = require("../models/Users")

router.post("/", async (req, res) => {
    try{
        const msg = new MessageModel(req.body);
        const newMsg = await msg.save();
        res.status(200).json(newMsg)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/inbox/:empId", async (req, res) => {
    try{
        const id = Number(req.params.empId)
        const user = await UserModel.findOne({empId: id})
        console.log(user)
        const messages = await MessageModel.find({
            to: { $in: [user.email]}
        })

        return res.status(200).json(messages)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
