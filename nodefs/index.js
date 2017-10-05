const http = require('http')
const fs = require('fs')    

//openFile

fs.open('./files/demoopenfile.txt','w', (err, file) => {
    if(err) throw err
    console.log('Opened!')
})

fs.writeFile('./files/test.txt', 'i will re-write you, he he', (err) => {
    if (err) throw err
    console.log('test.txt changed!')
})
// appendFile with 3 params, the first one is path of file, the second is content-append
// the 3rd one is callback function to catch err.
fs.appendFile('./files/test.txt', 'this is a append-text to file', (err) => {
    if(err) throw err
    console.log('Saved!')
})
//create a server, that listening at 8080 and read file html at html folder

http.createServer((req, res) => {
    fs.readFile('./html/demofile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
    
}).listen(8888)
console.log('server is running at 8080 port')