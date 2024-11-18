const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/product-name', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"> <br><input type="text" name="size"><button type="submit">Add</button></form>'
  )
})

app.post('/product', (req, res, next) => {
  const body = { ...req.body }
  console.log(body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>hello</h1>')
})

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('listening')
})
