var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var rootRouter = require('./controller/root');
var mongoDbTestRouter = require('./controller/mongoDbTest');

//設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/vue', express.static(__dirname + '/node_modules/vue/dist/'))
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'))
app.use('/Decimal', express.static(__dirname + '/node_modules/decimal.js/'))
app.use('/materializeCss', express.static(__dirname + '/node_modules/materialize-css/dist/'))

//將html網頁交給ejs模組來處理
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs'); // 預設是 views 這個 資料夾
app.set('views', __dirname + '/public/html');

//設定路由
app.use('/', rootRouter);
app.use('/api/mongoDb', mongoDbTestRouter);

// port號
app.listen(3000);

module.exports = app;