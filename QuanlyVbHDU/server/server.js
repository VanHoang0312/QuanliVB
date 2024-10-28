const express = require("express");
var app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require("path");
var cors = require("cors"); // xử lý dư liệu dạng json
const { db_connect } = require("./app/configs/db.configs");
db_connect();
app.use(express.json()); // để xử lý dạng dữ liệu json
app.use(express.urlencoded({ extended: true })); // để xử lý dữ liệu url encoded
app.use(cors({ credentials: true, origin: "*" })); // chấp thuận cors từ mọi 
var cookieParser = require('cookie-parser')
app.use(cookieParser())
// Tăng giới hạn kích thước tải lên cho JSON
app.use(bodyParser.json({ limit: '10mb' })); // Bạn có thể điều chỉnh kích thước này theo nhu cầu
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 } }); // Giới hạn kích thước tệp lên đến 10MB
app.post('/api/registeracopy', upload.array('files', 10), async (req, res) => {
    //   // Logic xử lý yêu cầu
});






var routerAccount = require('./app/router/account.router')
app.use('/api/account', routerAccount)

var routerStudent = require('./app/router/student.router')
app.use('/api/student', routerStudent)

var routerSchool = require('./app/router/school.router')
app.use('/api/school', routerSchool)

var routerTypeofdiploma = require('./app/router/typeofdiploma.router')
app.use('/api/typeofdiploma', routerTypeofdiploma)

var routerDiplomas = require('./app/router/diplomas.router')
app.use('/api/diplomas', routerDiplomas)


var routerRegisteracopy = require('./app/router/registeracopy.router')
app.use('/api/registeracopy', routerRegisteracopy)





app.get('/', (req, res) => {
    res.json('Home')
})
app.listen(3002, () => {
    console.log(`link: http://localhost:${3002}`)
})