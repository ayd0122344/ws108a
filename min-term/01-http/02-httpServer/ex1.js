//前菜
const http = require('http')
const port = 3000, hostname = localhost //localhost前後要用''包起來

//主菜
HttpServer = creatServer{
  response.statusCode('200')//200不用''
  response.setHeader('constent-type','type/html')//無html的httpServer為'type/plain'
  //Constent-Type才對//text/plain才對

  response.write('Hello你好!<a href="www.youtube.com">Youtube</a>')//忘記加換行
  response.end()
}

httpServer(port=3000,()=>{
  console.log('`Server will run at http://${hostname}:${3000}`')
})
//是用server.listen(port,..)啦...
//用``,前後還是要加'',函數是console.logㄟ