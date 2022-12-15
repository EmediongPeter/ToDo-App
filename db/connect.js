const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log("Connected to DB")
  return
}

module.exports = connectDB
