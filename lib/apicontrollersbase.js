'use strict';

var axios = require('axios');
var HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const Logger = require('./logger.js');
var config = require('./config').config;
var constants = require('./constants').constants;

var logger;

/**
 * Safely extract and mask sensitive data from error objects before logging.
 * Handles axios errors which may contain request config with sensitive data.
 */
function maskErrorForLogging(error) {
	var safeError = {
		message: error.message || 'Unknown error',
		name: error.name || 'Error'
	};
	
	// If it's an axios error, extract safe response info
	if (error.response) {
		safeError.status = error.response.status;
		safeError.statusText = error.response.statusText;
		// Mask sensitive fields in response data if present
		if (error.response.data) {
			var dataCopy = JSON.parse(JSON.stringify(error.response.data));
			Logger.maskSensitiveFields(dataCopy);
			safeError.responseData = dataCopy;
		}
	}
	
	// If axios error has config with request data, mask it
	if (error.config && error.config.data) {
		try {
			var configData = typeof error.config.data === 'string' 
				? JSON.parse(error.config.data) 
				: JSON.parse(JSON.stringify(error.config.data));
			Logger.maskSensitiveFields(configData);
			safeError.requestData = configData;
		} catch (e) {
			// If parsing fails, don't include request data to avoid leaking sensitive info
			safeError.requestData = '[Unable to parse - omitted for security]';
		}
	}
	
	if (error.code) {
		safeError.code = error.code;
	}
	
	return safeError;
}

class APIOperationBase {
	constructor(apiRequest, externalConfig = null) {
		logger = Logger.getLogger('ApiOperationBase', externalConfig);
		logger.debug('Enter APIOperationBase constructor');

		this._request = null;
		this._response = null;
		this._error = null;
		this._endpoint = constants.endpoint.sandbox;

		if (externalConfig) config = externalConfig;

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
			// Mask sensitive data in error objects before logging
			var maskedError = maskErrorForLogging(error);
			logger.error(JSON.stringify(maskedError));
		});

		logger.debug('Exit APIOperationBase execute');
	}
}

module.exports.APIOperationBase = APIOperationBase;
