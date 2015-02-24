var countriesData = require('../models/countries.json');


var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  countries: function(req, res) {
    res.send(countriesData)
  }
};

module.exports = indexController;