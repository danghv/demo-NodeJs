const http = require('http')
const fs = require('fs')
const app = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
            res.writeHead(500)
            return res.end('Error loading index.html')
        }
        res.writeHead(200)
        res.end(data)
    })

})
const socket = require('socket.io')

const io = socket(app)
app.listen(8888)
io.on('connection', (socket) => {
    console.log('a connection from client: ' + socket.id)
    socket.emit('news', {
        hello: 'hello from the server'
    })
    socket.on('the other event', (data) => {
        
        console.log(socket.id + ' just send ' + data.hello)
    })
})