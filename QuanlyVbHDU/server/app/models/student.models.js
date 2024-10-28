const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  ten: String,
  ma_sinh_vien: String,
  ngay_sinh: Date,
  nganh_hoc: String,
  nam_hoc: Number,
  so_dien_thoai: Number,
  email: String,
  truong_hoc_id: { type: mongoose.Schema.Types.ObjectId, ref: 'school' },
}, {
  collection: 'student'
});

const StudentModels = mongoose.model('student', studentSchema)
module.exports = StudentModels