const jwt = require('jsonwebtoken')
//Xac thuc token
const authenticateToken = (req, res, next) => {
   // Lấy token từ header của request
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Không có token. Vui lòng đăng nhập.' });
  }

  // Giải mã và xác thực token
  jwt.verify(token, 'mk', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn.' });
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken }