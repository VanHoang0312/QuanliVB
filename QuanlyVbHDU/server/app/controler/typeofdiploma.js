const TypeofdiplomaModels = require('../models/typeofdiloma.models')
const { body, validationResult } = require('express-validator')


//Lay
exports.get = (req, res, next) => {
  var ten_loai_vb = req.body.ten_loai_vb
  var nam_thi = req.body.nam_thi
  TypeofdiplomaModels.find({})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

exports.getById = (req, res, next) => {
  var _id = req.params.id;
  

  TypeofdiplomaModels.findById({ _id })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })

}

//Them loai vb
exports.create = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  var ten_loai_vb = req.body.ten_loai_vb
  var nam_thi = req.body.nam_thi

  TypeofdiplomaModels.findOne({
    ten_loai_vb: ten_loai_vb
  })
    .then(data => {
      if (data) {
        res.json('Ten loai vb da ton tai')
      } else {
        return TypeofdiplomaModels.create({
          ten_loai_vb: ten_loai_vb,
          nam_thi: nam_thi
        })
      }
    })
    .then(data => {
      if (data) {
        res.json('Tao loai vb thanh cong')
      }
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}


//Sua
exports.update = (req, res, next) => {
  var id = req.params.id
  var newtenloaivb = req.body.newtenloaivb
  var newnamthi = req.body.newnamthi

  TypeofdiplomaModels.findByIdAndUpdate(id, {
    ten_loai_vb: newtenloaivb,
    nam_thi: newnamthi
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
  TypeofdiplomaModels.deleteOne({
    _id: id
  })
    .then(data => {
      res.json('Xoa thanh cong')
    })
    .catch(err => {
      res.status(500).json('Loi sever')
    })
}

