"use strict";

var utils = require('./utils.js');

class TransRetailInfoType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.marketType != null) { this.setMarketType(obj.marketType); }
			if(obj.deviceType != null) { this.setDeviceType(obj.deviceType); }
		}
		else {
			this.setMarketType(null);
			this.setDeviceType(null);
		}
	}

	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType(p_marketType) { return this.marketType; }
	setDeviceType(p_deviceType) { this.deviceType = p_deviceType; }
	getDeviceType(p_deviceType) { return this.deviceType; }
}

module.exports.TransRetailInfoType = TransRetailInfoType;

class PaymentSimpleType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.creditCard != null) { this.setCreditCard(new CreditCardSimpleType(obj.creditCard)); }
			if(obj.bankAccount != null) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
		}
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard(p_creditCard) { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount(p_bankAccount) { return this.bankAccount; }
}

module.exports.PaymentSimpleType = PaymentSimpleType;

class TransactionResponse {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.responseCode != null) { this.setResponseCode(obj.responseCode); }
			if(obj.rawResponseCode != null) { this.setRawResponseCode(obj.rawResponseCode); }
			if(obj.authCode != null) { this.setAuthCode(obj.authCode); }
			if(obj.avsResultCode != null) { this.setAvsResultCode(obj.avsResultCode); }
			if(obj.cvvResultCode != null) { this.setCvvResultCode(obj.cvvResultCode); }
			if(obj.cavvResultCode != null) { this.setCavvResultCode(obj.cavvResultCode); }
			if(obj.transId != null) { this.setTransId(obj.transId); }
			if(obj.refTransID != null) { this.setRefTransID(obj.refTransID); }
			if(obj.transHash != null) { this.setTransHash(obj.transHash); }
			if(obj.testRequest != null) { this.setTestRequest(obj.testRequest); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.splitTenderId != null) { this.setSplitTenderId(obj.splitTenderId); }
			if(obj.prePaidCard != null) { this.setPrePaidCard(new TransactionResponse.PrePaidCard(obj.prePaidCard)); }
			if(obj.messages != null) { this.setMessages(new TransactionResponse.Messages(obj.messages)); }
			if(obj.errors != null) { this.setErrors(new TransactionResponse.Errors(obj.errors)); }
			if(obj.splitTenderPayments != null) { this.setSplitTenderPayments(new TransactionResponse.SplitTenderPayments(obj.splitTenderPayments)); }
			if(obj.userFields != null) { this.setUserFields(new TransactionResponse.UserFields(obj.userFields)); }
			if(obj.shipTo != null) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(obj.secureAcceptance != null) { this.setSecureAcceptance(new TransactionResponse.SecureAcceptance(obj.secureAcceptance)); }
		}
		else {
			this.setResponseCode(null);
			this.setRawResponseCode(null);
			this.setAuthCode(null);
			this.setAvsResultCode(null);
			this.setCvvResultCode(null);
			this.setCavvResultCode(null);
			this.setTransId(null);
			this.setRefTransID(null);
			this.setTransHash(null);
			this.setTestRequest(null);
			this.setAccountNumber(null);
			this.setAccountType(null);
			this.setSplitTenderId(null);
			this.setPrePaidCard(null);
			this.setMessages(null);
			this.setErrors(null);
			this.setSplitTenderPayments(null);
			this.setUserFields(null);
			this.setShipTo(null);
			this.setSecureAcceptance(null);
		}
	}

	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode(p_responseCode) { return this.responseCode; }
	setRawResponseCode(p_rawResponseCode) { this.rawResponseCode = p_rawResponseCode; }
	getRawResponseCode(p_rawResponseCode) { return this.rawResponseCode; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode(p_authCode) { return this.authCode; }
	setAvsResultCode(p_avsResultCode) { this.avsResultCode = p_avsResultCode; }
	getAvsResultCode(p_avsResultCode) { return this.avsResultCode; }
	setCvvResultCode(p_cvvResultCode) { this.cvvResultCode = p_cvvResultCode; }
	getCvvResultCode(p_cvvResultCode) { return this.cvvResultCode; }
	setCavvResultCode(p_cavvResultCode) { this.cavvResultCode = p_cavvResultCode; }
	getCavvResultCode(p_cavvResultCode) { return this.cavvResultCode; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
	setRefTransID(p_refTransID) { this.refTransID = p_refTransID; }
	getRefTransID(p_refTransID) { return this.refTransID; }
	setTransHash(p_transHash) { this.transHash = p_transHash; }
	getTransHash(p_transHash) { return this.transHash; }
	setTestRequest(p_testRequest) { this.testRequest = p_testRequest; }
	getTestRequest(p_testRequest) { return this.testRequest; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId(p_splitTenderId) { return this.splitTenderId; }
	setPrePaidCard(p_prePaidCard) { this.prePaidCard = p_prePaidCard; }
	getPrePaidCard(p_prePaidCard) { return this.prePaidCard; }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages(p_messages) { return this.messages; }
	setErrors(p_errors) { this.errors = p_errors; }
	getErrors(p_errors) { return this.errors; }
	setSplitTenderPayments(p_splitTenderPayments) { this.splitTenderPayments = p_splitTenderPayments; }
	getSplitTenderPayments(p_splitTenderPayments) { return this.splitTenderPayments; }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields(p_userFields) { return this.userFields; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo(p_shipTo) { return this.shipTo; }
	setSecureAcceptance(p_secureAcceptance) { this.secureAcceptance = p_secureAcceptance; }
	getSecureAcceptance(p_secureAcceptance) { return this.secureAcceptance; }
}

module.exports.TransactionResponse = TransactionResponse;

class BatchDetailsType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.batchId != null) { this.setBatchId(obj.batchId); }
			if(obj.settlementTimeUTC != null) { this.setSettlementTimeUTC(obj.settlementTimeUTC); }
			if(obj.settlementTimeLocal != null) { this.setSettlementTimeLocal(obj.settlementTimeLocal); }
			if(obj.settlementState != null) { this.setSettlementState(obj.settlementState); }
			if(obj.paymentMethod != null) { this.setPaymentMethod(obj.paymentMethod); }
			if(obj.marketType != null) { this.setMarketType(obj.marketType); }
			if(obj.product != null) { this.setProduct(obj.product); }
			if(obj.statistics != null) { this.setStatistics(new ArrayOfBatchStatisticType(obj.statistics)); }
		}
		else {
			this.setBatchId(null);
			this.setSettlementTimeUTC(null);
			this.setSettlementTimeLocal(null);
			this.setSettlementState(null);
			this.setPaymentMethod(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setStatistics(null);
		}
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId(p_batchId) { return this.batchId; }
	setSettlementTimeUTC(p_settlementTimeUTC) { this.settlementTimeUTC = p_settlementTimeUTC; }
	getSettlementTimeUTC(p_settlementTimeUTC) { return this.settlementTimeUTC; }
	setSettlementTimeLocal(p_settlementTimeLocal) { this.settlementTimeLocal = p_settlementTimeLocal; }
	getSettlementTimeLocal(p_settlementTimeLocal) { return this.settlementTimeLocal; }
	setSettlementState(p_settlementState) { this.settlementState = p_settlementState; }
	getSettlementState(p_settlementState) { return this.settlementState; }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod(p_paymentMethod) { return this.paymentMethod; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType(p_marketType) { return this.marketType; }
	setProduct(p_product) { this.product = p_product; }
	getProduct(p_product) { return this.product; }
	setStatistics(p_statistics) { this.statistics = p_statistics; }
	getStatistics(p_statistics) { return this.statistics; }
}

module.exports.BatchDetailsType = BatchDetailsType;

class MessagesType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.resultCode != null) { this.setResultCode(obj.resultCode); }
			if((obj.message != undefined) && (obj.message != null)) {
				var messageList = [];
				obj.message.forEach(function(item) {messageList.push(new MessagesType.Message(item))}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setResultCode(null);
			this.setMessage(null);
		}
	}

	setResultCode(p_resultCode) { this.resultCode = p_resultCode; }
	getResultCode(p_resultCode) { return this.resultCode; }
	setMessage(p_message) { this.message = p_message; }
	getMessage(p_message) { return this.message; }
}

module.exports.MessagesType = MessagesType;

class ImpersonationAuthenticationType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.partnerLoginId != null) { this.setPartnerLoginId(obj.partnerLoginId); }
			if(obj.partnerTransactionKey != null) { this.setPartnerTransactionKey(obj.partnerTransactionKey); }
		}
		else {
			this.setPartnerLoginId(null);
			this.setPartnerTransactionKey(null);
		}
	}

	setPartnerLoginId(p_partnerLoginId) { this.partnerLoginId = p_partnerLoginId; }
	getPartnerLoginId(p_partnerLoginId) { return this.partnerLoginId; }
	setPartnerTransactionKey(p_partnerTransactionKey) { this.partnerTransactionKey = p_partnerTransactionKey; }
	getPartnerTransactionKey(p_partnerTransactionKey) { return this.partnerTransactionKey; }
}

module.exports.ImpersonationAuthenticationType = ImpersonationAuthenticationType;

class CustomerPaymentProfileListItemType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.billTo != null) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(obj.payment != null) { this.setPayment(new PaymentMaskedType(obj.payment)); }
		}
		else {
			this.setCustomerPaymentProfileId(null);
			this.setCustomerProfileId(null);
			this.setBillTo(null);
			this.setPayment(null);
		}
	}

	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo(p_billTo) { return this.billTo; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
}

module.exports.CustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType;

class ANetApiRequest {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.merchantAuthentication != null) { this.setMerchantAuthentication(new MerchantAuthenticationType(obj.merchantAuthentication)); }
			if(obj.refId != null) { this.setRefId(obj.refId); }
		}
		else {
			this.setMerchantAuthentication(null);
			this.setRefId(null);
		}
	}

	setMerchantAuthentication(p_merchantAuthentication) { this.merchantAuthentication = p_merchantAuthentication; }
	getMerchantAuthentication(p_merchantAuthentication) { return this.merchantAuthentication; }
	setRefId(p_refId) { this.refId = p_refId; }
	getRefId(p_refId) { return this.refId; }
}

module.exports.ANetApiRequest = ANetApiRequest;

class ARBSubscriptionMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.paymentSchedule != null) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.trialAmount != null) { this.setTrialAmount(obj.trialAmount); }
			if(obj.status != null) { this.setStatus(obj.status); }
			if(obj.profile != null) { this.setProfile(new SubscriptionCustomerProfileType(obj.profile)); }
			if(obj.order != null) { this.setOrder(new OrderType(obj.order)); }
		}
		else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setStatus(null);
			this.setProfile(null);
			this.setOrder(null);
		}
	}

	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule(p_paymentSchedule) { return this.paymentSchedule; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount(p_trialAmount) { return this.trialAmount; }
	setStatus(p_status) { this.status = p_status; }
	getStatus(p_status) { return this.status; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile(p_profile) { return this.profile; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
}

module.exports.ARBSubscriptionMaskedType = ARBSubscriptionMaskedType;

class EncryptedTrackDataType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.FormOfPayment != null) { this.setFormOfPayment(new KeyBlock(obj.FormOfPayment)); }
		}
		else {
			this.setFormOfPayment(null);
		}
	}

	setFormOfPayment(p_FormOfPayment) { this.FormOfPayment = p_FormOfPayment; }
	getFormOfPayment(p_FormOfPayment) { return this.FormOfPayment; }
}

module.exports.EncryptedTrackDataType = EncryptedTrackDataType;

class CustomerPaymentProfileSorting {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.orderBy != null) { this.setOrderBy(obj.orderBy); }
			if(obj.orderDescending != null) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy(p_orderBy) { return this.orderBy; }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending(p_orderDescending) { return this.orderDescending; }
}

module.exports.CustomerPaymentProfileSorting = CustomerPaymentProfileSorting;

class PaymentMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.creditCard != null) { this.setCreditCard(new CreditCardMaskedType(obj.creditCard)); }
			if(obj.bankAccount != null) { this.setBankAccount(new BankAccountMaskedType(obj.bankAccount)); }
			if(obj.tokenInformation != null) { this.setTokenInformation(new TokenMaskedType(obj.tokenInformation)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTokenInformation(null);
		}
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard(p_creditCard) { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount(p_bankAccount) { return this.bankAccount; }
	setTokenInformation(p_tokenInformation) { this.tokenInformation = p_tokenInformation; }
	getTokenInformation(p_tokenInformation) { return this.tokenInformation; }
}

module.exports.PaymentMaskedType = PaymentMaskedType;

class ArrayOfLong {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var longList = [];
				obj.forEach(function(item) {longList.push(new ong(item))}); 
				this.setLong(longList);
			}
		}
		else {
			this.setLong(null);
		}
	}

	setLong(p_long) { this.long = p_long; }
	getLong(p_long) { return this.long; }
}

module.exports.ArrayOfLong = ArrayOfLong;

class Paging {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.limit != null) { this.setLimit(obj.limit); }
			if(obj.offset != null) { this.setOffset(obj.offset); }
		}
		else {
			this.setLimit(null);
			this.setOffset(null);
		}
	}

	setLimit(p_limit) { this.limit = p_limit; }
	getLimit(p_limit) { return this.limit; }
	setOffset(p_offset) { this.offset = p_offset; }
	getOffset(p_offset) { return this.offset; }
}

module.exports.Paging = Paging;

class ArrayOfSubscription {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var subscriptionDetailList = [];
				obj.forEach(function(item) {subscriptionDetailList.push(new SubscriptionDetail(item))}); 
				this.setSubscriptionDetail(subscriptionDetailList);
			}
		}
		else {
			this.setSubscriptionDetail(null);
		}
	}

	setSubscriptionDetail(p_subscriptionDetail) { this.subscriptionDetail = p_subscriptionDetail; }
	getSubscriptionDetail(p_subscriptionDetail) { return this.subscriptionDetail; }
}

module.exports.ArrayOfSubscription = ArrayOfSubscription;

class ARBSubscriptionType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.paymentSchedule != null) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.trialAmount != null) { this.setTrialAmount(obj.trialAmount); }
			if(obj.payment != null) { this.setPayment(new PaymentType(obj.payment)); }
			if(obj.order != null) { this.setOrder(new OrderType(obj.order)); }
			if(obj.customer != null) { this.setCustomer(new CustomerType(obj.customer)); }
			if(obj.billTo != null) { this.setBillTo(new NameAndAddressType(obj.billTo)); }
			if(obj.shipTo != null) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
		}
		else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setPayment(null);
			this.setOrder(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
		}
	}

	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule(p_paymentSchedule) { return this.paymentSchedule; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount(p_trialAmount) { return this.trialAmount; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer(p_customer) { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo(p_billTo) { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo(p_shipTo) { return this.shipTo; }
}

module.exports.ARBSubscriptionType = ARBSubscriptionType;

class ReturnedItemType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.dateUTC != null) { this.setDateUTC(obj.dateUTC); }
			if(obj.dateLocal != null) { this.setDateLocal(obj.dateLocal); }
			if(obj.code != null) { this.setCode(obj.code); }
			if(obj.description != null) { this.setDescription(obj.description); }
		}
		else {
			this.setId(null);
			this.setDateUTC(null);
			this.setDateLocal(null);
			this.setCode(null);
			this.setDescription(null);
		}
	}

	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setDateUTC(p_dateUTC) { this.dateUTC = p_dateUTC; }
	getDateUTC(p_dateUTC) { return this.dateUTC; }
	setDateLocal(p_dateLocal) { this.dateLocal = p_dateLocal; }
	getDateLocal(p_dateLocal) { return this.dateLocal; }
	setCode(p_code) { this.code = p_code; }
	getCode(p_code) { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
}

module.exports.ReturnedItemType = ReturnedItemType;

class NameAndAddressType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.firstName != null) { this.setFirstName(obj.firstName); }
			if(obj.lastName != null) { this.setLastName(obj.lastName); }
			if(obj.company != null) { this.setCompany(obj.company); }
			if(obj.address != null) { this.setAddress(obj.address); }
			if(obj.city != null) { this.setCity(obj.city); }
			if(obj.state != null) { this.setState(obj.state); }
			if(obj.zip != null) { this.setZip(obj.zip); }
			if(obj.country != null) { this.setCountry(obj.country); }
		}
		else {
			this.setFirstName(null);
			this.setLastName(null);
			this.setCompany(null);
			this.setAddress(null);
			this.setCity(null);
			this.setState(null);
			this.setZip(null);
			this.setCountry(null);
		}
	}

	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName(p_firstName) { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName(p_lastName) { return this.lastName; }
	setCompany(p_company) { this.company = p_company; }
	getCompany(p_company) { return this.company; }
	setAddress(p_address) { this.address = p_address; }
	getAddress(p_address) { return this.address; }
	setCity(p_city) { this.city = p_city; }
	getCity(p_city) { return this.city; }
	setState(p_state) { this.state = p_state; }
	getState(p_state) { return this.state; }
	setZip(p_zip) { this.zip = p_zip; }
	getZip(p_zip) { return this.zip; }
	setCountry(p_country) { this.country = p_country; }
	getCountry(p_country) { return this.country; }
}

module.exports.NameAndAddressType = NameAndAddressType;

class SettingType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.settingName != null) { this.setSettingName(obj.settingName); }
			if(obj.settingValue != null) { this.setSettingValue(obj.settingValue); }
		}
		else {
			this.setSettingName(null);
			this.setSettingValue(null);
		}
	}

	setSettingName(p_settingName) { this.settingName = p_settingName; }
	getSettingName(p_settingName) { return this.settingName; }
	setSettingValue(p_settingValue) { this.settingValue = p_settingValue; }
	getSettingValue(p_settingValue) { return this.settingValue; }
}

