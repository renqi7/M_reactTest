const Genre = require('../models/genre');
// 所有书籍
const Books=require('../models/book')
const async=require('async')

// 添加验证
const {
    body,
    validationResult
} = require('express-validator/check')
const {
    sanitizeBody
} = require('express-validator/filter')

// 显示完整的藏书种类列表
exports.genre_list = (req, res) => {
//   res.send('未实现：藏书种类列表');

    Genre.find()
    .exec((err,result)=>{
        if(err)return next(err)
        res.render('genre_list',{title:'藏书类别',genre_list:result})
    })

};

// 为每一类藏书显示详细信息的页面
exports.genre_detail = (req, res) => {
//   res.send('未实现：藏书种类详细信息：' + req.params.id);
    // 并行查找书籍类型以及 相关书籍
    async.parallel({
        // 查询书籍类型
        genre:function(callback){
            Genre.findById(req.params.id)
                .exec(callback)
        },
        // 查询相关书籍
        genre_books:function(callback){
            Books.find({'genre':req.params.id})
                .populate('author')
                .exec(callback)
            
        }
        // 
    },function(err,result){
        if(err){return next(err)}
        res.render('genre_detail',{title:'类别详情',genre:result.genre,genre_books:result.genre_books})
    })

};

// 由 GET 显示创建藏书种类的表单
exports.genre_create_get = (req, res) => {
//   res.send('未实现：藏书种类创建表单的 GET');
    res.render('genre_form',{title:'创建种类'})
};

// 由 POST 处理藏书种类创建操作
// exports.genre_create_post = (req, res) => {
//   res.send('未实现：创建藏书种类的 POST');

// };
// 添加验证
exports.genre_create_post=[
    // 定义验证器，检查name字段
    body('name','请填写名称').isLength({min:1}).trim(),
    // 创建一个清理程序来调用trim()修剪名称字段和调用escape()转义任何危险的 HTML 字符。
    sanitizeBody('name').trim().escape(),
    //  *****验证期间运行的清洁器不会修改请求。这就是为什么我们必须在上面的两个步骤中调用trim()！
    (req,res,next)=>{
        // 返回错误
        const errors=validationResult(req)
        // 创建藏书阁种类对象
        var genre=new Genre({
            name:req.body.name
        })
        // 判断验证结果
        if (!errors.isEmpty()) {
            res.render('genre_form', {
                title: '创建种类',
                genre: genre,
                errors: errors.array()
            })
            return 
        }else{
            // 验证通过，查询数据是否重复
            Genre.findOne({'name':req.body.name})
                .exec(function(err,found_genre){
                    if(err){
                        return next(err)
                    }
                     // 存在此类型  重定向到详细页面
                    if(found_genre){
                        res.redirect(found_genre.url)
                    }else{
                        // 创建类型添加到数据库,并跳转到详细页面
                        genre.save(function(err,res1){
                            if(err){
                                return next(err)
                            }else{
                                res.redirect(genre.url)
                            }
                        })
                    }
                })
        }
    }
]


// 由 GET 显示删除藏书种类的表单
exports.genre_delete_get = (req, res) => {
  res.send('未实现：藏书种类删除表单的 GET');
};

// 由 POST 处理藏书种类删除操作
exports.genre_delete_post = (req, res) => {
  res.send('未实现：删除藏书种类的 POST');
};

// 由 GET 显示更新藏书种类的表单
exports.genre_update_get = (req, res) => {
  res.send('未实现：藏书种类更新表单的 GET');
};

// 由 POST 处理藏书种类更新操作
exports.genre_update_post = (req, res) => {
  res.send('未实现：更新藏书种类的 POST');
};