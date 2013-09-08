var needle = require('needle'),
    User = require('../models/User.js');

exports.index = function(req, res) {
  res.render('index');
};

exports.confirm = function(req, res) {
    User.build({
        phone: phone,
        token: token
    }).save().error(function(e) {
        //Handle error
        console.log('Got error: ' + e.message);

        res.render('confirmPage');
    }).success(function(user) {
        //send user.id along to /analytics
        needle.post('http://ec2-184-73-71-236.compute-1.amazonaws.com/analytics', {
            id: user.id
        }, function(err, resp, body) {
            res.render('confirmPage');
        });
    });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.securePartials = function (req, res) {
  var name = req.params.name;
  res.render('partials/Secure/' + name);
};