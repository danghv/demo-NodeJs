const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.listen(3000)

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const pg = require('pg')
var config = {
    user: 'postgres',
    database: 'students',
    password: 'abc',
    host: 'localhost',
    port: '5433',
    max: 10,
    idleTimeoutMillis: 30000,
}
var pool = new pg.Pool(config)

app.get('/sinhvien/list', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        client.query('SELECT * FROM sinhvien', (err, result) => {
            done()
            if (err) {
                res.end();
                return console.error('error running query', err)
            }
            // console.log(result.rows[0].hoten)
            // console.log(result)
            res.render('sinhvien_list.ejs', {danhsach: result})
        })
        })
    })

app.get('/sinhvien/them', (req, res) => {
    //show form
    res.render('sinhvien_insert.ejs')
})
app.post('/sinhvien/them', urlencodedParser, (req, res) => {
    //insert db
    

    pool.connect((err, client, done) => {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        let hoten = req.body.txtHoten;
        let email = req.body.txtEmail;
        client.query("insert into sinhvien (hoten, email) values ('"+ hoten+"', '"+email+"')", (err, result) => {
            done()
            if (err) {
                res.end();
                return console.error('error running query', err)
            }
            // console.log(result.rows[0].hoten)
            // console.log(result)
            // res.render('sinhvien_list.ejs', {danhsach: result})
            res.redirect('../sinhvien/list')
        })
        })
    // res.send('INSERT THANH CONG')
    })

app.get('/', (req, res) => {
    res.render('main')
})