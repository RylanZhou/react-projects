const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

http.listen(3001, () => {
  console.log('Listening on 3001')
})

io.on('connection', socket => {
  console.log('A user connected!')
  socket.on('chat-message', msg => {
    console.log(`Message: ${msg}`)
    io.emit('chat-message', msg)
  })
})
