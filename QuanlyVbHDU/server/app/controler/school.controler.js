const SchoolModels = require('../models/school.models')
const { body, validationResult } = require('express-validator')


//Lay truong
exports.get = (req, res, next) => {
  var ten_truong = req.body.ten_truong
  var so_dien_thoai = req.body.so_dien_thoai
  var email = req.body.email
  var token = req.body.token
  var dia_chi = req.body.dia_chi
  var web_site = req.body.web_site
  var mo_ta = req.body.mo_ta

  SchoolModels.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

exports.getById = (req, res, next) => {
  var _id = req.params.id

  SchoolModels.findById({ _id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })

}

//Them truong
exports.create = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  var ten_truong = req.body.ten_truong
  var so_dien_thoai = req.body.so_dien_thoai
  var email = req.body.email
  var token = req.body.token
  var dia_chi = req.body.dia_chi
  var web_site = req.body.web_site
  var mo_ta = req.body.mo_ta

  SchoolModels.findOne({
    ten_truong: ten_truong,
    so_dien_thoai: so_dien_thoai
  })
    .then(data => {
      if (data) {
        res.json('Ten truong da ton tai')
      } else {
        return SchoolModels.create({
          ten_truong: ten_truong,
          so_dien_thoai: so_dien_thoai,
          email: email,
          token: token,
          dia_chi: dia_chi,
          web_site: web_site,
          mo_ta: mo_ta,
        })
      }
    })
    .then(data => {
      if (data) {
        res.json('Tao truong thanh cong')
      }
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}


//Sua
exports.update = (req, res, next) => {
  var _id = req.params.id
  var newtentruong = req.body.newtentruong
  var newsodienthoai = req.body.newsodienthoai
  var newemail = req.body.newemail
  var newdiachi = req.body.newdiachi
  var newwebsite = req.body.newwebsite
  var newmota = req.body.newmota


  SchoolModels.findByIdAndUpdate(_id, {
    ten_truong: newtentruong,
    so_dien_thoai: newsodienthoai,
    email: newemail,
    dia_chi: newdiachi,
    web_site: newwebsite,
    mo_ta: newmota
  })
    .then(data => {
      if(data){
        res.json('Sua thanh cong')
      }
      
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}




//Xoa
exports.delete = (req, res, next) => {
  var id = req.params.id
  SchoolModels.deleteOne({
    _id: id
  })
    .then(data => {
      res.json('Xoa thanh cong')
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

