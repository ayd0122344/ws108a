var net = require('net')

var client = new net.Socket()

client.connect(3000, '127.0.0.1', function() {
	console.log('> Connected');
	client.write('GET /xxx/yyy.html HTTP/1.0\n\n');// 空行一定要加,不然不會跑
})

client.on('data', function(data) {
	console.log('Received: ' + data);
	// client.destroy(); // kill client after server's response
})

client.on('close', function() {
	console.log('> Connection closed');
})
