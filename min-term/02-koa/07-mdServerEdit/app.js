const Koa = require('koa')
const fs = require('fs')
const koaBody = require('koa-body')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa()
const path = require('path')
const extname = path.extname

app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async function (ctx) {
  const fpath = path.join(__dirname, ctx.path)
  const fstat = await fs.promises.stat(fpath)
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    if (ext === '.md') {
      let md = await fs.promises.readFile(fpath, 'utf8')
      let op = ctx.query.op
      console.log('觀察op=',op);
      console.log('觀察ctx.type=',ctx.type);
      ctx.type = '.html'
      console.log('再觀察ctx.type=',ctx.type);
      switch (op) {
        case 'edit': ctx.body = mdEdit(md, ctx.path); break
        case 'save':
          let mdText = ctx.request.body.mdText
          console.log('觀察mdText=',mdText);
          await fs.promises.writeFile(fpath, mdText)
          ctx.redirect(ctx.path)// 儲存後轉回原檔案
          break
        default: ctx.body = mdRender(md, ctx.path)
      }
    } else {
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath)
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function layout (html) {
  return `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
${html}
</body>
</html>
`
}

function mdRender (md, path) {
  return layout(`
  <div><a href="${path}?op=edit">Edit</a></div>
  ${mdit.render(md)}
  `)
}
//<div><a href="${path}?op=edit">Edit</a></div>用來放置一可點選的Edit
// ${mdit.render(md)}把 md 轉成 html 檔案

function mdEdit (md, path) {
  return layout(`
  <div>
    <form action="${path}?op=save" method="post">
      <h2>Path: ${path}</h2>
      <textarea name="mdText">${md}</textarea>
      <br/><br/>
      <button>Save</button>
    </form>
  </div>
  `)
}
// 「``」→功能類似「""」,是新語法,裡面可以自動換行,且可允許「 ${} 」插入一段程式碼後執行,執行後的結果就嵌入於此
// textarea是一文字框