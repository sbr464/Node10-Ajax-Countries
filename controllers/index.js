var countriesData = require('../models/countries.json');
var _ = require('underscore');


var indexController = {
	
  index: function(req, res) {
  	res.render('index');
  },


  countries: function(req, res) {
    res.send(countriesData)  
  },


  countryPost: function(req,res) {

    var found = _.find(countriesData, function(obj){
     
      return obj.name === req.body.searchData
    
    });
    
    res.send(found)

  }


};

module.exports = indexController;