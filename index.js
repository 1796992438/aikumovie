/**
 * Created by 10143 on 2018/10/16.
 */
//1,引入express
var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
    resave:false,
    saveUninitialized: true,
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));


//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//5,静态文件
app.use(express.static('public'));

//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//1,首页
var DataController = require('./controllers/DataControllers');
app.get('/index', DataController.index);
var indexControllers = require('./Controllers/IndexControllers');
app.get('/index',indexControllers.index);
var IndexControllers = require('./Controllers/LoginContrllers');
app.post('/login',urlencodedParser,IndexControllers.login);
app.post('/register',urlencodedParser,indexControllers.register);



//设置每个界面路由地址

app.get('/horror',function (req,res) {
    res.render('horror',{});
});

app.get('/contact',function (req,res) {
    res.render('contact',{});
});
app.get('/comedy',function(req,res){
    res.render('comedy',{});
})
app.get('/genre',function(req,res){
    res.render('genre',{});
})
app.get('/icons',function(req,res){
    res.render('icons',{});
})
app.get('/comedy',function(req,res){
    res.render('comedy',{});
})
app.get('/list',function(req,res){
    res.render('list',{});
})
app.get('/news',function(req,res){
    res.render('news',{});
})
app.get('/news-single',function(req,res){
    res.render('news-single',{});
})
app.get('/series',function(req,res){
    res.render('series',{});
})
app.get('/short-codes',function(req,res){
    res.render('short-codes',{});
})
app.get('/single',function(req,res){
    res.render('single',{});
})





//监听
app.listen(1006,function(){
    console.log("[Server is running at http://localhost:1006]");
});
