const app = require('./router')
const db = require('./config/db')
require('dotenv').config()

const port = process.env.port ||3000

app.listen(port)


