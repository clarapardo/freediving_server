const express = require('express')
const router = express.Router()
const transporter = require('./../config/transporter.config')

// ----- SEND PURCHASE EMAIL -----
router.post('/send-photo-email', (req, res, next) => {

    const { userEmail } = req.body

    transporter
        .sendMail({
            from: 'rfc.underwaterphotography@gmail.com',
            to: userEmail,
            subject: 'RF photography',
            text: '#####',
            html: '<h1> HELLOWI AHORA CONECTADO :) </h1>'
        })
        .then(() => res.status(200).json('ok'))
        .catch(err => console.log(err))

})



// ----- SEND CONTACT EMAIL -----
router.post('/send-contact-email', (req, res, next) => {

    console.log('=======================================', req.body)

    const { name, email, subject, message } = req.body
    console.log('---->', name)

    transporter
        .sendMail({
            from: 'rfc.underwaterphotography@gmail.com',
            to: 'clara.pardo@hotmail.com',
            subject: subject,
            text: '#####',
            html: `<h1> HELLOWI ESTO ES UNA PREGUNTA de ${name}, ${email} :) </h1>` +
                `<p>${message}</p>`
        })
        .then(() => res.status(200).json('ok'))
        .catch(err => console.log(err))

})

module.exports = router