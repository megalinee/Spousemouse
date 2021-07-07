const express = require('express');

var port = process.env.PORT || 3000
const app = express()
app.listen(port, () => console.log(`server listening on port: ${port}`))

const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log('connected')
    io.emit('online', 'Someone else connected!')
})
io.on('mouseMovement', function(data){
    console.log("poo")
    io.emit('sentMovement', data)
    io.emit('movementAlert', 'Someone just sent a new mouse movement!')
});
io.on('disconnect', (evt) => {
    console.log('disconnected')
})