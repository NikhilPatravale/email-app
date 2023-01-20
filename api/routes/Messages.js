const { Router } = require('express');
const router = Router();
const MessageModel = require('../models/Message');
const DraftModel = require('../models/Draft');
const UserModel = require("../models/Users")

router.post("/", async (req, res) => {
    try {
        const msg = new MessageModel(req.body);
        const newMsg = await msg.save();
        res.status(200).json(newMsg);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:empId", async (req, res) => {
    try {
        const id = Number(req.params.empId)
        const user = await UserModel.findOne({ empId: id })
        let inbox = await MessageModel.find({
            to: { $in: [user.email] }
        })
        inbox = inbox.filter(message => !message.deleted)
        let sent = await MessageModel.find({
            sender: user.email
        })
        sent = sent.filter(message => !message.deleted)

        let drafts = await DraftModel.find({
            sender: user.email
        })

        return res.status(200).json({
            inbox, sent, drafts
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/drafts", async (req, res) => {
    try {
        let draft, newDraft
        if (req.body._id) {
            draft = await DraftModel.findByIdAndUpdate(req.body._id, req.body)
            return res.status(200).json(draft)
        }
        draft = new DraftModel(req.body)
        newDraft = await draft.save()
        res.status(200).json(newDraft)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/drafts/:id", async (req, res) => {
    try {
        let id = req.params.id
        if (id) {
            let draft = await DraftModel.findById(id)
            if (draft) {
                await DraftModel.findByIdAndDelete(id) 
                return res.status(200).json(draft)
            }
            res.status(404).json('Failed to delete.')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
