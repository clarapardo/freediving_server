const express = require('express')
const router = express.Router()
const Photo = require('./../models/Photo.model')

const User = require('./../models/User.model')
const Cart = require('./../models/Cart.model')



// ----- READ -----
router.get('/:userId/getCart', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .populate({
            path: 'cart',
            populate: {
                path: 'items'
            }
        })
        .then(user => res.status(200).json(user.cart))
        .catch(err => res.status(500).json(err))
})


// ----- UPDATE -----
router.put('/:userId/addItem', (req, res, next) => {

    const { userId } = req.params
    const { idPhoto } = req.body

    User
        .findById(userId)
        .then(user => {
            const { cart } = user
            return Cart.findByIdAndUpdate(cart, { $addToSet: { items: idPhoto } })
        })
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(500).json(err))
})

router.put('/:userId/removeItem', (req, res, next) => {

    const { userId } = req.params
    const { idPhoto } = req.body

    User
        .findById(userId)
        .then(user => {
            const { cart } = user

            return Cart.findByIdAndUpdate(cart, { $pull: { items: idPhoto } })
        })
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(500).json(err))
})


// ----- DELETE -----
router.delete('/:userId/removeCart', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(user => {
            const { cart } = user

            return Cart.findByIdAndDelete(cart)
        })
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(500).json(err))
})



module.exports = router