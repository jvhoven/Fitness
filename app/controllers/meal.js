var exports = module.exports;

var data = {};

/*
* Entry point
*/
exports.indexAction = function(req, res) {
	data.title = "Schedule";
	
	res.render("meal/view", data);
}

exports.newAction = function(req, res) {
	data.id = 0;
	data.title = "New eating schedule";
	
	res.render("meal/new", data);
}