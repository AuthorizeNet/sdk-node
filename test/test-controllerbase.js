'use strict';

var assert = require('assert');
var ApiContracts = require('../lib/apicontracts.js');
var APIOperationBase = require('../lib/apicontrollersbase.js').APIOperationBase;
var constants = require('./constants.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class TestRequestData {
	constructor(externalConfig = null) {
		this.merchant = new ApiContracts.MerchantAuthenticationType();
		this.merchant.setName(apiLoginKey);
		this.merchant.setTransactionKey(transactionKey);
		this.request = new ApiContracts.AuthenticateTestRequest();
		this.request.setMerchantAuthentication(this.merchant);
		this.ctrl = new APIOperationBase(this.request.getJSON(), externalConfig);
	}
}

describe('Controller base', function () {
	this.timeout(120000);

	describe.skip('Generate request', function () {
		var response;
		var requestError;

		before(function (done) {
			var ctrl = new TestRequestData().ctrl;
			ctrl.execute(function () {
				var apiResponse = ctrl.getResponse();
				response = new ApiContracts.AuthenticateTestResponse(apiResponse);
				requestError = ctrl.getError();
				//console.log(JSON.stringify(response.getMessages().getResultCode()));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {
			assert.equal(response.getMessages().getResultCode(), 'Ok');
			assert.equal(!!requestError, false);
		});
	});

	describe('Handle request error', function () {
		var response;
		var requestError;

		before(function (done) {
			//set a low timeout to force an axios error
			var requestOptions = { timeout: 1, logger: {}, proxy: {} };
			var ctrl = new TestRequestData(requestOptions).ctrl;
			ctrl.execute(function () {
				response = ctrl.getResponse();
				requestError = ctrl.getError();
				done();
			});
		});

		it('should retrieve request error', function () {
			assert.equal(!!response, false);
			assert.equal(!!requestError, true);
		});
	});
});
