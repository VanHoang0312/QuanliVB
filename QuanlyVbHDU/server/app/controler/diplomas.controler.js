const DiplomastModels = require('../models/diplomas.models')
const { body, validationResult } = require('express-validator')


//Lay
exports.get = (req, res, next) => {
  var so_hieu_VB = req.body.so_hieu_VB
  var nam_tn = req.body.nam_tn
  var xep_loai_tn = req.body.xep_loai_tn
  var hinh_thuc_dao_tao = req.body.hinh_thuc_dao_tao
  var sinh_vien_id = req.body.sinh_vien_id
  var id_loai_VB = req.body.id_loai_VB

  DiplomastModels.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

exports.getById = (req, res, next) => {
  var _id = req.params.id;
  

  DiplomastModels.findById({ _id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })

}

//hien thi vb khi tim theo sinh vien id
exports.getsinhvienid = (req, res, next) => {
  var sinh_vien_id = req.params.id;
  const {type} = req.query;
  
  DiplomastModels.find({
    sinh_vien_id: sinh_vien_id,
    id_loai_VB: type
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

//hien thi vb khi tim theo loai van bang
exports.getloaivbid = (req, res, next) => {
  var id_loai_VB = req.params.id;
  DiplomastModels.find({
    id_loai_VB: id_loai_VB
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


//Them van bang
exports.create = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  var so_hieu_VB = req.body.so_hieu_VB
  var nam_tn = req.body.nam_tn
  var xep_loai_tn = req.body.xep_loai_tn
  var hinh_thuc_dao_tao = req.body.hinh_thuc_dao_tao
  var sinh_vien_id = req.body.sinh_vien_id
  var id_loai_VB = req.body.id_loai_VB


  DiplomastModels.findOne({
    so_hieu_VB: so_hieu_VB
  })
    .then(data => {
      if (data) {
        res.json('Ten van bang da ton tai')
      } else {
        return DiplomastModels.create({
          so_hieu_VB: so_hieu_VB,
          nam_tn: nam_tn,
          xep_loai_tn: xep_loai_tn,
          hinh_thuc_dao_tao: hinh_thuc_dao_tao,
          sinh_vien_id: sinh_vien_id,
          id_loai_VB: id_loai_VB
        })
      }
    })
    .then(data => {
      if (data) {
        res.json('Tao van bang thanh cong')
      }
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}


//Sua
exports.update = (req, res, next) => {
  var id = req.params.id
  var newsohieuVB = req.body.newsohieuVB
  var newnamtn = req.body.newnamtn
  var newxeploaitn = req.body.newxeploaitn
  var newhinhthucdaotao = req.body.newhinhthucdaotao
  var newsinhvienid = req.body.newsinhvienid
  var newidloaiVB = req.body.newidloaiVB

  DiplomastModels.findByIdAndUpdate(id, {
    so_hieu_VB: newsohieuVB,
    nam_tn: newnamtn,
    xep_loai_tn: newxeploaitn,
    hinh_thuc_dao_tao: newhinhthucdaotao,
    sinh_vien_id: newsinhvienid,
    id_loai_VB: newidloaiVB
  })
    .then(data => {
      res.json('Sua thanh cong')
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}




//Xoa
exports.delete = (req, res, next) => {
  var id = req.params.id
  DiplomastModels.deleteOne({
    _id: id
  })
    .then(data => {
      res.json('Xoa thanh cong')
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

