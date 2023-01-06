const UserModel = require('../models/Users')
const AdminModel = require('../models/Admin')
const bcrypt = require('bcrypt')
const { Router } = require('express')

const router = Router()

router.post("/:empId", async (req, res) => {
    try {
        const id = Number(req.params.empId)
        const admins = await AdminModel.find()
        const adminIds = admins.map((item) => item.empId)

        if (adminIds.includes(id)) {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10)
                const hashedPass = await bcrypt.hash(req.body.password, salt)
                req.body.password = hashedPass
            }
            const user = new UserModel(req.body)
            const newUser = await user.save()
            res.status(200).json(newUser)
        } else res.status(403).json('You dont have access to create user')

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router