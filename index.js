require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 8082
const { dbConnection } = require('./config/config')
const cors = require('cors')

app.use(express.json())

app.use(cors())

dbConnection()

app.use('/', require('./routes/notes'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
