'use strict';

var assert = require('chai').assert;
var utils = require('./utils.js');
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class CustomerProfilesTestData {

	constructor(){

		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);

		this.creditCard = new ApiContracts.CreditCardType();
		this.creditCard.setCardNumber('4242424242424242');
		this.creditCard.setExpirationDate('0845');

		this.paymentType = new ApiContracts.PaymentType();
		this.paymentType.setCreditCard(this.creditCard);

		this.customerPaymentProfileType = new ApiContracts.CustomerPaymentProfileType();
		this.customerPaymentProfileType.setCustomerType(ApiContracts.CustomerTypeEnum.INDIVIDUAL);
		this.customerPaymentProfileType.setPayment(this.paymentType);

		this.customerProfileType = new ApiContracts.CustomerProfileType();
		this.customerProfileType.setMerchantCustomerId('M_' + utils.getRandomString('cust'));
		this.customerProfileType.setDescription('Profile description here');
		this.customerProfileType.setEmail(utils.getRandomString('cust')+'@anet.net');

		var paymentProfilesList = [];
		paymentProfilesList.push(this.customerPaymentProfileType);

		this.customerProfileType.setPaymentProfiles(paymentProfilesList);

		this.customerAddress = new ApiContracts.CustomerAddressType();
		this.customerAddress.setFirstName('test');
		this.customerAddress.setLastName('scenario');
		this.customerAddress.setAddress('123 Main Street');
		this.customerAddress.setCity('Bellevue');
		this.customerAddress.setState('WA');
		this.customerAddress.setZip('98004');
		this.customerAddress.setCountry('USA');
		this.customerAddress.setPhoneNumber('000-000-0000');

		this.customerAddressForUpdate = new ApiContracts.CustomerAddressType();
		this.customerAddressForUpdate.setFirstName('John');
		this.customerAddressForUpdate.setLastName('Doe');
		this.customerAddressForUpdate.setAddress('123 Main Street');
		this.customerAddressForUpdate.setCity('Bellevue');
		this.customerAddressForUpdate.setState('WA');
		this.customerAddressForUpdate.setZip('98004');
		this.customerAddressForUpdate.setCountry('USA');
		this.customerAddressForUpdate.setPhoneNumber('111-111-1111');
		
		//credit card details
		this.creditCardForUpdate = new ApiContracts.CreditCardType();
		this.creditCardForUpdate.setCardNumber('4111111111111111');
		this.creditCardForUpdate.setExpirationDate('2045-12');

		this.customerAddressType = new ApiContracts.CustomerAddressType();
		this.customerAddressType.setFirstName('Johny');
		this.customerAddressType.setLastName('Bravo');
		this.customerAddressType.setAddress('123 Main St.');
		this.customerAddressType.setCity('Seattle');
		this.customerAddressType.setState('WA');
		this.customerAddressType.setZip('98004');
		this.customerAddressType.setCountry('USA');
		this.customerAddressType.setPhoneNumber('222-222-2222');

		this.refId = '123456';
	}
}

