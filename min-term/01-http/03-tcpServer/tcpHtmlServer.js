var net = require('net');

var server = net.createServer(function(socket) {
  let html = 'Hello World! <a href="http://tw.youtube.com">YouTube</a>'//let用於宣告一個「只作用在當前區塊的變數」
  // console.log('html=', html)
  let response = 'HTTP/1.0 200 OK\nContent-Type: text/html\nContent-Length: '+html.length+'\n\n'+html
  //回應要素:1.狀態碼 2.資料型別 3.內文長度 4.內文
  //HTTP/1.0是目前http的版本

  socket.write(response)//用socket.write函數做回應
  console.log('======response=======')
  console.log(response)
  socket.end()//休止符
});

server.listen(3000, '127.0.0.1')//127.0.0.1代表主機ip(規定好的)
console.log(`Server running at http://localhost:3000/`);// 直接打印,不需要用函式了!
//var宣告之後之前也可以使用
//let宣告之後才可以使用,類似C語言的變數宣告
//const宣告的變數之後都不能再被重新定義