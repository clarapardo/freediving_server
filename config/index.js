const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const favicon = require("serve-favicon")
const path = require("path")
const cors = require("cors")

module.exports = (app) => {

  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  )

  app.use(logger("dev"))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.set("views", path.join(__dirname, "..", "views"))
  app.set("view engine", "hbs")
  app.use(express.static(path.join(__dirname, "..", "public")))

  app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")))
}
