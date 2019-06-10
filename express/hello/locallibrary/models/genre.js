
// 图书类型
const mongoose=require('mongoose');

const Schema=mongoose.Schema

const classify=new Schema({
    name:{
        type:String,
        // required:true,
        min:3,
        max:100
    }
})

// 虚拟属性
classify.virtual('url').get(function(){
    return '/catelog/genre/' + this._id;
})

// 导出模型
module.exports=mongoose.model('classify',classify)