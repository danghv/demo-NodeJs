const http = require('http')

// const mysql = require('mysql')

const pg = require('pg')

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const session = require('session')
const nunjucks = require('nunjucks')

//config body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//config nunjucks
nunjucks.configure('views', {
    autoescape: false,
    express: app,
    cache: false,
    watch: true
})
app.engine('html', nunjucks.render)
app.set('view engine', 'html')

//take values by post method

app.post('/', (req, res) => {
    let firstName = req.body.firstName;
    let lastname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    
})