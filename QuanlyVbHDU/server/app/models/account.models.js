const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: String,
  password: String,
  token: String,
  role: {
    enum: ["ADMIN", "USER"],
    type: String
  },
  access_token: String
}, {
  collection: 'acc'
});

const AccountModels = mongoose.model('acc', accountSchema)
module.exports = AccountModels