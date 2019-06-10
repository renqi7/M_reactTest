// 插入数据
var User=require('./user')

// function insert(){
//     // 添加数据
//     var user=new User({
//         username:'xiaoming',
//         age:12
//     })

//     // 存储数据
//     user.save(function(err,res){
//         if(err){
//             console.log('err:'+err)
//         }else{
//             console.log('res:'+res)
//         }
//     })
// }

// insert()

// 更新数据
function update(){
    var upName={'username':'hong'}
    var upAge={'age':18}
    User.update(upName,upAge,function(err,res){
       if (err) {
            console.log('err:'+err)
        }else{
            console.log('res:'+res)
        }
    })
}
update()