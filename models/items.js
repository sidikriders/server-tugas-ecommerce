const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ItemSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  category: [String]
})

var Item = mongoose.model('Item',ItemSchema)

module.exports = Item
