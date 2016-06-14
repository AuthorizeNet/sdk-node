'use strict';

var assert = require('chai').assert;
var utils = require('./utils.js');
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class PaypalTestData {

	constructor(){

		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);

		this.payPal = new ApiContracts.PayPalType();
		this.payPal.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
		this.payPal.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');

		//standard api call to retrieve response
		this.paymentType = new ApiContracts.PaymentType();
		this.paymentType.setPayPal(this.payPal);
	}
}

describe('Paypal Express Checkout', function() {
	this.timeout(120000);
	var transactionId;
	var authAndCaptureTransactionId;
	var testData = new PaypalTestData();

	describe('Authorization Only', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
			transactionRequestType.setPayment(testData.paymentType);
			transactionRequestType.setAmount(utils.getRandomAmount());

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				transactionId = response.getTransactionResponse().getTransId();

				// console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});

		it('should return not null secure acceptance url when successful', function () {

			assert.isNotNull(response.getTransactionResponse().getSecureAcceptance().getSecureAcceptanceUrl());
			assert.isDefined(response.getTransactionResponse().getSecureAcceptance().getSecureAcceptanceUrl());
		});
	});

	describe('Authorization And Capture', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
			transactionRequestType.setPayment(testData.paymentType);
			transactionRequestType.setAmount(utils.getRandomAmount());

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				authAndCaptureTransactionId = response.getTransactionResponse().getTransId();

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});

		it('should return not null secure acceptance url when successful', function () {

			assert.isNotNull(response.getTransactionResponse().getSecureAcceptance().getSecureAcceptanceUrl());
			assert.isDefined(response.getTransactionResponse().getSecureAcceptance().getSecureAcceptanceUrl());
		});
	});

	describe('Get Details', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.GETDETAILSTRANSACTION);
			transactionRequestType.setPayment(testData.paymentType);
			transactionRequestType.setRefTransId(transactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				// console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});

		it('should return account type as paypal when successful', function () {

			assert.equal(response.getTransactionResponse().getAccountType(), 'PayPal');
		});
	});

	describe.skip('Authorization Only Continued', function () {
		var response;

		before(function(done){

			var payPalType = new ApiContracts.PayPalType();
			payPalType.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setPayerID('B2LA5T27DMX7G');
					
			var paymentType = new ApiContracts.PaymentType();
			paymentType.setPayPal(payPalType);

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHONLYCONTINUETRANSACTION);
			txnRequest.setPayment(paymentType);
			txnRequest.setAmount(utils.getRandomAmount());
			txnRequest.setRefTransId('2251413967');

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(txnRequest);

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

	describe.skip('Prior Authorization Capture', function () {
		var response;

		before(function(done){

			var payPalType = new ApiContracts.PayPalType();
			payPalType.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
					
			var paymentType = new ApiContracts.PaymentType();
			paymentType.setPayPal(payPalType);

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.PRIORAUTHCAPTURETRANSACTION);
			txnRequest.setPayment(paymentType);
			txnRequest.setAmount(utils.getRandomAmount());
			txnRequest.setRefTransId(transactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(txnRequest);

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

	describe('Authorization And Capture Continue', function () {
		var response;

		before(function(done){

			var payPalType = new ApiContracts.PayPalType();
			payPalType.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setPayerID('B2LA5T27DMX7G');

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setPayPal(payPalType);

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURECONTINUETRANSACTION);
			txnRequest.setPayment(paymentType);
			txnRequest.setAmount(utils.getRandomAmount());
			txnRequest.setRefTransId(authAndCaptureTransactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(txnRequest);

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

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});
	});

	describe('Void', function () {
		var response;

		before(function(done){

			var payPalType = new ApiContracts.PayPalType();
			payPalType.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setPayPal(payPalType);

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.VOIDTRANSACTION);
			txnRequest.setPayment(paymentType);
			txnRequest.setRefTransId(authAndCaptureTransactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(txnRequest);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it.skip('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});
	});

	describe('Credit', function () {
		var response;

		before(function(done){

			var payPalType = new ApiContracts.PayPalType();
			payPalType.setCancelUrl('http://www.merchanteCommerceSite.com/Success/TC25262');
			payPalType.setSuccessUrl('http://www.merchanteCommerceSite.com/Success/TC25262');

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setPayPal(payPalType);

			var txnRequest = new ApiContracts.TransactionRequestType();
			txnRequest.setTransactionType(ApiContracts.TransactionTypeEnum.REFUNDTRANSACTION);
			txnRequest.setPayment(paymentType);
			txnRequest.setAmount(utils.getRandomAmount());
			txnRequest.setRefTransId(authAndCaptureTransactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(txnRequest);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it.skip('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction id when successful', function () {

			assert.isNotNull(response.getTransactionResponse());
			assert.isDefined(response.getTransactionResponse());
			assert.isNotNull(response.getTransactionResponse().getTransId());
			assert.isDefined(response.getTransactionResponse().getTransId());
		});
	});
});
