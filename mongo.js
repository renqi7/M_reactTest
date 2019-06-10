// mongod 启动数据库服务
// mongo xx.js  执行js文件进行增删改查 数据
var startTime=(new Date()).getTime()
var db =connect('user')
var tempArray=[]
for(var i =0;i<10000;i++){
    tempArray.push({num:1})
}
db.test.insert(tempArray)

var time=(new Date()).getTime()-startTime

print('success is'+time+'ms')