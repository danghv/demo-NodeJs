const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/api')

//set up express
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//initialize routes
// app.use('/api', require('./routes/api'))
app.use(router)

//error handling middleware
app.use(function(err, req, res, next){
    // console.log(err)
    res.status(422).send({error: err.message})
})

app.listen(3001, ()=> {
    console.log('Listening on port 3001')
})