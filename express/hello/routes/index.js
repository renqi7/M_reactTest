var express = require('express');
var router = express.Router();
// this.router = new Router({
//     prefix: '/test'
// })

/* GET home page. */
router.get('/', function(req, res, next) {
    // 重定向到catelog.js
    res.redirect('/catelog')
//   res.render('index', { title: 'Express' });
});

module.exports = router;