module.exports.SettingType = SettingType;

class WebCheckOutDataType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.type != null) { this.setType(obj.type); }
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.token != null) { this.setToken(new WebCheckOutDataType.Token(obj.token)); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setToken(null);
		}
	}

	setType(p_type) { this.type = p_type; }
	getType(p_type) { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setToken(p_token) { this.token = p_token; }
	getToken(p_token) { return this.token; }
}

module.exports.WebCheckOutDataType = WebCheckOutDataType;

class SecurePaymentContainerErrorType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.code != null) { this.setCode(obj.code); }
			if(obj.description != null) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
	}

	setCode(p_code) { this.code = p_code; }
	getCode(p_code) { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
}

module.exports.SecurePaymentContainerErrorType = SecurePaymentContainerErrorType;

class ArrayOfSetting {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var settingList = [];
				obj.forEach(function(item) {settingList.push(new SettingType(item))}); 
				this.setSetting(settingList);
			}
		}
		else {
			this.setSetting(null);
		}
	}

	setSetting(p_setting) { this.setting = p_setting; }
	getSetting(p_setting) { return this.setting; }
}

module.exports.ArrayOfSetting = ArrayOfSetting;

class KeyValue {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.Encoding != null) { this.setEncoding(obj.Encoding); }
			if(obj.EncryptionAlgorithm != null) { this.setEncryptionAlgorithm(obj.EncryptionAlgorithm); }
			if(obj.Scheme != null) { this.setScheme(new KeyManagementScheme(obj.Scheme)); }
		}
		else {
			this.setEncoding(null);
			this.setEncryptionAlgorithm(null);
			this.setScheme(null);
		}
	}

	setEncoding(p_Encoding) { this.Encoding = p_Encoding; }
	getEncoding(p_Encoding) { return this.Encoding; }
	setEncryptionAlgorithm(p_EncryptionAlgorithm) { this.EncryptionAlgorithm = p_EncryptionAlgorithm; }
	getEncryptionAlgorithm(p_EncryptionAlgorithm) { return this.EncryptionAlgorithm; }
	setScheme(p_Scheme) { this.Scheme = p_Scheme; }
	getScheme(p_Scheme) { return this.Scheme; }
}

module.exports.KeyValue = KeyValue;

class SubscriptionPaymentType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.payNum != null) { this.setPayNum(obj.payNum); }
		}
		else {
			this.setId(null);
			this.setPayNum(null);
		}
	}

	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setPayNum(p_payNum) { this.payNum = p_payNum; }
	getPayNum(p_payNum) { return this.payNum; }
}

module.exports.SubscriptionPaymentType = SubscriptionPaymentType;

class CustomerDataType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.type != null) { this.setType(obj.type); }
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.email != null) { this.setEmail(obj.email); }
			if(obj.driversLicense != null) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(obj.taxId != null) { this.setTaxId(obj.taxId); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
	}

	setType(p_type) { this.type = p_type; }
	getType(p_type) { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setEmail(p_email) { this.email = p_email; }
	getEmail(p_email) { return this.email; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense(p_driversLicense) { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId(p_taxId) { return this.taxId; }
}

module.exports.CustomerDataType = CustomerDataType;

class TransactionSummaryType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.transId != null) { this.setTransId(obj.transId); }
			if(obj.submitTimeUTC != null) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(obj.submitTimeLocal != null) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(obj.transactionStatus != null) { this.setTransactionStatus(obj.transactionStatus); }
			if(obj.invoiceNumber != null) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(obj.firstName != null) { this.setFirstName(obj.firstName); }
			if(obj.lastName != null) { this.setLastName(obj.lastName); }
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.settleAmount != null) { this.setSettleAmount(obj.settleAmount); }
			if(obj.marketType != null) { this.setMarketType(obj.marketType); }
			if(obj.product != null) { this.setProduct(obj.product); }
			if(obj.mobileDeviceId != null) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(obj.subscription != null) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(obj.hasReturnedItems != null) { this.setHasReturnedItems(obj.hasReturnedItems); }
		}
		else {
			this.setTransId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionStatus(null);
			this.setInvoiceNumber(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setAccountType(null);
			this.setAccountNumber(null);
			this.setSettleAmount(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setMobileDeviceId(null);
			this.setSubscription(null);
			this.setHasReturnedItems(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC(p_submitTimeUTC) { return this.submitTimeUTC; }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal(p_submitTimeLocal) { return this.submitTimeLocal; }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus(p_transactionStatus) { return this.transactionStatus; }
	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber(p_invoiceNumber) { return this.invoiceNumber; }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName(p_firstName) { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName(p_lastName) { return this.lastName; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount(p_settleAmount) { return this.settleAmount; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType(p_marketType) { return this.marketType; }
	setProduct(p_product) { this.product = p_product; }
	getProduct(p_product) { return this.product; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId(p_mobileDeviceId) { return this.mobileDeviceId; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription(p_subscription) { return this.subscription; }
	setHasReturnedItems(p_hasReturnedItems) { this.hasReturnedItems = p_hasReturnedItems; }
	getHasReturnedItems(p_hasReturnedItems) { return this.hasReturnedItems; }
}

module.exports.TransactionSummaryType = TransactionSummaryType;

class KeyBlock {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.Value != null) { this.setValue(new KeyValue(obj.Value)); }
		}
		else {
			this.setValue(null);
		}
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue(p_Value) { return this.Value; }
}

module.exports.KeyBlock = KeyBlock;

class SolutionType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.vendorName != null) { this.setVendorName(obj.vendorName); }
		}
		else {
			this.setId(null);
			this.setName(null);
			this.setVendorName(null);
		}
	}

	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setVendorName(p_vendorName) { this.vendorName = p_vendorName; }
	getVendorName(p_vendorName) { return this.vendorName; }
}

module.exports.SolutionType = SolutionType;

class PaymentProfile {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.paymentProfileId != null) { this.setPaymentProfileId(obj.paymentProfileId); }
			if(obj.cardCode != null) { this.setCardCode(obj.cardCode); }
		}
		else {
			this.setPaymentProfileId(null);
			this.setCardCode(null);
		}
	}

	setPaymentProfileId(p_paymentProfileId) { this.paymentProfileId = p_paymentProfileId; }
	getPaymentProfileId(p_paymentProfileId) { return this.paymentProfileId; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode(p_cardCode) { return this.cardCode; }
}

module.exports.PaymentProfile = PaymentProfile;

class SubscriptionDetail {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.status != null) { this.setStatus(obj.status); }
			if(obj.createTimeStampUTC != null) { this.setCreateTimeStampUTC(obj.createTimeStampUTC); }
			if(obj.firstName != null) { this.setFirstName(obj.firstName); }
			if(obj.lastName != null) { this.setLastName(obj.lastName); }
			if(obj.totalOccurrences != null) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(obj.pastOccurrences != null) { this.setPastOccurrences(obj.pastOccurrences); }
			if(obj.paymentMethod != null) { this.setPaymentMethod(obj.paymentMethod); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.invoice != null) { this.setInvoice(obj.invoice); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.currencyCode != null) { this.setCurrencyCode(obj.currencyCode); }
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingProfileId != null) { this.setCustomerShippingProfileId(obj.customerShippingProfileId); }
		}
		else {
			this.setId(null);
			this.setName(null);
			this.setStatus(null);
			this.setCreateTimeStampUTC(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setTotalOccurrences(null);
			this.setPastOccurrences(null);
			this.setPaymentMethod(null);
			this.setAccountNumber(null);
			this.setInvoice(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingProfileId(null);
		}
	}

	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setStatus(p_status) { this.status = p_status; }
	getStatus(p_status) { return this.status; }
	setCreateTimeStampUTC(p_createTimeStampUTC) { this.createTimeStampUTC = p_createTimeStampUTC; }
	getCreateTimeStampUTC(p_createTimeStampUTC) { return this.createTimeStampUTC; }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName(p_firstName) { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName(p_lastName) { return this.lastName; }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences(p_totalOccurrences) { return this.totalOccurrences; }
	setPastOccurrences(p_pastOccurrences) { this.pastOccurrences = p_pastOccurrences; }
	getPastOccurrences(p_pastOccurrences) { return this.pastOccurrences; }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod(p_paymentMethod) { return this.paymentMethod; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setInvoice(p_invoice) { this.invoice = p_invoice; }
	getInvoice(p_invoice) { return this.invoice; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode(p_currencyCode) { return this.currencyCode; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingProfileId(p_customerShippingProfileId) { this.customerShippingProfileId = p_customerShippingProfileId; }
	getCustomerShippingProfileId(p_customerShippingProfileId) { return this.customerShippingProfileId; }
}

module.exports.SubscriptionDetail = SubscriptionDetail;

class CustomerProfilePaymentType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.createProfile != null) { this.setCreateProfile(obj.createProfile); }
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.paymentProfile != null) { this.setPaymentProfile(new PaymentProfile(obj.paymentProfile)); }
			if(obj.shippingProfileId != null) { this.setShippingProfileId(obj.shippingProfileId); }
		}
		else {
			this.setCreateProfile(null);
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setShippingProfileId(null);
		}
	}

	setCreateProfile(p_createProfile) { this.createProfile = p_createProfile; }
	getCreateProfile(p_createProfile) { return this.createProfile; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
	setShippingProfileId(p_shippingProfileId) { this.shippingProfileId = p_shippingProfileId; }
	getShippingProfileId(p_shippingProfileId) { return this.shippingProfileId; }
}

module.exports.CustomerProfilePaymentType = CustomerProfilePaymentType;

class ArrayOfBatchStatisticType {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var statisticList = [];
				obj.forEach(function(item) {statisticList.push(new BatchStatisticType(item))}); 
				this.setStatistic(statisticList);
			}
		}
		else {
			this.setStatistic(null);
		}
	}

	setStatistic(p_statistic) { this.statistic = p_statistic; }
	getStatistic(p_statistic) { return this.statistic; }
}

module.exports.ArrayOfBatchStatisticType = ArrayOfBatchStatisticType;

class ArrayOfCustomerPaymentProfileListItemType {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var paymentProfileList = [];
				obj.forEach(function(item) {paymentProfileList.push(new CustomerPaymentProfileListItemType(item))}); 
				this.setPaymentProfile(paymentProfileList);
			}
		}
		else {
			this.setPaymentProfile(null);
		}
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
}

module.exports.ArrayOfCustomerPaymentProfileListItemType = ArrayOfCustomerPaymentProfileListItemType;

class TransactionDetailsType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.transId != null) { this.setTransId(obj.transId); }
			if(obj.refTransId != null) { this.setRefTransId(obj.refTransId); }
			if(obj.splitTenderId != null) { this.setSplitTenderId(obj.splitTenderId); }
			if(obj.submitTimeUTC != null) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(obj.submitTimeLocal != null) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(obj.transactionType != null) { this.setTransactionType(obj.transactionType); }
			if(obj.transactionStatus != null) { this.setTransactionStatus(obj.transactionStatus); }
			if(obj.responseCode != null) { this.setResponseCode(obj.responseCode); }
			if(obj.responseReasonCode != null) { this.setResponseReasonCode(obj.responseReasonCode); }
			if(obj.subscription != null) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(obj.responseReasonDescription != null) { this.setResponseReasonDescription(obj.responseReasonDescription); }
			if(obj.authCode != null) { this.setAuthCode(obj.authCode); }
			if(obj.AVSResponse != null) { this.setAVSResponse(obj.AVSResponse); }
			if(obj.cardCodeResponse != null) { this.setCardCodeResponse(obj.cardCodeResponse); }
			if(obj.CAVVResponse != null) { this.setCAVVResponse(obj.CAVVResponse); }
			if(obj.FDSFilterAction != null) { this.setFDSFilterAction(obj.FDSFilterAction); }
			if(obj.FDSFilters != null) { this.setFDSFilters(new ArrayOfFDSFilter(obj.FDSFilters)); }
			if(obj.batch != null) { this.setBatch(new BatchDetailsType(obj.batch)); }
			if(obj.order != null) { this.setOrder(new OrderExType(obj.order)); }
			if(obj.requestedAmount != null) { this.setRequestedAmount(obj.requestedAmount); }
			if(obj.authAmount != null) { this.setAuthAmount(obj.authAmount); }
			if(obj.settleAmount != null) { this.setSettleAmount(obj.settleAmount); }
			if(obj.tax != null) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(obj.shipping != null) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(obj.duty != null) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(obj.lineItems != null) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(obj.prepaidBalanceRemaining != null) { this.setPrepaidBalanceRemaining(obj.prepaidBalanceRemaining); }
			if(obj.taxExempt != null) { this.setTaxExempt(obj.taxExempt); }
			if(obj.payment != null) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(obj.customer != null) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(obj.billTo != null) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(obj.shipTo != null) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(obj.recurringBilling != null) { this.setRecurringBilling(obj.recurringBilling); }
			if(obj.customerIP != null) { this.setCustomerIP(obj.customerIP); }
			if(obj.product != null) { this.setProduct(obj.product); }
			if(obj.marketType != null) { this.setMarketType(obj.marketType); }
			if(obj.mobileDeviceId != null) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(obj.returnedItems != null) { this.setReturnedItems(new ArrayOfReturnedItem(obj.returnedItems)); }
			if(obj.solution != null) { this.setSolution(new SolutionType(obj.solution)); }
		}
		else {
			this.setTransId(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionType(null);
			this.setTransactionStatus(null);
			this.setResponseCode(null);
			this.setResponseReasonCode(null);
			this.setSubscription(null);
			this.setResponseReasonDescription(null);
			this.setAuthCode(null);
			this.setAVSResponse(null);
			this.setCardCodeResponse(null);
			this.setCAVVResponse(null);
			this.setFDSFilterAction(null);
			this.setFDSFilters(null);
			this.setBatch(null);
			this.setOrder(null);
			this.setRequestedAmount(null);
			this.setAuthAmount(null);
			this.setSettleAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
			this.setPrepaidBalanceRemaining(null);
			this.setTaxExempt(null);
			this.setPayment(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setRecurringBilling(null);
			this.setCustomerIP(null);
			this.setProduct(null);
			this.setMarketType(null);
			this.setMobileDeviceId(null);
			this.setReturnedItems(null);
			this.setSolution(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId(p_refTransId) { return this.refTransId; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId(p_splitTenderId) { return this.splitTenderId; }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC(p_submitTimeUTC) { return this.submitTimeUTC; }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal(p_submitTimeLocal) { return this.submitTimeLocal; }
	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType(p_transactionType) { return this.transactionType; }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus(p_transactionStatus) { return this.transactionStatus; }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode(p_responseCode) { return this.responseCode; }
	setResponseReasonCode(p_responseReasonCode) { this.responseReasonCode = p_responseReasonCode; }
	getResponseReasonCode(p_responseReasonCode) { return this.responseReasonCode; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription(p_subscription) { return this.subscription; }
	setResponseReasonDescription(p_responseReasonDescription) { this.responseReasonDescription = p_responseReasonDescription; }
	getResponseReasonDescription(p_responseReasonDescription) { return this.responseReasonDescription; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode(p_authCode) { return this.authCode; }
	setAVSResponse(p_AVSResponse) { this.AVSResponse = p_AVSResponse; }
	getAVSResponse(p_AVSResponse) { return this.AVSResponse; }
	setCardCodeResponse(p_cardCodeResponse) { this.cardCodeResponse = p_cardCodeResponse; }
	getCardCodeResponse(p_cardCodeResponse) { return this.cardCodeResponse; }
	setCAVVResponse(p_CAVVResponse) { this.CAVVResponse = p_CAVVResponse; }
	getCAVVResponse(p_CAVVResponse) { return this.CAVVResponse; }
	setFDSFilterAction(p_FDSFilterAction) { this.FDSFilterAction = p_FDSFilterAction; }
	getFDSFilterAction(p_FDSFilterAction) { return this.FDSFilterAction; }
	setFDSFilters(p_FDSFilters) { this.FDSFilters = p_FDSFilters; }
	getFDSFilters(p_FDSFilters) { return this.FDSFilters; }
	setBatch(p_batch) { this.batch = p_batch; }
	getBatch(p_batch) { return this.batch; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount(p_requestedAmount) { return this.requestedAmount; }
	setAuthAmount(p_authAmount) { this.authAmount = p_authAmount; }
	getAuthAmount(p_authAmount) { return this.authAmount; }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount(p_settleAmount) { return this.settleAmount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax(p_tax) { return this.tax; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping(p_shipping) { return this.shipping; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty(p_duty) { return this.duty; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems(p_lineItems) { return this.lineItems; }
	setPrepaidBalanceRemaining(p_prepaidBalanceRemaining) { this.prepaidBalanceRemaining = p_prepaidBalanceRemaining; }
	getPrepaidBalanceRemaining(p_prepaidBalanceRemaining) { return this.prepaidBalanceRemaining; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt(p_taxExempt) { return this.taxExempt; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer(p_customer) { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo(p_billTo) { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo(p_shipTo) { return this.shipTo; }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling(p_recurringBilling) { return this.recurringBilling; }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP(p_customerIP) { return this.customerIP; }
	setProduct(p_product) { this.product = p_product; }
	getProduct(p_product) { return this.product; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType(p_marketType) { return this.marketType; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId(p_mobileDeviceId) { return this.mobileDeviceId; }
	setReturnedItems(p_returnedItems) { this.returnedItems = p_returnedItems; }
	getReturnedItems(p_returnedItems) { return this.returnedItems; }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution(p_solution) { return this.solution; }
}

module.exports.TransactionDetailsType = TransactionDetailsType;

class ArrayOfReturnedItem {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var returnedItemList = [];
				obj.forEach(function(item) {returnedItemList.push(new ReturnedItemType(item))}); 
				this.setReturnedItem(returnedItemList);
			}
		}
		else {
			this.setReturnedItem(null);
		}
	}

	setReturnedItem(p_returnedItem) { this.returnedItem = p_returnedItem; }
	getReturnedItem(p_returnedItem) { return this.returnedItem; }
}

module.exports.ArrayOfReturnedItem = ArrayOfReturnedItem;

class CreditCardTrackType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.track1 != null) { this.setTrack1(obj.track1); }
			if(obj.track2 != null) { this.setTrack2(obj.track2); }
		}
		else {
			this.setTrack1(null);
			this.setTrack2(null);
		}
	}

	setTrack1(p_track1) { this.track1 = p_track1; }
	getTrack1(p_track1) { return this.track1; }
	setTrack2(p_track2) { this.track2 = p_track2; }
	getTrack2(p_track2) { return this.track2; }
}

module.exports.CreditCardTrackType = CreditCardTrackType;

class FingerPrintType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.hashValue != null) { this.setHashValue(obj.hashValue); }
			if(obj.sequence != null) { this.setSequence(obj.sequence); }
			if(obj.timestamp != null) { this.setTimestamp(obj.timestamp); }
			if(obj.currencyCode != null) { this.setCurrencyCode(obj.currencyCode); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
		}
		else {
			this.setHashValue(null);
			this.setSequence(null);
			this.setTimestamp(null);
			this.setCurrencyCode(null);
			this.setAmount(null);
		}
	}

	setHashValue(p_hashValue) { this.hashValue = p_hashValue; }
	getHashValue(p_hashValue) { return this.hashValue; }
	setSequence(p_sequence) { this.sequence = p_sequence; }
	getSequence(p_sequence) { return this.sequence; }
	setTimestamp(p_timestamp) { this.timestamp = p_timestamp; }
	getTimestamp(p_timestamp) { return this.timestamp; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode(p_currencyCode) { return this.currencyCode; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
}

module.exports.FingerPrintType = FingerPrintType;

class MerchantContactType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.merchantName != null) { this.setMerchantName(obj.merchantName); }
			if(obj.merchantAddress != null) { this.setMerchantAddress(obj.merchantAddress); }
			if(obj.merchantCity != null) { this.setMerchantCity(obj.merchantCity); }
			if(obj.merchantState != null) { this.setMerchantState(obj.merchantState); }
			if(obj.merchantZip != null) { this.setMerchantZip(obj.merchantZip); }
			if(obj.merchantPhone != null) { this.setMerchantPhone(obj.merchantPhone); }
		}
		else {
			this.setMerchantName(null);
			this.setMerchantAddress(null);
			this.setMerchantCity(null);
			this.setMerchantState(null);
			this.setMerchantZip(null);
			this.setMerchantPhone(null);
		}
	}

	setMerchantName(p_merchantName) { this.merchantName = p_merchantName; }
	getMerchantName(p_merchantName) { return this.merchantName; }
	setMerchantAddress(p_merchantAddress) { this.merchantAddress = p_merchantAddress; }
	getMerchantAddress(p_merchantAddress) { return this.merchantAddress; }
	setMerchantCity(p_merchantCity) { this.merchantCity = p_merchantCity; }
	getMerchantCity(p_merchantCity) { return this.merchantCity; }
	setMerchantState(p_merchantState) { this.merchantState = p_merchantState; }
	getMerchantState(p_merchantState) { return this.merchantState; }
	setMerchantZip(p_merchantZip) { this.merchantZip = p_merchantZip; }
	getMerchantZip(p_merchantZip) { return this.merchantZip; }
	setMerchantPhone(p_merchantPhone) { this.merchantPhone = p_merchantPhone; }
	getMerchantPhone(p_merchantPhone) { return this.merchantPhone; }
}

module.exports.MerchantContactType = MerchantContactType;

class ProfileTransactionType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.profileTransAuthCapture != null) { this.setProfileTransAuthCapture(new ProfileTransAuthCaptureType(obj.profileTransAuthCapture)); }
			if(obj.profileTransAuthOnly != null) { this.setProfileTransAuthOnly(new ProfileTransAuthOnlyType(obj.profileTransAuthOnly)); }
			if(obj.profileTransPriorAuthCapture != null) { this.setProfileTransPriorAuthCapture(new ProfileTransPriorAuthCaptureType(obj.profileTransPriorAuthCapture)); }
			if(obj.profileTransCaptureOnly != null) { this.setProfileTransCaptureOnly(new ProfileTransCaptureOnlyType(obj.profileTransCaptureOnly)); }
			if(obj.profileTransRefund != null) { this.setProfileTransRefund(new ProfileTransRefundType(obj.profileTransRefund)); }
			if(obj.profileTransVoid != null) { this.setProfileTransVoid(new ProfileTransVoidType(obj.profileTransVoid)); }
		}
		else {
			this.setProfileTransAuthCapture(null);
			this.setProfileTransAuthOnly(null);
			this.setProfileTransPriorAuthCapture(null);
			this.setProfileTransCaptureOnly(null);
			this.setProfileTransRefund(null);
			this.setProfileTransVoid(null);
		}
	}

	setProfileTransAuthCapture(p_profileTransAuthCapture) { this.profileTransAuthCapture = p_profileTransAuthCapture; }
	getProfileTransAuthCapture(p_profileTransAuthCapture) { return this.profileTransAuthCapture; }
	setProfileTransAuthOnly(p_profileTransAuthOnly) { this.profileTransAuthOnly = p_profileTransAuthOnly; }
	getProfileTransAuthOnly(p_profileTransAuthOnly) { return this.profileTransAuthOnly; }
	setProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture) { this.profileTransPriorAuthCapture = p_profileTransPriorAuthCapture; }
	getProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture) { return this.profileTransPriorAuthCapture; }
	setProfileTransCaptureOnly(p_profileTransCaptureOnly) { this.profileTransCaptureOnly = p_profileTransCaptureOnly; }
	getProfileTransCaptureOnly(p_profileTransCaptureOnly) { return this.profileTransCaptureOnly; }
	setProfileTransRefund(p_profileTransRefund) { this.profileTransRefund = p_profileTransRefund; }
	getProfileTransRefund(p_profileTransRefund) { return this.profileTransRefund; }
	setProfileTransVoid(p_profileTransVoid) { this.profileTransVoid = p_profileTransVoid; }
	getProfileTransVoid(p_profileTransVoid) { return this.profileTransVoid; }
}

