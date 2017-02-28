var app=require('express')()
var http=require('http').Server(app)
var io=require('socket.io')(http)
app.listen(3000,function(){
	console.log('listening on 3000')
})
app.get('/index.js',function(req,res){
	res.sendFile('/react.js')
})
io.on('connection',function(socket){
	console.log('connection established')
	socket.send('hello MERN client')
	socket.on('disconnect',function(){
		console.log('disconnected')
	})
})