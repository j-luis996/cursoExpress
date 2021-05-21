const express = require('express');
const router = express.Router();

const products = [
      {
            name: "Red Shoes",
            proce: 75,
            image: "https://image.shutterstock.com/image-photo/studio-shot-pair-running-shoes-260nw-1415726975.jpg"
      },
      {
            name: "black bike",
            price: 300,
            image: "https://www.santafixie.com/en/media/catalog/product/f/u/fuji-declaration-satin-black-1b.jpg"
      }
]
router.get('/',function(req,res){
      res.render("products", { products });
});

module.exports = router;