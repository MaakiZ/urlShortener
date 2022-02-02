var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Url = require('../models/Url');
 
 
/* GET home page. */
router.get('/list', function(req, res, next) {
      
    userModel.find((err, docs) => {
        if (!err) {
            res.render("list", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the List: ' + err);
        }
    });
 
});
module.exports = router;