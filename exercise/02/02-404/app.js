const Koa = require('koa');

const app = module.exports = new Koa();

app.use(async function pageNotFound(ctx) {
  //http狀態碼404找不到請求資源,200為請求成功
  ctx.status = 404
});

if (!module.parent) app.listen(3000);
