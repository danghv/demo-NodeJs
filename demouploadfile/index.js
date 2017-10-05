const http = require('http')
const formidable = require('formidable')
const fs = require('fs')
const url = require('url')
http.createServer((req, res) => {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        //parse a file upload
        let form = new formidable.IncomingForm()
        console.log(form)
        // form.uploadDir = './uploads'
        form.parse(req, (err, fields, files) => {
             //   console.log(files.fileupload.path)
            let oldpath = files.fileupload.path
            //fileupload is the name of input attribute form.
            let newpath = './uploads/' + files.fileupload.name
            //use fs.rename to move the file just upload from default folder to the desired folder
            fs.rename(oldpath, newpath, (err) => {
                if (err) throw err
                res.writeHead(200, {'content-type': 'text/html'})
                res.write('received upload: \n\n')
                res.end()
            })            
        })
            return;
    }
    
        res.writeHead(200, {'Content-Type': 'text/html'})
        // res.write(req.url)
        // console.log(req.url)
        console.log(url)
        let q = url.parse(req.url, true).query
        let txt = q.year + " " + q.month
        // console.log(q)
        // console.log(txt)
        res.write(txt)
        res.write('<form action="/upload" method="post" enctype="multipart/form-data" ' + 
                    '<input type="text" name="title" <br>' + 
                    '<input type="file" name="fileupload"><br>' + 
                    '<input type="submit" value="Upload">' + 
                    '</form>')
        return res.end()
    
    
}).listen(8888)