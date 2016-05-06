var winston = require('winston');
var config = require('./config').config;

//logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
var logger = new (winston.Logger)({
	transports: [
	  //new (winston.transports.Console)({level: 'debug'}),
	  new (winston.transports.File)({ filename: config.logger.location + '/sdk-node.log', level: config.logger.level})
	]
});

module.exports.logger = logger;
