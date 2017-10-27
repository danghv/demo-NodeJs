const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    
    res.render('view-post', { data: req.body })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
