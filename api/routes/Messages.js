const {Router} = require('express');
const router = Router();
const MessageModel = require('../models/Message');

router.post("/", async (req, res) => {
    try{
        const msg = new MessageModel(req.body);
        const newMsg = await msg.save();
        res.status(200).json(newMsg)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/inbox", (req, res) => {

})

module.exports = router
