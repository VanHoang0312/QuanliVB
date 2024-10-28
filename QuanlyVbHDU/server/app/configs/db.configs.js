// const mongoose = require('mongoose')
// require('dotenv').config()
// const MONGO_URI =  process.env.MONGO_URI || 'mongodb://localhost/blockchain'
// console.log('MONGO_URI:', MONGO_URI)
// mongoose.Promise = global.Promise;
// const db_connect = () => mongoose.connect(MONGO_URI, {}).catch(err => {
//     setTimeout(db_connect, 5000)
// });
// module.exports = { db_connect }

const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/blockchain";
mongoose.Promise = global.Promise;
const db_connect = () =>
  mongoose
    .connect(MONGO_URI, {})
    .then(() => {
      console.log("Kết nối MongoDB thành công!");
    })
    .catch((err) => {
      console.log("Kết nối MongoDB thất bại");
      setTimeout(db_connect, 5000);
    });
module.exports = { db_connect };