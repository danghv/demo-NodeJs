const express = require('express')
const http = require('http')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')


const entries = []
app.locals.entries = entries
//use morgan to log every request (this is a middleware)
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))


//routing
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/new-entry', (req, res) => {
    res.render('new-entry')
})

app.post('/new-entry', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    //declare a variable to save the content of notes
    let content = ""
    
    if(!title || !body) {
        res.status(400).send('Entries must have a title and a body. ')
        return
    }
    entries.push({
        title: title,
        body: body,
        published: new Date(),
    })
    
    //add to content string to write file
    content += new Date() + ': ' + title + ': ' + body + '\n'
    //save note to the notes.txt
    fs.appendFile('notes.txt', content, (err) => {
        if (err) throw err
    })
    

    res.redirect('/')
})


app.use((req, res) => {
    res.status(404).render('404')
})
//create server
http.createServer(app).listen(3000, () => {
    console.log('Guest book app started on port 3000')
}) 
