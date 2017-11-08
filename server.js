//import required modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')
const route=require('./routes/route')
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/unisender')

//Db connection success
mongoose.connection.on('connected', () => {
    console.log('connected to db at port:27017')
})

const app = express()



//Port
const port = 3000

//adding middleware
app.use(cors())
app.use(bodyparser.json())

//adding static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', route)



app.listen(port, () => {
    console.log("server running")
})

function logerrors(err, req, res, next) {
    res.status(500)
    console.log(" ERROR raised: " + err)
}