module.exports.ProfileTransactionType = ProfileTransactionType;

class CcAuthenticationType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.authenticationIndicator != null) { this.setAuthenticationIndicator(obj.authenticationIndicator); }
			if(obj.cardholderAuthenticationValue != null) { this.setCardholderAuthenticationValue(obj.cardholderAuthenticationValue); }
		}
		else {
			this.setAuthenticationIndicator(null);
			this.setCardholderAuthenticationValue(null);
		}
	}

	setAuthenticationIndicator(p_authenticationIndicator) { this.authenticationIndicator = p_authenticationIndicator; }
	getAuthenticationIndicator(p_authenticationIndicator) { return this.authenticationIndicator; }
	setCardholderAuthenticationValue(p_cardholderAuthenticationValue) { this.cardholderAuthenticationValue = p_cardholderAuthenticationValue; }
	getCardholderAuthenticationValue(p_cardholderAuthenticationValue) { return this.cardholderAuthenticationValue; }
}

module.exports.CcAuthenticationType = CcAuthenticationType;

class DriversLicenseMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.number != null) { this.setNumber(obj.number); }
			if(obj.state != null) { this.setState(obj.state); }
			if(obj.dateOfBirth != null) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber(p_number) { return this.number; }
	setState(p_state) { this.state = p_state; }
	getState(p_state) { return this.state; }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth(p_dateOfBirth) { return this.dateOfBirth; }
}

module.exports.DriversLicenseMaskedType = DriversLicenseMaskedType;

class CustomerType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.type != null) { this.setType(obj.type); }
			if(obj.id != null) { this.setId(obj.id); }
			if(obj.email != null) { this.setEmail(obj.email); }
			if(obj.phoneNumber != null) { this.setPhoneNumber(obj.phoneNumber); }
			if(obj.faxNumber != null) { this.setFaxNumber(obj.faxNumber); }
			if(obj.driversLicense != null) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(obj.taxId != null) { this.setTaxId(obj.taxId); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
	}

	setType(p_type) { this.type = p_type; }
	getType(p_type) { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId(p_id) { return this.id; }
	setEmail(p_email) { this.email = p_email; }
	getEmail(p_email) { return this.email; }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber(p_phoneNumber) { return this.phoneNumber; }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber(p_faxNumber) { return this.faxNumber; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense(p_driversLicense) { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId(p_taxId) { return this.taxId; }
}

module.exports.CustomerType = CustomerType;

class IsAliveRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "isAliveRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.refId != null) { this.setRefId(obj.refId); }
		}
		else {
			this.setRefId(null);
		}
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId(p_refId) { return this.refId; }
}

module.exports.IsAliveRequest = IsAliveRequest;

class PaymentType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.creditCard != null) { this.setCreditCard(new CreditCardType(obj.creditCard)); }
			if(obj.bankAccount != null) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
			if(obj.trackData != null) { this.setTrackData(new CreditCardTrackType(obj.trackData)); }
			if(obj.encryptedTrackData != null) { this.setEncryptedTrackData(new EncryptedTrackDataType(obj.encryptedTrackData)); }
			if(obj.payPal != null) { this.setPayPal(new PayPalType(obj.payPal)); }
			if(obj.opaqueData != null) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTrackData(null);
			this.setEncryptedTrackData(null);
			this.setPayPal(null);
			this.setOpaqueData(null);
		}
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard(p_creditCard) { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount(p_bankAccount) { return this.bankAccount; }
	setTrackData(p_trackData) { this.trackData = p_trackData; }
	getTrackData(p_trackData) { return this.trackData; }
	setEncryptedTrackData(p_encryptedTrackData) { this.encryptedTrackData = p_encryptedTrackData; }
	getEncryptedTrackData(p_encryptedTrackData) { return this.encryptedTrackData; }
	setPayPal(p_payPal) { this.payPal = p_payPal; }
	getPayPal(p_payPal) { return this.payPal; }
	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData(p_opaqueData) { return this.opaqueData; }
}

module.exports.PaymentType = PaymentType;

class ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ErrorResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.refId != null) { this.setRefId(obj.refId); }
			if(obj.messages != null) { this.setMessages(new MessagesType(obj.messages)); }
			if(obj.sessionToken != null) { this.setSessionToken(obj.sessionToken); }
		}
		else {
			this.setRefId(null);
			this.setMessages(null);
			this.setSessionToken(null);
		}
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId(p_refId) { return this.refId; }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages(p_messages) { return this.messages; }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken(p_sessionToken) { return this.sessionToken; }
}

module.exports.ANetApiResponse = ANetApiResponse;

class BatchStatisticType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.chargeAmount != null) { this.setChargeAmount(obj.chargeAmount); }
			if(obj.chargeCount != null) { this.setChargeCount(obj.chargeCount); }
			if(obj.refundAmount != null) { this.setRefundAmount(obj.refundAmount); }
			if(obj.refundCount != null) { this.setRefundCount(obj.refundCount); }
			if(obj.voidCount != null) { this.setVoidCount(obj.voidCount); }
			if(obj.declineCount != null) { this.setDeclineCount(obj.declineCount); }
			if(obj.errorCount != null) { this.setErrorCount(obj.errorCount); }
			if(obj.returnedItemAmount != null) { this.setReturnedItemAmount(obj.returnedItemAmount); }
			if(obj.returnedItemCount != null) { this.setReturnedItemCount(obj.returnedItemCount); }
			if(obj.chargebackAmount != null) { this.setChargebackAmount(obj.chargebackAmount); }
			if(obj.chargebackCount != null) { this.setChargebackCount(obj.chargebackCount); }
			if(obj.correctionNoticeCount != null) { this.setCorrectionNoticeCount(obj.correctionNoticeCount); }
			if(obj.chargeChargeBackAmount != null) { this.setChargeChargeBackAmount(obj.chargeChargeBackAmount); }
			if(obj.chargeChargeBackCount != null) { this.setChargeChargeBackCount(obj.chargeChargeBackCount); }
			if(obj.refundChargeBackAmount != null) { this.setRefundChargeBackAmount(obj.refundChargeBackAmount); }
			if(obj.refundChargeBackCount != null) { this.setRefundChargeBackCount(obj.refundChargeBackCount); }
			if(obj.chargeReturnedItemsAmount != null) { this.setChargeReturnedItemsAmount(obj.chargeReturnedItemsAmount); }
			if(obj.chargeReturnedItemsCount != null) { this.setChargeReturnedItemsCount(obj.chargeReturnedItemsCount); }
			if(obj.refundReturnedItemsAmount != null) { this.setRefundReturnedItemsAmount(obj.refundReturnedItemsAmount); }
			if(obj.refundReturnedItemsCount != null) { this.setRefundReturnedItemsCount(obj.refundReturnedItemsCount); }
		}
		else {
			this.setAccountType(null);
			this.setChargeAmount(null);
			this.setChargeCount(null);
			this.setRefundAmount(null);
			this.setRefundCount(null);
			this.setVoidCount(null);
			this.setDeclineCount(null);
			this.setErrorCount(null);
			this.setReturnedItemAmount(null);
			this.setReturnedItemCount(null);
			this.setChargebackAmount(null);
			this.setChargebackCount(null);
			this.setCorrectionNoticeCount(null);
			this.setChargeChargeBackAmount(null);
			this.setChargeChargeBackCount(null);
			this.setRefundChargeBackAmount(null);
			this.setRefundChargeBackCount(null);
			this.setChargeReturnedItemsAmount(null);
			this.setChargeReturnedItemsCount(null);
			this.setRefundReturnedItemsAmount(null);
			this.setRefundReturnedItemsCount(null);
		}
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setChargeAmount(p_chargeAmount) { this.chargeAmount = p_chargeAmount; }
	getChargeAmount(p_chargeAmount) { return this.chargeAmount; }
	setChargeCount(p_chargeCount) { this.chargeCount = p_chargeCount; }
	getChargeCount(p_chargeCount) { return this.chargeCount; }
	setRefundAmount(p_refundAmount) { this.refundAmount = p_refundAmount; }
	getRefundAmount(p_refundAmount) { return this.refundAmount; }
	setRefundCount(p_refundCount) { this.refundCount = p_refundCount; }
	getRefundCount(p_refundCount) { return this.refundCount; }
	setVoidCount(p_voidCount) { this.voidCount = p_voidCount; }
	getVoidCount(p_voidCount) { return this.voidCount; }
	setDeclineCount(p_declineCount) { this.declineCount = p_declineCount; }
	getDeclineCount(p_declineCount) { return this.declineCount; }
	setErrorCount(p_errorCount) { this.errorCount = p_errorCount; }
	getErrorCount(p_errorCount) { return this.errorCount; }
	setReturnedItemAmount(p_returnedItemAmount) { this.returnedItemAmount = p_returnedItemAmount; }
	getReturnedItemAmount(p_returnedItemAmount) { return this.returnedItemAmount; }
	setReturnedItemCount(p_returnedItemCount) { this.returnedItemCount = p_returnedItemCount; }
	getReturnedItemCount(p_returnedItemCount) { return this.returnedItemCount; }
	setChargebackAmount(p_chargebackAmount) { this.chargebackAmount = p_chargebackAmount; }
	getChargebackAmount(p_chargebackAmount) { return this.chargebackAmount; }
	setChargebackCount(p_chargebackCount) { this.chargebackCount = p_chargebackCount; }
	getChargebackCount(p_chargebackCount) { return this.chargebackCount; }
	setCorrectionNoticeCount(p_correctionNoticeCount) { this.correctionNoticeCount = p_correctionNoticeCount; }
	getCorrectionNoticeCount(p_correctionNoticeCount) { return this.correctionNoticeCount; }
	setChargeChargeBackAmount(p_chargeChargeBackAmount) { this.chargeChargeBackAmount = p_chargeChargeBackAmount; }
	getChargeChargeBackAmount(p_chargeChargeBackAmount) { return this.chargeChargeBackAmount; }
	setChargeChargeBackCount(p_chargeChargeBackCount) { this.chargeChargeBackCount = p_chargeChargeBackCount; }
	getChargeChargeBackCount(p_chargeChargeBackCount) { return this.chargeChargeBackCount; }
	setRefundChargeBackAmount(p_refundChargeBackAmount) { this.refundChargeBackAmount = p_refundChargeBackAmount; }
	getRefundChargeBackAmount(p_refundChargeBackAmount) { return this.refundChargeBackAmount; }
	setRefundChargeBackCount(p_refundChargeBackCount) { this.refundChargeBackCount = p_refundChargeBackCount; }
	getRefundChargeBackCount(p_refundChargeBackCount) { return this.refundChargeBackCount; }
	setChargeReturnedItemsAmount(p_chargeReturnedItemsAmount) { this.chargeReturnedItemsAmount = p_chargeReturnedItemsAmount; }
	getChargeReturnedItemsAmount(p_chargeReturnedItemsAmount) { return this.chargeReturnedItemsAmount; }
	setChargeReturnedItemsCount(p_chargeReturnedItemsCount) { this.chargeReturnedItemsCount = p_chargeReturnedItemsCount; }
	getChargeReturnedItemsCount(p_chargeReturnedItemsCount) { return this.chargeReturnedItemsCount; }
	setRefundReturnedItemsAmount(p_refundReturnedItemsAmount) { this.refundReturnedItemsAmount = p_refundReturnedItemsAmount; }
	getRefundReturnedItemsAmount(p_refundReturnedItemsAmount) { return this.refundReturnedItemsAmount; }
	setRefundReturnedItemsCount(p_refundReturnedItemsCount) { this.refundReturnedItemsCount = p_refundReturnedItemsCount; }
	getRefundReturnedItemsCount(p_refundReturnedItemsCount) { return this.refundReturnedItemsCount; }
}

