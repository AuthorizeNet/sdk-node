"use strict";

var config = {
	//SANDBOX_TESTMODE = 'https://apitest.authorize.net/xml/v1/request.api'
	//PRODUCTION = 'https://api.authorize.net/xml/v1/request.api'
	"endpoint": "https://apitest.authorize.net/xml/v1/request.api",
	"logger": {
		"enabled": "false",
		"location": "./",
		//logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 
		"level": "debug"
	}
}

module.exports.config = config;