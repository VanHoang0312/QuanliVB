const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeofdiplomaSchema = new Schema({
  
  ten_loai_vb: String,
  nam_thi: Number,
}, {
  collection: 'typeofdiploma'
});

const TypeofdiplomaModels = mongoose.model('typeofdiploma', typeofdiplomaSchema)
module.exports = TypeofdiplomaModels