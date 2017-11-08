'use strict';

var assert = require('chai').assert;
var utils = require('./utils.js');
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class ARBSubscriptionTestData {

	constructor(){

		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);

		this.customerProfileType = new ApiContracts.CustomerProfileType();
		this.customerProfileType.setDescription(utils.getRandomString('CustomerDescription'));
		this.customerProfileType.setMerchantCustomerId(utils.getRandomString('Customer'));
		this.customerProfileType.setEmail(utils.getRandomString('email')+'@anet.net');

		this.creditCardOne = new ApiContracts.CreditCardType();
		this.creditCardOne.setExpirationDate('2038-12');
		this.creditCardOne.setCardNumber('4111111111111111');

		this.bankAccountOne = new ApiContracts.BankAccountType();
		this.bankAccountOne.setAccountType(ApiContracts.BankAccountTypeEnum.SAVINGS);
		this.bankAccountOne.setRoutingNumber('125000000');
		this.bankAccountOne.setAccountNumber(utils.getRandomString('A/C#'));
		this.bankAccountOne.setNameOnAccount(utils.getRandomString('A/CName'));
		this.bankAccountOne.setEcheckType(ApiContracts.EcheckTypeEnum.WEB); 
		this.bankAccountOne.setBankName(utils.getRandomString('Bank'));
		this.bankAccountOne.setCheckNumber(utils.getRandomInt());

		this.trackDataOne = new ApiContracts.CreditCardTrackType();
		this.trackDataOne.setTrack1(utils.getRandomString('Track1'));
		this.trackDataOne.setTrack2(utils.getRandomString('Track2'));

		this.encryptedTrackDataOne = new ApiContracts.EncryptedTrackDataType();
		var keyBlock = new ApiContracts.KeyBlock();
		//keyBlock.setValue(value);
		this.encryptedTrackDataOne.setFormOfPayment(keyBlock);

		this.payPalOne = new ApiContracts.PayPalType();
		this.payPalOne.setSuccessUrl(utils.getRandomString('https://success.anet.net'));
		this.payPalOne.setCancelUrl(utils.getRandomString('https://cancel.anet.net'));
		this.payPalOne.setPaypalLc(utils.getRandomString('Lc'));
		this.payPalOne.setPaypalHdrImg(utils.getRandomString('Hdr'));
		this.payPalOne.setPaypalPayflowcolor(utils.getRandomString('flowClr'));
		this.payPalOne.setPayerID(utils.getRandomString('PayerId'));

		this.paymentOne = new ApiContracts.PaymentType();
		this.paymentOne.setCreditCard(this.creditCardOne);

		this.customerAddressOne = new ApiContracts.CustomerAddressType();
		this.customerAddressOne.setFirstName(utils.getRandomString('FName'));
		this.customerAddressOne.setLastName(utils.getRandomString('LName'));
		this.customerAddressOne.setCompany(utils.getRandomString('Company'));
		this.customerAddressOne.setAddress(utils.getRandomString('StreetAdd'));
		this.customerAddressOne.setCity('Bellevue');
		this.customerAddressOne.setState('WA');
		this.customerAddressOne.setZip('98000');
		this.customerAddressOne.setCountry('USA');
		this.customerAddressOne.setPhoneNumber('1232122122');
		this.customerAddressOne.setFaxNumber('1232122122');    	    		
		this.customerPaymentProfileOne = new ApiContracts.CustomerPaymentProfileType();
		this.customerPaymentProfileOne.setCustomerType(ApiContracts.CustomerTypeEnum.INDIVIDUAL);
		this.customerPaymentProfileOne.setPayment(this.paymentOne);

		this.customerOne = new ApiContracts.CustomerType();
		this.customerOne.setType(ApiContracts.CustomerTypeEnum.INDIVIDUAL);
		this.customerOne.setId(utils.getRandomString('Id'));
		this.customerOne.setEmail(utils.getRandomInt()+'@test.this.anet.net');
		this.customerOne.setPhoneNumber('1232122122');
		this.customerOne.setFaxNumber('1232122122');
		this.customerOne.setDriversLicense(this.driversLicenseOne);
		this.customerOne.setTaxId('911011011');//'123-45-6789');//TODO

		this.customerTwo = new ApiContracts.CustomerType();

		var interval = new ApiContracts.PaymentScheduleType.Interval();
		interval.setLength(1);
		interval.setUnit(ApiContracts.ARBSubscriptionUnitEnum.MONTHS);
		
		this.orderType = new ApiContracts.OrderType();
		this.orderType.setInvoiceNumber(utils.getRandomString('Inv:')); 
		this.orderType.setDescription(utils.getRandomString('Description'));

		this.nameAndAddressTypeOne = new ApiContracts.NameAndAddressType();
		this.nameAndAddressTypeOne.setFirstName(utils.getRandomString('FName'));
		this.nameAndAddressTypeOne.setLastName(utils.getRandomString('LName'));
		this.nameAndAddressTypeOne.setCompany(utils.getRandomString('Company'));
		this.nameAndAddressTypeOne.setAddress(utils.getRandomString('Address'));
		this.nameAndAddressTypeOne.setCity(utils.getRandomString('City'));
		this.nameAndAddressTypeOne.setState(utils.getRandomString('State'));
		this.nameAndAddressTypeOne.setZip('98004');
		this.nameAndAddressTypeOne.setCountry('USA');
		
		this.nameAndAddressTypeTwo = new ApiContracts.NameAndAddressType();
		this.nameAndAddressTypeTwo.setFirstName(utils.getRandomString('FName'));
		this.nameAndAddressTypeTwo.setLastName(utils.getRandomString('LName'));
		this.nameAndAddressTypeTwo.setCompany(utils.getRandomString('Company'));
		this.nameAndAddressTypeTwo.setAddress(utils.getRandomString('Address'));
		this.nameAndAddressTypeTwo.setCity(utils.getRandomString('City'));
		this.nameAndAddressTypeTwo.setState(utils.getRandomString('State'));
		this.nameAndAddressTypeTwo.setZip('98004');
		this.nameAndAddressTypeTwo.setCountry('USA');
		
		this.paymentScheduleTypeOne = new ApiContracts.PaymentScheduleType();
		this.paymentScheduleTypeOne.setInterval(interval);
		this.paymentScheduleTypeOne.setStartDate(utils.getDate());
		this.paymentScheduleTypeOne.setTotalOccurrences(5);
		this.paymentScheduleTypeOne.setTrialOccurrences(0);
		
		this.arbSubscriptionOne = new ApiContracts.ARBSubscriptionType();
		this.arbSubscriptionOne.setName(utils.getRandomString('Name'));
		this.arbSubscriptionOne.setPaymentSchedule(this.paymentScheduleTypeOne);
		this.arbSubscriptionOne.setAmount(utils.getRandomAmount());
		this.arbSubscriptionOne.setTrialAmount(utils.getRandomAmount());
		this.arbSubscriptionOne.setPayment(this.paymentOne);
		this.arbSubscriptionOne.setOrder(this.orderType);
		this.arbSubscriptionOne.setCustomer(this.customerOne);
		this.arbSubscriptionOne.setBillTo(this.nameAndAddressTypeOne);
		this.arbSubscriptionOne.setShipTo(this.nameAndAddressTypeOne);
		
		this.customerDataOne = new ApiContracts.CustomerDataType();
		this.customerDataOne.setDriversLicense(this.customerOne.getDriversLicense());
		this.customerDataOne.setEmail(this.customerOne.getEmail());
		this.customerDataOne.setId(this.customerOne.getId());
		this.customerDataOne.setTaxId(this.customerOne.getTaxId());
		this.customerDataOne.setType(this.customerOne.getType());

		this.refId = utils.getRandomInt();

		this.sorting = new ApiContracts.ARBGetSubscriptionListSorting();
		this.sorting.setOrderDescending(true);
		this.sorting.setOrderBy(ApiContracts.ARBGetSubscriptionListOrderFieldEnum.CREATETIMESTAMPUTC);

		this.paging = new ApiContracts.Paging();
		this.paging.setOffset(1);
		this.paging.setLimit(100);

		this.orderTypeTwo = new ApiContracts.OrderType();
		this.orderTypeTwo.setInvoiceNumber(utils.getRandomString('Inv:')); 
		this.orderTypeTwo.setDescription(utils.getRandomString('Description'));
	}
}

