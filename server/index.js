require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const path = require('path')

app.use(express.static('public'))


var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBARTOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    rollbar.log('Hello')
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, () => console.log(`server running on ${port}`))