const express = require('express')
const bodyParser = require('body-parser')
const todoController = require('./controllers/todoController')
// const doingController = require('./controllers/doingController')
const app = express()



app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
todoController(app)
// doingController(app)

app.listen(3001, () => {
    console.log('Server is listening at port 3001')
})