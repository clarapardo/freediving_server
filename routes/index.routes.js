const router = require("express").Router()


module.exports = (router) => {

    router.use("/photography", require('./photographs.routes'))
}
