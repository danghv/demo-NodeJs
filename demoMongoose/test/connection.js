const mongoose = require('mongoose')

//ES6 promise
mongoose.Promise = global.Promise

//connect to DB before tests run
before(function (done) {
    //connect to mongo db
    mongoose.connect('mongodb://localhost/testaroo', {
        useMongoClient: true,
    })  
    // once mean listen event one, on mean always listen events all the time?
    mongoose.connection.once('open', () => {
        console.log('Connection has been made, now make fireworks...')
        done()
    }).on('error', (err) => {
        console.log('Connection error: ', err)
    })
})


//Drop the characters collection before each test

beforeEach(function(done) {
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done()
    })
})
