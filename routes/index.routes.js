const router = require("express").Router()


router.use("/photography", require('./photographs.routes'))



module.exports = router