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
        let inbox, temp, deleted, drafts, sent, spam

        temp = await MessageModel.find({
            $or: [
                { to: { $in: [user.email] } },
                { cc: { $in: [user.email] } },
                { bcc: { $in: [user.email] } }
            ]
        })

        inbox = temp.filter(message => !message.deleted)
        deleted = temp.filter(message => message.deleted)

        temp = await MessageModel.find({
            sender: user.email
        })
        sent = temp.filter(message => !message.deleted)
        deleted = [...deleted, ...temp.filter(m => m.deleted)]

        temp = await DraftModel.find({
            sender: user.email
        })
        drafts = temp.filter(message => !message.deleted)
        deleted = [...deleted, ...temp.filter(m => m.deleted)]

        return res.status(200).json({
            inbox, sent, drafts, deleted
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/drafts", async (req, res) => {
    try {
        let draft, newDraft
        if (req.body._id) {
            let draftId = await DraftModel.findById(req.body._id)
            if(draftId){
                draft = await DraftModel.findByIdAndUpdate(req.body._id, req.body)
                return res.status(200).json(draft)
            } else {
                let {_id, ...other} = req.body
                draft = new DraftModel({...other})
                newDraft = await draft.save()
                return res.status(200).json(newDraft)
            }
        }
        draft = new DraftModel(req.body)
        newDraft = await draft.save()
        res.status(200).json(newDraft)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id
        if (id) {
            let draft = await DraftModel.findById(id)
            if (draft) {
                draft = await DraftModel.findByIdAndUpdate(id, { $set: { deleted: true } }, { returnDocument: 'after' })
                return res.status(200).json(draft)
            }
            draft = await MessageModel.findById(id)
            if (draft) {
                await MessageModel.findByIdAndUpdate(id, { $set: { deleted: true } }, { returnDocument: 'after' })
                return res.status(200).json(draft)
            }
            res.status(404).json('Failed to delete.')
        }
    } catch
    (err) {
        res.status(500).json(err)
    }
})

module.exports = router
