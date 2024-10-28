const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diplomasSchema = new Schema({
  so_hieu_VB: String,
  nam_tn: Number,
  xep_loai_tn: String,
  hinh_thuc_dao_tao: String,
  sinh_vien_id :{ type: mongoose.Schema.Types.ObjectId, ref: 'student' },
  id_loai_VB: { type: mongoose.Schema.Types.ObjectId, ref: 'typeofdiploma' },
}, {
  collection: 'diplomas'
});

const DiplomastModels = mongoose.model('diplomas', diplomasSchema)
module.exports = DiplomastModels