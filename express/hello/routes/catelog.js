// 藏书阁路由

const express=require('express')
const router=express.Router()

// 导入控制器模块
const book_controller = require('../locallibrary/controllers/bookController');
const author_controller = require('../locallibrary/controllers/authorController');
const genre_controller = require('../locallibrary/controllers/genreController');
const book_instance_controller = require('../locallibrary/controllers/bookinstanceController');

// 路由目录
router.get('/',book_controller.index)
// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get('/book/create', book_controller.book_create_get);

// POST 请求添加新的藏书
router.post('/book/create', book_controller.book_create_post);

// GET 请求删除藏书
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST 请求删除藏书
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET 请求更新藏书
router.get('/book/:id/update', book_controller.book_update_get);

// POST 请求更新藏书
router.post('/book/:id/update', book_controller.book_update_post);

// GET 请求藏书
router.get('/book/:id', book_controller.book_detail);

// GET 请求完整藏书列表
router.get('/books', book_controller.book_list);

// GET 藏书类别
router.get('/genre', genre_controller.genre_list)
router.get('/genre/:id',genre_controller.genre_detail)
router.get('/genre/create', genre_controller.genre_create_get)
router.post('/genre/create', genre_controller.genre_create_post)


// 创建作者
router.get('/author', author_controller.author_list)
router.get('/author/create', author_controller.author_create_get)
router.post('/author/create', author_controller.author_create_post)
router.get('/author/:id', author_controller.author_detail)


// 书本信息
router.get('/bookinstance',book_instance_controller.bookinstance_list)


/// 藏书副本、藏书种类、作者的路由与藏书路由结构基本一致，只是无需获取主页 ///
module.exports=router