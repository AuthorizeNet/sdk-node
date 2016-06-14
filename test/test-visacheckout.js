'use strict';

var assert = require('chai').assert;
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class VisaCheckOutTestData {

	constructor(){

		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);

		this.opaqueData = new ApiContracts.OpaqueDataType();
		this.opaqueData.setDataDescriptor('COMMON.VCO.ONLINE.PAYMENT');
		this.opaqueData.setDataValue('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');
		this.opaqueData.setDataKey('KCSJeIab7wwH7mFcPM/YL+V9xBCDe4CmSjJ0MPHEodpWz4rmz78U8bR4Qqs1ipLBqH9mrfvLF4pytIcLOjKUtXvAII/xCze84INFMdtsVBgtEp5bZ4leehRQhNM+3/NH');

		this.paymentType = new ApiContracts.PaymentType();
		this.paymentType.setOpaqueData(this.opaqueData);
	}
}

describe('Visa Check Out', function() {
	this.timeout(120000);
	var testData = new VisaCheckOutTestData();

	describe.skip('Decrypt Visa Checkout Data', function () {
		var response;

		before(function(done){

			var decryptPaymentDataRequest = new ApiContracts.DecryptPaymentDataRequest();
			decryptPaymentDataRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			decryptPaymentDataRequest.setOpaqueData(this.opaqueData);
			decryptPaymentDataRequest.setCallId('1238408836021304101');

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.DecryptPaymentDataController(decryptPaymentDataRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.DecryptPaymentDataResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

	});

	describe.skip('Create a Visa Checkout Transaction', function () {
		var response;

		before(function(done){

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
			txnRequest.setPayment(this.paymentType);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setTransactionRequest(txnRequest);

			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);
				

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});
});
