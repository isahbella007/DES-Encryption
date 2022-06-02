const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(cors({ 
    origin: "*"
}))
const port = 5000
app.listen(port, ()=>{console.log("Running on ", port)})
app.use("/api/schoolsystem", router)