module.exports.BatchStatisticType = BatchStatisticType;

class BankAccountMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.routingNumber != null) { this.setRoutingNumber(obj.routingNumber); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.nameOnAccount != null) { this.setNameOnAccount(obj.nameOnAccount); }
			if(obj.echeckType != null) { this.setEcheckType(obj.echeckType); }
			if(obj.bankName != null) { this.setBankName(obj.bankName); }
		}
		else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
		}
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber(p_routingNumber) { return this.routingNumber; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount(p_nameOnAccount) { return this.nameOnAccount; }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType(p_echeckType) { return this.echeckType; }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName(p_bankName) { return this.bankName; }
}

module.exports.BankAccountMaskedType = BankAccountMaskedType;

class CreditCardMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.cardNumber != null) { this.setCardNumber(obj.cardNumber); }
			if(obj.expirationDate != null) { this.setExpirationDate(obj.expirationDate); }
			if(obj.cardType != null) { this.setCardType(obj.cardType); }
			if(obj.cardArt != null) { this.setCardArt(new CardArt(obj.cardArt)); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardType(null);
			this.setCardArt(null);
		}
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber(p_cardNumber) { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate(p_expirationDate) { return this.expirationDate; }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType(p_cardType) { return this.cardType; }
	setCardArt(p_cardArt) { this.cardArt = p_cardArt; }
	getCardArt(p_cardArt) { return this.cardArt; }
}

module.exports.CreditCardMaskedType = CreditCardMaskedType;

class KeyManagementScheme {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.DUKPT != null) { this.setDUKPT(new KeyManagementScheme.DUKPT(obj.DUKPT)); }
		}
		else {
			this.setDUKPT(null);
		}
	}

	setDUKPT(p_DUKPT) { this.DUKPT = p_DUKPT; }
	getDUKPT(p_DUKPT) { return this.DUKPT; }
}

module.exports.KeyManagementScheme = KeyManagementScheme;

class PaymentDetails {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.currency != null) { this.setCurrency(obj.currency); }
			if(obj.promoCode != null) { this.setPromoCode(obj.promoCode); }
			if(obj.misc != null) { this.setMisc(obj.misc); }
			if(obj.giftWrap != null) { this.setGiftWrap(obj.giftWrap); }
			if(obj.discount != null) { this.setDiscount(obj.discount); }
			if(obj.tax != null) { this.setTax(obj.tax); }
			if(obj.shippingHandling != null) { this.setShippingHandling(obj.shippingHandling); }
			if(obj.subTotal != null) { this.setSubTotal(obj.subTotal); }
			if(obj.orderID != null) { this.setOrderID(obj.orderID); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
		}
		else {
			this.setCurrency(null);
			this.setPromoCode(null);
			this.setMisc(null);
			this.setGiftWrap(null);
			this.setDiscount(null);
			this.setTax(null);
			this.setShippingHandling(null);
			this.setSubTotal(null);
			this.setOrderID(null);
			this.setAmount(null);
		}
	}

	setCurrency(p_currency) { this.currency = p_currency; }
	getCurrency(p_currency) { return this.currency; }
	setPromoCode(p_promoCode) { this.promoCode = p_promoCode; }
	getPromoCode(p_promoCode) { return this.promoCode; }
	setMisc(p_misc) { this.misc = p_misc; }
	getMisc(p_misc) { return this.misc; }
	setGiftWrap(p_giftWrap) { this.giftWrap = p_giftWrap; }
	getGiftWrap(p_giftWrap) { return this.giftWrap; }
	setDiscount(p_discount) { this.discount = p_discount; }
	getDiscount(p_discount) { return this.discount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax(p_tax) { return this.tax; }
	setShippingHandling(p_shippingHandling) { this.shippingHandling = p_shippingHandling; }
	getShippingHandling(p_shippingHandling) { return this.shippingHandling; }
	setSubTotal(p_subTotal) { this.subTotal = p_subTotal; }
	getSubTotal(p_subTotal) { return this.subTotal; }
	setOrderID(p_orderID) { this.orderID = p_orderID; }
	getOrderID(p_orderID) { return this.orderID; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
}

module.exports.PaymentDetails = PaymentDetails;

class ProfileTransVoidType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingAddressId != null) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(obj.transId != null) { this.setTransId(obj.transId); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId(p_customerShippingAddressId) { return this.customerShippingAddressId; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
}

module.exports.ProfileTransVoidType = ProfileTransVoidType;

class ArrayOfBatchDetailsType {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var batchList = [];
				obj.forEach(function(item) {batchList.push(new BatchDetailsType(item))}); 
				this.setBatch(batchList);
			}
		}
		else {
			this.setBatch(null);
		}
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch(p_batch) { return this.batch; }
}

module.exports.ArrayOfBatchDetailsType = ArrayOfBatchDetailsType;

class ArrayOfLineItem {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var lineItemList = [];
				obj.forEach(function(item) {lineItemList.push(new LineItemType(item))}); 
				this.setLineItem(lineItemList);
			}
		}
		else {
			this.setLineItem(null);
		}
	}

	setLineItem(p_lineItem) { this.lineItem = p_lineItem; }
	getLineItem(p_lineItem) { return this.lineItem; }
}

module.exports.ArrayOfLineItem = ArrayOfLineItem;

class TokenMaskedType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.tokenSource != null) { this.setTokenSource(obj.tokenSource); }
			if(obj.tokenNumber != null) { this.setTokenNumber(obj.tokenNumber); }
			if(obj.expirationDate != null) { this.setExpirationDate(obj.expirationDate); }
		}
		else {
			this.setTokenSource(null);
			this.setTokenNumber(null);
			this.setExpirationDate(null);
		}
	}

	setTokenSource(p_tokenSource) { this.tokenSource = p_tokenSource; }
	getTokenSource(p_tokenSource) { return this.tokenSource; }
	setTokenNumber(p_tokenNumber) { this.tokenNumber = p_tokenNumber; }
	getTokenNumber(p_tokenNumber) { return this.tokenNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate(p_expirationDate) { return this.expirationDate; }
}

module.exports.TokenMaskedType = TokenMaskedType;

class PaymentScheduleType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.interval != null) { this.setInterval(new PaymentScheduleType.Interval(obj.interval)); }
			if(obj.startDate != null) { this.setStartDate(obj.startDate); }
			if(obj.totalOccurrences != null) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(obj.trialOccurrences != null) { this.setTrialOccurrences(obj.trialOccurrences); }
		}
		else {
			this.setInterval(null);
			this.setStartDate(null);
			this.setTotalOccurrences(null);
			this.setTrialOccurrences(null);
		}
	}

	setInterval(p_interval) { this.interval = p_interval; }
	getInterval(p_interval) { return this.interval; }
	setStartDate(p_startDate) { this.startDate = p_startDate; }
	getStartDate(p_startDate) { return this.startDate; }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences(p_totalOccurrences) { return this.totalOccurrences; }
	setTrialOccurrences(p_trialOccurrences) { this.trialOccurrences = p_trialOccurrences; }
	getTrialOccurrences(p_trialOccurrences) { return this.trialOccurrences; }
}

module.exports.PaymentScheduleType = PaymentScheduleType;

class TransactionRequestType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.transactionType != null) { this.setTransactionType(obj.transactionType); }
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.currencyCode != null) { this.setCurrencyCode(obj.currencyCode); }
			if(obj.payment != null) { this.setPayment(new PaymentType(obj.payment)); }
			if(obj.profile != null) { this.setProfile(new CustomerProfilePaymentType(obj.profile)); }
			if(obj.solution != null) { this.setSolution(new SolutionType(obj.solution)); }
			if(obj.callId != null) { this.setCallId(obj.callId); }
			if(obj.authCode != null) { this.setAuthCode(obj.authCode); }
			if(obj.refTransId != null) { this.setRefTransId(obj.refTransId); }
			if(obj.splitTenderId != null) { this.setSplitTenderId(obj.splitTenderId); }
			if(obj.order != null) { this.setOrder(new OrderType(obj.order)); }
			if(obj.lineItems != null) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(obj.tax != null) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(obj.duty != null) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(obj.shipping != null) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(obj.taxExempt != null) { this.setTaxExempt(obj.taxExempt); }
			if(obj.poNumber != null) { this.setPoNumber(obj.poNumber); }
			if(obj.customer != null) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(obj.billTo != null) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(obj.shipTo != null) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(obj.customerIP != null) { this.setCustomerIP(obj.customerIP); }
			if(obj.cardholderAuthentication != null) { this.setCardholderAuthentication(new CcAuthenticationType(obj.cardholderAuthentication)); }
			if(obj.retail != null) { this.setRetail(new TransRetailInfoType(obj.retail)); }
			if(obj.employeeId != null) { this.setEmployeeId(obj.employeeId); }
			if(obj.transactionSettings != null) { this.setTransactionSettings(new ArrayOfSetting(obj.transactionSettings)); }
			if(obj.userFields != null) { this.setUserFields(new TransactionRequestType.UserFields(obj.userFields)); }
		}
		else {
			this.setTransactionType(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setPayment(null);
			this.setProfile(null);
			this.setSolution(null);
			this.setCallId(null);
			this.setAuthCode(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setOrder(null);
			this.setLineItems(null);
			this.setTax(null);
			this.setDuty(null);
			this.setShipping(null);
			this.setTaxExempt(null);
			this.setPoNumber(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setCustomerIP(null);
			this.setCardholderAuthentication(null);
			this.setRetail(null);
			this.setEmployeeId(null);
			this.setTransactionSettings(null);
			this.setUserFields(null);
		}
	}

	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType(p_transactionType) { return this.transactionType; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode(p_currencyCode) { return this.currencyCode; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile(p_profile) { return this.profile; }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution(p_solution) { return this.solution; }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId(p_callId) { return this.callId; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode(p_authCode) { return this.authCode; }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId(p_refTransId) { return this.refTransId; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId(p_splitTenderId) { return this.splitTenderId; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems(p_lineItems) { return this.lineItems; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax(p_tax) { return this.tax; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty(p_duty) { return this.duty; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping(p_shipping) { return this.shipping; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt(p_taxExempt) { return this.taxExempt; }
	setPoNumber(p_poNumber) { this.poNumber = p_poNumber; }
	getPoNumber(p_poNumber) { return this.poNumber; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer(p_customer) { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo(p_billTo) { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo(p_shipTo) { return this.shipTo; }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP(p_customerIP) { return this.customerIP; }
	setCardholderAuthentication(p_cardholderAuthentication) { this.cardholderAuthentication = p_cardholderAuthentication; }
	getCardholderAuthentication(p_cardholderAuthentication) { return this.cardholderAuthentication; }
	setRetail(p_retail) { this.retail = p_retail; }
	getRetail(p_retail) { return this.retail; }
	setEmployeeId(p_employeeId) { this.employeeId = p_employeeId; }
	getEmployeeId(p_employeeId) { return this.employeeId; }
	setTransactionSettings(p_transactionSettings) { this.transactionSettings = p_transactionSettings; }
	getTransactionSettings(p_transactionSettings) { return this.transactionSettings; }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields(p_userFields) { return this.userFields; }
}

module.exports.TransactionRequestType = TransactionRequestType;

class UserField {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.value != null) { this.setValue(obj.value); }
		}
		else {
			this.setName(null);
			this.setValue(null);
		}
	}

	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setValue(p_value) { this.value = p_value; }
	getValue(p_value) { return this.value; }
}

module.exports.UserField = UserField;

class CustomerPaymentProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.customerType != null) { this.setCustomerType(obj.customerType); }
			if(obj.billTo != null) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
		}
		else {
			this.setCustomerType(null);
			this.setBillTo(null);
		}
	}

	setCustomerType(p_customerType) { this.customerType = p_customerType; }
	getCustomerType(p_customerType) { return this.customerType; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo(p_billTo) { return this.billTo; }
}

module.exports.CustomerPaymentProfileBaseType = CustomerPaymentProfileBaseType;

class FDSFilterType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.action != null) { this.setAction(obj.action); }
		}
		else {
			this.setName(null);
			this.setAction(null);
		}
	}

	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setAction(p_action) { this.action = p_action; }
	getAction(p_action) { return this.action; }
}

module.exports.FDSFilterType = FDSFilterType;

class CreateProfileResponse {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.messages != null) { this.setMessages(new MessagesType(obj.messages)); }
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileIdList != null) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(obj.customerShippingAddressIdList != null) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
		}
		else {
			this.setMessages(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
		}
	}

	setMessages(p_messages) { this.messages = p_messages; }
	getMessages(p_messages) { return this.messages; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { return this.customerPaymentProfileIdList; }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList(p_customerShippingAddressIdList) { return this.customerShippingAddressIdList; }
}

module.exports.CreateProfileResponse = CreateProfileResponse;

class CreditCardSimpleType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.cardNumber != null) { this.setCardNumber(obj.cardNumber); }
			if(obj.expirationDate != null) { this.setExpirationDate(obj.expirationDate); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
		}
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber(p_cardNumber) { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate(p_expirationDate) { return this.expirationDate; }
}

module.exports.CreditCardSimpleType = CreditCardSimpleType;

class ArrayOfTransactionSummaryType {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var transactionList = [];
				obj.forEach(function(item) {transactionList.push(new TransactionSummaryType(item))}); 
				this.setTransaction(transactionList);
			}
		}
		else {
			this.setTransaction(null);
		}
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction(p_transaction) { return this.transaction; }
}

module.exports.ArrayOfTransactionSummaryType = ArrayOfTransactionSummaryType;

class MobileDeviceType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.mobileDeviceId != null) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(obj.description != null) { this.setDescription(obj.description); }
			if(obj.phoneNumber != null) { this.setPhoneNumber(obj.phoneNumber); }
			if(obj.devicePlatform != null) { this.setDevicePlatform(obj.devicePlatform); }
			if(obj.deviceActivation != null) { this.setDeviceActivation(obj.deviceActivation); }
		}
		else {
			this.setMobileDeviceId(null);
			this.setDescription(null);
			this.setPhoneNumber(null);
			this.setDevicePlatform(null);
			this.setDeviceActivation(null);
		}
	}

	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId(p_mobileDeviceId) { return this.mobileDeviceId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber(p_phoneNumber) { return this.phoneNumber; }
	setDevicePlatform(p_devicePlatform) { this.devicePlatform = p_devicePlatform; }
	getDevicePlatform(p_devicePlatform) { return this.devicePlatform; }
	setDeviceActivation(p_deviceActivation) { this.deviceActivation = p_deviceActivation; }
	getDeviceActivation(p_deviceActivation) { return this.deviceActivation; }
}

module.exports.MobileDeviceType = MobileDeviceType;

class ProfileTransAmountType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.tax != null) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(obj.shipping != null) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(obj.duty != null) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if((obj.lineItems != undefined) && (obj.lineItems != null)) {
				var lineItemsList = [];
				obj.lineItems.forEach(function(item) {lineItemsList.push(new LineItemType(item))}); 
				this.setLineItems(lineItemsList);
			}
		}
		else {
			this.setAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
		}
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax(p_tax) { return this.tax; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping(p_shipping) { return this.shipping; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty(p_duty) { return this.duty; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems(p_lineItems) { return this.lineItems; }
}

module.exports.ProfileTransAmountType = ProfileTransAmountType;

class ArrayOfNumericString {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var numericStringList = [];
				obj.forEach(function(item) {numericStringList.push(new String(item))}); 
				this.setNumericString(numericStringList);
			}
		}
		else {
			this.setNumericString(null);
		}
	}

	setNumericString(p_numericString) { this.numericString = p_numericString; }
	getNumericString(p_numericString) { return this.numericString; }
}

module.exports.ArrayOfNumericString = ArrayOfNumericString;

class ARBGetSubscriptionListSorting {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.orderBy != null) { this.setOrderBy(obj.orderBy); }
			if(obj.orderDescending != null) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy(p_orderBy) { return this.orderBy; }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending(p_orderDescending) { return this.orderDescending; }
}

module.exports.ARBGetSubscriptionListSorting = ARBGetSubscriptionListSorting;

class ExtendedAmountType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.amount != null) { this.setAmount(obj.amount); }
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.description != null) { this.setDescription(obj.description); }
		}
		else {
			this.setAmount(null);
			this.setName(null);
			this.setDescription(null);
		}
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount(p_amount) { return this.amount; }
	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
}

module.exports.ExtendedAmountType = ExtendedAmountType;

