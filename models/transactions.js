const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TransSchema = new Schema({
  createdAt: new Date()
  item_id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
})

var Trans = mongoose.model('Trans',TransSchema)

module.exports = Trans
