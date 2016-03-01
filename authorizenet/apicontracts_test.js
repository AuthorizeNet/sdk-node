"use strict";

function delete_null_properties(test, recurse) {
    for (var i in test) {
        if (test[i] === null) {
            delete test[i];
        } else if (recurse && typeof test[i] === 'object') {
            delete_null_properties(test[i], recurse);
        }
    }
}

class ImpersonationAuthenticationType {
	constructor() {
		// this.partnerLoginId = null;
		// this.partnerTransactionKey = null;
	}

	setPartnerLoginId(p_partnerLoginId) {
        this.partnerLoginId = p_partnerLoginId;
    }

	setPartnerTransactionKey(p_partnerTransactionKey) {
        this.partnerTransactionKey = p_partnerTransactionKey;
    }

    getPartnerTransactionKey() {
    	return this.partnerTransactionKey;
    }

 	getPartnerLoginId() {
    	return this.partnerLoginId;
    }
}

module.exports.ImpersonationAuthenticationType = ImpersonationAuthenticationType;

class FingerPrintType {
	constructor() {
		// this.hashValue = null;
		// this.sequence = null;
		// this.timestamp = null;
		// this.currencyCode = null;
		// this.amount = null;
	}

	setHashValue(p_hashValue) {
		this.hashValue = p_hashValue;
	}

	setSequence(p_sequence) {
		this.sequence = p_sequence;
	}

	setTimeStamp(p_timestamp) {
		this.timestamp = p_timestamp;
	}

	setCurrencyCode(p_currencyCode) {
		this.currencyCode = p_currencyCode;
	}

	setAmount(p_amount) {
		this.amount = p_amount;
	}

	getHashValue() {
    	return this.hashValue;
    }

	getSequence() {
    	return this.sequence;
    }

    getTimeStamp() {
    	return this.timestamp;
    }

    getCurrencyCode() {
    	return this.currencyCode;
    }

    getAmount() {
    	return this.amount;
    }
}

module.exports.FingerPrintType = FingerPrintType;

class MerchantAuthenticationType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.transactionKey != null) { this.setTransactionKey(obj.transactionKey); }
			if(obj.sessionToken != null) { this.setSessionToken(obj.sessionToken); }
			if(obj.password != null) { this.setPassword(obj.password); }
			if(obj.impersonationAuthentication != null) { this.setImpersonationAuthentication(new ImpersonationAuthenticationType(obj.impersonationAuthentication)); }
			if(obj.fingerPrint != null) { this.setFingerPrint(new FingerPrintType(obj.fingerPrint)); }
			if(obj.mobileDeviceId != null) { this.setMobileDeviceId(obj.mobileDeviceId); }
		}
		else if(arguments.length == 0) {
			this.setName(null);
			this.setTransactionKey(null);
			this.setSessionToken(null);
			this.setPassword(null);
			this.setImpersonationAuthentication(null);
			this.setFingerPrint(null);
			this.setMobileDeviceId(null);
		}
	}

	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setTransactionKey(p_transactionKey) { this.transactionKey = p_transactionKey; }
	getTransactionKey(p_transactionKey) { return this.transactionKey; }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken(p_sessionToken) { return this.sessionToken; }
	setPassword(p_password) { this.password = p_password; }
	getPassword(p_password) { return this.password; }
	setImpersonationAuthentication(p_impersonationAuthentication) { this.impersonationAuthentication = p_impersonationAuthentication; }
	getImpersonationAuthentication(p_impersonationAuthentication) { return this.impersonationAuthentication; }
	setFingerPrint(p_fingerPrint) { this.fingerPrint = p_fingerPrint; }
	getFingerPrint(p_fingerPrint) { return this.fingerPrint; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId(p_mobileDeviceId) { return this.mobileDeviceId; }
}

module.exports.MerchantAuthenticationType = MerchantAuthenticationType;

class AnetApiRequest {

    setMerchantAuthentication(p_merchantAuthentication) {
		this.merchantAuthentication = p_merchantAuthentication;
	}

	setRefId(p_refId) {
		this.refId = p_refId;
	}

    getMerchantAuthentication() {
    	return this.merchantAuthentication;
    }

    getRefId() {
    	return this.refId;
    }
}

module.exports.AnetApiRequest = AnetApiRequest;

class AuthenticateTestRequest extends AnetApiRequest {

    getJSON() {
    	delete_null_properties(this, true);
    	var obj = { "authenticateTestRequest" : this };
    	return obj;
    }
}

module.exports.AuthenticateTestRequest = AuthenticateTestRequest;

class MessagesType {

	constructor(obj) {
		this.setResultCode(obj.resultCode);
		var msgList = [];
		obj.message.forEach(function(item) {
		    msgList.push(new MessagesType.Message(item));
		});
    	this.setMessage(msgList);
	}

    setResultCode(p_resultCode) {
		this.resultCode = p_resultCode;
	}

	setMessage(p_message) {
		this.message = p_message;
	}

	getResultCode() {
		return this.resultCode;
	}

	getMessage() {
		return this.message;
	}
}


MessagesType.Message = class {

	constructor(obj) {
		this.setCode(obj.code);
    	this.setText(obj.text);
	}

    setCode(p_code) {
		this.code = p_code;
	}

	setText(p_text) {
		this.text = p_text;
	}

	getCode() {
		return this.code;
	}

	getText() {
		return this.text;
	}
}

module.exports.MessagesType = MessagesType;

class AnetApiResponse {

	constructor(obj){
		this.setMessages(new MessagesType(obj.messages));
    	this.setRefId(obj.refId);
    	this.setSessionToken(obj.sessionToken);
	}

    setMessages(p_messages) {
		this.messages = p_messages;
	}

	setRefId(p_refId) {
		this.refId = p_refId;
	}

	setSessionToken(p_sessionToken) {
		this.sessionToken = p_sessionToken;
	}

    getMessages() {
    	return this.messages;
    }

    getRefId() {
    	return this.refId;
    }

	getSessionToken() {
    	return this.sessionToken;
    }

    // parseJSON(obj) {
    // 	this.setMessages(obj.messages);
    // 	this.setRefId(obj.refId);
    // 	this.setSessionToken(obj.sessionToken);
    // }
}

module.exports.AnetApiResponse = AnetApiResponse;

class AuthenticateTestResponse extends AnetApiResponse {

	constructor(obj){
		super(obj);
	}

    getJSON() {
    	var obj = { "authenticateTestResponse" : this };
    	return obj;
    }

    // setJSON(response) {
    // 	var obj = { "authenticateTestResponse" : response };
    // 	return obj;
    // }

    // parseJSON(obj) {
    // 	return { "authenticateTestResponse" : obj };
    // }
}

module.exports.AuthenticateTestResponse = AuthenticateTestResponse;

