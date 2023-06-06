'use strict';

var got = require('got');
var logger = require('./logger.js').logger;
var config = require('./config').config;
var constants = require('./constants').constants;
var hpagent  = require('hpagent');

class APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter APIOperationBase constructor');

		this._request = null;
		this._response = null;
		this._endpoint = constants.endpoint.sandbox;

		if(null == apiRequest)
			logger.error('Input request cannot be null');

		this._request = apiRequest;

		logger.debug('Exit APIOperationBase constructor');
	}

	//abstract
	validateRequest(){
		return;
	}

	validate(){
		return;
	}

	getResponse(){
		return this._response;
	}

	getResultcode(){
		var resultcode = null;

		if(this._response)
			resultcode = this._response.resultCode;

		return resultcode;
	}

	getMessagetype(){
		var message = null;

		if(this._response){
			message = this._response.message;
		}
		
		return message;
	}

	beforeExecute() {
	}

	setClientId() {
		for(var obj in this._request){
			this._request[obj]['clientId'] = config.clientId; 
			break;
		}
	}

	setEnvironment(env){
		this._endpoint = env;
	}

	execute(callback) {
		logger.debug('Enter APIOperationBase execute');

		logger.debug('Endpoint : ' + this._endpoint);

		this.beforeExecute();

		this.setClientId();

		var obj = this;

		logger.debug(JSON.stringify(this._request, 2, null));

		var reqOpts = { timeout: config.timeout, json: this._request, method: 'POST' };

		if (config.proxy.setProxy) {
			reqOpts['agent'] = {
				https: new hpagent.HttpsProxyAgent({
					proxy: config.proxy.proxyUrl
				})
			};
		}

		got(this._endpoint, reqOpts)
			.then(response => {
				const body = response.body;
				// TODO: slice added due to BOM character. remove once BOM character is removed.
				if (typeof body !== 'undefined') {
					const responseObj = JSON.parse(body.slice(1));
					logger.debug(JSON.stringify(responseObj, 2, null));
					obj._response = responseObj;
					callback();
				} else {
					logger.error('Undefined Response');
				}
			})
			.catch(error => {
				logger.error(error);
			});

		logger.debug('Exit APIOperationBase execute');
	}
}

module.exports.APIOperationBase = APIOperationBase;