class BankAccountType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.routingNumber != null) { this.setRoutingNumber(obj.routingNumber); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.nameOnAccount != null) { this.setNameOnAccount(obj.nameOnAccount); }
			if(obj.echeckType != null) { this.setEcheckType(obj.echeckType); }
			if(obj.bankName != null) { this.setBankName(obj.bankName); }
			if(obj.checkNumber != null) { this.setCheckNumber(obj.checkNumber); }
		}
		else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
			this.setCheckNumber(null);
		}
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber(p_routingNumber) { return this.routingNumber; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount(p_nameOnAccount) { return this.nameOnAccount; }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType(p_echeckType) { return this.echeckType; }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName(p_bankName) { return this.bankName; }
	setCheckNumber(p_checkNumber) { this.checkNumber = p_checkNumber; }
	getCheckNumber(p_checkNumber) { return this.checkNumber; }
}

module.exports.BankAccountType = BankAccountType;

class EnumCollection {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.customerProfileSummaryType != null) { this.setCustomerProfileSummaryType(new CustomerProfileSummaryType(obj.customerProfileSummaryType)); }
			if(obj.paymentSimpleType != null) { this.setPaymentSimpleType(new PaymentSimpleType(obj.paymentSimpleType)); }
			if(obj.accountTypeEnum != null) { this.setAccountTypeEnum(obj.accountTypeEnum); }
			if(obj.cardTypeEnum != null) { this.setCardTypeEnum(obj.cardTypeEnum); }
			if(obj.FDSFilterActionEnum != null) { this.setFDSFilterActionEnum(obj.FDSFilterActionEnum); }
			if(obj.permissionsEnum != null) { this.setPermissionsEnum(obj.permissionsEnum); }
			if(obj.settingNameEnum != null) { this.setSettingNameEnum(obj.settingNameEnum); }
			if(obj.settlementStateEnum != null) { this.setSettlementStateEnum(obj.settlementStateEnum); }
			if(obj.transactionStatusEnum != null) { this.setTransactionStatusEnum(obj.transactionStatusEnum); }
			if(obj.transactionTypeEnum != null) { this.setTransactionTypeEnum(obj.transactionTypeEnum); }
		}
		else {
			this.setCustomerProfileSummaryType(null);
			this.setPaymentSimpleType(null);
			this.setAccountTypeEnum(null);
			this.setCardTypeEnum(null);
			this.setFDSFilterActionEnum(null);
			this.setPermissionsEnum(null);
			this.setSettingNameEnum(null);
			this.setSettlementStateEnum(null);
			this.setTransactionStatusEnum(null);
			this.setTransactionTypeEnum(null);
		}
	}

	setCustomerProfileSummaryType(p_customerProfileSummaryType) { this.customerProfileSummaryType = p_customerProfileSummaryType; }
	getCustomerProfileSummaryType(p_customerProfileSummaryType) { return this.customerProfileSummaryType; }
	setPaymentSimpleType(p_paymentSimpleType) { this.paymentSimpleType = p_paymentSimpleType; }
	getPaymentSimpleType(p_paymentSimpleType) { return this.paymentSimpleType; }
	setAccountTypeEnum(p_accountTypeEnum) { this.accountTypeEnum = p_accountTypeEnum; }
	getAccountTypeEnum(p_accountTypeEnum) { return this.accountTypeEnum; }
	setCardTypeEnum(p_cardTypeEnum) { this.cardTypeEnum = p_cardTypeEnum; }
	getCardTypeEnum(p_cardTypeEnum) { return this.cardTypeEnum; }
	setFDSFilterActionEnum(p_FDSFilterActionEnum) { this.FDSFilterActionEnum = p_FDSFilterActionEnum; }
	getFDSFilterActionEnum(p_FDSFilterActionEnum) { return this.FDSFilterActionEnum; }
	setPermissionsEnum(p_permissionsEnum) { this.permissionsEnum = p_permissionsEnum; }
	getPermissionsEnum(p_permissionsEnum) { return this.permissionsEnum; }
	setSettingNameEnum(p_settingNameEnum) { this.settingNameEnum = p_settingNameEnum; }
	getSettingNameEnum(p_settingNameEnum) { return this.settingNameEnum; }
	setSettlementStateEnum(p_settlementStateEnum) { this.settlementStateEnum = p_settlementStateEnum; }
	getSettlementStateEnum(p_settlementStateEnum) { return this.settlementStateEnum; }
	setTransactionStatusEnum(p_transactionStatusEnum) { this.transactionStatusEnum = p_transactionStatusEnum; }
	getTransactionStatusEnum(p_transactionStatusEnum) { return this.transactionStatusEnum; }
	setTransactionTypeEnum(p_transactionTypeEnum) { this.transactionTypeEnum = p_transactionTypeEnum; }
	getTransactionTypeEnum(p_transactionTypeEnum) { return this.transactionTypeEnum; }
}

module.exports.EnumCollection = EnumCollection;

class ArrayOfString {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var stringList = [];
				obj.forEach(function(item) {stringList.push(new String(item))}); 
				this.setString(stringList);
			}
		}
		else {
			this.setString(null);
		}
	}

	setString(p_string) { this.string = p_string; }
	getString(p_string) { return this.string; }
}

module.exports.ArrayOfString = ArrayOfString;

class OrderType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.invoiceNumber != null) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(obj.description != null) { this.setDescription(obj.description); }
		}
		else {
			this.setInvoiceNumber(null);
			this.setDescription(null);
		}
	}

	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber(p_invoiceNumber) { return this.invoiceNumber; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
}

module.exports.OrderType = OrderType;

class CustomerProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.merchantCustomerId != null) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(obj.description != null) { this.setDescription(obj.description); }
			if(obj.email != null) { this.setEmail(obj.email); }
		}
		else {
			this.setMerchantCustomerId(null);
			this.setDescription(null);
			this.setEmail(null);
		}
	}

	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId(p_merchantCustomerId) { return this.merchantCustomerId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
	setEmail(p_email) { this.email = p_email; }
	getEmail(p_email) { return this.email; }
}

module.exports.CustomerProfileBaseType = CustomerProfileBaseType;

class CardArt {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.cardBrand != null) { this.setCardBrand(obj.cardBrand); }
			if(obj.cardImageHeight != null) { this.setCardImageHeight(obj.cardImageHeight); }
			if(obj.cardImageUrl != null) { this.setCardImageUrl(obj.cardImageUrl); }
			if(obj.cardImageWidth != null) { this.setCardImageWidth(obj.cardImageWidth); }
			if(obj.cardType != null) { this.setCardType(obj.cardType); }
		}
		else {
			this.setCardBrand(null);
			this.setCardImageHeight(null);
			this.setCardImageUrl(null);
			this.setCardImageWidth(null);
			this.setCardType(null);
		}
	}

	setCardBrand(p_cardBrand) { this.cardBrand = p_cardBrand; }
	getCardBrand(p_cardBrand) { return this.cardBrand; }
	setCardImageHeight(p_cardImageHeight) { this.cardImageHeight = p_cardImageHeight; }
	getCardImageHeight(p_cardImageHeight) { return this.cardImageHeight; }
	setCardImageUrl(p_cardImageUrl) { this.cardImageUrl = p_cardImageUrl; }
	getCardImageUrl(p_cardImageUrl) { return this.cardImageUrl; }
	setCardImageWidth(p_cardImageWidth) { this.cardImageWidth = p_cardImageWidth; }
	getCardImageWidth(p_cardImageWidth) { return this.cardImageWidth; }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType(p_cardType) { return this.cardType; }
}

module.exports.CardArt = CardArt;

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
		else {
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

class PermissionType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.permissionName != null) { this.setPermissionName(obj.permissionName); }
		}
		else {
			this.setPermissionName(null);
		}
	}

	setPermissionName(p_permissionName) { this.permissionName = p_permissionName; }
	getPermissionName(p_permissionName) { return this.permissionName; }
}

module.exports.PermissionType = PermissionType;

class ArrayOfPermissionType {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var permissionList = [];
				obj.forEach(function(item) {permissionList.push(new PermissionType(item))}); 
				this.setPermission(permissionList);
			}
		}
		else {
			this.setPermission(null);
		}
	}

	setPermission(p_permission) { this.permission = p_permission; }
	getPermission(p_permission) { return this.permission; }
}

module.exports.ArrayOfPermissionType = ArrayOfPermissionType;

class CustomerProfileSummaryType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.description != null) { this.setDescription(obj.description); }
			if(obj.merchantCustomerId != null) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(obj.email != null) { this.setEmail(obj.email); }
			if(obj.createdDate != null) { this.setCreatedDate(obj.createdDate); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setDescription(null);
			this.setMerchantCustomerId(null);
			this.setEmail(null);
			this.setCreatedDate(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId(p_merchantCustomerId) { return this.merchantCustomerId; }
	setEmail(p_email) { this.email = p_email; }
	getEmail(p_email) { return this.email; }
	setCreatedDate(p_createdDate) { this.createdDate = p_createdDate; }
	getCreatedDate(p_createdDate) { return this.createdDate; }
}

module.exports.CustomerProfileSummaryType = CustomerProfileSummaryType;

class LineItemType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.itemId != null) { this.setItemId(obj.itemId); }
			if(obj.name != null) { this.setName(obj.name); }
			if(obj.description != null) { this.setDescription(obj.description); }
			if(obj.quantity != null) { this.setQuantity(obj.quantity); }
			if(obj.unitPrice != null) { this.setUnitPrice(obj.unitPrice); }
			if(obj.taxable != null) { this.setTaxable(obj.taxable); }
		}
		else {
			this.setItemId(null);
			this.setName(null);
			this.setDescription(null);
			this.setQuantity(null);
			this.setUnitPrice(null);
			this.setTaxable(null);
		}
	}

	setItemId(p_itemId) { this.itemId = p_itemId; }
	getItemId(p_itemId) { return this.itemId; }
	setName(p_name) { this.name = p_name; }
	getName(p_name) { return this.name; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
	setQuantity(p_quantity) { this.quantity = p_quantity; }
	getQuantity(p_quantity) { return this.quantity; }
	setUnitPrice(p_unitPrice) { this.unitPrice = p_unitPrice; }
	getUnitPrice(p_unitPrice) { return this.unitPrice; }
	setTaxable(p_taxable) { this.taxable = p_taxable; }
	getTaxable(p_taxable) { return this.taxable; }
}

module.exports.LineItemType = LineItemType;

class DriversLicenseType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.number != null) { this.setNumber(obj.number); }
			if(obj.state != null) { this.setState(obj.state); }
			if(obj.dateOfBirth != null) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber(p_number) { return this.number; }
	setState(p_state) { this.state = p_state; }
	getState(p_state) { return this.state; }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth(p_dateOfBirth) { return this.dateOfBirth; }
}

module.exports.DriversLicenseType = DriversLicenseType;

class PayPalType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.successUrl != null) { this.setSuccessUrl(obj.successUrl); }
			if(obj.cancelUrl != null) { this.setCancelUrl(obj.cancelUrl); }
			if(obj.paypalLc != null) { this.setPaypalLc(obj.paypalLc); }
			if(obj.paypalHdrImg != null) { this.setPaypalHdrImg(obj.paypalHdrImg); }
			if(obj.paypalPayflowcolor != null) { this.setPaypalPayflowcolor(obj.paypalPayflowcolor); }
			if(obj.payerID != null) { this.setPayerID(obj.payerID); }
		}
		else {
			this.setSuccessUrl(null);
			this.setCancelUrl(null);
			this.setPaypalLc(null);
			this.setPaypalHdrImg(null);
			this.setPaypalPayflowcolor(null);
			this.setPayerID(null);
		}
	}

	setSuccessUrl(p_successUrl) { this.successUrl = p_successUrl; }
	getSuccessUrl(p_successUrl) { return this.successUrl; }
	setCancelUrl(p_cancelUrl) { this.cancelUrl = p_cancelUrl; }
	getCancelUrl(p_cancelUrl) { return this.cancelUrl; }
	setPaypalLc(p_paypalLc) { this.paypalLc = p_paypalLc; }
	getPaypalLc(p_paypalLc) { return this.paypalLc; }
	setPaypalHdrImg(p_paypalHdrImg) { this.paypalHdrImg = p_paypalHdrImg; }
	getPaypalHdrImg(p_paypalHdrImg) { return this.paypalHdrImg; }
	setPaypalPayflowcolor(p_paypalPayflowcolor) { this.paypalPayflowcolor = p_paypalPayflowcolor; }
	getPaypalPayflowcolor(p_paypalPayflowcolor) { return this.paypalPayflowcolor; }
	setPayerID(p_payerID) { this.payerID = p_payerID; }
	getPayerID(p_payerID) { return this.payerID; }
}

module.exports.PayPalType = PayPalType;

class OpaqueDataType {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.dataDescriptor != null) { this.setDataDescriptor(obj.dataDescriptor); }
			if(obj.dataValue != null) { this.setDataValue(obj.dataValue); }
			if(obj.dataKey != null) { this.setDataKey(obj.dataKey); }
		}
		else {
			this.setDataDescriptor(null);
			this.setDataValue(null);
			this.setDataKey(null);
		}
	}

	setDataDescriptor(p_dataDescriptor) { this.dataDescriptor = p_dataDescriptor; }
	getDataDescriptor(p_dataDescriptor) { return this.dataDescriptor; }
	setDataValue(p_dataValue) { this.dataValue = p_dataValue; }
	getDataValue(p_dataValue) { return this.dataValue; }
	setDataKey(p_dataKey) { this.dataKey = p_dataKey; }
	getDataKey(p_dataKey) { return this.dataKey; }
}

module.exports.OpaqueDataType = OpaqueDataType;

class ArrayOfFDSFilter {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var FDSFilterList = [];
				obj.forEach(function(item) {FDSFilterList.push(new FDSFilterType(item))}); 
				this.setFDSFilter(FDSFilterList);
			}
		}
		else {
			this.setFDSFilter(null);
		}
	}

	setFDSFilter(p_FDSFilter) { this.FDSFilter = p_FDSFilter; }
	getFDSFilter(p_FDSFilter) { return this.FDSFilter; }
}

module.exports.ArrayOfFDSFilter = ArrayOfFDSFilter;

TransactionResponse.Errors = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var errorList = [];
				obj.forEach(function(item) {errorList.push(new TransactionResponse.Errors.Error(item))}); 
				this.setError(errorList);
			}
		}
		else {
			this.setError(null);
		}
	}

	setError(p_error) { this.error = p_error; }
	getError(p_error) { return this.error; }
}

module.exports.TransactionResponse.Errors = TransactionResponse.Errors;

TransactionResponse.SplitTenderPayments = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var splitTenderPaymentList = [];
				obj.forEach(function(item) {splitTenderPaymentList.push(new TransactionResponse.SplitTenderPayments.SplitTenderPayment(item))}); 
				this.setSplitTenderPayment(splitTenderPaymentList);
			}
		}
		else {
			this.setSplitTenderPayment(null);
		}
	}

	setSplitTenderPayment(p_splitTenderPayment) { this.splitTenderPayment = p_splitTenderPayment; }
	getSplitTenderPayment(p_splitTenderPayment) { return this.splitTenderPayment; }
}

module.exports.TransactionResponse.SplitTenderPayments = TransactionResponse.SplitTenderPayments;

PaymentScheduleType.Interval = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.length != null) { this.setLength(obj.length); }
			if(obj.unit != null) { this.setUnit(obj.unit); }
		}
		else {
			this.setLength(null);
			this.setUnit(null);
		}
	}

	setLength(p_length) { this.length = p_length; }
	getLength(p_length) { return this.length; }
	setUnit(p_unit) { this.unit = p_unit; }
	getUnit(p_unit) { return this.unit; }
}

module.exports.PaymentScheduleType.Interval = PaymentScheduleType.Interval;

TransactionResponse.Messages = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var messageList = [];
				obj.forEach(function(item) {messageList.push(new TransactionResponse.Messages.Message(item))}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setMessage(null);
		}
	}

	setMessage(p_message) { this.message = p_message; }
	getMessage(p_message) { return this.message; }
}

module.exports.TransactionResponse.Messages = TransactionResponse.Messages;

WebCheckOutDataType.Token = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.cardNumber != null) { this.setCardNumber(obj.cardNumber); }
			if(obj.expirationDate != null) { this.setExpirationDate(obj.expirationDate); }
			if(obj.cardCode != null) { this.setCardCode(obj.cardCode); }
			if(obj.zip != null) { this.setZip(obj.zip); }
			if(obj.fullName != null) { this.setFullName(obj.fullName); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardCode(null);
			this.setZip(null);
			this.setFullName(null);
		}
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber(p_cardNumber) { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate(p_expirationDate) { return this.expirationDate; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode(p_cardCode) { return this.cardCode; }
	setZip(p_zip) { this.zip = p_zip; }
	getZip(p_zip) { return this.zip; }
	setFullName(p_fullName) { this.fullName = p_fullName; }
	getFullName(p_fullName) { return this.fullName; }
}

module.exports.WebCheckOutDataType.Token = WebCheckOutDataType.Token;

TransactionResponse.PrePaidCard = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.requestedAmount != null) { this.setRequestedAmount(obj.requestedAmount); }
			if(obj.approvedAmount != null) { this.setApprovedAmount(obj.approvedAmount); }
			if(obj.balanceOnCard != null) { this.setBalanceOnCard(obj.balanceOnCard); }
		}
		else {
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
	}

	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount(p_requestedAmount) { return this.requestedAmount; }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount(p_approvedAmount) { return this.approvedAmount; }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard(p_balanceOnCard) { return this.balanceOnCard; }
}

module.exports.TransactionResponse.PrePaidCard = TransactionResponse.PrePaidCard;

