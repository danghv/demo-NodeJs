const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.listen(3000, () => {
    console.log('server is listening at 3000 port')
})

const pg = require('pg')
const config = {
    user: 'postgres',
    database: 'girls-info',
    password: 'abc',
    host: 'localhost',
    port: '5433',
    max: 10,
    idleTimeoutMillis: 30000,
}
const pool = new pg.Pool(config)
app.get('/hotgirls/:id', (req, res) => {
    let idGirl = req.params.id
    let hinh 

    pool.connect((err, client, done) => {
        let link
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        client.query('SELECT * FROM girlcollections WHERE "Id" =' + idGirl, (err, result) => {
            done()
            if (err) {
                // res.end();
                return console.error('error running query', err)
            }
            hinh = result.rows[0].Image
            pool.connect((err, client, done) => {
                if (err) {
                    return console.error('error fetching client from pool', err)
                }
                client.query('SELECT COUNT("Id") FROM girlcollections', (err, result) => {
                    done()
                    if (err) {
                        return console.error('error running query', err)
                    }
                    console.log(result.rows[0].count)
                    max = result.rows[0].count;
                    res.render('index', {dangxem: idGirl, hinh: hinh, max: result.rows[0].count})
                })
                })
        })
        })
       
    
})

app.get('/like/:id', (req, res) => {
    let id = req.params.id

    pool.connect((err, client, done) => {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        client.query('UPDATE girlcollections SET "Like" = "Like" + 1 WHERE "Id" = ' +id, (err, result) => {
            done()
            if (err) {
                res.end();
                return console.error('error running query', err)
            }
            // console.log(result.rows[0].hoten)
            console.log("update Like success")
            // res.render('sinhvien_list.ejs', {danhsach: result})
        })
        })
})
app.get('/dislike/:id', (req, res) => {
    let id = req.params.id

    pool.connect((err, client, done) => {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        client.query('UPDATE girlcollections SET "Dislike" = "Dislike" + 1 WHERE "Id" = ' +id, (err, result) => {
            done()
            if (err) {
                res.end();
                return console.error('error running query', err)
            }
            // console.log(result.rows[0].hoten)
            console.log("update disLike success")
            // res.render('sinhvien_list.ejs', {danhsach: result})
        })
        })
})