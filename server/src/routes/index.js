const login = require('./auth')
const express = require('express')
const admin = require('./admin')
const registrar = require('./registrar')
const student = require('./student')
const advisor = require('./advisor')

const router = express.Router()
router.use("/", login )
router.use("/admin", admin)
router.use("/registrar", registrar)
router.use("/student", student)
router.use("/advisor", advisor)

module.exports = router