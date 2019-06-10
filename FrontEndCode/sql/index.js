// 链接数据库

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234@abcD',
    database: 'node',
    useConnectionPooling: true
})
// 链接
connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
})


// 创建http服务进行get post
const http = require('http')
const url = require('url')
const qs = require('querystring')

http.createServer(function (req, res) {
    // 设置 cors 跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置 header 类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 跨域允许的请求方式
    res.setHeader('Content-Type', 'application/json');

    // post方法
    if (req.method == 'POST') {
        // 判断提交接口
        let pathName = req.url
        // 添加的数据
        let item = ''
        // 数据接受中
        req.addListener('data', function (chunk) {
            item += chunk
        })
        req.addListener('end', function () {
            // 数据转换
            // 可引入querystring 进行转换
            // 将post 传递的参数&  转换为字符串
            var items = JSON.stringify(qs.parse(item))
            // res.statusCode=0

            // 添加数据

            if (pathName == '/login') {
                console.log("登录")
                // 获取参数并转换为json格式
                items = JSON.parse(items)
                // console.log(items)
                // 获取其中的参数
                let userName = items.username
                let password = items.password
                // 验证参数
                if (!userName) {
                    res.end('用户名不能为空')
                } else if (!password) {
                    res.end('密码不能为空')
                }
                // 查询是否有此用户
                //sql 查询
                let readsql = 'SELECT * FROM user WHERE username="' + userName + '"'
                connection.query(readsql, function (err1, res1) {
                    if (err1) {
                        throw err1
                    } else {
                        if (res1.length == 0 || res1 == undefined) {
                            res.end('不存在该用户！')
                        } else {
                            // console.log(res1)
                            // 转换为json 格式 返回结果为数组形式
                            let newRes = JSON.parse(JSON.stringify(res1))
                            console.log(newRes)
                            if (newRes[0].password == password) {
                                // 返回数据
                                res.write(JSON.stringify({
                                    code: '0',
                                    message: '登录成功',
                                    data:{
                                        id:newRes[0].id,
                                        userName:newRes[0].username
                                    }
                                }))
                                res.end()
                            } else {
                                // 密码错误
                                res.write(JSON.stringify({
                                    code: '1',
                                    message: '密码错误',
                                }))
                                res.end()
                            }
                        }
                    }
                })

            } else if (pathName == '/register') {
                let results = JSON.parse(items)
                let userName = results.username
                let userPassword = results.password
                if (!userName) {
                    res.end('注册失败，请输入用户名')
                } else if(!userPassword){
                    res.end('注册失败，清输入密码')
                }else {
                    // 查询 user 表
                    // 使用 Promise 的原因是因为中间调用了两次数据库，而数据库查询是异步的，所以需要用 Promise。
                    // 1.查询是否有重复数据
                    // 2.添加新用户到数据库

                    new Promise((resolve, reject) => {
                    // 查询表
                    let readSql = 'SELECT * FROM user'
                    connection.query(readSql, (err1, res1) => {
                        if (err1) {
                                throw err1
                            console.log(err1)
                        } else {
                            // 获取数据库数据，转换格式
                                let newRes = JSON.parse(JSON.stringify(res1))
                                console.log(newRes)
                                // 判断用户是否已注册
                                console.log(newRes.length)
                                let usernameRepeat=false
                                for (let items in newRes) {
                                    if (newRes[items].username == userName) {
                                        usernameRepeat=true
                                    } 
                                }
                                if(usernameRepeat){
                                     res.end('注册失败，姓名重复')
                                        return;
                                }else if(newRes.length>10){
                                        // 判断注册人数
                                        res.end('名额已满！')
                                    }else{
                                        // 可以注册
                                        resolve()
                                    }
                        }
                    })
                    }).then(()=>{
                        // 2.注册  添加到数据库
                            // sql 语句
                            let addsql='INSERT INTO user(username,password) VALUES(?,?)'
                            let addSqlParams=[results.username,results.password]
                            connection.query(addsql,addSqlParams,(err2,res2)=>{
                                if(err2){
                                    throw err2
                                    console.log(err2)
                                }else{
                                    res.write(JSON.stringify({
                                        code:0,
                                        message:'注册成功！'
                                    }))
                                    res.end()
                                }
                            })
                    })
                   
                }
            }else if(pathName=='/sendMessage'){
                items=JSON.parse(items)
                let userid=items.userid
                let username=items.username
                let message=items.message
                console.log(message)
                // 添加留言
                let addsql='INSERT INTO message(user_id,user_name,user_message) VALUES(?,?,?)'
                let addsqlparams=[userid,username,message]
                connection.query(addsql,addsqlparams,function(err1,res1){
                    if(err1){
                        throw err1
                    }else{
                        res.write(JSON.stringify({
                            code:2,
                            message:'留言成功!'
                        }))
                        res.end()
                    }
                })

            }
        })
    } else if (req.method == 'GET') {
        // console.log('get login')
        // 解析url
        let pathName = url.parse(req.url).pathname
        // console.log('get接口' + pathName)
        if (pathName == '/getMessage') {
            // 获取url 参数
            let params=url.parse(req.url).query
            // console.log(params)
            // 查询数据库
            let messagesql='SELECT * FROM message'
            connection.query(messagesql,(err1,res1)=>{
                if(err1){
                    throw err1
                }else{
                    // 返回数据
                        // 返回结果需进行转换
                        let newres=JSON.parse(JSON.stringify(res1))
                    res.write(JSON.stringify({
                        code:0,
                        data:newres
                    }))
                    res.end()
                }

            })
        } else if (pathName == '/') {
            console.log("首页")
        }
    }

}).listen('8889')

// connection.end()