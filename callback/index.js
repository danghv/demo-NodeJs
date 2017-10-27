const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/api', (req, res) => {
    res.json({
        name: 'MrD'
    })
})

app.listen(3001, () => {
    console.log('Listening at port 3001')
})
