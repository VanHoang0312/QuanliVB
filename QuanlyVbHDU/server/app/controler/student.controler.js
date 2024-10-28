const StudentModels = require('../models/student.models')
const { body, validationResult } = require('express-validator')



//lay
exports.get = (req, res, next) => {
  var ten = req.body.ten
  var ma_sinh_vien = req.body.ma_sinh_vien
  var ngay_sinh = req.body.ngay_sinh
  var nganh_hoc = req.body.nganh_hoc
  var so_dien_thoai = req.body.so_dien_thoai
  var email = req.body.email
  var nam_hoc = req.body.nam_hoc
  var truong_hoc_id = req.body.truong_hoc_id



  StudentModels.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

exports.getById = (req, res, next) => {
  var _id = req.params.id

  StudentModels.findById({ _id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })

}

//hien thi sv khi tim theo truong hoc id
exports.gettruonghocid = (req, res, next) => {
  var truong_hoc_id = req.params.id;
  StudentModels.find({
    truong_hoc_id: truong_hoc_id
  })
    .then(data => {
      if (data.length > 0) {
        res.json(data);
      } else {
        res.json('K tim thay');
      }
    })
    .catch(err => {
      res.status(500).json('Lỗi server');
    });
}


//them
exports.create = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  var ten = req.body.ten
  var ma_sinh_vien = req.body.ma_sinh_vien
  var ngay_sinh = req.body.ngay_sinh
  var nganh_hoc = req.body.nganh_hoc
  var so_dien_thoai = req.body.so_dien_thoai
  var email = req.body.email
  var nam_hoc = req.body.nam_hoc
  var truong_hoc_id = req.body.truong_hoc_id

  StudentModels.findOne({
    ten: ten,
    ma_sinh_vien: ma_sinh_vien
  })
    .then(data => {
      if (data) {
        res.json('Sinh viên da ton tai')
      } else {
        return StudentModels.create({
          ten: ten,
          ma_sinh_vien: ma_sinh_vien,
          ngay_sinh: ngay_sinh,
          nganh_hoc: nganh_hoc,
          so_dien_thoai: so_dien_thoai,
          email: email,
          nam_hoc: nam_hoc,
          truong_hoc_id :truong_hoc_id
        })
      }
    })
    .then(data => {
      if (data) {
        res.json('Tao thanh cong')
      }
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

//Sua 
exports.update = (req, res, next) => {
  var id = req.params.id
  var newten = req.body.newten
  var newmasinhvien= req.body.newmasinhvien
  var newngaysinh = req.body.newngaysinh
  var newnganhhoc = req.body.newnganhhoc
  var newsodienthoai = req.body.newsodienthoai
  var newemail = req.body.newemail
  var newnamhoc = req.body.newnamhoc
  var newtruonghocid = req.body.newtruonghocid

  StudentModels.findByIdAndUpdate(id, {
    ten: newten,
    ma_sinh_vien : newmasinhvien,
    ngay_sinh: newngaysinh,
    nganh_hoc: newnganhhoc,
    nam_hoc: newnamhoc,
    so_dien_thoai: newsodienthoai,
    email: newemail,
    truong_hoc_id: newtruonghocid
  })
    .then(data => {
      if (data) {
        res.json('Sua thanh cong')
      } else {
        res.json("Sua that bai")
      }
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}




//Xoa
exports.delete = (req, res, next) => {
  var id = req.params.id
  StudentModels.deleteOne({
    _id: id
  })
    .then(data => {
      res.json('Xoa thanh cong')
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}













