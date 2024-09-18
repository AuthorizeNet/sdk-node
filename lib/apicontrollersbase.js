'use strict';

var axios = require('axios');
var HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const Logger = require('./logger.js');
var config = require('./config').config;
var constants = require('./constants').constants;

var logger;

class APIOperationBase {
	constructor(apiRequest, externalConfig = null) {
		logger = Logger.getLogger('ApiOperationBase', externalConfig);
		logger.debug('Enter APIOperationBase constructor');

		this._request = null;
		this._response = null;
		this._error = null;
		this._endpoint = constants.endpoint.sandbox;

		if (null == apiRequest)
			logger.error('Input request cannot be null');

		this._request = apiRequest;

		logger.debug('Exit APIOperationBase constructor');
	}

	//abstract
	validateRequest() {
		return;
	}

	validate() {
		return;
	}

	getResponse() {
		return this._response;
	}

	getError() {
		return this._error;
	}

	getResultcode() {
		var resultcode = null;

		if (this._response)
			resultcode = this._response.resultCode;

		return resultcode;
	}

	getMessagetype() {
		var message = null;

		if (this._response) {
			message = this._response.message;
		}

		return message;
	}

	beforeExecute() {
	}

	setClientId() {
		for (var obj in this._request) {
			this._request[obj]['clientId'] = config.clientId;
			break;
		}
	}

	setEnvironment(env) {
		this._endpoint = env;
	}

	execute(callback) {
		logger.debug('Enter APIOperationBase execute');

		logger.debug('Endpoint : ' + this._endpoint);

		this.beforeExecute();

		this.setClientId();

		var obj = this;

		logger.debug(JSON.stringify(this._request, 2, null));

		var axiosConfig = {
			baseURL: this._endpoint,
			method: 'POST',
			proxy: false,
			timeout: config.timeout,
			data: JSON.parse(JSON.stringify(this._request))
		};

		if (config.proxy.setProxy) {
			const agent = new HttpsProxyAgent(config.proxy.proxyUrl);
			axiosConfig.httpsAgent = agent;
		}

		axios.request(axiosConfig).then((response) => {
			if (typeof response.data !== 'undefined') {
				var responseObj = JSON.parse(JSON.stringify(response.data));
				logger.debug(JSON.stringify(responseObj, 2, null));
				obj._response = responseObj;
				callback();
			} else {
				logger.error("Undefined Response");
			}
		}).catch(error => {
			obj._error = error;
			logger.error(error);
		});

		logger.debug('Exit APIOperationBase execute');
	}
}

module.exports.APIOperationBase = APIOperationBase;
