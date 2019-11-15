const Koa = require('Koa');// 引進Koa套件,此時為class
const app = new Koa();// class須經過new才可成為物件來使用

app.use(async function(ctx){
  ctx.type = 'text/html'
  ctx.body = 'Hello!你好! <a href="http://www.youtube.com">Youtube</a>'
})
app.listen(3000)
console.log(`Server running at http://localhost:3000/`)