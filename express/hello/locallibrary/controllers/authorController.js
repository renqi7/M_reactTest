const Author = require('../models/author');

const Book=require('../models/book')
const async=require('async')

// 引入验证
const {
    body,
    validationResult
} = require('express-validator/check')
const {
    sanitizeBody
} = require('express-validator/filter')


// 显示完整的作者列表
exports.author_list = (req, res) => {
    // res.send('未实现：作者列表');
    Author.find()
        .sort([['first_name','ascending']])
        .exec((err,result)=>{
            if(err)return next(err)
            res.render('author_list',{title:'作者列表',author_list:result})
        })
};

// 为每位作者显示详细信息的页面
exports.author_detail = (req, res,next) => {
    // res.send('未实现：作者详细信息：' + req.params.id);
    async.parallel({
        author:function(callback){
            Author.findById(req.params.id)
            .exec(callback)
        },
        book:function(callback){
            Book.find({'author':req.params.id})
            .exec(callback)
        }
    },function(err,result){
        if(err) return next(err)
        res.render('author_detail',{title:'作者详情',author_detail:result.author,bookList:result.book})
    })
    // Author.findById(req.params.id)
    //     .exec((err,result)=>{
    //         if(err) return next(err)
    //         res.render('author_detail',{title:'作者详情',author_detail:result})
    //     })
};

// 由 GET 显示创建作者的表单
exports.author_create_get = (req, res) => {
    //   res.send('未实现：作者创建表单的 GET');
    res.render('author_form', {
        title: '创建作者'
    })
};

// 由 POST 处理作者创建操作
// exports.author_create_post = (req, res) => {
//   res.send('未实现：创建作者的 POST');
// };
exports.author_create_post = [
    body('first_name', '请输入姓名').isLength({
        min: 1
    }).trim().withMessage('First name must be specified.')
    .isAlphanumeric().withMessage('姓名有非字母字符'),
    body('family_name', '请输入姓名2').isLength({
        min: 1
    }).trim().withMessage('First name must be specified.')
    .isAlphanumeric().withMessage('姓名有非字母字符'),
    body('date_of_birth', 'Invalid date of birth').optional({
        checkFalsy: true
    }).isISO8601(),
    body('date_of_death', 'Invalid date of death').optional({
        checkFalsy: true
    }).isISO8601(),

    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render('author_form', {
                title: '新建作者',
                author: req.body,
                errors: errors.array()
            })
            return
        } else {
            // 创建对象
            var author = new Author({
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death
            })
            // 添加数据并跳转
            author.save(function(err){
                if(err){return next(err)}else{
                    res.redirect(author.url)
                }
            })
        }

    }
]

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => {
    res.send('未实现：作者删除表单的 GET');
};

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => {
    res.send('未实现：删除作者的 POST');
};

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => {
    res.send('未实现：作者更新表单的 GET');
};

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => {
    res.send('未实现：更新作者的 POST');
};