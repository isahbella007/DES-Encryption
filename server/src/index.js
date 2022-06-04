const express = require('express')
const cors = require('cors')
const router = require('./routes')
const { desEncrypt, desDecrypt } = require('./des')

const mess = "hello isabella"
const secret = process.env.ENC_SECRET

const enc = desEncrypt(mess, secret)
console.log("file: index.js ~ line 10 ~ enc", enc)
const dec = desDecrypt(enc, secret)
console.log("file: index.js ~ line 12 ~ dec", dec)

const app = express()
app.use(express.json())
app.use(cors({ 
    origin: "*"
}))
const port = 5000
app.listen(port, ()=>{console.log("Running on ", port)})
app.use("/api/schoolsystem", router)