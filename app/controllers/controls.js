var querystring = require('querystring');
var User = require('../models/User.js');
var http = require("http");

exports.index = function(req, res){
  res.render('index');
};

exports.confirm = function(req, res){
	res.render('confirmPage');
}

exports.confirmUser = function(req, res){
	var phone = req.body.phone,
		token = req.body.token;

	User.build({
		phone: phone,
		token: token
	}).save().error(function() {
		res.send({status:500});
	}).success(function(user) {
		res.send({status:200, id: user.id});
	});
}