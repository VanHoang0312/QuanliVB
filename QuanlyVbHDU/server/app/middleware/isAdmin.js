const AccountModel = require('../models/account.models')
const jwt = require('jsonwebtoken')

//Kiemtra quyen admin
const isAdmin = (req, res, next) => {
  var token = req.cookies.token
   // Nếu không có token, trả về lỗi
   if (!token) {
    return res.status(401).json({ message: 'Không có token. Vui lòng đăng nhập.' });
  }

  try{
    var decodeToken = jwt.verify(token, 'mk')
    AccountModel.findOne({
      _id: decodeToken._id
    })
      .then(data => {
        if (!data) {
          return res.status(404).json({ message: 'Không tìm thấy người dùng.' });
        }
        if (data.role !== "ADMIN") {
          return res.status(403).json({ message: 'Chỉ Admin mới có quyền' });
        }
        next();
      })
      .catch(err => {
        return res.status(500).json({ message: 'Lỗi hệ thống. Vui lòng thử lại sau.', error: err });
      })
  
  } catch (err) {
    // Nếu token không hợp lệ hoặc hết hạn
    return res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn.', error: err });
  }
  
}

module.exports = { isAdmin }