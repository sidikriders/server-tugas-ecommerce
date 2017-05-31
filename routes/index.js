var express = require('express');
var router = express.Router();
const Item = require('../models/items');

/* GET home page. */
router.post('/items', function(req, res, next) {
  let newName = req.body.name;
  let newPrice = req.body.price;
  let newCat = req.body.category.split('~')
  let newImg = req.body.image
  Item.create({
    name: newName,
    price: parseInt(newPrice),
    category: newCat,
    image: newImg
  }, function(err, result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
});

router.get('/items', function(req, res, next) {
  Item.find({}, function(err, results) {
    res.send(results)
  })
})

module.exports = router;
