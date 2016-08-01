'use strict';

var AuthenticateTestController = require('../lib/apicontrollers.js').AuthenticateTestController;

var ApiContracts = require('../lib/apicontracts.js');
var Constants = require('../lib/constants.js').constants;

var merchant = new ApiContracts.MerchantAuthenticationType();
merchant.setName('5KP3u95bQpv');
merchant.setTransactionKey('346HZ32z3fP4hTG2');

var request = new ApiContracts.AuthenticateTestRequest();
request.setMerchantAuthentication(merchant);

var ctrl = new AuthenticateTestController(request.getJSON());
//ctrl.setEnvironment(Constants.endpoint.sandbox);

ctrl.execute(function() {

	var apiResponse = ctrl.getResponse();

	var response = new ApiContracts.AuthenticateTestResponse(apiResponse);

	console.log('Result Code: '+ JSON.stringify(response.getMessages().getResultCode()));
	console.log('Message List: '+ JSON.stringify(response.getMessages().getMessage()));
	console.log('Code: '+ JSON.stringify(response.getMessages().getMessage()[0].getCode()));
	console.log('Text: '+ JSON.stringify(response.getMessages().getMessage()[0].getText()));
});
