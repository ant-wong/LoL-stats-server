/* EXPRESS SERVER */
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8080
const app = express()
const bodyParser = require('body-parser')

const Summoners = require('./routes')

/* CORS */
app.use(cors())

/* BODY PARSER */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Welcome to my app')
// })

app.use('/', Summoners)

app.listen(port, () => {
  console.log('Listening on 6060.')
})