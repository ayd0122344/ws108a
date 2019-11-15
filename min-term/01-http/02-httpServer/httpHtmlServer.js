const http = require('http');//前菜:宣告所需套件

const port = 3000, hostname = 'localhost'//加上''代表宣告為字串!!
// 直接在這邊宣告1.埠號2.主機名稱
// 對照:Koa為使用app.listen(num)來選擇連接埠


//主菜:Server主程式以http.createServer(request, response)函式來寫對於要求的回應
//Totally四個道菜:1.狀態碼(statusCode)2.標頭(setHeader)3.內容(write)4.休止符(end)
const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('  method:', request.method);
  console.log('  headers', request.headers);
  response.statusCode = 200; 
  // 回應狀態碼200=>成功
  //注意在此response.statusCode為指定數值,而非函式
  response.setHeader('Content-Type', 'text/html');
  // response.setHeader('Content-Type', 'text/html')設定標頭,參數1:標頭型別(不分大小寫),參數2:標頭值
  // 對照:httpServer為'text/plain'
  response.write('Hello World <a href="http://tw.youtube.com">YouTube</a>\n');// response.write()寫內容
  response.end()// 最後記得加上response.end()來宣告server主程式結束
});


//官網的server.listen():server.listen([port[, host[, backlog]]][, callback]) for TCP servers
//[,=>代表可省略,又由於http在TCP之上,故可繼承此用法
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);//注意是用``,不是""也不是''!!
});
// 飯後甜點:加個server.listen印出網址,http後要用${}輸入:1.hostname 2.port