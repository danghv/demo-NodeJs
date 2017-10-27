const express = require('express')
const authRoutes = require('./routes/auth_routes')
const passportSetup = require('./config/passport-setup')
const app = express()

app.set('view engine', 'ejs')
// app.use('views', './views')

//set up routes
app.use('/auth',authRoutes)

//Create home route
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Listening connect at port 3000')
})