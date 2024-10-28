const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registeracopySchema = new Schema({
  ten_sinh_vien: String,
  ma_sinh_vien: String,
  ngay_sinh: Date,
  noi_sinh: String,
  cccd: Number,
  ngay_thang_cap_cccd: Date,
  hoc_sinh_truong: String,
  nam_tn: Number,
  so_luong_ban_sao_cap: Number,
  noi_thuong_tru: String,
  don_vi_cong_tac: String,
  so_dien_thoai: Number,
  email: String,
  dia_chi_nhan_btn: String,
  anh_cccd_mt: String,
  anh_cccd_ms: String,
  anh_giay_khai_sinh: String,
  status_read: Boolean,
  id_truong :{ type: mongoose.Schema.Types.ObjectId, ref: 'school' },
}, {
  collection: 'registeracopy',
  timestamps: true
});

const RegisteracopytModels = mongoose.model('registeracopy', registeracopySchema)
module.exports = RegisteracopytModels