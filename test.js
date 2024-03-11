
const http = require('http')
const fs = require('fs')

const host = '0.0.0.0'
const port = 8000

const server = http.createServer(function (req, res) {
  
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

  
  fs.readFile('Lection5.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      res.end('Error reading the file')
      return
    }

   
    res.end(data)
  })
})

server.listen(port, host, function () {
  console.log('Server is listening on port ' + port)
})