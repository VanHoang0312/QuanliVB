const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  ten_truong: String,
  so_dien_thoai: Number,
  email: String,
  dia_chi: String,
  web_site: String,
  mo_ta: String
}, {
  collection: 'school'
});

const SchoolModels = mongoose.model('school', schoolSchema)
module.exports = SchoolModels