describe('Customer Profiles', function() {
	this.timeout(120000);
	var customerDataForUpdate;
	var customerShippingAddressForUpdate;
	var createCustomerProfileResponse;
	var createCustomerPaymentProfileResponse;
	var createCustomerShippingAddressResponse;
	var createTransactionResponse;
	var testData = new CustomerProfilesTestData();

	describe('Create Customer Profile', function () {
		var response;

		before(function(done){

			var createRequest = new ApiContracts.CreateCustomerProfileRequest();
			createRequest.setProfile(testData.customerProfileType);
			createRequest.setValidationMode(ApiContracts.ValidationModeEnum.TESTMODE);
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			// console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateCustomerProfileController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateCustomerProfileResponse(apiResponse);

				createCustomerProfileResponse = response;

				// console.log(JSON.stringify(response, null, 2));
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

	describe('Get Customer Profile', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerProfileRequest();
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return customer profile id same as in create response when successful', function () {

			assert.equal(response.getProfile().getCustomerProfileId(), createCustomerProfileResponse.getCustomerProfileId());
		});

		it('should return customer email id same as in create request when successful', function () {

			assert.equal(response.getProfile().getEmail(), testData.customerProfileType.getEmail());
		});
	});

	describe('Get Customer Profile IDs', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerProfileIdsRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerProfileIdsController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerProfileIdsResponse(apiResponse);

				// console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null customer profile id when successful', function () {

			assert.isNotNull(response.getIds().getNumericString());
			assert.isDefined(response.getIds().getNumericString());
		});
	});

	describe('Update Customer Profile', function () {
		var response;
		
		before(function(done){

			customerDataForUpdate = new ApiContracts.CustomerProfileExType();
			customerDataForUpdate.setMerchantCustomerId('custId123');
			customerDataForUpdate.setDescription('some description');
			customerDataForUpdate.setEmail('newaddress@example.com');
			customerDataForUpdate.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());

			var updateRequest = new ApiContracts.UpdateCustomerProfileRequest();
			updateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			updateRequest.setProfile(customerDataForUpdate);

			//console.log(JSON.stringify(updateRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.UpdateCustomerProfileController(updateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.UpdateCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Profile After Update', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerProfileRequest();
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return updated merchant customer id when successful', function () {
			
			assert.equal(response.getProfile().getMerchantCustomerId(), customerDataForUpdate.getMerchantCustomerId());
		});

		it('should return updated description when successful', function () {
			
			assert.equal(response.getProfile().getDescription(), customerDataForUpdate.getDescription());
		});

		it('should return same email id when successful', function () {
			
			assert.equal(response.getProfile().getEmail(), customerDataForUpdate.getEmail());
		});
	});

	describe('Create Customer Payment Profile', function () {
		var response;

		before(function(done){

			var profile = new ApiContracts.CustomerPaymentProfileType();
			profile.setBillTo(testData.customerAddress);
			profile.setPayment(testData.paymentType);

			var createRequest = new ApiContracts.CreateCustomerPaymentProfileRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			createRequest.setPaymentProfile(profile);	

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateCustomerPaymentProfileController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateCustomerPaymentProfileResponse(apiResponse);

				createCustomerPaymentProfileResponse = response;

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer Profile Id as input when successful', function () {
			
			assert.equal(response.getCustomerProfileId(), createCustomerProfileResponse.getCustomerProfileId());
		});

		it('should return not null customer Payment Profile Id when successful', function () {

			assert.isNotNull(response.getCustomerPaymentProfileId());
			assert.isDefined(response.getCustomerPaymentProfileId());
		});
	});

	describe('Get Customer Payment Profile', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerPaymentProfileRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerPaymentProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer Profile Id as input when successful', function () {
			
			assert.equal(response.getPaymentProfile().getCustomerProfileId(), createCustomerProfileResponse.getCustomerProfileId());
		});

		it('should return same customer payment Profile Id as input when successful', function () {
			
			assert.equal(response.getPaymentProfile().getCustomerPaymentProfileId(), createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());
		});

		it('should return billTo address same as input when successful', function () {
			
			assert.equal(response.getPaymentProfile().getBillTo().getFirstName(), testData.customerAddress.getFirstName());
		});
	});

	describe('Get Customer Payment Profile List', function () {
		var response;

		before(function(done){

			var paging = new ApiContracts.Paging();
			paging.setLimit(100);
			paging.setOffset(1);

			var sorting = new ApiContracts.CustomerPaymentProfileSorting();
			sorting.setOrderBy(ApiContracts.CustomerPaymentProfileOrderFieldEnum.ID);
			sorting.setOrderDescending(false);

			var getRequest = new ApiContracts.GetCustomerPaymentProfileListRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setPaging(paging);
			getRequest.setSearchType(ApiContracts.CustomerPaymentProfileSearchTypeEnum.CARDSEXPIRINGINMONTH);
			getRequest.setSorting(sorting);
			getRequest.setMonth('2020-12');

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerPaymentProfileListController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerPaymentProfileListResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Validate Customer Payment Profile', function () {
		var response;

		before(function(done){

			var validateRequest = new ApiContracts.ValidateCustomerPaymentProfileRequest();
			validateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			validateRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());	
			validateRequest.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());
			validateRequest.setValidationMode(ApiContracts.ValidationModeEnum.LIVEMODE);
			validateRequest.setCardCode('122');
		
			//console.log(JSON.stringify(validateRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.ValidateCustomerPaymentProfileController(validateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.ValidateCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Update Customer Payment Profile', function () {
		var response;

		before(function(done){

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setCreditCard(testData.creditCardForUpdate);

			var customerForUpdate = new ApiContracts.CustomerPaymentProfileExType();
			customerForUpdate.setPayment(paymentType);
			customerForUpdate.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());
			customerForUpdate.setBillTo(testData.customerAddressForUpdate);

			var updateRequest = new ApiContracts.UpdateCustomerPaymentProfileRequest();
			updateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			updateRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());	
			updateRequest.setPaymentProfile(customerForUpdate);
			updateRequest.setValidationMode(ApiContracts.ValidationModeEnum.LIVEMODE);

			//console.log(JSON.stringify(updateRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.UpdateCustomerPaymentProfileController(updateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.UpdateCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Payment Profile After Update', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerPaymentProfileRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerPaymentProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer Profile Id as input when successful', function () {
			
			assert.equal(response.getPaymentProfile().getCustomerProfileId(), createCustomerProfileResponse.getCustomerProfileId());
		});

		it('should return same customer payment Profile Id as input when successful', function () {
			
			assert.equal(response.getPaymentProfile().getCustomerPaymentProfileId(), createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());
		});

		it('should return updated billTo address when successful', function () {
			
			assert.equal(response.getPaymentProfile().getBillTo().getFirstName(), testData.customerAddressForUpdate.getFirstName());
		});
	});

	describe('Create Customer Shipping Address', function () {
		var response;

		before(function(done){

			var createRequest = new ApiContracts.CreateCustomerShippingAddressRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			createRequest.setAddress(testData.customerAddressType);	

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateCustomerShippingAddressController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateCustomerShippingAddressResponse(apiResponse);

				createCustomerShippingAddressResponse = response;

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer Profile Id as input when successful', function () {
			
			assert.equal(response.getCustomerProfileId(), createCustomerProfileResponse.getCustomerProfileId());
		});

		it('should return not null customer address Id when successful', function () {

			assert.isNotNull(response.getCustomerAddressId());
			assert.isDefined(response.getCustomerAddressId());
		});
	});

	describe('Get Customer Shipping Address', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerShippingAddressRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerAddressId(createCustomerShippingAddressResponse.getCustomerAddressId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerShippingAddressController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerShippingAddressResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer address Id as input when successful', function () {
			
			assert.equal(response.getAddress().getCustomerAddressId(), createCustomerShippingAddressResponse.getCustomerAddressId());
		});

		it('should return address same as input when successful', function () {
			
			assert.equal(response.getAddress().getFirstName(), testData.customerAddressType.getFirstName());
		});
	});

	describe('Update Customer Shipping Address', function () {
		var response;

		before(function(done){

			var paymentType = new ApiContracts.PaymentType();
			paymentType.setCreditCard(testData.creditCardForUpdate);

			customerShippingAddressForUpdate = new ApiContracts.CustomerAddressExType();
			customerShippingAddressForUpdate.setFirstName('Will');
			customerShippingAddressForUpdate.setLastName('Smith');
			customerShippingAddressForUpdate.setAddress('345 Main St.');
			customerShippingAddressForUpdate.setCity('Bellevue');
			customerShippingAddressForUpdate.setState('WA');
			customerShippingAddressForUpdate.setZip('98004');
			customerShippingAddressForUpdate.setCountry('USA');
			customerShippingAddressForUpdate.setPhoneNumber('333-333-3333');
			customerShippingAddressForUpdate.setCustomerAddressId(createCustomerShippingAddressResponse.getCustomerAddressId());

			var updateRequest = new ApiContracts.UpdateCustomerShippingAddressRequest();
			updateRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			updateRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());	
			updateRequest.setAddress(customerShippingAddressForUpdate);

			//console.log(JSON.stringify(updateRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.UpdateCustomerShippingAddressController(updateRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.UpdateCustomerShippingAddressResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Shipping Address After Update', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerShippingAddressRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerAddressId(createCustomerShippingAddressResponse.getCustomerAddressId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerShippingAddressController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerShippingAddressResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return same customer address Id as input when successful', function () {
			
			assert.equal(response.getAddress().getCustomerAddressId(), createCustomerShippingAddressResponse.getCustomerAddressId());
		});

		it('should return updated shipping address when successful', function () {
			
			assert.equal(response.getAddress().getFirstName(), customerShippingAddressForUpdate.getFirstName());
		});
	});

	describe('Get Hosted Profile Page', function () {
		var response;

		before(function(done){

			var setting = new ApiContracts.SettingType();
			setting.setSettingName('hostedProfileReturnUrl');
			setting.setSettingValue('https://returnurl.com/return/');

			var settingList = [];
			settingList.push(setting);

			var alist = new ApiContracts.ArrayOfSetting();
			alist.setSetting(settingList);

			var getRequest = new ApiContracts.GetHostedProfilePageRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setHostedProfileSettings(alist);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetHostedProfilePageController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetHostedProfilePageResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null token when successful', function () {
			
			assert.isNotNull(response.getToken());
			assert.isDefined(response.getToken());
		});

		// it('should return address same as input when successful', function () {
			
		// 	assert.equal(response.getAddress().getFirstName(), testData.customerAddressType.getFirstName());
		// });
	});

	describe('Delete Customer Shipping Address', function () {
		var response;

		before(function(done){

			var deleteRequest = new ApiContracts.DeleteCustomerShippingAddressRequest();
			deleteRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			deleteRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());	
			deleteRequest.setCustomerAddressId(createCustomerShippingAddressResponse.getCustomerAddressId());	

			//console.log(JSON.stringify(deleteRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.DeleteCustomerShippingAddressController(deleteRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.DeleteCustomerShippingAddressResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Shipping Address After Delete', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerShippingAddressRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerAddressId(createCustomerShippingAddressResponse.getCustomerAddressId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerShippingAddressController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerShippingAddressResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode ERROR when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.ERROR);
		});

		it('should return error code E00040 when successful', function () {

			assert.equal(response.getMessages().getMessage()[0].getCode(), 'E00040');
		});
	});

	describe('Delete Customer Payment Profile', function () {
		var response;

		before(function(done){

			var deleteRequest = new ApiContracts.DeleteCustomerPaymentProfileRequest();
			deleteRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			deleteRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());	
			deleteRequest.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());	

			//console.log(JSON.stringify(deleteRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.DeleteCustomerPaymentProfileController(deleteRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.DeleteCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {
			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Payment Profile After Delete', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerPaymentProfileRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());
			getRequest.setCustomerPaymentProfileId(createCustomerPaymentProfileResponse.getCustomerPaymentProfileId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerPaymentProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerPaymentProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode ERROR when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.ERROR);
		});

		it('should return error code E00040 when successful', function () {

			assert.equal(response.getMessages().getMessage()[0].getCode(), 'E00040');
		});
	});

	describe('Delete Customer Profile', function () {
		var response;

		before(function(done){

			var deleteRequest = new ApiContracts.DeleteCustomerProfileRequest();
			deleteRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			deleteRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());

			//console.log(JSON.stringify(deleteRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.DeleteCustomerProfileController(deleteRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.DeleteCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Get Customer Profile After Delete', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetCustomerProfileRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId(createCustomerProfileResponse.getCustomerProfileId());

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetCustomerProfileController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});

		});

		it('should return resultcode ERROR when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.ERROR);
		});

		it('should return error code E00040 when successful', function () {

			assert.equal(response.getMessages().getMessage()[0].getCode(), 'E00040');
		});
	});

	describe('Create Transaction for Create Customer Profile from a Transaction', function () {
		var response;

		before(function(done){

			var customer = new ApiContracts.CustomerDataType();
			customer.setEmail(utils.getRandomString('test') + '@anet.net');

			var requestInternal = new ApiContracts.TransactionRequestType();
			requestInternal.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
			requestInternal.setPayment(testData.paymentType);
			requestInternal.setAmount(utils.getRandomAmount());
			requestInternal.setCustomer(customer);

			var createRequest = new ApiContracts.CreateTransactionRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setTransactionRequest(requestInternal);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateTransactionResponse(apiResponse);

				createTransactionResponse = response;

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {
			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});

	describe('Create Customer Profile from a Transaction', function () {
		var response;

		before(function(done){

			var createRequest = new ApiContracts.CreateCustomerProfileFromTransactionRequest();
			createRequest.setTransId(createTransactionResponse.getTransactionResponse().getTransId());
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.CreateCustomerProfileFromTransactionController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.CreateCustomerProfileResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});
	});
});
