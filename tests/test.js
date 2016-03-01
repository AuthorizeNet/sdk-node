"use strict";

var AuthenticateTestController = require('../authorizenet/apicontrollers.js').AuthenticateTestController;

var ApiContracts = require('../authorizenet/apicontracts.js');

var apiLoginKey = "5KP3u95bQpv";
var transactionKey = "4Ktq966gC55GAX7S";


var merchant = new ApiContracts.MerchantAuthenticationType();
merchant.setName("5KP3u95bQpv");
merchant.setTransactionKey("4Ktq966gC55GAX7S");

var request = new ApiContracts.AuthenticateTestRequest();
request.setMerchantAuthentication(merchant);

var ctrl = new AuthenticateTestController(request.getJSON());

ctrl.execute(function() {

	var apiResponse = ctrl.getResponse();

	var response = new ApiContracts.AuthenticateTestResponse(apiResponse);

	console.log('Result Code: '+ JSON.stringify(response.getMessages().getResultCode()));
	console.log('Message List: '+ JSON.stringify(response.getMessages().getMessage()));
	console.log('Code: '+ JSON.stringify(response.getMessages().getMessage()[0].getCode()));
	console.log('Text: '+ JSON.stringify(response.getMessages().getMessage()[0].getText()));
});
