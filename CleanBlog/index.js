const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')
//declare body parser to fetch body data
app.use(bodyParser.urlencoded({ extended: false }))

const img = {
    home:'home',
    about: 'about',
    post: 'post', 
    contact: 'contact',
}

const posts = [
    {
        postTitle: 'Man must explore, and this is exploration at its greatest',
        postSubTitle: 'Problems look mighty small from 150 miles up',
        postMeta: 'Posted by <a href="#">Start Bootstrap</a> on September 24, 2017',

    },
    {
        postTitle: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        postSubTitle: "",
        postMeta: 'Posted by <a href="#">Start Bootstrap</a> on September 18, 2017'
    },
    {
        postTitle: 'Science has not yet mastered prophecy',
        postSubTitle: 'We predict too much for the next year and yet far too little for the next ten.',
        postMeta: 'Posted by <a href="#">Start Bootstrap</a> on August 24, 2017'
    },
    {
        postTitle: 'Failure is not an option',
        postSubTitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
        postMeta: 'Posted by <a href="#">Start Bootstrap</a> on July 8, 2017'
    },

]

app.get('/index', (req, res) => {
    res.render('index', {img: img.home, posts: posts})
})

app.get('/about', (req, res) => {
    res.render('about')
})
//routing post page
app.get('/post', (req, res) => {
    res.render('post')
})

//routing contact page
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.post('/contact', (req, res) => {
    console.log(req.body)
    res.render('contact')
})


app.listen(3001, () => {
    console.log('Listening on port 3001')
})