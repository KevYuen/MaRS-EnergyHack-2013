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
		var data = querystring.stringify({
     		id: user.id 
     	});
     	var options = {
   			host: 'http://ec2-184-73-71-236.compute-1.amazonaws.com',
    		port: 80,
    		path: '/analytics/',
    		method: 'POST',
    		headers: {
        		'Content-Type': 'application/x-www-form-urlencoded',
        		'Content-Length': data.length
    		}
		};

		var req = http.request(options, function(res) {
    		res.setEncoding('utf8');
    		res.on('data', function (chunk) {
        		console.log("body: " + chunk);
    		});
		});

		req.write(data);
		req.end();

		res.send({status:200});
	});
}