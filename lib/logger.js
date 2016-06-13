var winston = require('winston');
var config = require('./config').config;

var logger;

if(config.logger.enabled === true) {
	logger = new (winston.Logger)({
		transports: [
			new (winston.transports.File)({filename: config.logger.location + '/sdk-node.log', level: config.logger.level})
		]
	});
}
else {
	logger = new (winston.Logger)({
		transports: []
	});
}

//logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

module.exports.logger = logger;
