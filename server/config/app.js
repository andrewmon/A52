var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var port = (process.env.PORT || 8080);
  var app = express.init();
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};
