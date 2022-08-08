const router = require("express").Router()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const User = require('./../models/User.model')
const Cart = require('./../models/Cart.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')

router.post('/setToken', (req, res, next) => {

    Cart
        .create({})
        .then(newCart => {
            return User.create({ cart: newCart._id })
        })
        .then(user => {

            const _id = user._id.toString()
            const payload = { _id }

            console.log('//////', payload)

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            )

            res.status(200).json({ authToken })

        })
        .catch(err => res.status(500).json(err))
})


router.get('/verify', isAuthenticated, (req, res, next) => {
    res.status(200).json(req.payload)
})

module.exports = router