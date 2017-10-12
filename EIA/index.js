//require everything include mongoose
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const setUpPassport = require('./setuppassport')

//puts all routes in another file
const routes = require('./routes')

const app = express()

//connects to MongoDB server in the test database
mongoose.connect("mongodb://localhost:27017/test")
setUpPassport()
app.set("port", process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//use 4 middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave: true, //the session will be updated even when it hasn't been modified, vice versa
    saveUninitialized: true,
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)
app.listen(app.get('port'), () => {
    console.log('Server started on ' + app.get('port'))
})