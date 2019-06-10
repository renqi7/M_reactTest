// 
var Koa =require('koa')
var router=require('koa-router')()
var bodyparse=require('koa-bodyparser')

var app=new Koa()

app.use(bodyparse())
app.use(async(ctx)=>{
    if(ctx.url=='/'&&ctx.method=='GET'){
        //显示表单页面
        let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html
    }else if(ctx.url=='/'&&ctx.method=='POST'){
        // 获取post请求，并转换为对象形式
        // let pastDate=await parseDate(ctx)
        let pastDate=ctx.request.body
        ctx.body=pastDate
    }
})
// 获取post参数
function parseDate(ctx){
    // 返回promise形式
    return  new Promise((resolve,reject)=>{
        try{
            let postdate=''
            ctx.req.on('data',(data)=>{
                postdate+=data
            })
            ctx.req.on('end',()=>{
                // 将字符串转换为json格式
                let parseDate = parseQueryStr(postdate)
                resolve(parseDate)
            })
        }catch(error){
            reject(error)
        }
    })
}
// 转换为json格式
function parseQueryStr(url){
    let queryDate={}
    let queryStrList=url.split('&')
    console.log(queryStrList.entries())
    for( let[index,item] of queryStrList.entries()){
        let itemList=item.split('=')
        console.log(itemList)
        queryDate[itemList[0]] = decodeURIComponent(itemList[1])

    }
    return queryDate
}

app.listen(3000,()=>{
    console.log("success")
})