MessagesType.Message = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.code != null) { this.setCode(obj.code); }
			if(obj.text != null) { this.setText(obj.text); }
		}
		else {
			this.setCode(null);
			this.setText(null);
		}
	}

	setCode(p_code) { this.code = p_code; }
	getCode(p_code) { return this.code; }
	setText(p_text) { this.text = p_text; }
	getText(p_text) { return this.text; }
}

module.exports.MessagesType.Message = MessagesType.Message;

KeyManagementScheme.DUKPT = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.Operation != null) { this.setOperation(obj.Operation); }
			if(obj.Mode != null) { this.setMode(new KeyManagementScheme.DUKPT.Mode(obj.Mode)); }
			if(obj.DeviceInfo != null) { this.setDeviceInfo(new KeyManagementScheme.DUKPT.DeviceInfo(obj.DeviceInfo)); }
			if(obj.EncryptedData != null) { this.setEncryptedData(new KeyManagementScheme.DUKPT.EncryptedData(obj.EncryptedData)); }
		}
		else {
			this.setOperation(null);
			this.setMode(null);
			this.setDeviceInfo(null);
			this.setEncryptedData(null);
		}
	}

	setOperation(p_Operation) { this.Operation = p_Operation; }
	getOperation(p_Operation) { return this.Operation; }
	setMode(p_Mode) { this.Mode = p_Mode; }
	getMode(p_Mode) { return this.Mode; }
	setDeviceInfo(p_DeviceInfo) { this.DeviceInfo = p_DeviceInfo; }
	getDeviceInfo(p_DeviceInfo) { return this.DeviceInfo; }
	setEncryptedData(p_EncryptedData) { this.EncryptedData = p_EncryptedData; }
	getEncryptedData(p_EncryptedData) { return this.EncryptedData; }
}

module.exports.KeyManagementScheme.DUKPT = KeyManagementScheme.DUKPT;

TransactionRequestType.UserFields = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item))}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField(p_userField) { return this.userField; }
}

module.exports.TransactionRequestType.UserFields = TransactionRequestType.UserFields;

TransactionResponse.SecureAcceptance = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.SecureAcceptanceUrl != null) { this.setSecureAcceptanceUrl(obj.SecureAcceptanceUrl); }
			if(obj.PayerID != null) { this.setPayerID(obj.PayerID); }
		}
		else {
			this.setSecureAcceptanceUrl(null);
			this.setPayerID(null);
		}
	}

	setSecureAcceptanceUrl(p_SecureAcceptanceUrl) { this.SecureAcceptanceUrl = p_SecureAcceptanceUrl; }
	getSecureAcceptanceUrl(p_SecureAcceptanceUrl) { return this.SecureAcceptanceUrl; }
	setPayerID(p_PayerID) { this.PayerID = p_PayerID; }
	getPayerID(p_PayerID) { return this.PayerID; }
}

module.exports.TransactionResponse.SecureAcceptance = TransactionResponse.SecureAcceptance;

TransactionResponse.UserFields = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item))}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField(p_userField) { return this.userField; }
}

module.exports.TransactionResponse.UserFields = TransactionResponse.UserFields;

KeyManagementScheme.DUKPT.DeviceInfo = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.Description != null) { this.setDescription(obj.Description); }
		}
		else {
			this.setDescription(null);
		}
	}

	setDescription(p_Description) { this.Description = p_Description; }
	getDescription(p_Description) { return this.Description; }
}

module.exports.KeyManagementScheme.DUKPT.DeviceInfo = KeyManagementScheme.DUKPT.DeviceInfo;

TransactionResponse.SplitTenderPayments.SplitTenderPayment = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.transId != null) { this.setTransId(obj.transId); }
			if(obj.responseCode != null) { this.setResponseCode(obj.responseCode); }
			if(obj.responseToCustomer != null) { this.setResponseToCustomer(obj.responseToCustomer); }
			if(obj.authCode != null) { this.setAuthCode(obj.authCode); }
			if(obj.accountNumber != null) { this.setAccountNumber(obj.accountNumber); }
			if(obj.accountType != null) { this.setAccountType(obj.accountType); }
			if(obj.requestedAmount != null) { this.setRequestedAmount(obj.requestedAmount); }
			if(obj.approvedAmount != null) { this.setApprovedAmount(obj.approvedAmount); }
			if(obj.balanceOnCard != null) { this.setBalanceOnCard(obj.balanceOnCard); }
		}
		else {
			this.setTransId(null);
			this.setResponseCode(null);
			this.setResponseToCustomer(null);
			this.setAuthCode(null);
			this.setAccountNumber(null);
			this.setAccountType(null);
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode(p_responseCode) { return this.responseCode; }
	setResponseToCustomer(p_responseToCustomer) { this.responseToCustomer = p_responseToCustomer; }
	getResponseToCustomer(p_responseToCustomer) { return this.responseToCustomer; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode(p_authCode) { return this.authCode; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber(p_accountNumber) { return this.accountNumber; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType(p_accountType) { return this.accountType; }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount(p_requestedAmount) { return this.requestedAmount; }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount(p_approvedAmount) { return this.approvedAmount; }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard(p_balanceOnCard) { return this.balanceOnCard; }
}

module.exports.TransactionResponse.SplitTenderPayments.SplitTenderPayment = TransactionResponse.SplitTenderPayments.SplitTenderPayment;

TransactionResponse.Messages.Message = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.code != null) { this.setCode(obj.code); }
			if(obj.description != null) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
	}

	setCode(p_code) { this.code = p_code; }
	getCode(p_code) { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription(p_description) { return this.description; }
}

module.exports.TransactionResponse.Messages.Message = TransactionResponse.Messages.Message;

KeyManagementScheme.DUKPT.EncryptedData = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.Value != null) { this.setValue(obj.Value); }
		}
		else {
			this.setValue(null);
		}
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue(p_Value) { return this.Value; }
}

module.exports.KeyManagementScheme.DUKPT.EncryptedData = KeyManagementScheme.DUKPT.EncryptedData;

KeyManagementScheme.DUKPT.Mode = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.PIN != null) { this.setPIN(obj.PIN); }
			if(obj.Data != null) { this.setData(obj.Data); }
		}
		else {
			this.setPIN(null);
			this.setData(null);
		}
	}

	setPIN(p_PIN) { this.PIN = p_PIN; }
	getPIN(p_PIN) { return this.PIN; }
	setData(p_Data) { this.Data = p_Data; }
	getData(p_Data) { return this.Data; }
}

module.exports.KeyManagementScheme.DUKPT.Mode = KeyManagementScheme.DUKPT.Mode;

TransactionResponse.Errors.Error = class {
	constructor(obj) {
		if(arguments.length == 1) {
			if(obj.errorCode != null) { this.setErrorCode(obj.errorCode); }
			if(obj.errorText != null) { this.setErrorText(obj.errorText); }
		}
		else {
			this.setErrorCode(null);
			this.setErrorText(null);
		}
	}

	setErrorCode(p_errorCode) { this.errorCode = p_errorCode; }
	getErrorCode(p_errorCode) { return this.errorCode; }
	setErrorText(p_errorText) { this.errorText = p_errorText; }
	getErrorText(p_errorText) { return this.errorText; }
}

module.exports.TransactionResponse.Errors.Error = TransactionResponse.Errors.Error;

class CustomerPaymentProfileMaskedType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.payment != null) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(obj.driversLicense != null) { this.setDriversLicense(new DriversLicenseMaskedType(obj.driversLicense)); }
			if(obj.taxId != null) { this.setTaxId(obj.taxId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense(p_driversLicense) { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId(p_taxId) { return this.taxId; }
}

module.exports.CustomerPaymentProfileMaskedType = CustomerPaymentProfileMaskedType;

class MobileDeviceRegistrationRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "mobileDeviceRegistrationRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.mobileDevice != null) { this.setMobileDevice(new MobileDeviceType(obj.mobileDevice)); }
		}
		else {
			super();
			this.setMobileDevice(null);
		}
	}

	setMobileDevice(p_mobileDevice) { this.mobileDevice = p_mobileDevice; }
	getMobileDevice(p_mobileDevice) { return this.mobileDevice; }
}

module.exports.MobileDeviceRegistrationRequest = MobileDeviceRegistrationRequest;

class ARBCreateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBCreateSubscriptionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscription != null) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription(p_subscription) { return this.subscription; }
}

module.exports.ARBCreateSubscriptionRequest = ARBCreateSubscriptionRequest;

class CreateCustomerProfileTransactionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerProfileTransactionResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transactionResponse != null) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(obj.directResponse != null) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setDirectResponse(null);
		}
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse(p_transactionResponse) { return this.transactionResponse; }
	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse(p_directResponse) { return this.directResponse; }
}

module.exports.CreateCustomerProfileTransactionResponse = CreateCustomerProfileTransactionResponse;

class MobileDeviceLoginRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "mobileDeviceLoginRequest" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceLoginRequest = MobileDeviceLoginRequest;

class GetTransactionDetailsRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getTransactionDetailsRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transId != null) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setTransId(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
}

module.exports.GetTransactionDetailsRequest = GetTransactionDetailsRequest;

class ARBGetSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscription != null) { this.setSubscription(new ARBSubscriptionMaskedType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription(p_subscription) { return this.subscription; }
}

module.exports.ARBGetSubscriptionResponse = ARBGetSubscriptionResponse;

class GetCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerPaymentProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.unmaskExpirationDate != null) { this.setUnmaskExpirationDate(obj.unmaskExpirationDate); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setUnmaskExpirationDate(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setUnmaskExpirationDate(p_unmaskExpirationDate) { this.unmaskExpirationDate = p_unmaskExpirationDate; }
	getUnmaskExpirationDate(p_unmaskExpirationDate) { return this.unmaskExpirationDate; }
}

module.exports.GetCustomerPaymentProfileRequest = GetCustomerPaymentProfileRequest;

class GetUnsettledTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getUnsettledTransactionListRequest" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetUnsettledTransactionListRequest = GetUnsettledTransactionListRequest;

class CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.payment != null) { this.setPayment(new PaymentType(obj.payment)); }
			if(obj.driversLicense != null) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(obj.taxId != null) { this.setTaxId(obj.taxId); }
		}
		else {
			super();
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
	}

	setPayment(p_payment) { this.payment = p_payment; }
	getPayment(p_payment) { return this.payment; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense(p_driversLicense) { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId(p_taxId) { return this.taxId; }
}

module.exports.CustomerPaymentProfileType = CustomerPaymentProfileType;

class GetBatchStatisticsRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getBatchStatisticsRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.batchId != null) { this.setBatchId(obj.batchId); }
		}
		else {
			super();
			this.setBatchId(null);
		}
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId(p_batchId) { return this.batchId; }
}

module.exports.GetBatchStatisticsRequest = GetBatchStatisticsRequest;

class ARBUpdateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBUpdateSubscriptionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscriptionId != null) { this.setSubscriptionId(obj.subscriptionId); }
			if(obj.subscription != null) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setSubscription(null);
		}
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId(p_subscriptionId) { return this.subscriptionId; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription(p_subscription) { return this.subscription; }
}

module.exports.ARBUpdateSubscriptionRequest = ARBUpdateSubscriptionRequest;

class GetSettledBatchListResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getSettledBatchListResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.batchList != null) { this.setBatchList(new ArrayOfBatchDetailsType(obj.batchList)); }
		}
		else {
			super();
			this.setBatchList(null);
		}
	}

	setBatchList(p_batchList) { this.batchList = p_batchList; }
	getBatchList(p_batchList) { return this.batchList; }
}

module.exports.GetSettledBatchListResponse = GetSettledBatchListResponse;

class ARBUpdateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBUpdateSubscriptionResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ARBUpdateSubscriptionResponse = ARBUpdateSubscriptionResponse;

class GetUnsettledTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getUnsettledTransactionListResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transactions != null) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
		}
		else {
			super();
			this.setTransactions(null);
		}
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions(p_transactions) { return this.transactions; }
}

module.exports.GetUnsettledTransactionListResponse = GetUnsettledTransactionListResponse;

class GetCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerShippingAddressResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.address != null) { this.setAddress(new CustomerAddressExType(obj.address)); }
		}
		else {
			super();
			this.setAddress(null);
		}
	}

	setAddress(p_address) { this.address = p_address; }
	getAddress(p_address) { return this.address; }
}

module.exports.GetCustomerShippingAddressResponse = GetCustomerShippingAddressResponse;

class GetTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getTransactionListResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transactions != null) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
		}
		else {
			super();
			this.setTransactions(null);
		}
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions(p_transactions) { return this.transactions; }
}

module.exports.GetTransactionListResponse = GetTransactionListResponse;

class GetCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerShippingAddressRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerAddressId != null) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId(p_customerAddressId) { return this.customerAddressId; }
}

module.exports.GetCustomerShippingAddressRequest = GetCustomerShippingAddressRequest;

class UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerPaymentProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.validationDirectResponse != null) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setValidationDirectResponse(null);
		}
	}

	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse(p_validationDirectResponse) { return this.validationDirectResponse; }
}

module.exports.UpdateCustomerPaymentProfileResponse = UpdateCustomerPaymentProfileResponse;

class UpdateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerShippingAddressResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerShippingAddressResponse = UpdateCustomerShippingAddressResponse;

class CreditCardType extends CreditCardSimpleType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.cardCode != null) { this.setCardCode(obj.cardCode); }
			if(obj.isPaymentToken != null) { this.setIsPaymentToken(obj.isPaymentToken); }
			if(obj.cryptogram != null) { this.setCryptogram(obj.cryptogram); }
		}
		else {
			super();
			this.setCardCode(null);
			this.setIsPaymentToken(null);
			this.setCryptogram(null);
		}
	}

	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode(p_cardCode) { return this.cardCode; }
	setIsPaymentToken(p_isPaymentToken) { this.isPaymentToken = p_isPaymentToken; }
	getIsPaymentToken(p_isPaymentToken) { return this.isPaymentToken; }
	setCryptogram(p_cryptogram) { this.cryptogram = p_cryptogram; }
	getCryptogram(p_cryptogram) { return this.cryptogram; }
}

module.exports.CreditCardType = CreditCardType;

class UpdateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerShippingAddressRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.address != null) { this.setAddress(new CustomerAddressExType(obj.address)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setAddress(p_address) { this.address = p_address; }
	getAddress(p_address) { return this.address; }
}

module.exports.UpdateCustomerShippingAddressRequest = UpdateCustomerShippingAddressRequest;

class ARBGetSubscriptionStatusResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionStatusResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.status != null) { this.setStatus(obj.status); }
		}
		else {
			super();
			this.setStatus(null);
		}
	}

	setStatus(p_status) { this.status = p_status; }
	getStatus(p_status) { return this.status; }
}

module.exports.ARBGetSubscriptionStatusResponse = ARBGetSubscriptionStatusResponse;

class LogoutRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "logoutRequest" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutRequest = LogoutRequest;

class ARBCancelSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBCancelSubscriptionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscriptionId != null) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId(p_subscriptionId) { return this.subscriptionId; }
}

module.exports.ARBCancelSubscriptionRequest = ARBCancelSubscriptionRequest;

class SecurePaymentContainerRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "securePaymentContainerRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.data != null) { this.setData(new WebCheckOutDataType(obj.data)); }
		}
		else {
			super();
			this.setData(null);
		}
	}

	setData(p_data) { this.data = p_data; }
	getData(p_data) { return this.data; }
}

module.exports.SecurePaymentContainerRequest = SecurePaymentContainerRequest;

class UpdateSplitTenderGroupRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateSplitTenderGroupRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.splitTenderId != null) { this.setSplitTenderId(obj.splitTenderId); }
			if(obj.splitTenderStatus != null) { this.setSplitTenderStatus(obj.splitTenderStatus); }
		}
		else {
			super();
			this.setSplitTenderId(null);
			this.setSplitTenderStatus(null);
		}
	}

	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId(p_splitTenderId) { return this.splitTenderId; }
	setSplitTenderStatus(p_splitTenderStatus) { this.splitTenderStatus = p_splitTenderStatus; }
	getSplitTenderStatus(p_splitTenderStatus) { return this.splitTenderStatus; }
}

module.exports.UpdateSplitTenderGroupRequest = UpdateSplitTenderGroupRequest;

class CreateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileIdList != null) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(obj.customerShippingAddressIdList != null) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
			if(obj.validationDirectResponseList != null) { this.setValidationDirectResponseList(new ArrayOfString(obj.validationDirectResponseList)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
			this.setValidationDirectResponseList(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { return this.customerPaymentProfileIdList; }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList(p_customerShippingAddressIdList) { return this.customerShippingAddressIdList; }
	setValidationDirectResponseList(p_validationDirectResponseList) { this.validationDirectResponseList = p_validationDirectResponseList; }
	getValidationDirectResponseList(p_validationDirectResponseList) { return this.validationDirectResponseList; }
}

module.exports.CreateCustomerProfileResponse = CreateCustomerProfileResponse;

class GetTransactionDetailsResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getTransactionDetailsResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transaction != null) { this.setTransaction(new TransactionDetailsType(obj.transaction)); }
		}
		else {
			super();
			this.setTransaction(null);
		}
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction(p_transaction) { return this.transaction; }
}

module.exports.GetTransactionDetailsResponse = GetTransactionDetailsResponse;

class DeleteCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerPaymentProfileResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerPaymentProfileResponse = DeleteCustomerPaymentProfileResponse;

class MobileDeviceLoginResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "mobileDeviceLoginResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.merchantContact != null) { this.setMerchantContact(new MerchantContactType(obj.merchantContact)); }
			if(obj.userPermissions != null) { this.setUserPermissions(new ArrayOfPermissionType(obj.userPermissions)); }
			if(obj.merchantAccount != null) { this.setMerchantAccount(new TransRetailInfoType(obj.merchantAccount)); }
		}
		else {
			super();
			this.setMerchantContact(null);
			this.setUserPermissions(null);
			this.setMerchantAccount(null);
		}
	}

	setMerchantContact(p_merchantContact) { this.merchantContact = p_merchantContact; }
	getMerchantContact(p_merchantContact) { return this.merchantContact; }
	setUserPermissions(p_userPermissions) { this.userPermissions = p_userPermissions; }
	getUserPermissions(p_userPermissions) { return this.userPermissions; }
	setMerchantAccount(p_merchantAccount) { this.merchantAccount = p_merchantAccount; }
	getMerchantAccount(p_merchantAccount) { return this.merchantAccount; }
}

module.exports.MobileDeviceLoginResponse = MobileDeviceLoginResponse;

class DeleteCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerProfileResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerProfileResponse = DeleteCustomerProfileResponse;

class CreateTransactionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createTransactionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transactionRequest != null) { this.setTransactionRequest(new TransactionRequestType(obj.transactionRequest)); }
		}
		else {
			super();
			this.setTransactionRequest(null);
		}
	}

	setTransactionRequest(p_transactionRequest) { this.transactionRequest = p_transactionRequest; }
	getTransactionRequest(p_transactionRequest) { return this.transactionRequest; }
}

module.exports.CreateTransactionRequest = CreateTransactionRequest;

class GetCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
}

module.exports.GetCustomerProfileRequest = GetCustomerProfileRequest;

class OrderExType extends OrderType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.purchaseOrderNumber != null) { this.setPurchaseOrderNumber(obj.purchaseOrderNumber); }
		}
		else {
			super();
			this.setPurchaseOrderNumber(null);
		}
	}

	setPurchaseOrderNumber(p_purchaseOrderNumber) { this.purchaseOrderNumber = p_purchaseOrderNumber; }
	getPurchaseOrderNumber(p_purchaseOrderNumber) { return this.purchaseOrderNumber; }
}

module.exports.OrderExType = OrderExType;

class DeleteCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerShippingAddressResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerShippingAddressResponse = DeleteCustomerShippingAddressResponse;

class UpdateSplitTenderGroupResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateSplitTenderGroupResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateSplitTenderGroupResponse = UpdateSplitTenderGroupResponse;

class SendCustomerTransactionReceiptResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "sendCustomerTransactionReceiptResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.SendCustomerTransactionReceiptResponse = SendCustomerTransactionReceiptResponse;

class ProfileTransRefundType extends ProfileTransAmountType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingAddressId != null) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(obj.creditCardNumberMasked != null) { this.setCreditCardNumberMasked(obj.creditCardNumberMasked); }
			if(obj.bankRoutingNumberMasked != null) { this.setBankRoutingNumberMasked(obj.bankRoutingNumberMasked); }
			if(obj.bankAccountNumberMasked != null) { this.setBankAccountNumberMasked(obj.bankAccountNumberMasked); }
			if(obj.order != null) { this.setOrder(new OrderExType(obj.order)); }
			if(obj.transId != null) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setCreditCardNumberMasked(null);
			this.setBankRoutingNumberMasked(null);
			this.setBankAccountNumberMasked(null);
			this.setOrder(null);
			this.setTransId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId(p_customerShippingAddressId) { return this.customerShippingAddressId; }
	setCreditCardNumberMasked(p_creditCardNumberMasked) { this.creditCardNumberMasked = p_creditCardNumberMasked; }
	getCreditCardNumberMasked(p_creditCardNumberMasked) { return this.creditCardNumberMasked; }
	setBankRoutingNumberMasked(p_bankRoutingNumberMasked) { this.bankRoutingNumberMasked = p_bankRoutingNumberMasked; }
	getBankRoutingNumberMasked(p_bankRoutingNumberMasked) { return this.bankRoutingNumberMasked; }
	setBankAccountNumberMasked(p_bankAccountNumberMasked) { this.bankAccountNumberMasked = p_bankAccountNumberMasked; }
	getBankAccountNumberMasked(p_bankAccountNumberMasked) { return this.bankAccountNumberMasked; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
}

module.exports.ProfileTransRefundType = ProfileTransRefundType;

class GetCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerPaymentProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.paymentProfile != null) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
		}
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
}

module.exports.GetCustomerPaymentProfileResponse = GetCustomerPaymentProfileResponse;

class GetCustomerProfileIdsResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerProfileIdsResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.ids != null) { this.setIds(new ArrayOfNumericString(obj.ids)); }
		}
		else {
			super();
			this.setIds(null);
		}
	}

	setIds(p_ids) { this.ids = p_ids; }
	getIds(p_ids) { return this.ids; }
}

module.exports.GetCustomerProfileIdsResponse = GetCustomerProfileIdsResponse;

class AuthenticateTestResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "authenticateTestResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestResponse = AuthenticateTestResponse;

class EmailSettingsType extends ArrayOfSetting {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.version != null) { this.setVersion(obj.version); }
		}
		else {
			super();
			this.setVersion(null);
		}
	}

	setVersion(p_version) { this.version = p_version; }
	getVersion(p_version) { return this.version; }
}

module.exports.EmailSettingsType = EmailSettingsType;

class SendCustomerTransactionReceiptRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "sendCustomerTransactionReceiptRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transId != null) { this.setTransId(obj.transId); }
			if(obj.customerEmail != null) { this.setCustomerEmail(obj.customerEmail); }
			if(obj.emailSettings != null) { this.setEmailSettings(new EmailSettingsType(obj.emailSettings)); }
		}
		else {
			super();
			this.setTransId(null);
			this.setCustomerEmail(null);
			this.setEmailSettings(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
	setCustomerEmail(p_customerEmail) { this.customerEmail = p_customerEmail; }
	getCustomerEmail(p_customerEmail) { return this.customerEmail; }
	setEmailSettings(p_emailSettings) { this.emailSettings = p_emailSettings; }
	getEmailSettings(p_emailSettings) { return this.emailSettings; }
}

module.exports.SendCustomerTransactionReceiptRequest = SendCustomerTransactionReceiptRequest;

class GetCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.profile != null) { this.setProfile(new CustomerProfileMaskedType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile(p_profile) { return this.profile; }
}

module.exports.GetCustomerProfileResponse = GetCustomerProfileResponse;

class LogoutResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "logoutResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutResponse = LogoutResponse;

class ARBGetSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscriptionId != null) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId(p_subscriptionId) { return this.subscriptionId; }
}

module.exports.ARBGetSubscriptionRequest = ARBGetSubscriptionRequest;

class DecryptPaymentDataRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "decryptPaymentDataRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.opaqueData != null) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
			if(obj.callId != null) { this.setCallId(obj.callId); }
		}
		else {
			super();
			this.setOpaqueData(null);
			this.setCallId(null);
		}
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData(p_opaqueData) { return this.opaqueData; }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId(p_callId) { return this.callId; }
}

module.exports.DecryptPaymentDataRequest = DecryptPaymentDataRequest;

class GetCustomerPaymentProfileListResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerPaymentProfileListResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.totalNumInResultSet != null) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(obj.paymentProfiles != null) { this.setPaymentProfiles(new ArrayOfCustomerPaymentProfileListItemType(obj.paymentProfiles)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setPaymentProfiles(null);
		}
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet(p_totalNumInResultSet) { return this.totalNumInResultSet; }
	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles(p_paymentProfiles) { return this.paymentProfiles; }
}

module.exports.GetCustomerPaymentProfileListResponse = GetCustomerPaymentProfileListResponse;

class CustomerProfileType extends CustomerProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileType(item))}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressType(item))}); 
				this.setShipToList(shipToListList);
			}
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
		}
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles(p_paymentProfiles) { return this.paymentProfiles; }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList(p_shipToList) { return this.shipToList; }
}

module.exports.CustomerProfileType = CustomerProfileType;

class CustomerProfileExType extends CustomerProfileBaseType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
}

module.exports.CustomerProfileExType = CustomerProfileExType;

class MobileDeviceRegistrationResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "mobileDeviceRegistrationResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceRegistrationResponse = MobileDeviceRegistrationResponse;

class CreateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerShippingAddressRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.address != null) { this.setAddress(new CustomerAddressType(obj.address)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setAddress(p_address) { this.address = p_address; }
	getAddress(p_address) { return this.address; }
}

module.exports.CreateCustomerShippingAddressRequest = CreateCustomerShippingAddressRequest;

class ARBCreateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBCreateSubscriptionResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscriptionId != null) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId(p_subscriptionId) { return this.subscriptionId; }
}

module.exports.ARBCreateSubscriptionResponse = ARBCreateSubscriptionResponse;

class GetCustomerProfileIdsRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerProfileIdsRequest" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetCustomerProfileIdsRequest = GetCustomerProfileIdsRequest;

class ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "validateCustomerPaymentProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingAddressId != null) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(obj.cardCode != null) { this.setCardCode(obj.cardCode); }
			if(obj.validationMode != null) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setCardCode(null);
			this.setValidationMode(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId(p_customerShippingAddressId) { return this.customerShippingAddressId; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode(p_cardCode) { return this.cardCode; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode(p_validationMode) { return this.validationMode; }
}

module.exports.ValidateCustomerPaymentProfileRequest = ValidateCustomerPaymentProfileRequest;

class GetTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getTransactionListRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.batchId != null) { this.setBatchId(obj.batchId); }
		}
		else {
			super();
			this.setBatchId(null);
		}
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId(p_batchId) { return this.batchId; }
}

module.exports.GetTransactionListRequest = GetTransactionListRequest;

class ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingAddressId != null) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(obj.transId != null) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId(p_customerShippingAddressId) { return this.customerShippingAddressId; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
}

module.exports.ProfileTransPriorAuthCaptureType = ProfileTransPriorAuthCaptureType;

class UpdateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.profile != null) { this.setProfile(new CustomerProfileExType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile(p_profile) { return this.profile; }
}

module.exports.UpdateCustomerProfileRequest = UpdateCustomerProfileRequest;

class DeleteCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
}

module.exports.DeleteCustomerProfileRequest = DeleteCustomerProfileRequest;

class GetCustomerPaymentProfileListRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getCustomerPaymentProfileListRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.searchType != null) { this.setSearchType(obj.searchType); }
			if(obj.month != null) { this.setMonth(obj.month); }
			if(obj.sorting != null) { this.setSorting(new CustomerPaymentProfileSorting(obj.sorting)); }
			if(obj.paging != null) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setMonth(null);
			this.setSorting(null);
			this.setPaging(null);
		}
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType(p_searchType) { return this.searchType; }
	setMonth(p_month) { this.month = p_month; }
	getMonth(p_month) { return this.month; }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting(p_sorting) { return this.sorting; }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging(p_paging) { return this.paging; }
}

module.exports.GetCustomerPaymentProfileListRequest = GetCustomerPaymentProfileListRequest;

class ARBGetSubscriptionStatusRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionStatusRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.subscriptionId != null) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId(p_subscriptionId) { return this.subscriptionId; }
}

module.exports.ARBGetSubscriptionStatusRequest = ARBGetSubscriptionStatusRequest;

class CreateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerPaymentProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.paymentProfile != null) { this.setPaymentProfile(new CustomerPaymentProfileType(obj.paymentProfile)); }
			if(obj.validationMode != null) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode(p_validationMode) { return this.validationMode; }
}

module.exports.CreateCustomerPaymentProfileRequest = CreateCustomerPaymentProfileRequest;

class GetHostedProfilePageRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getHostedProfilePageRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.hostedProfileSettings != null) { this.setHostedProfileSettings(new ArrayOfSetting(obj.hostedProfileSettings)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setHostedProfileSettings(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setHostedProfileSettings(p_hostedProfileSettings) { this.hostedProfileSettings = p_hostedProfileSettings; }
	getHostedProfileSettings(p_hostedProfileSettings) { return this.hostedProfileSettings; }
}

module.exports.GetHostedProfilePageRequest = GetHostedProfilePageRequest;

class DeleteCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerShippingAddressRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerAddressId != null) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId(p_customerAddressId) { return this.customerAddressId; }
}

module.exports.DeleteCustomerShippingAddressRequest = DeleteCustomerShippingAddressRequest;

class DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "deleteCustomerPaymentProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
}

module.exports.DeleteCustomerPaymentProfileRequest = DeleteCustomerPaymentProfileRequest;

class GetSettledBatchListRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getSettledBatchListRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.includeStatistics != null) { this.setIncludeStatistics(obj.includeStatistics); }
			if(obj.firstSettlementDate != null) { this.setFirstSettlementDate(obj.firstSettlementDate); }
			if(obj.lastSettlementDate != null) { this.setLastSettlementDate(obj.lastSettlementDate); }
		}
		else {
			super();
			this.setIncludeStatistics(null);
			this.setFirstSettlementDate(null);
			this.setLastSettlementDate(null);
		}
	}

	setIncludeStatistics(p_includeStatistics) { this.includeStatistics = p_includeStatistics; }
	getIncludeStatistics(p_includeStatistics) { return this.includeStatistics; }
	setFirstSettlementDate(p_firstSettlementDate) { this.firstSettlementDate = p_firstSettlementDate; }
	getFirstSettlementDate(p_firstSettlementDate) { return this.firstSettlementDate; }
	setLastSettlementDate(p_lastSettlementDate) { this.lastSettlementDate = p_lastSettlementDate; }
	getLastSettlementDate(p_lastSettlementDate) { return this.lastSettlementDate; }
}

module.exports.GetSettledBatchListRequest = GetSettledBatchListRequest;

class CreateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerPaymentProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.validationDirectResponse != null) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setValidationDirectResponse(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse(p_validationDirectResponse) { return this.validationDirectResponse; }
}

module.exports.CreateCustomerPaymentProfileResponse = CreateCustomerPaymentProfileResponse;

class CreateCustomerProfileTransactionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerProfileTransactionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transaction != null) { this.setTransaction(new ProfileTransactionType(obj.transaction)); }
			if(obj.extraOptions != null) { this.setExtraOptions(obj.extraOptions); }
		}
		else {
			super();
			this.setTransaction(null);
			this.setExtraOptions(null);
		}
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction(p_transaction) { return this.transaction; }
	setExtraOptions(p_extraOptions) { this.extraOptions = p_extraOptions; }
	getExtraOptions(p_extraOptions) { return this.extraOptions; }
}

module.exports.CreateCustomerProfileTransactionRequest = CreateCustomerProfileTransactionRequest;

class GetBatchStatisticsResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getBatchStatisticsResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.batch != null) { this.setBatch(new BatchDetailsType(obj.batch)); }
		}
		else {
			super();
			this.setBatch(null);
		}
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch(p_batch) { return this.batch; }
}

module.exports.GetBatchStatisticsResponse = GetBatchStatisticsResponse;

class ARBGetSubscriptionListRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionListRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.searchType != null) { this.setSearchType(obj.searchType); }
			if(obj.sorting != null) { this.setSorting(new ARBGetSubscriptionListSorting(obj.sorting)); }
			if(obj.paging != null) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setSorting(null);
			this.setPaging(null);
		}
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType(p_searchType) { return this.searchType; }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting(p_sorting) { return this.sorting; }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging(p_paging) { return this.paging; }
}

module.exports.ARBGetSubscriptionListRequest = ARBGetSubscriptionListRequest;

class ARBGetSubscriptionListResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBGetSubscriptionListResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.totalNumInResultSet != null) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(obj.subscriptionDetails != null) { this.setSubscriptionDetails(new ArrayOfSubscription(obj.subscriptionDetails)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setSubscriptionDetails(null);
		}
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet(p_totalNumInResultSet) { return this.totalNumInResultSet; }
	setSubscriptionDetails(p_subscriptionDetails) { this.subscriptionDetails = p_subscriptionDetails; }
	getSubscriptionDetails(p_subscriptionDetails) { return this.subscriptionDetails; }
}

module.exports.ARBGetSubscriptionListResponse = ARBGetSubscriptionListResponse;

class ProfileTransOrderType extends ProfileTransAmountType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(obj.customerShippingAddressId != null) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(obj.order != null) { this.setOrder(new OrderExType(obj.order)); }
			if(obj.taxExempt != null) { this.setTaxExempt(obj.taxExempt); }
			if(obj.recurringBilling != null) { this.setRecurringBilling(obj.recurringBilling); }
			if(obj.cardCode != null) { this.setCardCode(obj.cardCode); }
			if(obj.splitTenderId != null) { this.setSplitTenderId(obj.splitTenderId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setOrder(null);
			this.setTaxExempt(null);
			this.setRecurringBilling(null);
			this.setCardCode(null);
			this.setSplitTenderId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId(p_customerShippingAddressId) { return this.customerShippingAddressId; }
	setOrder(p_order) { this.order = p_order; }
	getOrder(p_order) { return this.order; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt(p_taxExempt) { return this.taxExempt; }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling(p_recurringBilling) { return this.recurringBilling; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode(p_cardCode) { return this.cardCode; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId(p_splitTenderId) { return this.splitTenderId; }
}

module.exports.ProfileTransOrderType = ProfileTransOrderType;

class UpdateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerProfileResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerProfileResponse = UpdateCustomerProfileResponse;

class AuthenticateTestRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "authenticateTestRequest" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestRequest = AuthenticateTestRequest;

class CustomerAddressType extends NameAndAddressType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.phoneNumber != null) { this.setPhoneNumber(obj.phoneNumber); }
			if(obj.faxNumber != null) { this.setFaxNumber(obj.faxNumber); }
			if(obj.email != null) { this.setEmail(obj.email); }
		}
		else {
			super();
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setEmail(null);
		}
	}

	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber(p_phoneNumber) { return this.phoneNumber; }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber(p_faxNumber) { return this.faxNumber; }
	setEmail(p_email) { this.email = p_email; }
	getEmail(p_email) { return this.email; }
}