describe('Recurring Billing', function() {
	this.timeout(120000);
	var subscriptionId;
	var testData = new ARBSubscriptionTestData();


	describe('create subscription', function () {
		var response;

		before(function(done){

			var createRequest = new ApiContracts.ARBCreateSubscriptionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setSubscription(testData.arbSubscriptionOne);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBCreateSubscriptionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBCreateSubscriptionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));

				subscriptionId = response.getSubscriptionId();
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null subscriptionid when successful', function () {

			assert.isNotNull(response.getSubscriptionId());
			assert.isDefined(response.getSubscriptionId());
		});
	});

	describe('get subscription', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.ARBGetSubscriptionRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setSubscriptionId(subscriptionId);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBGetSubscriptionController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBGetSubscriptionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(),ApiContracts.MessageTypeEnum.OK);
		});

		it('should return subscription name same as test data when successful', function () {

			assert.equal(response.getSubscription().getName(),testData.arbSubscriptionOne.getName());
		});

		it('should return subscription amount same as test data when successful', function () {

			assert.equal(response.getSubscription().getAmount(),testData.arbSubscriptionOne.getAmount());
		});

		it('should return order description same as test data when successful', function () {

			assert.equal(response.getSubscription().getOrder().getDescription(),testData.arbSubscriptionOne.getOrder().getDescription());
		});
	});

	describe('get subscription status', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.ARBGetSubscriptionStatusRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setSubscriptionId(subscriptionId);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBGetSubscriptionStatusController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBGetSubscriptionStatusResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return subscription status as active when successful', function () {

			assert.equal(response.getStatus(),ApiContracts.ARBSubscriptionStatusEnum.ACTIVE);
		});
	});

	describe('get subscription list', function () {
		var response;

		before(function(done){

			setTimeout(function() {
				var listRequest = new ApiContracts.ARBGetSubscriptionListRequest();

				listRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

				listRequest.setRefId(testData.refId);
				listRequest.setSearchType(ApiContracts.ARBGetSubscriptionListSearchTypeEnum.SUBSCRIPTIONACTIVE);
				listRequest.setSorting(testData.sorting);
				listRequest.setPaging(testData.paging);

				//console.log(JSON.stringify(listRequest.getJSON()));
					
				var ctrl = new ApiControllers.ARBGetSubscriptionListController(listRequest.getJSON());

				ctrl.execute(function(){
					
					var apiResponse = ctrl.getResponse();

					response = new ApiContracts.ARBGetSubscriptionListResponse(apiResponse);

					//console.log(JSON.stringify(response, null, 2));
					done();
				});
			}, 20000);
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return totalResultsInNumSet greater than 0 when successful', function () {

			assert.isAbove(response.getTotalNumInResultSet(),0);
		});

		it('should return subsciption details when successful', function () {

			assert.isNotNull(response.getSubscriptionDetails());
			assert.isDefined(response.getSubscriptionDetails());
		});

		it('should return newly created subscription when successful', function () {

			var found = false;
			var subscriptionsArray = response.getSubscriptionDetails().getSubscriptionDetail();
			subscriptionsArray.forEach(function(subscription) {
				assert.isAbove(subscription.getId(), 0);
				if(subscription.getId() == subscriptionId)
					found = true;
			});

			assert.isTrue(found);
		});
	});

	describe('update subscription', function () {
		var response;

		before(function(done){

			var arbSubscriptionType = new ApiContracts.ARBSubscriptionType();
			arbSubscriptionType.setOrder(testData.orderTypeTwo);

			var updateRequest = new ApiContracts.ARBUpdateSubscriptionRequest();
			updateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			updateRequest.setSubscriptionId(subscriptionId);
			updateRequest.setSubscription(arbSubscriptionType);

			//console.log(JSON.stringify(updateRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBUpdateSubscriptionController(updateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBUpdateSubscriptionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('get updated subscription', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.ARBGetSubscriptionRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setSubscriptionId(subscriptionId);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBGetSubscriptionController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBGetSubscriptionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return subscription name same as test data when successful', function () {

			assert.equal(response.getSubscription().getName(),testData.arbSubscriptionOne.getName());
		});

		it('should return subscription amount same as test data when successful', function () {

			assert.equal(response.getSubscription().getAmount(),testData.arbSubscriptionOne.getAmount());
		});

		it('should return updated order description when successful', function () {

			assert.equal(response.getSubscription().getOrder().getDescription(),testData.orderTypeTwo.getDescription());
		});

		it('should return updated order invoice number when successful', function () {

			assert.equal(response.getSubscription().getOrder().getInvoiceNumber(),testData.orderTypeTwo.getInvoiceNumber());
		});
	});

	describe('cancel subscription', function () {
		var response;

		before(function(done){

			var cancelRequest = new ApiContracts.ARBCancelSubscriptionRequest();
			cancelRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			cancelRequest.setSubscriptionId(subscriptionId);

			//console.log(JSON.stringify(cancelRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ARBCancelSubscriptionController(cancelRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ARBCancelSubscriptionResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

	});
});
