const router = require("express").Router()


router.use("/auth", require('./auth.routes'))
router.use("/photography", require('./photographs.routes'))
router.use("/cart", require('./cart.routes'))
router.use("/user", require('./user.routes'))
router.use("/email", require('./email.routes'))

module.exports = router