# Authorize.Net Node.js SDK 

[![Travis CI Status](https://travis-ci.org/AuthorizeNet/sdk-node.svg?branch=master)](https://travis-ci.org/AuthorizeNet/sdk-node)
[![NPM version](https://badge.fury.io/js/authorizenet.png)](http://badge.fury.io/js/authorizenet)


## Requirements  
* Node.js version 4.8.4 or higher
* An Authorize.Net account (see _Registration & Configuration_ section below)

### TLS 1.2
The Authorize.Net APIs only support connections using the TLS 1.2 security protocol. It's important to make sure you have new enough versions of all required components to support TLS 1.2. Additionally, it's very important to keep these components up to date going forward to mitigate the risk of any security flaws that may be discovered in your system or any libraries it uses.


## Installation
To install AuthorizeNet 

`npm install authorizenet`


## Registration & Configuration
Use of this SDK and the Authorize.Net APIs requires having an account on our system. You can find these details in the Settings section.
If you don't currently have a production Authorize.Net account and need a sandbox account for testing, you can easily sign up for one [here](https://developer.authorize.net/sandbox/).

### Authentication
To authenticate with the Authorize.Net API you will need to use your account's API Login ID and Transaction Key. If you don't have these values, you can obtain them from our Merchant Interface site. Access the Merchant Interface for production accounts at (https://account.authorize.net/) or sandbox accounts at (https://sandbox.authorize.net).

Once you have your keys simply load them into the appropriate variables in your code, as per the below sample code dealing with the authentication part of the API request. 

#### To set your API credentials for an API request: 
```javascript
	var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName('YOUR_API_LOGIN_ID');
	merchantAuthenticationType.setTransactionKey('YOUR_TRANSACTION_KEY');
```

An authentication test sample is provided and can be run with the following command:
`node sample/test.js`  

You should never include your Login ID and Transaction Key directly in a file that's in a publically accessible portion of your website. A better practice would be to define these in a constants file, and then reference those constants in the appropriate place in your code.

### Switching between the sandbox environment and the production environment
Authorize.Net maintains a complete sandbox environment for testing and development purposes. This sandbox environment is an exact duplicate of our production environment with the transaction authorization and settlement process simulated. By default, this SDK is configured to communicate with the sandbox environment. To switch to the production environment, call `setEnvironment` on the controller variable before execute. For example:
```javascript
// For PRODUCTION use
ctrl.setEnvironment(SDKConstants.endpoint.production);
```

API credentials are different for each environment, so be sure to switch to the appropriate credentials when switching environments.


## SDK Usage Examples and Sample Code
To get started using this SDK, it's highly recommended to download our sample code repository:
* [Authorize.Net Node.js Sample Code Repository (on GitHub)](https://github.com/AuthorizeNet/sample-code-node)

In that respository, we have comprehensive sample code for all common uses of our API:

Additionally, you can find details and examples of how our API is structured in our API Reference Guide:
* [Developer Center API Reference](http://developer.authorize.net/api/reference/index.html)

The API Reference Guide provides examples of what information is needed for a particular request and how that information would be formatted. Using those examples, you can easily determine what methods would be necessary to include that information in a request using this SDK.


## Building & Testing the SDK

### Running the SDK Tests
`mocha`

### Run Particular Tests  
`mocha test/<testfile>`

### Testing Guide
For additional help in testing your own code, Authorize.Net maintains a [comprehensive testing guide](http://developer.authorize.net/hello_world/testing_guide/) that includes test credit card numbers to use and special triggers to generate certain responses from the sandbox environment.


## License
This repository is distributed under a proprietary license. See the provided [`LICENSE.txt`](/LICENSE.txt) file.