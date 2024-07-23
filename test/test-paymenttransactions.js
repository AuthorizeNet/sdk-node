'use strict';

var assert = require('chai').assert;
var utils = require('./utils.js');
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class PaymentTransactionsTestData {

	constructor(){

		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);

		this.creditCard = new ApiContracts.CreditCardType();
		this.creditCard.setCardNumber('4242424242424242');
		this.creditCard.setExpirationDate('0845');

		this.paymentType = new ApiContracts.PaymentType();
		this.paymentType.setCreditCard(this.creditCard);

		this.authCode = 'ROHNFQ';
		this.splitTenderId = '115901';
		this.refId = '123456';
	}
}

describe('Payment Transactions', function() {
	this.timeout(120000);
	var authOnlyTransactionId;
	var authOnlyTransactionIdForVoid;
	var authAndCaptureTransactionId;
	var debitTransactionId;
	var debitTransactionAmount;
	var createCustomerProfileResponse;
	var testData = new PaymentTransactionsTestData();

	describe('Charge a credit card', function () {
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
	});

	describe('Authorize a credit card', function () {
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

				authOnlyTransactionId = response.getTransactionResponse().getTransId();

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

	describe('Capture a previously authorized amount', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.PRIORAUTHCAPTURETRANSACTION);
			transactionRequestType.setRefTransId(authOnlyTransactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

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

	describe('Capture funds authorized through another channel', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.CAPTUREONLYTRANSACTION);
			transactionRequestType.setPayment(testData.paymentType);
			transactionRequestType.setAmount(utils.getRandomAmount());
			transactionRequestType.setAuthCode(testData.authCode);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

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

		it('should return authCode same as input when successful', function () {
			assert.equal(response.getTransactionResponse().getAuthCode(), testData.authCode);
		});
	});

	describe('Refund Transaction', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.REFUNDTRANSACTION);
			transactionRequestType.setPayment(testData.paymentType);
			transactionRequestType.setAmount(utils.getRandomAmount());
			transactionRequestType.setRefTransId(authOnlyTransactionId);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Error', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.ERROR);
		});

		it('should return error code 54', function () {

			assert.isAbove(response.getTransactionResponse().getErrors().getError().length, 0);
			assert.equal(response.getTransactionResponse().getErrors().getError()[0].getErrorCode(), '54');
		});
	});

	describe('Authorize a credit card for void', function () {
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

				authOnlyTransactionIdForVoid = response.getTransactionResponse().getTransId();

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

	describe('Void Transaction', function () {
		var response;

		before(function(done){

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.VOIDTRANSACTION);
			transactionRequestType.setRefTransId(authOnlyTransactionIdForVoid);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

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

	describe('Update Split Tender Group', function () {
		var response;

		before(function(done){

			var updateRequest = new ApiContracts.UpdateSplitTenderGroupRequest();
			updateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			updateRequest.setSplitTenderId(testData.splitTenderId);
			updateRequest.setSplitTenderStatus(ApiContracts.SplitTenderStatusEnum.VOIDED);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.UpdateSplitTenderGroupController(updateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.UpdateSplitTenderGroupResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Debit a Bank Account', function () {
		var response;

		before(function(done){

			var paymentType = new ApiContracts.PaymentType();

			var bankAccountType = new ApiContracts.BankAccountType();
			bankAccountType.setAccountType(ApiContracts.BankAccountTypeEnum.CHECKING);
			bankAccountType.setRoutingNumber('125008547');
			bankAccountType.setAccountNumber('8256571452');
			bankAccountType.setNameOnAccount('John Doe');
			bankAccountType.setEcheckType('WEB');
			bankAccountType.setBankName('Wells Fargo Bank NA');
			paymentType.setBankAccount(bankAccountType);

			debitTransactionAmount = utils.getRandomAmount();
			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
			transactionRequestType.setPayment(paymentType);
			transactionRequestType.setAmount(debitTransactionAmount);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setRefId(testData.refId);
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				debitTransactionId = response.getTransactionResponse().getTransId();

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

		it('should return same refId as input when successful', function () {

			assert.equal(response.getRefId(), testData.refId);
		});
	});
	
	describe('Credit a Bank Account', function () {
		var response;

		before(function(done){

			var paymentType = new ApiContracts.PaymentType();

			var bankAccountType = new ApiContracts.BankAccountType();
			bankAccountType.setAccountType(ApiContracts.BankAccountTypeEnum.CHECKING);
			bankAccountType.setRoutingNumber('125008547');
			bankAccountType.setAccountNumber('8256571452');
			bankAccountType.setNameOnAccount('John Doe');
			paymentType.setBankAccount(bankAccountType);

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.REFUNDTRANSACTION);
			transactionRequestType.setPayment(paymentType);
			// Transaction is can be used only in case of trnsaction is settled.
			// transactionRequestType.setRefTransId(debitTransactionId);
			transactionRequestType.setAmount(debitTransactionAmount);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(transactionRequestType);

			// console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
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
	});

	describe('Create Customer Profile for - Charge a Customer Profile', function () {
		var response;

		before(function(done){

			var customerPaymentProfileType = new ApiContracts.CustomerPaymentProfileType();
			customerPaymentProfileType.setCustomerType(ApiContracts.CustomerTypeEnum.INDIVIDUAL);
			customerPaymentProfileType.setPayment(testData.paymentType);

			var customerProfileType = new ApiContracts.CustomerProfileType();
			customerProfileType.setMerchantCustomerId('M_' + utils.getRandomString('cust'));
			customerProfileType.setDescription('Profile description here');
			customerProfileType.setEmail(utils.getRandomString('cust')+'@anet.net');

			var paymentProfilesList = [];
			paymentProfilesList.push(customerPaymentProfileType);
			customerProfileType.setPaymentProfiles(paymentProfilesList);

			var createRequest = new ApiContracts.CreateCustomerProfileRequest();
			createRequest.setProfile(customerProfileType);
			createRequest.setValidationMode(ApiContracts.ValidationModeEnum.TESTMODE);
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateCustomerProfileController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateCustomerProfileResponse(apiResponse);

				createCustomerProfileResponse = response;

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null customer profile id when successful', function () {

			assert.isNotNull(response.getCustomerProfileId());
			assert.isDefined(response.getCustomerProfileId());
		});

		it('should return not null customer payment profile id when successful', function () {

			assert.isNotNull(response.getCustomerPaymentProfileIdList());
			assert.isDefined(response.getCustomerPaymentProfileIdList());
			assert.isAbove(response.getCustomerPaymentProfileIdList().getNumericString().length, 0);
			assert.isNotNull(response.getCustomerPaymentProfileIdList().getNumericString()[0]);
			assert.isDefined(response.getCustomerPaymentProfileIdList().getNumericString()[0]);
		});
	});

	describe('Charge Customer Profile', function () {
		var response;

		before(function(done){

			var profileToCharge = new ApiContracts.CustomerProfilePaymentType();
			profileToCharge.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());

			var paymentProfile = new ApiContracts.PaymentProfile();
			paymentProfile.setPaymentProfileId(createCustomerProfileResponse.getCustomerPaymentProfileIdList().getNumericString()[0]);
			profileToCharge.setPaymentProfile(paymentProfile);

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
			transactionRequestType.setProfile(profileToCharge);
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
	});

	describe('Charge a Tokenized Credit Card', function () {
		var response;

		before(function(done){

			var creditCard = new ApiContracts.CreditCardType();
			creditCard.setCardNumber('4242424242424242');
			creditCard.setExpirationDate('0845');
			creditCard.setCryptogram('EjRWeJASNFZ4kBI0VniQEjRWeJA=');

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setCreditCard(creditCard);

			var transactionRequestType = new ApiContracts.TransactionRequestType();
			transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
			transactionRequestType.setPayment(paymentType);
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
	});

});
