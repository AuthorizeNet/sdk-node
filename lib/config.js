'use strict';
var pkg = require('../package.json');

var config = {
	'timeout': 120000,
	'clientId': 'sdk-node-' + pkg.version,
	'logger': {
		'enabled': false,
		'location': './',
		//logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
		'level': 'debug',
		//transport - { 'File', 'Console' }
		// to write the logs to console,modify the value of transport to 'Console'
		'transport':'File'	
	},
	'proxy': {
		'setProxy':false,
	    'proxyUrl':'http://proxy.yourcompany.com:80'
	}
};

module.exports.config = config;
