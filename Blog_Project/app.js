const Koa = require('koa')
const fs = require('fs')
const koaBody = require('koa-body')
const serve = require('koa-static')
const MarkdownIt = require('markdown-it')
const mt = require('chinese_convert')
const mdit = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
const app = module.exports = new Koa()
const path = require('path')
const extname = path.extname

app.use(serve(__dirname + '/public'));

app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async function (ctx) {
  const fpath = path.join(__dirname, 'blog', ctx.path)
  let fstat = null
  let op = ctx.query.op
  let ext = extname(ctx.path)
  ctx.type = 'text/html'
  if(ctx.path==='/')ctx.redirect('/blog.html')
  
  /*if (op === 'save') { // 想要儲存檔案
    let mdText = ctx.request.body.mdText
    await fs.promises.writeFile(fpath, mdText) // 直接儲存之後
    ctx.redirect(ctx.path) // 顯示該檔案。
  }*/

  /*try {
    console.log('fpath=', fpath)
    fstat = await fs.promises.stat(fpath)
  } catch (error) {
    //ctx.body = mdEdit(`# 錯誤\n\n路徑 ${ctx.path} 的檔案不存在\n您可以修改後儲存以創建新檔案！`, ctx.path)
    return
  }*/
  fstat = await fs.promises.stat(fpath)
  if (fstat.isFile())/*檢查程式是否存在*/ {
    if (ext === '.html'){
      let html = await fs.promises.readFile(fpath, 'utf8')
      //switch (op) {
        //case 'edit': ctx.body = mdEdit(md, ctx.path); break // 回應編輯畫面
        //default: 
        if (op === 'tw2cn') html = mt.tw2cn(html)
        else if (op === 'cn2tw') html = mt.cn2tw(html)
        //ctx.body = mdRender(html, ctx.path) // 將 markdown 轉為 HTML 傳回
      //}
    } else { // 不是 .html 檔案
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath) // 直接傳回該檔案串流
    }
  } else {
    ctx.body = mdRender(`# 錯誤\n\n路徑 ${ctx.path} 不是檔案，無法編輯！`, ctx.path)
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function layout (path, html) {
  return `
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
  <div class="sidebar col-1 col-2">
   <ul>
    <p><b>．個人網站</b></p>
   <li><a href="#"><a href="https://www.facebook.com/a.yao.752">．Facebook</a></li>
   <li><a href="#"><a href="https://www.instagram.com/myosotis_yao/">．Instergram</a></li>
   <li><a href="#"><a href="https://ayd0122344.github.io/wd107b/01-html/ex3.html">．表單</a></li>
   <li><a href="#"><a href="https://ayd0122344.github.io/wd107b/02-css/01-%E5%85%A7%E5%A5%97%E7%94%A8CSS/ex4.html">．個人履歷</a></li>
   </ul>
  </div>
  
  <div class="navbar">
    <a href="/index.html">Home</a>
    <!--<a href="${path}">View</a>-->
    <!--<a href="${path}?op=edit">Edit</a>-->
    <a href="${path}?op=tw2cn">简体</a>
    <a href="${path}?op=cn2tw">繁體</a>
    <div class="dropdown">
    <button class="dropbtn" onclick="myFunction()">♥ ♥ ♥ ♥ ♥ ♥ 
      <i class="fa fa-caret-down"></i>
  
    </button>
    <div class="dropdown-content" id="myDropdown">
      <a href="#">If you can dream it, </a>
      <a href="#">you can do it.</a>
      <a href="#"> ( • ̀ω•́ )✧</a>
    </div>
    </div> 
  </div>
  
  
  <div class="head col-5">
  <br>
  <br>
  <br>
  <br>
  <h1>聖    誕    節    快    樂!</h1>
  <br>
  <br>
  <br>
  
  <br>
  <h1>歡迎來到我的個人網站!</h1>
  <input id="input" style="font-size:30px;width:210px;" readonly="readonly" type="number"></input><br><br>
          <button onclick="caculate('1')" id="but1" style="font-size:30px;width:50px;height:50px;">1</button>
          <button onclick="caculate('2')" id="but2"style="font-size:30px;width:50px;height:50px;">2</button>
          <button onclick="caculate('3')" id="but3"style="font-size:30px;width:50px;height:50px;">3</button>
          <button onclick="operation('+')" id="but10"style="font-size:30px;width:50px;height:50px;">+</button><br>
          <button onclick="caculate('4')" id="but4"style="font-size:30px;width:50px;height:50px;">4</button>
          <button onclick="caculate('5')" id="but5"style="font-size:30px;width:50px;height:50px;">5</button>
          <button onclick="caculate('6')" id="but6"style="font-size:30px;width:50px;height:50px;">6</button>
          <button onclick="operation('-')" id="but11"style="font-size:30px;width:50px;height:50px;">-</button><br>
          <button onclick="caculate('7')" id="but7"style="font-size:30px;width:50px;height:50px;">7</button>
          <button onclick="caculate('8')" id="but8"style="font-size:30px;width:50px;height:50px;">8</button>
          <button onclick="caculate('9')"id="but9"style="font-size:30px;width:50px;height:50px;">9</button>
          <button onclick="operation('*')" id="but12"style="font-size:30px;width:50px;height:50px;">*</button><br>
          <button onclick="caculate('0')" id="but0"style="font-size:30px;width:50px;height:50px;">0</button>
          <button onclick="caculate('.')" id="but15"style="font-size:30px;width:50px;height:50px;">.</button>
          <button onclick="equal()"id="but14"style="font-size:30px;width:50px;height:50px;">=</button>
          <button onclick="operation('/')" id="but13"style="font-size:30px;width:50px;height:50px;">/</button><br>
  
  
          <h1  id="input" style="color:rgb(0, 0, 0);">BMI計算</h1>
      <p style="color:rgb(0, 0, 0);">身高:<input id="height"  style="font-size:30px;width:210px;"></input>公分</p>
      <p style="color:rgb(0, 0, 0);">體重:<input id="weight"  style="font-size:30px;width:210px;"></input>公斤</p>
      <button id="bmi" onclick="BMI()">計算</button>
      <p id="bmians" style="color:rgb(0, 0, 0);">你的BMI值為:</p>
          
  </div>
  
  <div>
  <p><img class="top col-3" src="http://b.blog.xuite.net/b/4/2/1/13474008/blog_711631/txt/14774979/36.jpg"/></p>
  <p><img class="lu col-4" src="http://img4.oldkids.cn/upload/260781000/u260780549/2016/12/22/blog_20161222185229936162.gif"/></p>
  </div>
  <script src="/BMI.js"></script>
  <script src="/calculator.js"></script>
  </body>
  </html>
  
`
}

function mdRender (html, path) {
  return layout(path, `${mdit.render(html)}`) 
}

/*function mdEdit (md, path) {
  return layout(path, `
    <form action="${path}?op=save" method="post">
      <textarea name="mdText">${md}</textarea>
      <br/><br/>
      <button>Save</button>
    </form>
  `)
}*/

