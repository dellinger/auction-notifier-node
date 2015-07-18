var express = require('express');
var router = express.Router();
var auctionHouseData = require('../api/auction_house_data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  auctionHouseData.getAeriePeakAuctions(function(error, auctions){
      if(error){
        res.render('error',{error: error});
      }
      res.render('index', { title: auctions.realm.name ' Auctions!' ,
                            auctions: auctions.auctions[0] });
  });

});

module.exports = router;
