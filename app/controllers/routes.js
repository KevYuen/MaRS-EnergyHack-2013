exports.index = function(req, res){
  res.render('index');
};

exports.confirm = function(req, res){
	res.render('confirmPage');
}

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.securePartials = function (req, res) {
  var name = req.params.name;
  res.render('partials/Secure/' + name);
};