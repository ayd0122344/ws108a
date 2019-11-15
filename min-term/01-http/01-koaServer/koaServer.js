const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('觀察url:', ctx.url)
  console.log('觀察method:', ctx.method)
  console.log('觀察headers:', ctx.headers)
  ctx.type = 'text/html'
  ctx.body = 'Hello World 你好！<a href="http://tw.youtube.com">YouTube</a>'
})

app.listen(3000)
console.log(`Server running at http://localhost:3000/`)
