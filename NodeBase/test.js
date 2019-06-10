// let fs = require('fs')
// let path = require('path')

// function findBigFile(dir, cb) {
//     // 读取目录文件
//     fs.readdir(dir, function (err, files) {
//         // 循环获取文件信息
//         if (err) return cb(err)
//         files.forEach((file, index) => {
//             fs.stat(path.join(dir, file), (err, stats) => {
//                 // 获取最大文件
//                 if(err)return cb(err) 
                

//                 // 已文件名为参数调用回调

//             })
//         })

//     })
// }

let http=require('http')

http.createServer(function(req,res){
    // let msg="hello"
    // let message=`<ul></li>${msg}</li></ul>`

    res.write(message)
    res.end()
    console.log("success")
}).listen(3000)

function message(array,...args){
    let result=''
    for(let i=0;i<args[i])
}