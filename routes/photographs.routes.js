const express = require('express')
const router = express.Router()
const Photo = require('./../models/Photo.model')



// ----- CREATE -----
router.post('addPhoto', (req, res, next) => {

    const { title, description, price, dimensions, pictureUrl } = req.body

    Photo
        .create({ title, description, price, dimensions, pictureUrl, sales: 0, visits: 0 })
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(200).json(err))
})


// ----- READ -----
router.get('/allPhotos', (req, res, next) => {

    Photo
        .find()
        .then(allPhotos => res.status(200).json(allPhotos))
        .catch(err => res.status(500).json(err))
})

router.get('/onePhoto/:idPhoto', (req, res, next) => {

    const { idPhoto } = req.params

    Photo
        .findByIdAndUpdate(idPhoto, { visits: { $sum: 1 } }, { new: true })
        .then(onePhoto => res.status(200).json(onePhoto))
        .catch(err => res.status(500).json(err))
})


// ----- UPDATE -----
router.put('updatePhoto/:idPhoto', (req, res, next) => {

    const { idPhoto } = req.params
    const { title, description, price, dimensions, pictureUrl } = req.body


    Photo
        .findByIdAndUpdate(idPhoto, { title, description, price, dimensions, pictureUrl })
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(500).json(err))
})


// ----- DELETE -----
router.delete('deletePhoto/:idPhoto', (req, res, next) => {

    const { idPhoto } = req.params

    Photo
        .findByIdAndDelete(idPhoto)
        .then(() => res.status(200).json("ok"))
        .catch(err => res.status(500).json(err))
})



module.exports = router