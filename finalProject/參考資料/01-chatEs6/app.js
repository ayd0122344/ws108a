var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
const server = require('http').createServer(app.callback())
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

app.use(async function(ctx, next){
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})

// 連線進來後觸發函數:這一段的字串都是事件名稱,字串逗點後接的是要觸發的函數
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('msg:', msg)
    io.emit('chat message', msg)
  })
})

module.exports = server.listen(port, function(){
  console.log('listening on *:' + port)
})


