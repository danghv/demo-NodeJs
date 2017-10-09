const express = require('express')
const app = express()
app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

const server = require('http').Server(app)
const io = require('socket.io')(server)
server.listen(3000)
const userList = []
io.on('connection', (socket) => {
    console.log('someone just connect to server: ' + socket.id)
    //the default event when load homepage
    // socket.on('disconnect', () => {
    //     console.log(socket.id + ' just disconnect from server!')
    // })
    socket.on('client-registry', (data) => {
        if(userList.indexOf(data) > -1) {
            socket.emit('user-registry-fail')
        } else {
            userList.push(data)
            socket.Username = data
            socket.emit('user-registry-sucess', data)
            io.sockets.emit('server-send-listuser', userList)
        }
    })
    socket.on('client-logout', () => {
        userList.splice(userList.indexOf(socket.Username), 1)
        socket.broadcast.emit('server-send-listuser', userList)
    })
    socket.on('client-send-message', (data) => {
        io.sockets.emit('server-response-client-message', {user: socket.Username, message: data})
    })

    socket.on('client-typing-message', () => {
        socket.broadcast.emit('someone-is-typing', socket.Username + ' is typing a message')
    })
    socket.on('client-stop-typing-message', () => {
        socket.broadcast.emit('someone-stop-typing')
    })

    
    
})


app.get('/', (req, res) => {
    res.render('trangchu')
})