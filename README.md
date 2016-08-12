[![Travis](https://img.shields.io/travis/AuthorizeNet/sdk-node/master.svg)](https://travis-ci.org/AuthorizeNet/sdk-node)
[![NPM version](https://badge.fury.io/js/authorizenet.png)](http://badge.fury.io/js/authorizenet)

# Authorize.Net Node.js SDK 
** NOTE this SDK is currently in pre-release and should be used for testing/investigation/trial purposes only **



## Prerequisites  

Node.js version 4.1.2 or higher


## Installation
To install AuthorizeNet 

`npm install authorizenet`


## Registration & Configuration

Get a sandbox account at https://developer.authorize.net/sandbox  
Set your API credentials:  

````node
	var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName('YOUR_API_LOGIN_ID');
	merchantAuthenticationType.setTransactionKey('YOUR_TRANSACTION_KEY');
````

## Run AuthenticateTestRequest Sample  

`node sample/test.js`  



## Usage
See our sample code repository at https://github.com/AuthorizeNet/sample-code-node 

For the simplest "Hello World" example, charging a credit card, paste this into a file called charge-credit-card.js and run:

````node
'use strict';

var ApiContracts = require('authorizenet').APIContracts;
var ApiControllers = require('authorizenet').APIControllers;
var utils = require('../utils.js');
var constants = require('../constants.js');

function chargeCreditCard(callback) {
	var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName(constants.apiLoginKey);
	merchantAuthenticationType.setTransactionKey(constants.transactionKey);

	var creditCard = new ApiContracts.CreditCardType();
	creditCard.setCardNumber('4242424242424242');
	creditCard.setExpirationDate('0822');
	creditCard.setCardCode('999');

	var paymentType = new ApiContracts.PaymentType();
	paymentType.setCreditCard(creditCard);

	var transactionRequestType = new ApiContracts.TransactionRequestType();
	transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
	transactionRequestType.setPayment(paymentType);
	transactionRequestType.setAmount(2.99);

	var createRequest = new ApiContracts.CreateTransactionRequest();
	createRequest.setMerchantAuthentication(merchantAuthenticationType);
	createRequest.setTransactionRequest(transactionRequestType);

	//pretty print request
	console.log(JSON.stringify(createRequest.getJSON(), null, 2));
		
	var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

	ctrl.execute(function(){

		var apiResponse = ctrl.getResponse();

		var response = new ApiContracts.CreateTransactionResponse(apiResponse);

		//pretty print response
		console.log(JSON.stringify(response, null, 2));

		if(response != null){
			if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK && 
				response.getTransactionResponse().getResponseCode() == '1'){
				console.log('Transaction ID: ' + response.getTransactionResponse().getTransId());
			}
			else{
				console.log('Result Code: ' + response.getMessages().getResultCode());
				console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
				console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
			}
		}
		else{
			console.log('Null Response.');
		}

		callback(response);
	});
}

if (require.main === module) {
	chargeCreditCard(function(){
		console.log('chargeCreditCard call complete.');
	});
}

module.exports.chargeCreditCard = chargeCreditCard;
````

### Setting Production or Sandbox Environments  
To set the environment, update the lib/config.js configuration endpoint value
````node
// SANDBOX
'endpoint': 'https://apitest.authorize.net/xml/v1/request.api'
// For PRODUCTION use
// 'endpoint': 'https://api2.authorize.net/xml/v1/request.api'
````

## Building and Testing Source Code

### Run All Tests  

`mocha`

## Run Particular Tests  

`mocha test/<testfile>`

