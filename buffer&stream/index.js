const fs = require('fs')
const http = require('http')


// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received: ')
//     myWriteStream.write(chunk)
// })


const server = http.createServer((req, res) => {
    console.log('request was made ' + req.url)
    res.writeHead(200, {'Content-Type':'text/plain'})
    const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
    // const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
    myReadStream.pipe(res)
    // res.end()
})
server.listen(3000)