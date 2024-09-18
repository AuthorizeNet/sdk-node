# Authorize.Net Node.js SDK 

[![Authorize.net Node.js CI](https://github.com/AuthorizeNet/sdk-node/actions/workflows/nodejs-workflow.yml/badge.svg?branch=master)](https://github.com/AuthorizeNet/sdk-node/actions/workflows/nodejs-workflow.yml)
[![NPM version](https://badge.fury.io/js/authorizenet.png)](http://badge.fury.io/js/authorizenet)


## Requirements  
* Node.js version 14.x.x or higher
* An Authorize.Net account (see _Registration & Configuration_ section below)

### Contribution  
  - If you need information or clarification about Authorize.Net features, create an issue with your question. You can also search the [Authorize.Net developer community](https://community.developer.authorize.net/) for discussions related to your question.
  - Before creating pull requests, please read [the contributors guide](CONTRIBUTING.md).

### TLS 1.2
The Authorize.Net APIs only support connections using the TLS 1.2 security protocol. Make sure to upgrade all required components to support TLS 1.2. Keep these components up to date to mitigate the risk of new security flaws.


## Installation
To install AuthorizeNet 

`npm install authorizenet`


## Registration & Configuration
Use of this SDK and the Authorize.Net APIs requires having an account on the Authorize.Net system. You can find these details in the Settings section.
If you don't currently have a production Authorize.Net account, [sign up for a sandbox account](https://developer.authorize.net/sandbox/).

### Authentication
To authenticate with the Authorize.Net API, use your account's API Login ID and Transaction Key. If you don't have these credentials, you can obtain them from our Merchant Interface site. For production accounts, the Merchant Interface is located at (https://account.authorize.net/); and for sandbox accounts, at (https://sandbox.authorize.net).

Once you have your keys simply load them into the appropriate variables in your code, as per the below sample code dealing with the authentication part of the API request. 

#### To set your API credentials for an API request: 
```javascript
	var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName('YOUR_API_LOGIN_ID');
	merchantAuthenticationType.setTransactionKey('YOUR_TRANSACTION_KEY');
```

An authentication test sample is provided and can be run with the following command:
`node sample/test.js`  

Never include your Login ID and Transaction Key directly in a file that's in a publicly accessible portion of your website. As a best practice, define the API Login ID and Transaction Key in a constants file, and reference those constants in the appropriate place in your code.

### Switching between the sandbox environment and the production environment
Authorize.Net maintains a complete sandbox environment for testing and development purposes. The sandbox environment is an exact replica of our production environment, with simulated transaction authorization and settlement. By default, this SDK is configured to use with the sandbox environment. To switch to the production environment, call `setEnvironment` on the controller variable before execute. For example:
```javascript
// For PRODUCTION use
ctrl.setEnvironment(SDKConstants.endpoint.production);
```

API credentials are different for each environment, so be sure to switch to the appropriate credentials when switching environments.


## SDK Usage Examples and Sample Code
When using this SDK, downloading the Authorize.Net sample code repository is recommended.
* [Authorize.Net Node.js Sample Code Repository (on GitHub)](https://github.com/AuthorizeNet/sample-code-node)

The repository contains comprehensive sample code for all common uses of the Authorize.Net API:

The API Reference contains details and examples of the structure and formatting of the Authorize.Net API.
* [Developer Center API Reference](http://developer.authorize.net/api/reference/index.html)

Use the examples in the API Reference to determine which methods and information to include in an API request using this SDK.

## Create a Chase Pay Transaction

Use this method to authorize and capture a payment using a tokenized credit card number issued by Chase Pay. Chase Pay transactions are only available to merchants using the Paymentech processor.

The following information is required in the request:
- **payment token**
- **expiration date**
- **cryptogram** received from the token provider
- **tokenRequestorName**
- **tokenRequestorId**
- **tokenRequestorEci**

When using the SDK to submit Chase Pay transactions, consider the following points:
- `tokenRequesterName` must be populated with **`”CHASE_PAY”`**
- `tokenRequestorId` must be populated with the **`Token Requestor ID`** provided by Chase Pay services for each transaction during consumer checkout
- `tokenRequesterEci` must be populated with the **`ECI Indicator`** provided by Chase Pay services for each transaction during consumer checkout  


## Building & Testing the SDK

### Running the SDK Tests
`mocha`

### Run Particular Tests  
`mocha test/<testfile>`

### Testing Guide
For additional help in testing your own code, Authorize.Net maintains a [comprehensive testing guide](http://developer.authorize.net/hello_world/testing_guide/) that includes test credit card numbers to use and special triggers to generate certain responses from the sandbox environment.

### Transaction Hash Upgrade
Authorize.Net is phasing out the MD5 based `transHash` element in favor of the SHA-512 based `transHashSHA2`. The setting in the Merchant Interface which controlled the MD5 Hash option is no longer available, and the `transHash` element will stop returning values at a later date to be determined. For information on how to use `transHashSHA2`, see the [Transaction Hash Upgrade Guide] (https://developer.authorize.net/support/hash_upgrade/).

## License
This repository is distributed under a proprietary license. See the provided [`LICENSE.txt`](/LICENSE.txt) file.
