const login = require('./auth')
const express = require('express')
const admin = require('./admin')
const registrar = require('./registrar')

const router = express.Router()
router.use("/", login )
router.use("/admin", admin)
router.use("/registrar", registrar)

module.exports = router