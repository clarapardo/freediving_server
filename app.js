require("dotenv/config")
require("./db")
const express = require("express")
const hbs = require("hbs")


const app = express()
require("./config")(app)

const projectName = "server"
app.locals.appTitle = `Freediving`

const index = require("./routes/index.routes")
app.use("/api", index)

require("./error-handling")(app)



module.exports = app
