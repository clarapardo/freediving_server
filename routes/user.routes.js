const express = require('express')
const router = express.Router()
const User = require('./../models/User.model')

router.put('/:userId/updateBasics', (req, res, next) => {

    const { email, firstName, lastName } = req.body
    const { userId } = req.params

    User
        .findByIdAndUpdate(userId, { email, firstName, lastName })
        .then(() => res.status(200).json("ok"))
        .catch(err => console.log(err))

})


module.exports = router

