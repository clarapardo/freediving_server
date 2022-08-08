const router = require("express").Router()


router.use("/auth", require('./auth.routes'))
router.use("/photography", require('./photographs.routes'))
router.use("/cart", require('./cart.routes'))



module.exports = router