module.exports.CustomerAddressType = CustomerAddressType;

class DecryptPaymentDataResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "decryptPaymentDataResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.shippingInfo != null) { this.setShippingInfo(new CustomerAddressType(obj.shippingInfo)); }
			if(obj.billingInfo != null) { this.setBillingInfo(new CustomerAddressType(obj.billingInfo)); }
			if(obj.cardInfo != null) { this.setCardInfo(new CreditCardMaskedType(obj.cardInfo)); }
			if(obj.paymentDetails != null) { this.setPaymentDetails(new PaymentDetails(obj.paymentDetails)); }
		}
		else {
			super();
			this.setShippingInfo(null);
			this.setBillingInfo(null);
			this.setCardInfo(null);
			this.setPaymentDetails(null);
		}
	}

	setShippingInfo(p_shippingInfo) { this.shippingInfo = p_shippingInfo; }
	getShippingInfo(p_shippingInfo) { return this.shippingInfo; }
	setBillingInfo(p_billingInfo) { this.billingInfo = p_billingInfo; }
	getBillingInfo(p_billingInfo) { return this.billingInfo; }
	setCardInfo(p_cardInfo) { this.cardInfo = p_cardInfo; }
	getCardInfo(p_cardInfo) { return this.cardInfo; }
	setPaymentDetails(p_paymentDetails) { this.paymentDetails = p_paymentDetails; }
	getPaymentDetails(p_paymentDetails) { return this.paymentDetails; }
}

module.exports.DecryptPaymentDataResponse = DecryptPaymentDataResponse;

class GetHostedProfilePageResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "getHostedProfilePageResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.token != null) { this.setToken(obj.token); }
		}
		else {
			super();
			this.setToken(null);
		}
	}

	setToken(p_token) { this.token = p_token; }
	getToken(p_token) { return this.token; }
}

module.exports.GetHostedProfilePageResponse = GetHostedProfilePageResponse;

class ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "validateCustomerPaymentProfileResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.directResponse != null) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setDirectResponse(null);
		}
	}

	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse(p_directResponse) { return this.directResponse; }
}

module.exports.ValidateCustomerPaymentProfileResponse = ValidateCustomerPaymentProfileResponse;

class CreateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.profile != null) { this.setProfile(new CustomerProfileType(obj.profile)); }
			if(obj.validationMode != null) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setProfile(null);
			this.setValidationMode(null);
		}
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile(p_profile) { return this.profile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode(p_validationMode) { return this.validationMode; }
}

module.exports.CreateCustomerProfileRequest = CreateCustomerProfileRequest;

class ARBCancelSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "ARBCancelSubscriptionResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ARBCancelSubscriptionResponse = ARBCancelSubscriptionResponse;

class CreateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerShippingAddressResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.customerAddressId != null) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId(p_customerAddressId) { return this.customerAddressId; }
}

module.exports.CreateCustomerShippingAddressResponse = CreateCustomerShippingAddressResponse;

class UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "updateCustomerPaymentProfileRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerProfileId != null) { this.setCustomerProfileId(obj.customerProfileId); }
			if(obj.paymentProfile != null) { this.setPaymentProfile(new CustomerPaymentProfileExType(obj.paymentProfile)); }
			if(obj.validationMode != null) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId(p_customerProfileId) { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode(p_validationMode) { return this.validationMode; }
}

module.exports.UpdateCustomerPaymentProfileRequest = UpdateCustomerPaymentProfileRequest;

class SecurePaymentContainerResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "securePaymentContainerResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.opaqueData != null) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
		}
		else {
			super();
			this.setOpaqueData(null);
		}
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData(p_opaqueData) { return this.opaqueData; }
}

module.exports.SecurePaymentContainerResponse = SecurePaymentContainerResponse;

class IsAliveResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "isAliveResponse" : this };
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.IsAliveResponse = IsAliveResponse;

class CreateTransactionResponse extends ANetApiResponse {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createTransactionResponse" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transactionResponse != null) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(obj.profileResponse != null) { this.setProfileResponse(new CreateProfileResponse(obj.profileResponse)); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setProfileResponse(null);
		}
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse(p_transactionResponse) { return this.transactionResponse; }
	setProfileResponse(p_profileResponse) { this.profileResponse = p_profileResponse; }
	getProfileResponse(p_profileResponse) { return this.profileResponse; }
}

module.exports.CreateTransactionResponse = CreateTransactionResponse;

class CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
	getJSON() { 
		utils.delete_null_properties(this, true);
		var obj = { "createCustomerProfileFromTransactionRequest" : this };
		return obj;
	}

	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.transId != null) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setTransId(null);
		}
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId(p_transId) { return this.transId; }
}

module.exports.CreateCustomerProfileFromTransactionRequest = CreateCustomerProfileFromTransactionRequest;

class ProfileTransAuthCaptureType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthCaptureType = ProfileTransAuthCaptureType;

class CustomerPaymentProfileExType extends CustomerPaymentProfileType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerPaymentProfileId != null) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerPaymentProfileId(null);
		}
	}

	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId(p_customerPaymentProfileId) { return this.customerPaymentProfileId; }
}

module.exports.CustomerPaymentProfileExType = CustomerPaymentProfileExType;

class CustomerProfileMaskedType extends CustomerProfileExType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileMaskedType(item))}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressExType(item))}); 
				this.setShipToList(shipToListList);
			}
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
		}
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles(p_paymentProfiles) { return this.paymentProfiles; }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList(p_shipToList) { return this.shipToList; }
}

module.exports.CustomerProfileMaskedType = CustomerProfileMaskedType;

class CustomerAddressExType extends CustomerAddressType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.customerAddressId != null) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerAddressId(null);
		}
	}

	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId(p_customerAddressId) { return this.customerAddressId; }
}

module.exports.CustomerAddressExType = CustomerAddressExType;

class ProfileTransAuthOnlyType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthOnlyType = ProfileTransAuthOnlyType;

class ProfileTransCaptureOnlyType extends ProfileTransOrderType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.approvalCode != null) { this.setApprovalCode(obj.approvalCode); }
		}
		else {
			super();
			this.setApprovalCode(null);
		}
	}

	setApprovalCode(p_approvalCode) { this.approvalCode = p_approvalCode; }
	getApprovalCode(p_approvalCode) { return this.approvalCode; }
}

module.exports.ProfileTransCaptureOnlyType = ProfileTransCaptureOnlyType;

class SubscriptionCustomerProfileType extends CustomerProfileExType {
	constructor(obj) {
		if(arguments.length == 1) {
			super(obj);
			if(obj.paymentProfile != null) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
			if(obj.shippingProfile != null) { this.setShippingProfile(new CustomerAddressExType(obj.shippingProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
			this.setShippingProfile(null);
		}
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile(p_paymentProfile) { return this.paymentProfile; }
	setShippingProfile(p_shippingProfile) { this.shippingProfile = p_shippingProfile; }
	getShippingProfile(p_shippingProfile) { return this.shippingProfile; }
}

module.exports.SubscriptionCustomerProfileType = SubscriptionCustomerProfileType;

const PermissionsEnum = { 
		API_MERCHANT_BASICREPORTING : 'API_Merchant_BasicReporting',
		SUBMIT_CHARGE : 'Submit_Charge',
		SUBMIT_REFUND : 'Submit_Refund',
		SUBMIT_UPDATE : 'Submit_Update',
		MOBILE_ADMIN : 'Mobile_Admin'	
}
module.exports.PermissionsEnum = PermissionsEnum;

const ARBGetSubscriptionListOrderFieldEnum = { 
		ID : 'id',
		NAME : 'name',
		STATUS : 'status',
		CREATETIMESTAMPUTC : 'createTimeStampUTC',
		LASTNAME : 'lastName',
		FIRSTNAME : 'firstName',
		ACCOUNTNUMBER : 'accountNumber',
		AMOUNT : 'amount',
		PASTOCCURRENCES : 'pastOccurrences'	
}
module.exports.ARBGetSubscriptionListOrderFieldEnum = ARBGetSubscriptionListOrderFieldEnum;

const ARBSubscriptionStatusEnum = { 
		ACTIVE : 'active',
		EXPIRED : 'expired',
		SUSPENDED : 'suspended',
		CANCELED : 'canceled',
		TERMINATED : 'terminated'	
}
module.exports.ARBSubscriptionStatusEnum = ARBSubscriptionStatusEnum;

const PaymentMethodEnum = { 
		CREDITCARD : 'creditCard',
		ECHECK : 'eCheck',
		PAYPAL : 'payPal'	
}
module.exports.PaymentMethodEnum = PaymentMethodEnum;

const SplitTenderStatusEnum = { 
		COMPLETED : 'completed',
		HELD : 'held',
		VOIDED : 'voided'	
}
module.exports.SplitTenderStatusEnum = SplitTenderStatusEnum;

const MessageTypeEnum = { 
		OK : 'Ok',
		ERROR : 'Error'	
}
module.exports.MessageTypeEnum = MessageTypeEnum;

const ARBGetSubscriptionListSearchTypeEnum = { 
		CARDEXPIRINGTHISMONTH : 'cardExpiringThisMonth',
		SUBSCRIPTIONACTIVE : 'subscriptionActive',
		SUBSCRIPTIONEXPIRINGTHISMONTH : 'subscriptionExpiringThisMonth',
		SUBSCRIPTIONINACTIVE : 'subscriptionInactive'	
}
module.exports.ARBGetSubscriptionListSearchTypeEnum = ARBGetSubscriptionListSearchTypeEnum;

const CustomerPaymentProfileOrderFieldEnum = { 
		ID : 'id'	
}
module.exports.CustomerPaymentProfileOrderFieldEnum = CustomerPaymentProfileOrderFieldEnum;

const TransactionStatusEnum = { 
		AUTHORIZEDPENDINGCAPTURE : 'authorizedPendingCapture',
		CAPTUREDPENDINGSETTLEMENT : 'capturedPendingSettlement',
		COMMUNICATIONERROR : 'communicationError',
		REFUNDSETTLEDSUCCESSFULLY : 'refundSettledSuccessfully',
		REFUNDPENDINGSETTLEMENT : 'refundPendingSettlement',
		APPROVEDREVIEW : 'approvedReview',
		DECLINED : 'declined',
		COULDNOTVOID : 'couldNotVoid',
		EXPIRED : 'expired',
		GENERALERROR : 'generalError',
		PENDINGFINALSETTLEMENT : 'pendingFinalSettlement',
		PENDINGSETTLEMENT : 'pendingSettlement',
		FAILEDREVIEW : 'failedReview',
		SETTLEDSUCCESSFULLY : 'settledSuccessfully',
		SETTLEMENTERROR : 'settlementError',
		UNDERREVIEW : 'underReview',
		UPDATINGSETTLEMENT : 'updatingSettlement',
		VOIDED : 'voided',
		FDSPENDINGREVIEW : 'FDSPendingReview',
		FDSAUTHORIZEDPENDINGREVIEW : 'FDSAuthorizedPendingReview',
		RETURNEDITEM : 'returnedItem',
		CHARGEBACK : 'chargeback',
		CHARGEBACKREVERSAL : 'chargebackReversal',
		AUTHORIZEDPENDINGRELEASE : 'authorizedPendingRelease'	
}
module.exports.TransactionStatusEnum = TransactionStatusEnum;

const FDSFilterActionEnum = { 
		REJECT : 'reject',
		DECLINE : 'decline',
		HOLD : 'hold',
		AUTHANDHOLD : 'authAndHold',
		REPORT : 'report'	
}
module.exports.FDSFilterActionEnum = FDSFilterActionEnum;

const ValidationModeEnum = { 
		NONE : 'none',
		TESTMODE : 'testMode',
		LIVEMODE : 'liveMode',
		OLDLIVEMODE : 'oldLiveMode'	
}
module.exports.ValidationModeEnum = ValidationModeEnum;

const EcheckTypeEnum = { 
		PPD : 'PPD',
		WEB : 'WEB',
		CCD : 'CCD',
		TEL : 'TEL',
		ARC : 'ARC',
		BOC : 'BOC'	
}
module.exports.EcheckTypeEnum = EcheckTypeEnum;

const AccountTypeEnum = { 
		VISA : 'Visa',
		MASTERCARD : 'MasterCard',
		AMERICANEXPRESS : 'AmericanExpress',
		DISCOVER : 'Discover',
		JCB : 'JCB',
		DINERSCLUB : 'DinersClub',
		ECHECK : 'eCheck'	
}
module.exports.AccountTypeEnum = AccountTypeEnum;

const BankAccountTypeEnum = { 
		CHECKING : 'checking',
		SAVINGS : 'savings',
		BUSINESSCHECKING : 'businessChecking'	
}
module.exports.BankAccountTypeEnum = BankAccountTypeEnum;

const CustomerPaymentProfileSearchTypeEnum = { 
		CARDSEXPIRINGINMONTH : 'cardsExpiringInMonth'	
}
module.exports.CustomerPaymentProfileSearchTypeEnum = CustomerPaymentProfileSearchTypeEnum;

const WebCheckOutTypeEnum = { 
		PAN : 'PAN',
		TOKEN : 'TOKEN'	
}
module.exports.WebCheckOutTypeEnum = WebCheckOutTypeEnum;

const SettlementStateEnum = { 
		SETTLEDSUCCESSFULLY : 'settledSuccessfully',
		SETTLEMENTERROR : 'settlementError',
		PENDINGSETTLEMENT : 'pendingSettlement'	
}
module.exports.SettlementStateEnum = SettlementStateEnum;

const SettingNameEnum = { 
		EMAILCUSTOMER : 'emailCustomer',
		MERCHANTEMAIL : 'merchantEmail',
		ALLOWPARTIALAUTH : 'allowPartialAuth',
		HEADEREMAILRECEIPT : 'headerEmailReceipt',
		FOOTEREMAILRECEIPT : 'footerEmailReceipt',
		RECURRINGBILLING : 'recurringBilling',
		DUPLICATEWINDOW : 'duplicateWindow',
		TESTREQUEST : 'testRequest',
		HOSTEDPROFILERETURNURL : 'hostedProfileReturnUrl',
		HOSTEDPROFILERETURNURLTEXT : 'hostedProfileReturnUrlText',
		HOSTEDPROFILEPAGEBORDERVISIBLE : 'hostedProfilePageBorderVisible',
		HOSTEDPROFILEIFRAMECOMMUNICATORURL : 'hostedProfileIFrameCommunicatorUrl',
		HOSTEDPROFILEHEADINGBGCOLOR : 'hostedProfileHeadingBgColor',
		HOSTEDPROFILEVALIDATIONMODE : 'hostedProfileValidationMode',
		HOSTEDPROFILEBILLINGADDRESSREQUIRED : 'hostedProfileBillingAddressRequired',
		HOSTEDPROFILECARDCODEREQUIRED : 'hostedProfileCardCodeRequired'	
}
module.exports.SettingNameEnum = SettingNameEnum;

const CustomerTypeEnum = { 
		INDIVIDUAL : 'individual',
		BUSINESS : 'business'	
}
module.exports.CustomerTypeEnum = CustomerTypeEnum;

const EncryptionAlgorithmType = { 
		TDES : 'TDES',
		AES : 'AES',
		RSA : 'RSA'	
}
module.exports.EncryptionAlgorithmType = EncryptionAlgorithmType;

const EncodingType = { 
		BASE64 : 'Base64',
		HEX : 'Hex'	
}
module.exports.EncodingType = EncodingType;

const OperationType = { 
		DECRYPT : 'DECRYPT'	
}
module.exports.OperationType = OperationType;

const ARBSubscriptionUnitEnum = { 
		DAYS : 'days',
		MONTHS : 'months'	
}
module.exports.ARBSubscriptionUnitEnum = ARBSubscriptionUnitEnum;

const DeviceActivationEnum = { 
		ACTIVATE : 'Activate',
		DISABLE : 'Disable'	
}
module.exports.DeviceActivationEnum = DeviceActivationEnum;

const CardTypeEnum = { 
		VISA : 'Visa',
		MASTERCARD : 'MasterCard',
		AMERICANEXPRESS : 'AmericanExpress',
		DISCOVER : 'Discover',
		JCB : 'JCB',
		DINERSCLUB : 'DinersClub'	
}
module.exports.CardTypeEnum = CardTypeEnum;

const TransactionTypeEnum = { 
		AUTHONLYTRANSACTION : 'authOnlyTransaction',
		AUTHCAPTURETRANSACTION : 'authCaptureTransaction',
		CAPTUREONLYTRANSACTION : 'captureOnlyTransaction',
		REFUNDTRANSACTION : 'refundTransaction',
		PRIORAUTHCAPTURETRANSACTION : 'priorAuthCaptureTransaction',
		VOIDTRANSACTION : 'voidTransaction',
		GETDETAILSTRANSACTION : 'getDetailsTransaction',
		AUTHONLYCONTINUETRANSACTION : 'authOnlyContinueTransaction',
		AUTHCAPTURECONTINUETRANSACTION : 'authCaptureContinueTransaction'	
}
module.exports.TransactionTypeEnum = TransactionTypeEnum;

