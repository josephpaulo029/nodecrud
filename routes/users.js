var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

var db = require('../dbcon'); //reference of dbconnection.js

/* GET users listing. */

router.get('/getuserInfo', (req, res, next) => {
  User.getaccountInfo((err, rows) => {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.post('/addAccount', (req, res, next) => {
  User.addUser(req.body, (err, count) => {
    if (err) {
      res.json(err);
    }
    else {
      res.status(200).send({ "message": "Account Added" });
      // res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.post('/deleteAccount/:id', (req, res, next) => {
  User.deleteUser(req.params, (err, count) => {
    if (err) {
      res.json(err);
    }
    else {
      res.status(200).send({ "message": "Account Deleted" });
      // res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.post('/updateAccount', (req, res, next) => {
  User.updateUser(req.body, (err, count) => {
    if (err) {
      res.json(err);
    }
    else {
      res.status(200).send({ "message": "Account Updated" });
      // res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

router.get('/roar', function (req, res, next) {
  res.send('respond with a roar');
});

module.exports = router;
