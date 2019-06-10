// 
var Koa = require('koa')
var Router = require('koa-router')
var bodyparse = require('koa-bodyparser')

var app = new Koa()
var router=new Router()
router.get( '/',(ctx,next)=>{

})

app.use(router.routes()).use(router.allowedMethods())
// 
app.listen(3000, () => {
    console.log("success!")
})
