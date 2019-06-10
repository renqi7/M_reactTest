var mongoose=require('./db')

// 定义schema数据模式
var Schema = mongoose.Schema
var userDate = new Schema({
    username: {
        type: String
    },
    age: {
        type: Number
    }
})
// 生成model并导出
module.exports = mongoose.model('user', userDate)
