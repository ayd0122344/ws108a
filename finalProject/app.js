const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')
//koaBody用來處理
const app = new Koa()

const posts = []
//有用到router的函式都要傳入ctx
router
    .get('/',home)
    .get('/post/new',build)
    .post('/post',create)
    .get('/post/:id',show)//:id的內容都會存在ctx.params

app.use(koaBody())
app.use(router.routes())
app.listen(3000)
console.log(`server run at http://localhost:3000/`)

function home(ctx){
    ctx.body = layout(homePage())
}
function homePage(ctx){
    let content = []
    for(let i = posts.length-1;i>=0;i--)
    {
        content.push(
            `<li>
                <h2>${posts[i].title}</h2>
                <p><a href="/post/${posts[i].id}">Read this post</a></p>
            </li>`
        )
    }
    return `
    <html>
    <body>
    <h1>Welcome to your blog!</h1>
    <p><a href="/post/new">Create a new post</a></p>
    <p>You have ${posts.length} posts!</p>
    <ol>${content.join('\n')}</ol>
    </body>
    </html>
    `
}
async function build(ctx){
    ctx.body = await returnHTML()
}
async function create(ctx){
    const post = ctx.request.body//ctx.request.body回傳一物件,類似JSON檔
    console.log("post = ",post)
    const id = posts.push(post) - 1 //push()方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
    post.created_at = new Date()
    post.id = id
    ctx.redirect('/')

}
async function returnHTML(){
    return `
    <html>
    <body>
    <h1>New Post</h1>
    <p>Create a new Post!</p>
    <form action="/post" method="post">
        <h1>Create your new post</h1>
        <p>Write something!</p>
        <p><input type="text" placeholder="Title" name="title"></p>
        <p><textarea placeholder="Contents" name="body"></textarea></p>
        <p><input type="submit" value="Create"></p>
        <p><input type="reset" value="Reset"></p>
        <p><button type="button" onclick="history.back()">Cancel</button></p>
    </form>
    </body>
    </html>
    `
}
async function show(ctx){
    let post = posts[ctx.params.id]
    ctx.body = `
    <html>
    <body>
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    </body>
    </html>
    `
}

function layout (bodyHtml) {
    return `
    <html>
    <body>
    ${bodyHtml}
    </body>
    </html>
    `
}