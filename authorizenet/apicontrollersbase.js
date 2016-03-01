"use strict";

var request = require('request');

class APIOperationBase {
    constructor(apiRequest) {
        this._request = null;
        this._response = null;
        this._endpoint = null;
        
        if(null == apiRequest)
            console.log('Input request cannot be null');

        this._request = apiRequest;
    }

    //abstract
	validateRequest(){
		return;
	}

    validate(){
    	anetapirequest = self._getrequest();
    
		self.validateandsetmerchantauthentication();

		this.validaterequest();

		return;
    }

	getResponse(){
		return this._response;
	}
    
    getResultcode(){
		resultcode = null;

        if(this._response)
            resultcode = this._response.resultCode;

        return resultcode;
    }
    
    getMessagetype(){
   		message = null;

        if(self._response)
            message = this._response.message;

        return message;
    }
        
    beforeExecute() {
    }

    execute(callback) {
    	//SANDBOX_TESTMODE = 'https://apitest.authorize.net/xml/v1/request.api'
    	//PRODUCTION = 'https://api.authorize.net/xml/v1/request.api'
        this._endpoint = "https://apitest.authorize.net/xml/v1/request.api";

        this.beforeExecute();

        var obj = this;

		request({
				url: this._endpoint,
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				'Content-Length': this._request.length
				},
				json: true,
				body: this._request
			}, function(error, response, body){
			if(error) {
				console.log(error);
			} else {
				var jsonResponse = JSON.stringify(eval("(" + body + ")"));;
				var responseObj = JSON.parse(jsonResponse);
				obj._response = responseObj;
				callback();
			}
		});
    }
}

module.exports.APIOperationBase = APIOperationBase;
