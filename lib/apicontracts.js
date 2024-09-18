'use strict';

var utils = require('./utils.js');

const Logger = require('./logger.js');

class ANetApiRequest {
	constructor(obj) {
		var logger = Logger.getLogger('ANetApiRequest');
		logger.debug('Enter ANetApiRequest constructor');
		if(arguments.length == 1) {
			if(('merchantAuthentication' in obj) && (obj.merchantAuthentication != null)) { this.setMerchantAuthentication(new MerchantAuthenticationType(obj.merchantAuthentication)); }
			if(('clientId' in obj) && (obj.clientId != null)) { this.setClientId(obj.clientId); }
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
		}
		else {
			this.setMerchantAuthentication(null);
			this.setClientId(null);
			this.setRefId(null);
		}
		logger.debug('Exit ANetApiRequest constructor');
	}

	setMerchantAuthentication(p_merchantAuthentication) { this.merchantAuthentication = p_merchantAuthentication; }
	getMerchantAuthentication() { if('merchantAuthentication' in this) {return this.merchantAuthentication;} }
	setClientId(p_clientId) { this.clientId = p_clientId; }
	getClientId() { if('clientId' in this) {return this.clientId;} }
	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { if('refId' in this) {return this.refId;} }
}

module.exports.ANetApiRequest = ANetApiRequest;

class ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ANetApiResponse');
		logger.debug('Enter ANetApiResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ErrorResponse' : this };
		logger.debug('Exit ANetApiResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ANetApiResponse');
		logger.debug('Enter ANetApiResponse constructor');
		if(arguments.length == 1) {
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new MessagesType(obj.messages)); }
			if(('sessionToken' in obj) && (obj.sessionToken != null)) { this.setSessionToken(obj.sessionToken); }
		}
		else {
			this.setRefId(null);
			this.setMessages(null);
			this.setSessionToken(null);
		}
		logger.debug('Exit ANetApiResponse constructor');
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { if('refId' in this) {return this.refId;} }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { if('messages' in this) {return this.messages;} }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken() { if('sessionToken' in this) {return this.sessionToken;} }
}

module.exports.ANetApiResponse = ANetApiResponse;

class ARBGetSubscriptionListSorting {
	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionListSorting');
		logger.debug('Enter ARBGetSubscriptionListSorting constructor');
		if(arguments.length == 1) {
			if(('orderBy' in obj) && (obj.orderBy != null)) { this.setOrderBy(obj.orderBy); }
			if(('orderDescending' in obj) && (obj.orderDescending != null)) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit ARBGetSubscriptionListSorting constructor');
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy() { if('orderBy' in this) {return this.orderBy;} }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending() { if('orderDescending' in this) {return this.orderDescending;} }
}

module.exports.ARBGetSubscriptionListSorting = ARBGetSubscriptionListSorting;

class ARBSubscriptionMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('ARBSubscriptionMaskedType');
		logger.debug('Enter ARBSubscriptionMaskedType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('paymentSchedule' in obj) && (obj.paymentSchedule != null)) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('trialAmount' in obj) && (obj.trialAmount != null)) { this.setTrialAmount(obj.trialAmount); }
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new SubscriptionCustomerProfileType(obj.profile)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
			if(('arbTransactions' in obj) && (obj.arbTransactions != null)) { this.setArbTransactions(new ARBTransactionList(obj.arbTransactions)); }
		}
		else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setStatus(null);
			this.setProfile(null);
			this.setOrder(null);
			this.setArbTransactions(null);
		}
		logger.debug('Exit ARBSubscriptionMaskedType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule() { if('paymentSchedule' in this) {return this.paymentSchedule;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount() { if('trialAmount' in this) {return this.trialAmount;} }
	setStatus(p_status) { this.status = p_status; }
	getStatus() { if('status' in this) {return this.status;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setArbTransactions(p_arbTransactions) { this.arbTransactions = p_arbTransactions; }
	getArbTransactions() { if('arbTransactions' in this) {return this.arbTransactions;} }
}

module.exports.ARBSubscriptionMaskedType = ARBSubscriptionMaskedType;

class ARBSubscriptionType {
	constructor(obj) {
		var logger = Logger.getLogger('ARBSubscriptionType');
		logger.debug('Enter ARBSubscriptionType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('paymentSchedule' in obj) && (obj.paymentSchedule != null)) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('trialAmount' in obj) && (obj.trialAmount != null)) { this.setTrialAmount(obj.trialAmount); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new NameAndAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
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
			this.setProfile(null);
		}
		logger.debug('Exit ARBSubscriptionType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule() { if('paymentSchedule' in this) {return this.paymentSchedule;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount() { if('trialAmount' in this) {return this.trialAmount;} }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { if('customer' in this) {return this.customer;} }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { if('billTo' in this) {return this.billTo;} }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { if('shipTo' in this) {return this.shipTo;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
}

module.exports.ARBSubscriptionType = ARBSubscriptionType;

class ARBTransactionList {
	constructor(obj) {
		var logger = Logger.getLogger('ARBTransactionList');
		logger.debug('Enter ARBTransactionList constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var arbTransactionList = [];
				obj.forEach(function(item) {arbTransactionList.push(new ArbTransaction(item));}); 
				this.setArbTransaction(arbTransactionList);
			}
		}
		else {
			this.setArbTransaction(null);
		}
		logger.debug('Exit ARBTransactionList constructor');
	}

	setArbTransaction(p_arbTransaction) { this.arbTransaction = p_arbTransaction; }
	getArbTransaction() { if('arbTransaction' in this) {return this.arbTransaction;} }
}

module.exports.ARBTransactionList = ARBTransactionList;

class ArbTransaction {
	constructor(obj) {
		var logger = Logger.getLogger('ArbTransaction');
		logger.debug('Enter ArbTransaction constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('response' in obj) && (obj.response != null)) { this.setResponse(obj.response); }
			if(('submitTimeUTC' in obj) && (obj.submitTimeUTC != null)) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(('payNum' in obj) && (obj.payNum != null)) { this.setPayNum(obj.payNum); }
			if(('attemptNum' in obj) && (obj.attemptNum != null)) { this.setAttemptNum(obj.attemptNum); }
		}
		else {
			this.setTransId(null);
			this.setResponse(null);
			this.setSubmitTimeUTC(null);
			this.setPayNum(null);
			this.setAttemptNum(null);
		}
		logger.debug('Exit ArbTransaction constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setResponse(p_response) { this.response = p_response; }
	getResponse() { if('response' in this) {return this.response;} }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC() { if('submitTimeUTC' in this) {return this.submitTimeUTC;} }
	setPayNum(p_payNum) { this.payNum = p_payNum; }
	getPayNum() { if('payNum' in this) {return this.payNum;} }
	setAttemptNum(p_attemptNum) { this.attemptNum = p_attemptNum; }
	getAttemptNum() { if('attemptNum' in this) {return this.attemptNum;} }
}

module.exports.ArbTransaction = ArbTransaction;

class ArrayOfAUResponseType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfAUResponseType');
		logger.debug('Enter ArrayOfAUResponseType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var auResponseList = [];
				obj.forEach(function(item) {auResponseList.push(new AuResponseType(item));}); 
				this.setAuResponse(auResponseList);
			}
		}
		else {
			this.setAuResponse(null);
		}
		logger.debug('Exit ArrayOfAUResponseType constructor');
	}

	setAuResponse(p_auResponse) { this.auResponse = p_auResponse; }
	getAuResponse() { if('auResponse' in this) {return this.auResponse;} }
}

module.exports.ArrayOfAUResponseType = ArrayOfAUResponseType;

class ArrayOfBatchDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfBatchDetailsType');
		logger.debug('Enter ArrayOfBatchDetailsType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var batchList = [];
				obj.forEach(function(item) {batchList.push(new BatchDetailsType(item));}); 
				this.setBatch(batchList);
			}
		}
		else {
			this.setBatch(null);
		}
		logger.debug('Exit ArrayOfBatchDetailsType constructor');
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { if('batch' in this) {return this.batch;} }
}

module.exports.ArrayOfBatchDetailsType = ArrayOfBatchDetailsType;

class ArrayOfBatchStatisticType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfBatchStatisticType');
		logger.debug('Enter ArrayOfBatchStatisticType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var statisticList = [];
				obj.forEach(function(item) {statisticList.push(new BatchStatisticType(item));}); 
				this.setStatistic(statisticList);
			}
		}
		else {
			this.setStatistic(null);
		}
		logger.debug('Exit ArrayOfBatchStatisticType constructor');
	}

	setStatistic(p_statistic) { this.statistic = p_statistic; }
	getStatistic() { if('statistic' in this) {return this.statistic;} }
}

module.exports.ArrayOfBatchStatisticType = ArrayOfBatchStatisticType;

class ArrayOfCardType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfCardType');
		logger.debug('Enter ArrayOfCardType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var cardTypeList = [];
				obj.forEach(function(item) {cardTypeList.push(new String(item));}); 
				this.setCardType(cardTypeList);
			}
		}
		else {
			this.setCardType(null);
		}
		logger.debug('Exit ArrayOfCardType constructor');
	}

	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType() { if('cardType' in this) {return this.cardType;} }
}

module.exports.ArrayOfCardType = ArrayOfCardType;

class ArrayOfContactDetail {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfContactDetail');
		logger.debug('Enter ArrayOfContactDetail constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var contactDetailList = [];
				obj.forEach(function(item) {contactDetailList.push(new ContactDetailType(item));}); 
				this.setContactDetail(contactDetailList);
			}
		}
		else {
			this.setContactDetail(null);
		}
		logger.debug('Exit ArrayOfContactDetail constructor');
	}

	setContactDetail(p_contactDetail) { this.contactDetail = p_contactDetail; }
	getContactDetail() { if('contactDetail' in this) {return this.contactDetail;} }
}

module.exports.ArrayOfContactDetail = ArrayOfContactDetail;

class ArrayOfCurrencyCode {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfCurrencyCode');
		logger.debug('Enter ArrayOfCurrencyCode constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var currencyList = [];
				obj.forEach(function(item) {currencyList.push(new String(item));}); 
				this.setCurrency(currencyList);
			}
		}
		else {
			this.setCurrency(null);
		}
		logger.debug('Exit ArrayOfCurrencyCode constructor');
	}

	setCurrency(p_currency) { this.currency = p_currency; }
	getCurrency() { if('currency' in this) {return this.currency;} }
}

module.exports.ArrayOfCurrencyCode = ArrayOfCurrencyCode;

class ArrayOfCustomerPaymentProfileListItemType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfCustomerPaymentProfileListItemType');
		logger.debug('Enter ArrayOfCustomerPaymentProfileListItemType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var paymentProfileList = [];
				obj.forEach(function(item) {paymentProfileList.push(new CustomerPaymentProfileListItemType(item));}); 
				this.setPaymentProfile(paymentProfileList);
			}
		}
		else {
			this.setPaymentProfile(null);
		}
		logger.debug('Exit ArrayOfCustomerPaymentProfileListItemType constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
}

module.exports.ArrayOfCustomerPaymentProfileListItemType = ArrayOfCustomerPaymentProfileListItemType;

class ArrayOfFDSFilter {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfFDSFilter');
		logger.debug('Enter ArrayOfFDSFilter constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var FDSFilterList = [];
				obj.forEach(function(item) {FDSFilterList.push(new FDSFilterType(item));}); 
				this.setFDSFilter(FDSFilterList);
			}
		}
		else {
			this.setFDSFilter(null);
		}
		logger.debug('Exit ArrayOfFDSFilter constructor');
	}

	setFDSFilter(p_FDSFilter) { this.FDSFilter = p_FDSFilter; }
	getFDSFilter() { if('FDSFilter' in this) {return this.FDSFilter;} }
}

module.exports.ArrayOfFDSFilter = ArrayOfFDSFilter;

class ArrayOfFraudFilterType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfFraudFilterType');
		logger.debug('Enter ArrayOfFraudFilterType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var fraudFilterList = [];
				obj.forEach(function(item) {fraudFilterList.push(new String(item));}); 
				this.setFraudFilter(fraudFilterList);
			}
		}
		else {
			this.setFraudFilter(null);
		}
		logger.debug('Exit ArrayOfFraudFilterType constructor');
	}

	setFraudFilter(p_fraudFilter) { this.fraudFilter = p_fraudFilter; }
	getFraudFilter() { if('fraudFilter' in this) {return this.fraudFilter;} }
}

module.exports.ArrayOfFraudFilterType = ArrayOfFraudFilterType;

class ArrayOfLineItem {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfLineItem');
		logger.debug('Enter ArrayOfLineItem constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var lineItemList = [];
				obj.forEach(function(item) {lineItemList.push(new LineItemType(item));}); 
				this.setLineItem(lineItemList);
			}
		}
		else {
			this.setLineItem(null);
		}
		logger.debug('Exit ArrayOfLineItem constructor');
	}

	setLineItem(p_lineItem) { this.lineItem = p_lineItem; }
	getLineItem() { if('lineItem' in this) {return this.lineItem;} }
}

module.exports.ArrayOfLineItem = ArrayOfLineItem;

class ArrayOfLong {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfLong');
		logger.debug('Enter ArrayOfLong constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var longList = [];
				obj.forEach(function(item) {longList.push(new (item));}); 
				this.setLong(longList);
			}
		}
		else {
			this.setLong(null);
		}
		logger.debug('Exit ArrayOfLong constructor');
	}

	setLong(p_long) { this.long = p_long; }
	getLong() { if('long' in this) {return this.long;} }
}

module.exports.ArrayOfLong = ArrayOfLong;

class ArrayOfMarketType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfMarketType');
		logger.debug('Enter ArrayOfMarketType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var marketTypeList = [];
				obj.forEach(function(item) {marketTypeList.push(new String(item));}); 
				this.setMarketType(marketTypeList);
			}
		}
		else {
			this.setMarketType(null);
		}
		logger.debug('Exit ArrayOfMarketType constructor');
	}

	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { if('marketType' in this) {return this.marketType;} }
}

module.exports.ArrayOfMarketType = ArrayOfMarketType;

class ArrayOfNumericString {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfNumericString');
		logger.debug('Enter ArrayOfNumericString constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var numericStringList = [];
				obj.forEach(function(item) {numericStringList.push(new String(item));}); 
				this.setNumericString(numericStringList);
			}
		}
		else {
			this.setNumericString(null);
		}
		logger.debug('Exit ArrayOfNumericString constructor');
	}

	setNumericString(p_numericString) { this.numericString = p_numericString; }
	getNumericString() { if('numericString' in this) {return this.numericString;} }
}

module.exports.ArrayOfNumericString = ArrayOfNumericString;

class ArrayOfPaymentMethod {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfPaymentMethod');
		logger.debug('Enter ArrayOfPaymentMethod constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var paymentMethodList = [];
				obj.forEach(function(item) {paymentMethodList.push(new String(item));}); 
				this.setPaymentMethod(paymentMethodList);
			}
		}
		else {
			this.setPaymentMethod(null);
		}
		logger.debug('Exit ArrayOfPaymentMethod constructor');
	}

	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod() { if('paymentMethod' in this) {return this.paymentMethod;} }
}

module.exports.ArrayOfPaymentMethod = ArrayOfPaymentMethod;

class ArrayOfPermissionType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfPermissionType');
		logger.debug('Enter ArrayOfPermissionType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var permissionList = [];
				obj.forEach(function(item) {permissionList.push(new PermissionType(item));}); 
				this.setPermission(permissionList);
			}
		}
		else {
			this.setPermission(null);
		}
		logger.debug('Exit ArrayOfPermissionType constructor');
	}

	setPermission(p_permission) { this.permission = p_permission; }
	getPermission() { if('permission' in this) {return this.permission;} }
}

module.exports.ArrayOfPermissionType = ArrayOfPermissionType;

class ArrayOfProcessorType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfProcessorType');
		logger.debug('Enter ArrayOfProcessorType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var processorList = [];
				obj.forEach(function(item) {processorList.push(new ProcessorType(item));}); 
				this.setProcessor(processorList);
			}
		}
		else {
			this.setProcessor(null);
		}
		logger.debug('Exit ArrayOfProcessorType constructor');
	}

	setProcessor(p_processor) { this.processor = p_processor; }
	getProcessor() { if('processor' in this) {return this.processor;} }
}

module.exports.ArrayOfProcessorType = ArrayOfProcessorType;

class ArrayOfProductCode {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfProductCode');
		logger.debug('Enter ArrayOfProductCode constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var productCodeList = [];
				obj.forEach(function(item) {productCodeList.push(new String(item));}); 
				this.setProductCode(productCodeList);
			}
		}
		else {
			this.setProductCode(null);
		}
		logger.debug('Exit ArrayOfProductCode constructor');
	}

	setProductCode(p_productCode) { this.productCode = p_productCode; }
	getProductCode() { if('productCode' in this) {return this.productCode;} }
}

module.exports.ArrayOfProductCode = ArrayOfProductCode;

class ArrayOfReturnedItem {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfReturnedItem');
		logger.debug('Enter ArrayOfReturnedItem constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var returnedItemList = [];
				obj.forEach(function(item) {returnedItemList.push(new ReturnedItemType(item));}); 
				this.setReturnedItem(returnedItemList);
			}
		}
		else {
			this.setReturnedItem(null);
		}
		logger.debug('Exit ArrayOfReturnedItem constructor');
	}

	setReturnedItem(p_returnedItem) { this.returnedItem = p_returnedItem; }
	getReturnedItem() { if('returnedItem' in this) {return this.returnedItem;} }
}

module.exports.ArrayOfReturnedItem = ArrayOfReturnedItem;

class ArrayOfSetting {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfSetting');
		logger.debug('Enter ArrayOfSetting constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var settingList = [];
				obj.forEach(function(item) {settingList.push(new SettingType(item));}); 
				this.setSetting(settingList);
			}
		}
		else {
			this.setSetting(null);
		}
		logger.debug('Exit ArrayOfSetting constructor');
	}

	setSetting(p_setting) { this.setting = p_setting; }
	getSetting() { if('setting' in this) {return this.setting;} }
}

module.exports.ArrayOfSetting = ArrayOfSetting;

class ArrayOfString {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfString');
		logger.debug('Enter ArrayOfString constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var stringList = [];
				obj.forEach(function(item) {stringList.push(new String(item));}); 
				this.setString(stringList);
			}
		}
		else {
			this.setString(null);
		}
		logger.debug('Exit ArrayOfString constructor');
	}

	setString(p_string) { this.string = p_string; }
	getString() { if('string' in this) {return this.string;} }
}

module.exports.ArrayOfString = ArrayOfString;

class ArrayOfSubscription {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfSubscription');
		logger.debug('Enter ArrayOfSubscription constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var subscriptionDetailList = [];
				obj.forEach(function(item) {subscriptionDetailList.push(new SubscriptionDetail(item));}); 
				this.setSubscriptionDetail(subscriptionDetailList);
			}
		}
		else {
			this.setSubscriptionDetail(null);
		}
		logger.debug('Exit ArrayOfSubscription constructor');
	}

	setSubscriptionDetail(p_subscriptionDetail) { this.subscriptionDetail = p_subscriptionDetail; }
	getSubscriptionDetail() { if('subscriptionDetail' in this) {return this.subscriptionDetail;} }
}

module.exports.ArrayOfSubscription = ArrayOfSubscription;

class ArrayOfTransactionSummaryType {
	constructor(obj) {
		var logger = Logger.getLogger('ArrayOfTransactionSummaryType');
		logger.debug('Enter ArrayOfTransactionSummaryType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var transactionList = [];
				obj.forEach(function(item) {transactionList.push(new TransactionSummaryType(item));}); 
				this.setTransaction(transactionList);
			}
		}
		else {
			this.setTransaction(null);
		}
		logger.debug('Exit ArrayOfTransactionSummaryType constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { if('transaction' in this) {return this.transaction;} }
}

module.exports.ArrayOfTransactionSummaryType = ArrayOfTransactionSummaryType;

class AuDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('AuDetailsType');
		logger.debug('Enter AuDetailsType constructor');
		if(arguments.length == 1) {
			if(('customerProfileID' in obj) && (obj.customerProfileID != null)) { this.setCustomerProfileID(obj.customerProfileID); }
			if(('customerPaymentProfileID' in obj) && (obj.customerPaymentProfileID != null)) { this.setCustomerPaymentProfileID(obj.customerPaymentProfileID); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('updateTimeUTC' in obj) && (obj.updateTimeUTC != null)) { this.setUpdateTimeUTC(obj.updateTimeUTC); }
			if(('auReasonCode' in obj) && (obj.auReasonCode != null)) { this.setAuReasonCode(obj.auReasonCode); }
			if(('reasonDescription' in obj) && (obj.reasonDescription != null)) { this.setReasonDescription(obj.reasonDescription); }
		}
		else {
			this.setCustomerProfileID(null);
			this.setCustomerPaymentProfileID(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setUpdateTimeUTC(null);
			this.setAuReasonCode(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuDetailsType constructor');
	}

	setCustomerProfileID(p_customerProfileID) { this.customerProfileID = p_customerProfileID; }
	getCustomerProfileID() { if('customerProfileID' in this) {return this.customerProfileID;} }
	setCustomerPaymentProfileID(p_customerPaymentProfileID) { this.customerPaymentProfileID = p_customerPaymentProfileID; }
	getCustomerPaymentProfileID() { if('customerPaymentProfileID' in this) {return this.customerPaymentProfileID;} }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { if('firstName' in this) {return this.firstName;} }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { if('lastName' in this) {return this.lastName;} }
	setUpdateTimeUTC(p_updateTimeUTC) { this.updateTimeUTC = p_updateTimeUTC; }
	getUpdateTimeUTC() { if('updateTimeUTC' in this) {return this.updateTimeUTC;} }
	setAuReasonCode(p_auReasonCode) { this.auReasonCode = p_auReasonCode; }
	getAuReasonCode() { if('auReasonCode' in this) {return this.auReasonCode;} }
	setReasonDescription(p_reasonDescription) { this.reasonDescription = p_reasonDescription; }
	getReasonDescription() { if('reasonDescription' in this) {return this.reasonDescription;} }
}

module.exports.AuDetailsType = AuDetailsType;

class AuResponseType {
	constructor(obj) {
		var logger = Logger.getLogger('AuResponseType');
		logger.debug('Enter AuResponseType constructor');
		if(arguments.length == 1) {
			if(('auReasonCode' in obj) && (obj.auReasonCode != null)) { this.setAuReasonCode(obj.auReasonCode); }
			if(('profileCount' in obj) && (obj.profileCount != null)) { this.setProfileCount(obj.profileCount); }
			if(('reasonDescription' in obj) && (obj.reasonDescription != null)) { this.setReasonDescription(obj.reasonDescription); }
		}
		else {
			this.setAuReasonCode(null);
			this.setProfileCount(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuResponseType constructor');
	}

	setAuReasonCode(p_auReasonCode) { this.auReasonCode = p_auReasonCode; }
	getAuReasonCode() { if('auReasonCode' in this) {return this.auReasonCode;} }
	setProfileCount(p_profileCount) { this.profileCount = p_profileCount; }
	getProfileCount() { if('profileCount' in this) {return this.profileCount;} }
	setReasonDescription(p_reasonDescription) { this.reasonDescription = p_reasonDescription; }
	getReasonDescription() { if('reasonDescription' in this) {return this.reasonDescription;} }
}

module.exports.AuResponseType = AuResponseType;

class AuthorizationIndicatorType {
	constructor(obj) {
		var logger = Logger.getLogger('AuthorizationIndicatorType');
		logger.debug('Enter AuthorizationIndicatorType constructor');
		if(arguments.length == 1) {
			if(('authorizationIndicator' in obj) && (obj.authorizationIndicator != null)) { this.setAuthorizationIndicator(obj.authorizationIndicator); }
		}
		else {
			this.setAuthorizationIndicator(null);
		}
		logger.debug('Exit AuthorizationIndicatorType constructor');
	}

	setAuthorizationIndicator(p_authorizationIndicator) { this.authorizationIndicator = p_authorizationIndicator; }
	getAuthorizationIndicator() { if('authorizationIndicator' in this) {return this.authorizationIndicator;} }
}

module.exports.AuthorizationIndicatorType = AuthorizationIndicatorType;

class BankAccountMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('BankAccountMaskedType');
		logger.debug('Enter BankAccountMaskedType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('routingNumber' in obj) && (obj.routingNumber != null)) { this.setRoutingNumber(obj.routingNumber); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('nameOnAccount' in obj) && (obj.nameOnAccount != null)) { this.setNameOnAccount(obj.nameOnAccount); }
			if(('echeckType' in obj) && (obj.echeckType != null)) { this.setEcheckType(obj.echeckType); }
			if(('bankName' in obj) && (obj.bankName != null)) { this.setBankName(obj.bankName); }
		}
		else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
		}
		logger.debug('Exit BankAccountMaskedType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber() { if('routingNumber' in this) {return this.routingNumber;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount() { if('nameOnAccount' in this) {return this.nameOnAccount;} }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType() { if('echeckType' in this) {return this.echeckType;} }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName() { if('bankName' in this) {return this.bankName;} }
}

module.exports.BankAccountMaskedType = BankAccountMaskedType;

class BankAccountType {
	constructor(obj) {
		var logger = Logger.getLogger('BankAccountType');
		logger.debug('Enter BankAccountType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('routingNumber' in obj) && (obj.routingNumber != null)) { this.setRoutingNumber(obj.routingNumber); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('nameOnAccount' in obj) && (obj.nameOnAccount != null)) { this.setNameOnAccount(obj.nameOnAccount); }
			if(('echeckType' in obj) && (obj.echeckType != null)) { this.setEcheckType(obj.echeckType); }
			if(('bankName' in obj) && (obj.bankName != null)) { this.setBankName(obj.bankName); }
			if(('checkNumber' in obj) && (obj.checkNumber != null)) { this.setCheckNumber(obj.checkNumber); }
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
		logger.debug('Exit BankAccountType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber() { if('routingNumber' in this) {return this.routingNumber;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount() { if('nameOnAccount' in this) {return this.nameOnAccount;} }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType() { if('echeckType' in this) {return this.echeckType;} }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName() { if('bankName' in this) {return this.bankName;} }
	setCheckNumber(p_checkNumber) { this.checkNumber = p_checkNumber; }
	getCheckNumber() { if('checkNumber' in this) {return this.checkNumber;} }
}

module.exports.BankAccountType = BankAccountType;

class BatchDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('BatchDetailsType');
		logger.debug('Enter BatchDetailsType constructor');
		if(arguments.length == 1) {
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
			if(('settlementTimeUTC' in obj) && (obj.settlementTimeUTC != null)) { this.setSettlementTimeUTC(obj.settlementTimeUTC); }
			if(('settlementTimeLocal' in obj) && (obj.settlementTimeLocal != null)) { this.setSettlementTimeLocal(obj.settlementTimeLocal); }
			if(('settlementState' in obj) && (obj.settlementState != null)) { this.setSettlementState(obj.settlementState); }
			if(('paymentMethod' in obj) && (obj.paymentMethod != null)) { this.setPaymentMethod(obj.paymentMethod); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('statistics' in obj) && (obj.statistics != null)) { this.setStatistics(new ArrayOfBatchStatisticType(obj.statistics)); }
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
		logger.debug('Exit BatchDetailsType constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { if('batchId' in this) {return this.batchId;} }
	setSettlementTimeUTC(p_settlementTimeUTC) { this.settlementTimeUTC = p_settlementTimeUTC; }
	getSettlementTimeUTC() { if('settlementTimeUTC' in this) {return this.settlementTimeUTC;} }
	setSettlementTimeLocal(p_settlementTimeLocal) { this.settlementTimeLocal = p_settlementTimeLocal; }
	getSettlementTimeLocal() { if('settlementTimeLocal' in this) {return this.settlementTimeLocal;} }
	setSettlementState(p_settlementState) { this.settlementState = p_settlementState; }
	getSettlementState() { if('settlementState' in this) {return this.settlementState;} }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod() { if('paymentMethod' in this) {return this.paymentMethod;} }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { if('marketType' in this) {return this.marketType;} }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { if('product' in this) {return this.product;} }
	setStatistics(p_statistics) { this.statistics = p_statistics; }
	getStatistics() { if('statistics' in this) {return this.statistics;} }
}

module.exports.BatchDetailsType = BatchDetailsType;

class BatchStatisticType {
	constructor(obj) {
		var logger = Logger.getLogger('BatchStatisticType');
		logger.debug('Enter BatchStatisticType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('chargeAmount' in obj) && (obj.chargeAmount != null)) { this.setChargeAmount(obj.chargeAmount); }
			if(('chargeCount' in obj) && (obj.chargeCount != null)) { this.setChargeCount(obj.chargeCount); }
			if(('refundAmount' in obj) && (obj.refundAmount != null)) { this.setRefundAmount(obj.refundAmount); }
			if(('refundCount' in obj) && (obj.refundCount != null)) { this.setRefundCount(obj.refundCount); }
			if(('voidCount' in obj) && (obj.voidCount != null)) { this.setVoidCount(obj.voidCount); }
			if(('declineCount' in obj) && (obj.declineCount != null)) { this.setDeclineCount(obj.declineCount); }
			if(('errorCount' in obj) && (obj.errorCount != null)) { this.setErrorCount(obj.errorCount); }
			if(('returnedItemAmount' in obj) && (obj.returnedItemAmount != null)) { this.setReturnedItemAmount(obj.returnedItemAmount); }
			if(('returnedItemCount' in obj) && (obj.returnedItemCount != null)) { this.setReturnedItemCount(obj.returnedItemCount); }
			if(('chargebackAmount' in obj) && (obj.chargebackAmount != null)) { this.setChargebackAmount(obj.chargebackAmount); }
			if(('chargebackCount' in obj) && (obj.chargebackCount != null)) { this.setChargebackCount(obj.chargebackCount); }
			if(('correctionNoticeCount' in obj) && (obj.correctionNoticeCount != null)) { this.setCorrectionNoticeCount(obj.correctionNoticeCount); }
			if(('chargeChargeBackAmount' in obj) && (obj.chargeChargeBackAmount != null)) { this.setChargeChargeBackAmount(obj.chargeChargeBackAmount); }
			if(('chargeChargeBackCount' in obj) && (obj.chargeChargeBackCount != null)) { this.setChargeChargeBackCount(obj.chargeChargeBackCount); }
			if(('refundChargeBackAmount' in obj) && (obj.refundChargeBackAmount != null)) { this.setRefundChargeBackAmount(obj.refundChargeBackAmount); }
			if(('refundChargeBackCount' in obj) && (obj.refundChargeBackCount != null)) { this.setRefundChargeBackCount(obj.refundChargeBackCount); }
			if(('chargeReturnedItemsAmount' in obj) && (obj.chargeReturnedItemsAmount != null)) { this.setChargeReturnedItemsAmount(obj.chargeReturnedItemsAmount); }
			if(('chargeReturnedItemsCount' in obj) && (obj.chargeReturnedItemsCount != null)) { this.setChargeReturnedItemsCount(obj.chargeReturnedItemsCount); }
			if(('refundReturnedItemsAmount' in obj) && (obj.refundReturnedItemsAmount != null)) { this.setRefundReturnedItemsAmount(obj.refundReturnedItemsAmount); }
			if(('refundReturnedItemsCount' in obj) && (obj.refundReturnedItemsCount != null)) { this.setRefundReturnedItemsCount(obj.refundReturnedItemsCount); }
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
		logger.debug('Exit BatchStatisticType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setChargeAmount(p_chargeAmount) { this.chargeAmount = p_chargeAmount; }
	getChargeAmount() { if('chargeAmount' in this) {return this.chargeAmount;} }
	setChargeCount(p_chargeCount) { this.chargeCount = p_chargeCount; }
	getChargeCount() { if('chargeCount' in this) {return this.chargeCount;} }
	setRefundAmount(p_refundAmount) { this.refundAmount = p_refundAmount; }
	getRefundAmount() { if('refundAmount' in this) {return this.refundAmount;} }
	setRefundCount(p_refundCount) { this.refundCount = p_refundCount; }
	getRefundCount() { if('refundCount' in this) {return this.refundCount;} }
	setVoidCount(p_voidCount) { this.voidCount = p_voidCount; }
	getVoidCount() { if('voidCount' in this) {return this.voidCount;} }
	setDeclineCount(p_declineCount) { this.declineCount = p_declineCount; }
	getDeclineCount() { if('declineCount' in this) {return this.declineCount;} }
	setErrorCount(p_errorCount) { this.errorCount = p_errorCount; }
	getErrorCount() { if('errorCount' in this) {return this.errorCount;} }
	setReturnedItemAmount(p_returnedItemAmount) { this.returnedItemAmount = p_returnedItemAmount; }
	getReturnedItemAmount() { if('returnedItemAmount' in this) {return this.returnedItemAmount;} }
	setReturnedItemCount(p_returnedItemCount) { this.returnedItemCount = p_returnedItemCount; }
	getReturnedItemCount() { if('returnedItemCount' in this) {return this.returnedItemCount;} }
	setChargebackAmount(p_chargebackAmount) { this.chargebackAmount = p_chargebackAmount; }
	getChargebackAmount() { if('chargebackAmount' in this) {return this.chargebackAmount;} }
	setChargebackCount(p_chargebackCount) { this.chargebackCount = p_chargebackCount; }
	getChargebackCount() { if('chargebackCount' in this) {return this.chargebackCount;} }
	setCorrectionNoticeCount(p_correctionNoticeCount) { this.correctionNoticeCount = p_correctionNoticeCount; }
	getCorrectionNoticeCount() { if('correctionNoticeCount' in this) {return this.correctionNoticeCount;} }
	setChargeChargeBackAmount(p_chargeChargeBackAmount) { this.chargeChargeBackAmount = p_chargeChargeBackAmount; }
	getChargeChargeBackAmount() { if('chargeChargeBackAmount' in this) {return this.chargeChargeBackAmount;} }
	setChargeChargeBackCount(p_chargeChargeBackCount) { this.chargeChargeBackCount = p_chargeChargeBackCount; }
	getChargeChargeBackCount() { if('chargeChargeBackCount' in this) {return this.chargeChargeBackCount;} }
	setRefundChargeBackAmount(p_refundChargeBackAmount) { this.refundChargeBackAmount = p_refundChargeBackAmount; }
	getRefundChargeBackAmount() { if('refundChargeBackAmount' in this) {return this.refundChargeBackAmount;} }
	setRefundChargeBackCount(p_refundChargeBackCount) { this.refundChargeBackCount = p_refundChargeBackCount; }
	getRefundChargeBackCount() { if('refundChargeBackCount' in this) {return this.refundChargeBackCount;} }
	setChargeReturnedItemsAmount(p_chargeReturnedItemsAmount) { this.chargeReturnedItemsAmount = p_chargeReturnedItemsAmount; }
	getChargeReturnedItemsAmount() { if('chargeReturnedItemsAmount' in this) {return this.chargeReturnedItemsAmount;} }
	setChargeReturnedItemsCount(p_chargeReturnedItemsCount) { this.chargeReturnedItemsCount = p_chargeReturnedItemsCount; }
	getChargeReturnedItemsCount() { if('chargeReturnedItemsCount' in this) {return this.chargeReturnedItemsCount;} }
	setRefundReturnedItemsAmount(p_refundReturnedItemsAmount) { this.refundReturnedItemsAmount = p_refundReturnedItemsAmount; }
	getRefundReturnedItemsAmount() { if('refundReturnedItemsAmount' in this) {return this.refundReturnedItemsAmount;} }
	setRefundReturnedItemsCount(p_refundReturnedItemsCount) { this.refundReturnedItemsCount = p_refundReturnedItemsCount; }
	getRefundReturnedItemsCount() { if('refundReturnedItemsCount' in this) {return this.refundReturnedItemsCount;} }
}

module.exports.BatchStatisticType = BatchStatisticType;

class CardArt {
	constructor(obj) {
		var logger = Logger.getLogger('CardArt');
		logger.debug('Enter CardArt constructor');
		if(arguments.length == 1) {
			if(('cardBrand' in obj) && (obj.cardBrand != null)) { this.setCardBrand(obj.cardBrand); }
			if(('cardImageHeight' in obj) && (obj.cardImageHeight != null)) { this.setCardImageHeight(obj.cardImageHeight); }
			if(('cardImageUrl' in obj) && (obj.cardImageUrl != null)) { this.setCardImageUrl(obj.cardImageUrl); }
			if(('cardImageWidth' in obj) && (obj.cardImageWidth != null)) { this.setCardImageWidth(obj.cardImageWidth); }
			if(('cardType' in obj) && (obj.cardType != null)) { this.setCardType(obj.cardType); }
		}
		else {
			this.setCardBrand(null);
			this.setCardImageHeight(null);
			this.setCardImageUrl(null);
			this.setCardImageWidth(null);
			this.setCardType(null);
		}
		logger.debug('Exit CardArt constructor');
	}

	setCardBrand(p_cardBrand) { this.cardBrand = p_cardBrand; }
	getCardBrand() { if('cardBrand' in this) {return this.cardBrand;} }
	setCardImageHeight(p_cardImageHeight) { this.cardImageHeight = p_cardImageHeight; }
	getCardImageHeight() { if('cardImageHeight' in this) {return this.cardImageHeight;} }
	setCardImageUrl(p_cardImageUrl) { this.cardImageUrl = p_cardImageUrl; }
	getCardImageUrl() { if('cardImageUrl' in this) {return this.cardImageUrl;} }
	setCardImageWidth(p_cardImageWidth) { this.cardImageWidth = p_cardImageWidth; }
	getCardImageWidth() { if('cardImageWidth' in this) {return this.cardImageWidth;} }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType() { if('cardType' in this) {return this.cardType;} }
}

module.exports.CardArt = CardArt;

class CcAuthenticationType {
	constructor(obj) {
		var logger = Logger.getLogger('CcAuthenticationType');
		logger.debug('Enter CcAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('authenticationIndicator' in obj) && (obj.authenticationIndicator != null)) { this.setAuthenticationIndicator(obj.authenticationIndicator); }
			if(('cardholderAuthenticationValue' in obj) && (obj.cardholderAuthenticationValue != null)) { this.setCardholderAuthenticationValue(obj.cardholderAuthenticationValue); }
		}
		else {
			this.setAuthenticationIndicator(null);
			this.setCardholderAuthenticationValue(null);
		}
		logger.debug('Exit CcAuthenticationType constructor');
	}

	setAuthenticationIndicator(p_authenticationIndicator) { this.authenticationIndicator = p_authenticationIndicator; }
	getAuthenticationIndicator() { if('authenticationIndicator' in this) {return this.authenticationIndicator;} }
	setCardholderAuthenticationValue(p_cardholderAuthenticationValue) { this.cardholderAuthenticationValue = p_cardholderAuthenticationValue; }
	getCardholderAuthenticationValue() { if('cardholderAuthenticationValue' in this) {return this.cardholderAuthenticationValue;} }
}

module.exports.CcAuthenticationType = CcAuthenticationType;

class ContactDetailType {
	constructor(obj) {
		var logger = Logger.getLogger('ContactDetailType');
		logger.debug('Enter ContactDetailType constructor');
		if(arguments.length == 1) {
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
		}
		else {
			this.setEmail(null);
			this.setFirstName(null);
			this.setLastName(null);
		}
		logger.debug('Exit ContactDetailType constructor');
	}

	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { if('firstName' in this) {return this.firstName;} }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { if('lastName' in this) {return this.lastName;} }
}

module.exports.ContactDetailType = ContactDetailType;

class CreateProfileResponse {
	constructor(obj) {
		var logger = Logger.getLogger('CreateProfileResponse');
		logger.debug('Enter CreateProfileResponse constructor');
		if(arguments.length == 1) {
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new MessagesType(obj.messages)); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileIdList' in obj) && (obj.customerPaymentProfileIdList != null)) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(('customerShippingAddressIdList' in obj) && (obj.customerShippingAddressIdList != null)) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
		}
		else {
			this.setMessages(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
		}
		logger.debug('Exit CreateProfileResponse constructor');
	}

	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { if('messages' in this) {return this.messages;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList() { if('customerPaymentProfileIdList' in this) {return this.customerPaymentProfileIdList;} }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList() { if('customerShippingAddressIdList' in this) {return this.customerShippingAddressIdList;} }
}

module.exports.CreateProfileResponse = CreateProfileResponse;

class CreditCardMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('CreditCardMaskedType');
		logger.debug('Enter CreditCardMaskedType constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
			if(('cardType' in obj) && (obj.cardType != null)) { this.setCardType(obj.cardType); }
			if(('cardArt' in obj) && (obj.cardArt != null)) { this.setCardArt(new CardArt(obj.cardArt)); }
			if(('issuerNumber' in obj) && (obj.issuerNumber != null)) { this.setIssuerNumber(obj.issuerNumber); }
			if(('isPaymentToken' in obj) && (obj.isPaymentToken != null)) { this.setIsPaymentToken(obj.isPaymentToken); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardType(null);
			this.setCardArt(null);
			this.setIssuerNumber(null);
			this.setIsPaymentToken(null);
		}
		logger.debug('Exit CreditCardMaskedType constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { if('cardNumber' in this) {return this.cardNumber;} }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { if('expirationDate' in this) {return this.expirationDate;} }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType() { if('cardType' in this) {return this.cardType;} }
	setCardArt(p_cardArt) { this.cardArt = p_cardArt; }
	getCardArt() { if('cardArt' in this) {return this.cardArt;} }
	setIssuerNumber(p_issuerNumber) { this.issuerNumber = p_issuerNumber; }
	getIssuerNumber() { if('issuerNumber' in this) {return this.issuerNumber;} }
	setIsPaymentToken(p_isPaymentToken) { this.isPaymentToken = p_isPaymentToken; }
	getIsPaymentToken() { if('isPaymentToken' in this) {return this.isPaymentToken;} }
}

module.exports.CreditCardMaskedType = CreditCardMaskedType;

class CreditCardSimpleType {
	constructor(obj) {
		var logger = Logger.getLogger('CreditCardSimpleType');
		logger.debug('Enter CreditCardSimpleType constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
		}
		logger.debug('Exit CreditCardSimpleType constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { if('cardNumber' in this) {return this.cardNumber;} }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { if('expirationDate' in this) {return this.expirationDate;} }
}

module.exports.CreditCardSimpleType = CreditCardSimpleType;

class CreditCardTrackType {
	constructor(obj) {
		var logger = Logger.getLogger('CreditCardTrackType');
		logger.debug('Enter CreditCardTrackType constructor');
		if(arguments.length == 1) {
			if(('track1' in obj) && (obj.track1 != null)) { this.setTrack1(obj.track1); }
			if(('track2' in obj) && (obj.track2 != null)) { this.setTrack2(obj.track2); }
		}
		else {
			this.setTrack1(null);
			this.setTrack2(null);
		}
		logger.debug('Exit CreditCardTrackType constructor');
	}

	setTrack1(p_track1) { this.track1 = p_track1; }
	getTrack1() { if('track1' in this) {return this.track1;} }
	setTrack2(p_track2) { this.track2 = p_track2; }
	getTrack2() { if('track2' in this) {return this.track2;} }
}

module.exports.CreditCardTrackType = CreditCardTrackType;

class CustomerDataType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerDataType');
		logger.debug('Enter CustomerDataType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerDataType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { if('type' in this) {return this.type;} }
	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { if('driversLicense' in this) {return this.driversLicense;} }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { if('taxId' in this) {return this.taxId;} }
}

module.exports.CustomerDataType = CustomerDataType;

class CustomerPaymentProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileBaseType');
		logger.debug('Enter CustomerPaymentProfileBaseType constructor');
		if(arguments.length == 1) {
			if(('customerType' in obj) && (obj.customerType != null)) { this.setCustomerType(obj.customerType); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
		}
		else {
			this.setCustomerType(null);
			this.setBillTo(null);
		}
		logger.debug('Exit CustomerPaymentProfileBaseType constructor');
	}

	setCustomerType(p_customerType) { this.customerType = p_customerType; }
	getCustomerType() { if('customerType' in this) {return this.customerType;} }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { if('billTo' in this) {return this.billTo;} }
}

module.exports.CustomerPaymentProfileBaseType = CustomerPaymentProfileBaseType;

class CustomerPaymentProfileListItemType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileListItemType');
		logger.debug('Enter CustomerPaymentProfileListItemType constructor');
		if(arguments.length == 1) {
			if(('defaultPaymentProfile' in obj) && (obj.defaultPaymentProfile != null)) { this.setDefaultPaymentProfile(obj.defaultPaymentProfile); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(('originalNetworkTransId' in obj) && (obj.originalNetworkTransId != null)) { this.setOriginalNetworkTransId(obj.originalNetworkTransId); }
			if(('originalAuthAmount' in obj) && (obj.originalAuthAmount != null)) { this.setOriginalAuthAmount(obj.originalAuthAmount); }
			if(('excludeFromAccountUpdater' in obj) && (obj.excludeFromAccountUpdater != null)) { this.setExcludeFromAccountUpdater(obj.excludeFromAccountUpdater); }
		}
		else {
			this.setDefaultPaymentProfile(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerProfileId(null);
			this.setBillTo(null);
			this.setPayment(null);
			this.setOriginalNetworkTransId(null);
			this.setOriginalAuthAmount(null);
			this.setExcludeFromAccountUpdater(null);
		}
		logger.debug('Exit CustomerPaymentProfileListItemType constructor');
	}

	setDefaultPaymentProfile(p_defaultPaymentProfile) { this.defaultPaymentProfile = p_defaultPaymentProfile; }
	getDefaultPaymentProfile() { if('defaultPaymentProfile' in this) {return this.defaultPaymentProfile;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { if('billTo' in this) {return this.billTo;} }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setOriginalNetworkTransId(p_originalNetworkTransId) { this.originalNetworkTransId = p_originalNetworkTransId; }
	getOriginalNetworkTransId() { if('originalNetworkTransId' in this) {return this.originalNetworkTransId;} }
	setOriginalAuthAmount(p_originalAuthAmount) { this.originalAuthAmount = p_originalAuthAmount; }
	getOriginalAuthAmount() { if('originalAuthAmount' in this) {return this.originalAuthAmount;} }
	setExcludeFromAccountUpdater(p_excludeFromAccountUpdater) { this.excludeFromAccountUpdater = p_excludeFromAccountUpdater; }
	getExcludeFromAccountUpdater() { if('excludeFromAccountUpdater' in this) {return this.excludeFromAccountUpdater;} }
}

module.exports.CustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType;

class CustomerPaymentProfileSorting {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileSorting');
		logger.debug('Enter CustomerPaymentProfileSorting constructor');
		if(arguments.length == 1) {
			if(('orderBy' in obj) && (obj.orderBy != null)) { this.setOrderBy(obj.orderBy); }
			if(('orderDescending' in obj) && (obj.orderDescending != null)) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit CustomerPaymentProfileSorting constructor');
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy() { if('orderBy' in this) {return this.orderBy;} }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending() { if('orderDescending' in this) {return this.orderDescending;} }
}

module.exports.CustomerPaymentProfileSorting = CustomerPaymentProfileSorting;

class CustomerProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileBaseType');
		logger.debug('Enter CustomerProfileBaseType constructor');
		if(arguments.length == 1) {
			if(('merchantCustomerId' in obj) && (obj.merchantCustomerId != null)) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
		}
		else {
			this.setMerchantCustomerId(null);
			this.setDescription(null);
			this.setEmail(null);
		}
		logger.debug('Exit CustomerProfileBaseType constructor');
	}

	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId() { if('merchantCustomerId' in this) {return this.merchantCustomerId;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
}

module.exports.CustomerProfileBaseType = CustomerProfileBaseType;

class CustomerProfileIdType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileIdType');
		logger.debug('Enter CustomerProfileIdType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerProfileIdType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { if('customerAddressId' in this) {return this.customerAddressId;} }
}

module.exports.CustomerProfileIdType = CustomerProfileIdType;

class CustomerProfilePaymentType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfilePaymentType');
		logger.debug('Enter CustomerProfilePaymentType constructor');
		if(arguments.length == 1) {
			if(('createProfile' in obj) && (obj.createProfile != null)) { this.setCreateProfile(obj.createProfile); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new PaymentProfile(obj.paymentProfile)); }
			if(('shippingProfileId' in obj) && (obj.shippingProfileId != null)) { this.setShippingProfileId(obj.shippingProfileId); }
		}
		else {
			this.setCreateProfile(null);
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setShippingProfileId(null);
		}
		logger.debug('Exit CustomerProfilePaymentType constructor');
	}

	setCreateProfile(p_createProfile) { this.createProfile = p_createProfile; }
	getCreateProfile() { if('createProfile' in this) {return this.createProfile;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
	setShippingProfileId(p_shippingProfileId) { this.shippingProfileId = p_shippingProfileId; }
	getShippingProfileId() { if('shippingProfileId' in this) {return this.shippingProfileId;} }
}

module.exports.CustomerProfilePaymentType = CustomerProfilePaymentType;

class CustomerProfileSummaryType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileSummaryType');
		logger.debug('Enter CustomerProfileSummaryType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('merchantCustomerId' in obj) && (obj.merchantCustomerId != null)) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('createdDate' in obj) && (obj.createdDate != null)) { this.setCreatedDate(obj.createdDate); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setDescription(null);
			this.setMerchantCustomerId(null);
			this.setEmail(null);
			this.setCreatedDate(null);
		}
		logger.debug('Exit CustomerProfileSummaryType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId() { if('merchantCustomerId' in this) {return this.merchantCustomerId;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setCreatedDate(p_createdDate) { this.createdDate = p_createdDate; }
	getCreatedDate() { if('createdDate' in this) {return this.createdDate;} }
}

module.exports.CustomerProfileSummaryType = CustomerProfileSummaryType;

class CustomerType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerType');
		logger.debug('Enter CustomerType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('faxNumber' in obj) && (obj.faxNumber != null)) { this.setFaxNumber(obj.faxNumber); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
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
		logger.debug('Exit CustomerType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { if('type' in this) {return this.type;} }
	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { if('phoneNumber' in this) {return this.phoneNumber;} }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber() { if('faxNumber' in this) {return this.faxNumber;} }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { if('driversLicense' in this) {return this.driversLicense;} }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { if('taxId' in this) {return this.taxId;} }
}

module.exports.CustomerType = CustomerType;

class DriversLicenseMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('DriversLicenseMaskedType');
		logger.debug('Enter DriversLicenseMaskedType constructor');
		if(arguments.length == 1) {
			if(('number' in obj) && (obj.number != null)) { this.setNumber(obj.number); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('dateOfBirth' in obj) && (obj.dateOfBirth != null)) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseMaskedType constructor');
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber() { if('number' in this) {return this.number;} }
	setState(p_state) { this.state = p_state; }
	getState() { if('state' in this) {return this.state;} }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth() { if('dateOfBirth' in this) {return this.dateOfBirth;} }
}

module.exports.DriversLicenseMaskedType = DriversLicenseMaskedType;

class DriversLicenseType {
	constructor(obj) {
		var logger = Logger.getLogger('DriversLicenseType');
		logger.debug('Enter DriversLicenseType constructor');
		if(arguments.length == 1) {
			if(('number' in obj) && (obj.number != null)) { this.setNumber(obj.number); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('dateOfBirth' in obj) && (obj.dateOfBirth != null)) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseType constructor');
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber() { if('number' in this) {return this.number;} }
	setState(p_state) { this.state = p_state; }
	getState() { if('state' in this) {return this.state;} }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth() { if('dateOfBirth' in this) {return this.dateOfBirth;} }
}

module.exports.DriversLicenseType = DriversLicenseType;

class EmvTag {
	constructor(obj) {
		var logger = Logger.getLogger('EmvTag');
		logger.debug('Enter EmvTag constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('value' in obj) && (obj.value != null)) { this.setValue(obj.value); }
			if(('formatted' in obj) && (obj.formatted != null)) { this.setFormatted(obj.formatted); }
		}
		else {
			this.setName(null);
			this.setValue(null);
			this.setFormatted(null);
		}
		logger.debug('Exit EmvTag constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setValue(p_value) { this.value = p_value; }
	getValue() { if('value' in this) {return this.value;} }
	setFormatted(p_formatted) { this.formatted = p_formatted; }
	getFormatted() { if('formatted' in this) {return this.formatted;} }
}

module.exports.EmvTag = EmvTag;

class EncryptedTrackDataType {
	constructor(obj) {
		var logger = Logger.getLogger('EncryptedTrackDataType');
		logger.debug('Enter EncryptedTrackDataType constructor');
		if(arguments.length == 1) {
			if(('FormOfPayment' in obj) && (obj.FormOfPayment != null)) { this.setFormOfPayment(new KeyBlock(obj.FormOfPayment)); }
		}
		else {
			this.setFormOfPayment(null);
		}
		logger.debug('Exit EncryptedTrackDataType constructor');
	}

	setFormOfPayment(p_FormOfPayment) { this.FormOfPayment = p_FormOfPayment; }
	getFormOfPayment() { if('FormOfPayment' in this) {return this.FormOfPayment;} }
}

module.exports.EncryptedTrackDataType = EncryptedTrackDataType;

class EnumCollection {
	constructor(obj) {
		var logger = Logger.getLogger('EnumCollection');
		logger.debug('Enter EnumCollection constructor');
		if(arguments.length == 1) {
			if(('customerProfileSummaryType' in obj) && (obj.customerProfileSummaryType != null)) { this.setCustomerProfileSummaryType(new CustomerProfileSummaryType(obj.customerProfileSummaryType)); }
			if(('paymentSimpleType' in obj) && (obj.paymentSimpleType != null)) { this.setPaymentSimpleType(new PaymentSimpleType(obj.paymentSimpleType)); }
			if(('accountTypeEnum' in obj) && (obj.accountTypeEnum != null)) { this.setAccountTypeEnum(obj.accountTypeEnum); }
			if(('cardTypeEnum' in obj) && (obj.cardTypeEnum != null)) { this.setCardTypeEnum(obj.cardTypeEnum); }
			if(('FDSFilterActionEnum' in obj) && (obj.FDSFilterActionEnum != null)) { this.setFDSFilterActionEnum(obj.FDSFilterActionEnum); }
			if(('permissionsEnum' in obj) && (obj.permissionsEnum != null)) { this.setPermissionsEnum(obj.permissionsEnum); }
			if(('settingNameEnum' in obj) && (obj.settingNameEnum != null)) { this.setSettingNameEnum(obj.settingNameEnum); }
			if(('settlementStateEnum' in obj) && (obj.settlementStateEnum != null)) { this.setSettlementStateEnum(obj.settlementStateEnum); }
			if(('transactionStatusEnum' in obj) && (obj.transactionStatusEnum != null)) { this.setTransactionStatusEnum(obj.transactionStatusEnum); }
			if(('transactionTypeEnum' in obj) && (obj.transactionTypeEnum != null)) { this.setTransactionTypeEnum(obj.transactionTypeEnum); }
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
		logger.debug('Exit EnumCollection constructor');
	}

	setCustomerProfileSummaryType(p_customerProfileSummaryType) { this.customerProfileSummaryType = p_customerProfileSummaryType; }
	getCustomerProfileSummaryType() { if('customerProfileSummaryType' in this) {return this.customerProfileSummaryType;} }
	setPaymentSimpleType(p_paymentSimpleType) { this.paymentSimpleType = p_paymentSimpleType; }
	getPaymentSimpleType() { if('paymentSimpleType' in this) {return this.paymentSimpleType;} }
	setAccountTypeEnum(p_accountTypeEnum) { this.accountTypeEnum = p_accountTypeEnum; }
	getAccountTypeEnum() { if('accountTypeEnum' in this) {return this.accountTypeEnum;} }
	setCardTypeEnum(p_cardTypeEnum) { this.cardTypeEnum = p_cardTypeEnum; }
	getCardTypeEnum() { if('cardTypeEnum' in this) {return this.cardTypeEnum;} }
	setFDSFilterActionEnum(p_FDSFilterActionEnum) { this.FDSFilterActionEnum = p_FDSFilterActionEnum; }
	getFDSFilterActionEnum() { if('FDSFilterActionEnum' in this) {return this.FDSFilterActionEnum;} }
	setPermissionsEnum(p_permissionsEnum) { this.permissionsEnum = p_permissionsEnum; }
	getPermissionsEnum() { if('permissionsEnum' in this) {return this.permissionsEnum;} }
	setSettingNameEnum(p_settingNameEnum) { this.settingNameEnum = p_settingNameEnum; }
	getSettingNameEnum() { if('settingNameEnum' in this) {return this.settingNameEnum;} }
	setSettlementStateEnum(p_settlementStateEnum) { this.settlementStateEnum = p_settlementStateEnum; }
	getSettlementStateEnum() { if('settlementStateEnum' in this) {return this.settlementStateEnum;} }
	setTransactionStatusEnum(p_transactionStatusEnum) { this.transactionStatusEnum = p_transactionStatusEnum; }
	getTransactionStatusEnum() { if('transactionStatusEnum' in this) {return this.transactionStatusEnum;} }
	setTransactionTypeEnum(p_transactionTypeEnum) { this.transactionTypeEnum = p_transactionTypeEnum; }
	getTransactionTypeEnum() { if('transactionTypeEnum' in this) {return this.transactionTypeEnum;} }
}

module.exports.EnumCollection = EnumCollection;

class ExtendedAmountType {
	constructor(obj) {
		var logger = Logger.getLogger('ExtendedAmountType');
		logger.debug('Enter ExtendedAmountType constructor');
		if(arguments.length == 1) {
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setAmount(null);
			this.setName(null);
			this.setDescription(null);
		}
		logger.debug('Exit ExtendedAmountType constructor');
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
}

module.exports.ExtendedAmountType = ExtendedAmountType;

class FDSFilterType {
	constructor(obj) {
		var logger = Logger.getLogger('FDSFilterType');
		logger.debug('Enter FDSFilterType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('action' in obj) && (obj.action != null)) { this.setAction(obj.action); }
		}
		else {
			this.setName(null);
			this.setAction(null);
		}
		logger.debug('Exit FDSFilterType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setAction(p_action) { this.action = p_action; }
	getAction() { if('action' in this) {return this.action;} }
}

module.exports.FDSFilterType = FDSFilterType;

class FingerPrintType {
	constructor(obj) {
		var logger = Logger.getLogger('FingerPrintType');
		logger.debug('Enter FingerPrintType constructor');
		if(arguments.length == 1) {
			if(('hashValue' in obj) && (obj.hashValue != null)) { this.setHashValue(obj.hashValue); }
			if(('sequence' in obj) && (obj.sequence != null)) { this.setSequence(obj.sequence); }
			if(('timestamp' in obj) && (obj.timestamp != null)) { this.setTimestamp(obj.timestamp); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
		}
		else {
			this.setHashValue(null);
			this.setSequence(null);
			this.setTimestamp(null);
			this.setCurrencyCode(null);
			this.setAmount(null);
		}
		logger.debug('Exit FingerPrintType constructor');
	}

	setHashValue(p_hashValue) { this.hashValue = p_hashValue; }
	getHashValue() { if('hashValue' in this) {return this.hashValue;} }
	setSequence(p_sequence) { this.sequence = p_sequence; }
	getSequence() { if('sequence' in this) {return this.sequence;} }
	setTimestamp(p_timestamp) { this.timestamp = p_timestamp; }
	getTimestamp() { if('timestamp' in this) {return this.timestamp;} }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { if('currencyCode' in this) {return this.currencyCode;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
}

module.exports.FingerPrintType = FingerPrintType;

class FraudInformationType {
	constructor(obj) {
		var logger = Logger.getLogger('FraudInformationType');
		logger.debug('Enter FraudInformationType constructor');
		if(arguments.length == 1) {
			if(('fraudFilterList' in obj) && (obj.fraudFilterList != null)) { this.setFraudFilterList(new ArrayOfFraudFilterType(obj.fraudFilterList)); }
			if(('fraudAction' in obj) && (obj.fraudAction != null)) { this.setFraudAction(obj.fraudAction); }
		}
		else {
			this.setFraudFilterList(null);
			this.setFraudAction(null);
		}
		logger.debug('Exit FraudInformationType constructor');
	}

	setFraudFilterList(p_fraudFilterList) { this.fraudFilterList = p_fraudFilterList; }
	getFraudFilterList() { if('fraudFilterList' in this) {return this.fraudFilterList;} }
	setFraudAction(p_fraudAction) { this.fraudAction = p_fraudAction; }
	getFraudAction() { if('fraudAction' in this) {return this.fraudAction;} }
}

module.exports.FraudInformationType = FraudInformationType;

class HeldTransactionRequestType {
	constructor(obj) {
		var logger = Logger.getLogger('HeldTransactionRequestType');
		logger.debug('Enter HeldTransactionRequestType constructor');
		if(arguments.length == 1) {
			if(('action' in obj) && (obj.action != null)) { this.setAction(obj.action); }
			if(('refTransId' in obj) && (obj.refTransId != null)) { this.setRefTransId(obj.refTransId); }
		}
		else {
			this.setAction(null);
			this.setRefTransId(null);
		}
		logger.debug('Exit HeldTransactionRequestType constructor');
	}

	setAction(p_action) { this.action = p_action; }
	getAction() { if('action' in this) {return this.action;} }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId() { if('refTransId' in this) {return this.refTransId;} }
}

module.exports.HeldTransactionRequestType = HeldTransactionRequestType;

class ImpersonationAuthenticationType {
	constructor(obj) {
		var logger = Logger.getLogger('ImpersonationAuthenticationType');
		logger.debug('Enter ImpersonationAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('partnerLoginId' in obj) && (obj.partnerLoginId != null)) { this.setPartnerLoginId(obj.partnerLoginId); }
			if(('partnerTransactionKey' in obj) && (obj.partnerTransactionKey != null)) { this.setPartnerTransactionKey(obj.partnerTransactionKey); }
		}
		else {
			this.setPartnerLoginId(null);
			this.setPartnerTransactionKey(null);
		}
		logger.debug('Exit ImpersonationAuthenticationType constructor');
	}

	setPartnerLoginId(p_partnerLoginId) { this.partnerLoginId = p_partnerLoginId; }
	getPartnerLoginId() { if('partnerLoginId' in this) {return this.partnerLoginId;} }
	setPartnerTransactionKey(p_partnerTransactionKey) { this.partnerTransactionKey = p_partnerTransactionKey; }
	getPartnerTransactionKey() { if('partnerTransactionKey' in this) {return this.partnerTransactionKey;} }
}

module.exports.ImpersonationAuthenticationType = ImpersonationAuthenticationType;

class IsAliveRequest {
	getJSON() { 
		var logger = Logger.getLogger('IsAliveRequest');
		logger.debug('Enter IsAliveRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'isAliveRequest' : this };
		logger.debug('Exit IsAliveRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('IsAliveRequest');
		logger.debug('Enter IsAliveRequest constructor');
		if(arguments.length == 1) {
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
		}
		else {
			this.setRefId(null);
		}
		logger.debug('Exit IsAliveRequest constructor');
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { if('refId' in this) {return this.refId;} }
}

module.exports.IsAliveRequest = IsAliveRequest;

class KeyBlock {
	constructor(obj) {
		var logger = Logger.getLogger('KeyBlock');
		logger.debug('Enter KeyBlock constructor');
		if(arguments.length == 1) {
			if(('Value' in obj) && (obj.Value != null)) { this.setValue(new KeyValue(obj.Value)); }
		}
		else {
			this.setValue(null);
		}
		logger.debug('Exit KeyBlock constructor');
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue() { if('Value' in this) {return this.Value;} }
}

module.exports.KeyBlock = KeyBlock;

class KeyManagementScheme {
	constructor(obj) {
		var logger = Logger.getLogger('KeyManagementScheme');
		logger.debug('Enter KeyManagementScheme constructor');
		if(arguments.length == 1) {
			if(('DUKPT' in obj) && (obj.DUKPT != null)) { this.setDUKPT(new KeyManagementScheme.DUKPT(obj.DUKPT)); }
		}
		else {
			this.setDUKPT(null);
		}
		logger.debug('Exit KeyManagementScheme constructor');
	}

	setDUKPT(p_DUKPT) { this.DUKPT = p_DUKPT; }
	getDUKPT() { if('DUKPT' in this) {return this.DUKPT;} }
}

module.exports.KeyManagementScheme = KeyManagementScheme;

class KeyValue {
	constructor(obj) {
		var logger = Logger.getLogger('KeyValue');
		logger.debug('Enter KeyValue constructor');
		if(arguments.length == 1) {
			if(('Encoding' in obj) && (obj.Encoding != null)) { this.setEncoding(obj.Encoding); }
			if(('EncryptionAlgorithm' in obj) && (obj.EncryptionAlgorithm != null)) { this.setEncryptionAlgorithm(obj.EncryptionAlgorithm); }
			if(('Scheme' in obj) && (obj.Scheme != null)) { this.setScheme(new KeyManagementScheme(obj.Scheme)); }
		}
		else {
			this.setEncoding(null);
			this.setEncryptionAlgorithm(null);
			this.setScheme(null);
		}
		logger.debug('Exit KeyValue constructor');
	}

	setEncoding(p_Encoding) { this.Encoding = p_Encoding; }
	getEncoding() { if('Encoding' in this) {return this.Encoding;} }
	setEncryptionAlgorithm(p_EncryptionAlgorithm) { this.EncryptionAlgorithm = p_EncryptionAlgorithm; }
	getEncryptionAlgorithm() { if('EncryptionAlgorithm' in this) {return this.EncryptionAlgorithm;} }
	setScheme(p_Scheme) { this.Scheme = p_Scheme; }
	getScheme() { if('Scheme' in this) {return this.Scheme;} }
}

module.exports.KeyValue = KeyValue;

class LineItemType {
	constructor(obj) {
		var logger = Logger.getLogger('LineItemType');
		logger.debug('Enter LineItemType constructor');
		if(arguments.length == 1) {
			if(('itemId' in obj) && (obj.itemId != null)) { this.setItemId(obj.itemId); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('quantity' in obj) && (obj.quantity != null)) { this.setQuantity(obj.quantity); }
			if(('unitPrice' in obj) && (obj.unitPrice != null)) { this.setUnitPrice(obj.unitPrice); }
			if(('taxable' in obj) && (obj.taxable != null)) { this.setTaxable(obj.taxable); }
			if(('unitOfMeasure' in obj) && (obj.unitOfMeasure != null)) { this.setUnitOfMeasure(obj.unitOfMeasure); }
			if(('typeOfSupply' in obj) && (obj.typeOfSupply != null)) { this.setTypeOfSupply(obj.typeOfSupply); }
			if(('taxRate' in obj) && (obj.taxRate != null)) { this.setTaxRate(obj.taxRate); }
			if(('taxAmount' in obj) && (obj.taxAmount != null)) { this.setTaxAmount(obj.taxAmount); }
			if(('nationalTax' in obj) && (obj.nationalTax != null)) { this.setNationalTax(obj.nationalTax); }
			if(('localTax' in obj) && (obj.localTax != null)) { this.setLocalTax(obj.localTax); }
			if(('vatRate' in obj) && (obj.vatRate != null)) { this.setVatRate(obj.vatRate); }
			if(('alternateTaxId' in obj) && (obj.alternateTaxId != null)) { this.setAlternateTaxId(obj.alternateTaxId); }
			if(('alternateTaxType' in obj) && (obj.alternateTaxType != null)) { this.setAlternateTaxType(obj.alternateTaxType); }
			if(('alternateTaxTypeApplied' in obj) && (obj.alternateTaxTypeApplied != null)) { this.setAlternateTaxTypeApplied(obj.alternateTaxTypeApplied); }
			if(('alternateTaxRate' in obj) && (obj.alternateTaxRate != null)) { this.setAlternateTaxRate(obj.alternateTaxRate); }
			if(('alternateTaxAmount' in obj) && (obj.alternateTaxAmount != null)) { this.setAlternateTaxAmount(obj.alternateTaxAmount); }
			if(('totalAmount' in obj) && (obj.totalAmount != null)) { this.setTotalAmount(obj.totalAmount); }
			if(('commodityCode' in obj) && (obj.commodityCode != null)) { this.setCommodityCode(obj.commodityCode); }
			if(('productCode' in obj) && (obj.productCode != null)) { this.setProductCode(obj.productCode); }
			if(('productSKU' in obj) && (obj.productSKU != null)) { this.setProductSKU(obj.productSKU); }
			if(('discountRate' in obj) && (obj.discountRate != null)) { this.setDiscountRate(obj.discountRate); }
			if(('discountAmount' in obj) && (obj.discountAmount != null)) { this.setDiscountAmount(obj.discountAmount); }
			if(('taxIncludedInTotal' in obj) && (obj.taxIncludedInTotal != null)) { this.setTaxIncludedInTotal(obj.taxIncludedInTotal); }
			if(('taxIsAfterDiscount' in obj) && (obj.taxIsAfterDiscount != null)) { this.setTaxIsAfterDiscount(obj.taxIsAfterDiscount); }
		}
		else {
			this.setItemId(null);
			this.setName(null);
			this.setDescription(null);
			this.setQuantity(null);
			this.setUnitPrice(null);
			this.setTaxable(null);
			this.setUnitOfMeasure(null);
			this.setTypeOfSupply(null);
			this.setTaxRate(null);
			this.setTaxAmount(null);
			this.setNationalTax(null);
			this.setLocalTax(null);
			this.setVatRate(null);
			this.setAlternateTaxId(null);
			this.setAlternateTaxType(null);
			this.setAlternateTaxTypeApplied(null);
			this.setAlternateTaxRate(null);
			this.setAlternateTaxAmount(null);
			this.setTotalAmount(null);
			this.setCommodityCode(null);
			this.setProductCode(null);
			this.setProductSKU(null);
			this.setDiscountRate(null);
			this.setDiscountAmount(null);
			this.setTaxIncludedInTotal(null);
			this.setTaxIsAfterDiscount(null);
		}
		logger.debug('Exit LineItemType constructor');
	}

	setItemId(p_itemId) { this.itemId = p_itemId; }
	getItemId() { if('itemId' in this) {return this.itemId;} }
	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
	setQuantity(p_quantity) { this.quantity = p_quantity; }
	getQuantity() { if('quantity' in this) {return this.quantity;} }
	setUnitPrice(p_unitPrice) { this.unitPrice = p_unitPrice; }
	getUnitPrice() { if('unitPrice' in this) {return this.unitPrice;} }
	setTaxable(p_taxable) { this.taxable = p_taxable; }
	getTaxable() { if('taxable' in this) {return this.taxable;} }
	setUnitOfMeasure(p_unitOfMeasure) { this.unitOfMeasure = p_unitOfMeasure; }
	getUnitOfMeasure() { if('unitOfMeasure' in this) {return this.unitOfMeasure;} }
	setTypeOfSupply(p_typeOfSupply) { this.typeOfSupply = p_typeOfSupply; }
	getTypeOfSupply() { if('typeOfSupply' in this) {return this.typeOfSupply;} }
	setTaxRate(p_taxRate) { this.taxRate = p_taxRate; }
	getTaxRate() { if('taxRate' in this) {return this.taxRate;} }
	setTaxAmount(p_taxAmount) { this.taxAmount = p_taxAmount; }
	getTaxAmount() { if('taxAmount' in this) {return this.taxAmount;} }
	setNationalTax(p_nationalTax) { this.nationalTax = p_nationalTax; }
	getNationalTax() { if('nationalTax' in this) {return this.nationalTax;} }
	setLocalTax(p_localTax) { this.localTax = p_localTax; }
	getLocalTax() { if('localTax' in this) {return this.localTax;} }
	setVatRate(p_vatRate) { this.vatRate = p_vatRate; }
	getVatRate() { if('vatRate' in this) {return this.vatRate;} }
	setAlternateTaxId(p_alternateTaxId) { this.alternateTaxId = p_alternateTaxId; }
	getAlternateTaxId() { if('alternateTaxId' in this) {return this.alternateTaxId;} }
	setAlternateTaxType(p_alternateTaxType) { this.alternateTaxType = p_alternateTaxType; }
	getAlternateTaxType() { if('alternateTaxType' in this) {return this.alternateTaxType;} }
	setAlternateTaxTypeApplied(p_alternateTaxTypeApplied) { this.alternateTaxTypeApplied = p_alternateTaxTypeApplied; }
	getAlternateTaxTypeApplied() { if('alternateTaxTypeApplied' in this) {return this.alternateTaxTypeApplied;} }
	setAlternateTaxRate(p_alternateTaxRate) { this.alternateTaxRate = p_alternateTaxRate; }
	getAlternateTaxRate() { if('alternateTaxRate' in this) {return this.alternateTaxRate;} }
	setAlternateTaxAmount(p_alternateTaxAmount) { this.alternateTaxAmount = p_alternateTaxAmount; }
	getAlternateTaxAmount() { if('alternateTaxAmount' in this) {return this.alternateTaxAmount;} }
	setTotalAmount(p_totalAmount) { this.totalAmount = p_totalAmount; }
	getTotalAmount() { if('totalAmount' in this) {return this.totalAmount;} }
	setCommodityCode(p_commodityCode) { this.commodityCode = p_commodityCode; }
	getCommodityCode() { if('commodityCode' in this) {return this.commodityCode;} }
	setProductCode(p_productCode) { this.productCode = p_productCode; }
	getProductCode() { if('productCode' in this) {return this.productCode;} }
	setProductSKU(p_productSKU) { this.productSKU = p_productSKU; }
	getProductSKU() { if('productSKU' in this) {return this.productSKU;} }
	setDiscountRate(p_discountRate) { this.discountRate = p_discountRate; }
	getDiscountRate() { if('discountRate' in this) {return this.discountRate;} }
	setDiscountAmount(p_discountAmount) { this.discountAmount = p_discountAmount; }
	getDiscountAmount() { if('discountAmount' in this) {return this.discountAmount;} }
	setTaxIncludedInTotal(p_taxIncludedInTotal) { this.taxIncludedInTotal = p_taxIncludedInTotal; }
	getTaxIncludedInTotal() { if('taxIncludedInTotal' in this) {return this.taxIncludedInTotal;} }
	setTaxIsAfterDiscount(p_taxIsAfterDiscount) { this.taxIsAfterDiscount = p_taxIsAfterDiscount; }
	getTaxIsAfterDiscount() { if('taxIsAfterDiscount' in this) {return this.taxIsAfterDiscount;} }
}

module.exports.LineItemType = LineItemType;

class ListOfAUDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('ListOfAUDetailsType');
		logger.debug('Enter ListOfAUDetailsType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var auUpdateOrAuDeleteList = [];
				obj.forEach(function(item) {auUpdateOrAuDeleteList.push(new String(item));}); 
				this.setAuUpdateOrAuDelete(auUpdateOrAuDeleteList);
			}
		}
		else {
			this.setAuUpdateOrAuDelete(null);
		}
		logger.debug('Exit ListOfAUDetailsType constructor');
	}

	setAuUpdateOrAuDelete(p_auUpdateOrAuDelete) { this.auUpdateOrAuDelete = p_auUpdateOrAuDelete; }
	getAuUpdateOrAuDelete() { if('auUpdateOrAuDelete' in this) {return this.auUpdateOrAuDelete;} }
}

module.exports.ListOfAUDetailsType = ListOfAUDetailsType;

class MerchantAuthenticationType {
	constructor(obj) {
		var logger = Logger.getLogger('MerchantAuthenticationType');
		logger.debug('Enter MerchantAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('transactionKey' in obj) && (obj.transactionKey != null)) { this.setTransactionKey(obj.transactionKey); }
			if(('sessionToken' in obj) && (obj.sessionToken != null)) { this.setSessionToken(obj.sessionToken); }
			if(('password' in obj) && (obj.password != null)) { this.setPassword(obj.password); }
			if(('impersonationAuthentication' in obj) && (obj.impersonationAuthentication != null)) { this.setImpersonationAuthentication(new ImpersonationAuthenticationType(obj.impersonationAuthentication)); }
			if(('fingerPrint' in obj) && (obj.fingerPrint != null)) { this.setFingerPrint(new FingerPrintType(obj.fingerPrint)); }
			if(('clientKey' in obj) && (obj.clientKey != null)) { this.setClientKey(obj.clientKey); }
			if(('accessToken' in obj) && (obj.accessToken != null)) { this.setAccessToken(obj.accessToken); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
		}
		else {
			this.setName(null);
			this.setTransactionKey(null);
			this.setSessionToken(null);
			this.setPassword(null);
			this.setImpersonationAuthentication(null);
			this.setFingerPrint(null);
			this.setClientKey(null);
			this.setAccessToken(null);
			this.setMobileDeviceId(null);
		}
		logger.debug('Exit MerchantAuthenticationType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setTransactionKey(p_transactionKey) { this.transactionKey = p_transactionKey; }
	getTransactionKey() { if('transactionKey' in this) {return this.transactionKey;} }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken() { if('sessionToken' in this) {return this.sessionToken;} }
	setPassword(p_password) { this.password = p_password; }
	getPassword() { if('password' in this) {return this.password;} }
	setImpersonationAuthentication(p_impersonationAuthentication) { this.impersonationAuthentication = p_impersonationAuthentication; }
	getImpersonationAuthentication() { if('impersonationAuthentication' in this) {return this.impersonationAuthentication;} }
	setFingerPrint(p_fingerPrint) { this.fingerPrint = p_fingerPrint; }
	getFingerPrint() { if('fingerPrint' in this) {return this.fingerPrint;} }
	setClientKey(p_clientKey) { this.clientKey = p_clientKey; }
	getClientKey() { if('clientKey' in this) {return this.clientKey;} }
	setAccessToken(p_accessToken) { this.accessToken = p_accessToken; }
	getAccessToken() { if('accessToken' in this) {return this.accessToken;} }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { if('mobileDeviceId' in this) {return this.mobileDeviceId;} }
}

module.exports.MerchantAuthenticationType = MerchantAuthenticationType;

class MerchantContactType {
	constructor(obj) {
		var logger = Logger.getLogger('MerchantContactType');
		logger.debug('Enter MerchantContactType constructor');
		if(arguments.length == 1) {
			if(('merchantName' in obj) && (obj.merchantName != null)) { this.setMerchantName(obj.merchantName); }
			if(('merchantAddress' in obj) && (obj.merchantAddress != null)) { this.setMerchantAddress(obj.merchantAddress); }
			if(('merchantCity' in obj) && (obj.merchantCity != null)) { this.setMerchantCity(obj.merchantCity); }
			if(('merchantState' in obj) && (obj.merchantState != null)) { this.setMerchantState(obj.merchantState); }
			if(('merchantZip' in obj) && (obj.merchantZip != null)) { this.setMerchantZip(obj.merchantZip); }
			if(('merchantPhone' in obj) && (obj.merchantPhone != null)) { this.setMerchantPhone(obj.merchantPhone); }
		}
		else {
			this.setMerchantName(null);
			this.setMerchantAddress(null);
			this.setMerchantCity(null);
			this.setMerchantState(null);
			this.setMerchantZip(null);
			this.setMerchantPhone(null);
		}
		logger.debug('Exit MerchantContactType constructor');
	}

	setMerchantName(p_merchantName) { this.merchantName = p_merchantName; }
	getMerchantName() { if('merchantName' in this) {return this.merchantName;} }
	setMerchantAddress(p_merchantAddress) { this.merchantAddress = p_merchantAddress; }
	getMerchantAddress() { if('merchantAddress' in this) {return this.merchantAddress;} }
	setMerchantCity(p_merchantCity) { this.merchantCity = p_merchantCity; }
	getMerchantCity() { if('merchantCity' in this) {return this.merchantCity;} }
	setMerchantState(p_merchantState) { this.merchantState = p_merchantState; }
	getMerchantState() { if('merchantState' in this) {return this.merchantState;} }
	setMerchantZip(p_merchantZip) { this.merchantZip = p_merchantZip; }
	getMerchantZip() { if('merchantZip' in this) {return this.merchantZip;} }
	setMerchantPhone(p_merchantPhone) { this.merchantPhone = p_merchantPhone; }
	getMerchantPhone() { if('merchantPhone' in this) {return this.merchantPhone;} }
}

module.exports.MerchantContactType = MerchantContactType;

class MessagesType {
	constructor(obj) {
		var logger = Logger.getLogger('MessagesType');
		logger.debug('Enter MessagesType constructor');
		if(arguments.length == 1) {
			if(('resultCode' in obj) && (obj.resultCode != null)) { this.setResultCode(obj.resultCode); }
			if((obj.message != undefined) && (obj.message != null)) {
				var messageList = [];
				obj.message.forEach(function(item) {messageList.push(new MessagesType.Message(item));}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setResultCode(null);
			this.setMessage(null);
		}
		logger.debug('Exit MessagesType constructor');
	}

	setResultCode(p_resultCode) { this.resultCode = p_resultCode; }
	getResultCode() { if('resultCode' in this) {return this.resultCode;} }
	setMessage(p_message) { this.message = p_message; }
	getMessage() { if('message' in this) {return this.message;} }
}

module.exports.MessagesType = MessagesType;

class MobileDeviceType {
	constructor(obj) {
		var logger = Logger.getLogger('MobileDeviceType');
		logger.debug('Enter MobileDeviceType constructor');
		if(arguments.length == 1) {
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('devicePlatform' in obj) && (obj.devicePlatform != null)) { this.setDevicePlatform(obj.devicePlatform); }
			if(('deviceActivation' in obj) && (obj.deviceActivation != null)) { this.setDeviceActivation(obj.deviceActivation); }
		}
		else {
			this.setMobileDeviceId(null);
			this.setDescription(null);
			this.setPhoneNumber(null);
			this.setDevicePlatform(null);
			this.setDeviceActivation(null);
		}
		logger.debug('Exit MobileDeviceType constructor');
	}

	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { if('mobileDeviceId' in this) {return this.mobileDeviceId;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { if('phoneNumber' in this) {return this.phoneNumber;} }
	setDevicePlatform(p_devicePlatform) { this.devicePlatform = p_devicePlatform; }
	getDevicePlatform() { if('devicePlatform' in this) {return this.devicePlatform;} }
	setDeviceActivation(p_deviceActivation) { this.deviceActivation = p_deviceActivation; }
	getDeviceActivation() { if('deviceActivation' in this) {return this.deviceActivation;} }
}

module.exports.MobileDeviceType = MobileDeviceType;

class NameAndAddressType {
	constructor(obj) {
		var logger = Logger.getLogger('NameAndAddressType');
		logger.debug('Enter NameAndAddressType constructor');
		if(arguments.length == 1) {
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('company' in obj) && (obj.company != null)) { this.setCompany(obj.company); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(obj.address); }
			if(('city' in obj) && (obj.city != null)) { this.setCity(obj.city); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('zip' in obj) && (obj.zip != null)) { this.setZip(obj.zip); }
			if(('country' in obj) && (obj.country != null)) { this.setCountry(obj.country); }
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
		logger.debug('Exit NameAndAddressType constructor');
	}

	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { if('firstName' in this) {return this.firstName;} }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { if('lastName' in this) {return this.lastName;} }
	setCompany(p_company) { this.company = p_company; }
	getCompany() { if('company' in this) {return this.company;} }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { if('address' in this) {return this.address;} }
	setCity(p_city) { this.city = p_city; }
	getCity() { if('city' in this) {return this.city;} }
	setState(p_state) { this.state = p_state; }
	getState() { if('state' in this) {return this.state;} }
	setZip(p_zip) { this.zip = p_zip; }
	getZip() { if('zip' in this) {return this.zip;} }
	setCountry(p_country) { this.country = p_country; }
	getCountry() { if('country' in this) {return this.country;} }
}

module.exports.NameAndAddressType = NameAndAddressType;

class OpaqueDataType {
	constructor(obj) {
		var logger = Logger.getLogger('OpaqueDataType');
		logger.debug('Enter OpaqueDataType constructor');
		if(arguments.length == 1) {
			if(('dataDescriptor' in obj) && (obj.dataDescriptor != null)) { this.setDataDescriptor(obj.dataDescriptor); }
			if(('dataValue' in obj) && (obj.dataValue != null)) { this.setDataValue(obj.dataValue); }
			if(('dataKey' in obj) && (obj.dataKey != null)) { this.setDataKey(obj.dataKey); }
			if(('expirationTimeStamp' in obj) && (obj.expirationTimeStamp != null)) { this.setExpirationTimeStamp(obj.expirationTimeStamp); }
		}
		else {
			this.setDataDescriptor(null);
			this.setDataValue(null);
			this.setDataKey(null);
			this.setExpirationTimeStamp(null);
		}
		logger.debug('Exit OpaqueDataType constructor');
	}

	setDataDescriptor(p_dataDescriptor) { this.dataDescriptor = p_dataDescriptor; }
	getDataDescriptor() { if('dataDescriptor' in this) {return this.dataDescriptor;} }
	setDataValue(p_dataValue) { this.dataValue = p_dataValue; }
	getDataValue() { if('dataValue' in this) {return this.dataValue;} }
	setDataKey(p_dataKey) { this.dataKey = p_dataKey; }
	getDataKey() { if('dataKey' in this) {return this.dataKey;} }
	setExpirationTimeStamp(p_expirationTimeStamp) { this.expirationTimeStamp = p_expirationTimeStamp; }
	getExpirationTimeStamp() { if('expirationTimeStamp' in this) {return this.expirationTimeStamp;} }
}

module.exports.OpaqueDataType = OpaqueDataType;

class OrderType {
	constructor(obj) {
		var logger = Logger.getLogger('OrderType');
		logger.debug('Enter OrderType constructor');
		if(arguments.length == 1) {
			if(('invoiceNumber' in obj) && (obj.invoiceNumber != null)) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('discountAmount' in obj) && (obj.discountAmount != null)) { this.setDiscountAmount(obj.discountAmount); }
			if(('taxIsAfterDiscount' in obj) && (obj.taxIsAfterDiscount != null)) { this.setTaxIsAfterDiscount(obj.taxIsAfterDiscount); }
			if(('totalTaxTypeCode' in obj) && (obj.totalTaxTypeCode != null)) { this.setTotalTaxTypeCode(obj.totalTaxTypeCode); }
			if(('purchaserVATRegistrationNumber' in obj) && (obj.purchaserVATRegistrationNumber != null)) { this.setPurchaserVATRegistrationNumber(obj.purchaserVATRegistrationNumber); }
			if(('merchantVATRegistrationNumber' in obj) && (obj.merchantVATRegistrationNumber != null)) { this.setMerchantVATRegistrationNumber(obj.merchantVATRegistrationNumber); }
			if(('vatInvoiceReferenceNumber' in obj) && (obj.vatInvoiceReferenceNumber != null)) { this.setVatInvoiceReferenceNumber(obj.vatInvoiceReferenceNumber); }
			if(('purchaserCode' in obj) && (obj.purchaserCode != null)) { this.setPurchaserCode(obj.purchaserCode); }
			if(('summaryCommodityCode' in obj) && (obj.summaryCommodityCode != null)) { this.setSummaryCommodityCode(obj.summaryCommodityCode); }
			if(('purchaseOrderDateUTC' in obj) && (obj.purchaseOrderDateUTC != null)) { this.setPurchaseOrderDateUTC(obj.purchaseOrderDateUTC); }
			if(('supplierOrderReference' in obj) && (obj.supplierOrderReference != null)) { this.setSupplierOrderReference(obj.supplierOrderReference); }
			if(('authorizedContactName' in obj) && (obj.authorizedContactName != null)) { this.setAuthorizedContactName(obj.authorizedContactName); }
			if(('cardAcceptorRefNumber' in obj) && (obj.cardAcceptorRefNumber != null)) { this.setCardAcceptorRefNumber(obj.cardAcceptorRefNumber); }
			if(('amexDataTAA1' in obj) && (obj.amexDataTAA1 != null)) { this.setAmexDataTAA1(obj.amexDataTAA1); }
			if(('amexDataTAA2' in obj) && (obj.amexDataTAA2 != null)) { this.setAmexDataTAA2(obj.amexDataTAA2); }
			if(('amexDataTAA3' in obj) && (obj.amexDataTAA3 != null)) { this.setAmexDataTAA3(obj.amexDataTAA3); }
			if(('amexDataTAA4' in obj) && (obj.amexDataTAA4 != null)) { this.setAmexDataTAA4(obj.amexDataTAA4); }
		}
		else {
			this.setInvoiceNumber(null);
			this.setDescription(null);
			this.setDiscountAmount(null);
			this.setTaxIsAfterDiscount(null);
			this.setTotalTaxTypeCode(null);
			this.setPurchaserVATRegistrationNumber(null);
			this.setMerchantVATRegistrationNumber(null);
			this.setVatInvoiceReferenceNumber(null);
			this.setPurchaserCode(null);
			this.setSummaryCommodityCode(null);
			this.setPurchaseOrderDateUTC(null);
			this.setSupplierOrderReference(null);
			this.setAuthorizedContactName(null);
			this.setCardAcceptorRefNumber(null);
			this.setAmexDataTAA1(null);
			this.setAmexDataTAA2(null);
			this.setAmexDataTAA3(null);
			this.setAmexDataTAA4(null);
		}
		logger.debug('Exit OrderType constructor');
	}

	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber() { if('invoiceNumber' in this) {return this.invoiceNumber;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
	setDiscountAmount(p_discountAmount) { this.discountAmount = p_discountAmount; }
	getDiscountAmount() { if('discountAmount' in this) {return this.discountAmount;} }
	setTaxIsAfterDiscount(p_taxIsAfterDiscount) { this.taxIsAfterDiscount = p_taxIsAfterDiscount; }
	getTaxIsAfterDiscount() { if('taxIsAfterDiscount' in this) {return this.taxIsAfterDiscount;} }
	setTotalTaxTypeCode(p_totalTaxTypeCode) { this.totalTaxTypeCode = p_totalTaxTypeCode; }
	getTotalTaxTypeCode() { if('totalTaxTypeCode' in this) {return this.totalTaxTypeCode;} }
	setPurchaserVATRegistrationNumber(p_purchaserVATRegistrationNumber) { this.purchaserVATRegistrationNumber = p_purchaserVATRegistrationNumber; }
	getPurchaserVATRegistrationNumber() { if('purchaserVATRegistrationNumber' in this) {return this.purchaserVATRegistrationNumber;} }
	setMerchantVATRegistrationNumber(p_merchantVATRegistrationNumber) { this.merchantVATRegistrationNumber = p_merchantVATRegistrationNumber; }
	getMerchantVATRegistrationNumber() { if('merchantVATRegistrationNumber' in this) {return this.merchantVATRegistrationNumber;} }
	setVatInvoiceReferenceNumber(p_vatInvoiceReferenceNumber) { this.vatInvoiceReferenceNumber = p_vatInvoiceReferenceNumber; }
	getVatInvoiceReferenceNumber() { if('vatInvoiceReferenceNumber' in this) {return this.vatInvoiceReferenceNumber;} }
	setPurchaserCode(p_purchaserCode) { this.purchaserCode = p_purchaserCode; }
	getPurchaserCode() { if('purchaserCode' in this) {return this.purchaserCode;} }
	setSummaryCommodityCode(p_summaryCommodityCode) { this.summaryCommodityCode = p_summaryCommodityCode; }
	getSummaryCommodityCode() { if('summaryCommodityCode' in this) {return this.summaryCommodityCode;} }
	setPurchaseOrderDateUTC(p_purchaseOrderDateUTC) { this.purchaseOrderDateUTC = p_purchaseOrderDateUTC; }
	getPurchaseOrderDateUTC() { if('purchaseOrderDateUTC' in this) {return this.purchaseOrderDateUTC;} }
	setSupplierOrderReference(p_supplierOrderReference) { this.supplierOrderReference = p_supplierOrderReference; }
	getSupplierOrderReference() { if('supplierOrderReference' in this) {return this.supplierOrderReference;} }
	setAuthorizedContactName(p_authorizedContactName) { this.authorizedContactName = p_authorizedContactName; }
	getAuthorizedContactName() { if('authorizedContactName' in this) {return this.authorizedContactName;} }
	setCardAcceptorRefNumber(p_cardAcceptorRefNumber) { this.cardAcceptorRefNumber = p_cardAcceptorRefNumber; }
	getCardAcceptorRefNumber() { if('cardAcceptorRefNumber' in this) {return this.cardAcceptorRefNumber;} }
	setAmexDataTAA1(p_amexDataTAA1) { this.amexDataTAA1 = p_amexDataTAA1; }
	getAmexDataTAA1() { if('amexDataTAA1' in this) {return this.amexDataTAA1;} }
	setAmexDataTAA2(p_amexDataTAA2) { this.amexDataTAA2 = p_amexDataTAA2; }
	getAmexDataTAA2() { if('amexDataTAA2' in this) {return this.amexDataTAA2;} }
	setAmexDataTAA3(p_amexDataTAA3) { this.amexDataTAA3 = p_amexDataTAA3; }
	getAmexDataTAA3() { if('amexDataTAA3' in this) {return this.amexDataTAA3;} }
	setAmexDataTAA4(p_amexDataTAA4) { this.amexDataTAA4 = p_amexDataTAA4; }
	getAmexDataTAA4() { if('amexDataTAA4' in this) {return this.amexDataTAA4;} }
}

module.exports.OrderType = OrderType;

class OtherTaxType {
	constructor(obj) {
		var logger = Logger.getLogger('OtherTaxType');
		logger.debug('Enter OtherTaxType constructor');
		if(arguments.length == 1) {
			if(('nationalTaxAmount' in obj) && (obj.nationalTaxAmount != null)) { this.setNationalTaxAmount(obj.nationalTaxAmount); }
			if(('localTaxAmount' in obj) && (obj.localTaxAmount != null)) { this.setLocalTaxAmount(obj.localTaxAmount); }
			if(('alternateTaxAmount' in obj) && (obj.alternateTaxAmount != null)) { this.setAlternateTaxAmount(obj.alternateTaxAmount); }
			if(('alternateTaxId' in obj) && (obj.alternateTaxId != null)) { this.setAlternateTaxId(obj.alternateTaxId); }
			if(('vatTaxRate' in obj) && (obj.vatTaxRate != null)) { this.setVatTaxRate(obj.vatTaxRate); }
			if(('vatTaxAmount' in obj) && (obj.vatTaxAmount != null)) { this.setVatTaxAmount(obj.vatTaxAmount); }
		}
		else {
			this.setNationalTaxAmount(null);
			this.setLocalTaxAmount(null);
			this.setAlternateTaxAmount(null);
			this.setAlternateTaxId(null);
			this.setVatTaxRate(null);
			this.setVatTaxAmount(null);
		}
		logger.debug('Exit OtherTaxType constructor');
	}

	setNationalTaxAmount(p_nationalTaxAmount) { this.nationalTaxAmount = p_nationalTaxAmount; }
	getNationalTaxAmount() { if('nationalTaxAmount' in this) {return this.nationalTaxAmount;} }
	setLocalTaxAmount(p_localTaxAmount) { this.localTaxAmount = p_localTaxAmount; }
	getLocalTaxAmount() { if('localTaxAmount' in this) {return this.localTaxAmount;} }
	setAlternateTaxAmount(p_alternateTaxAmount) { this.alternateTaxAmount = p_alternateTaxAmount; }
	getAlternateTaxAmount() { if('alternateTaxAmount' in this) {return this.alternateTaxAmount;} }
	setAlternateTaxId(p_alternateTaxId) { this.alternateTaxId = p_alternateTaxId; }
	getAlternateTaxId() { if('alternateTaxId' in this) {return this.alternateTaxId;} }
	setVatTaxRate(p_vatTaxRate) { this.vatTaxRate = p_vatTaxRate; }
	getVatTaxRate() { if('vatTaxRate' in this) {return this.vatTaxRate;} }
	setVatTaxAmount(p_vatTaxAmount) { this.vatTaxAmount = p_vatTaxAmount; }
	getVatTaxAmount() { if('vatTaxAmount' in this) {return this.vatTaxAmount;} }
}

module.exports.OtherTaxType = OtherTaxType;

class Paging {
	constructor(obj) {
		var logger = Logger.getLogger('Paging');
		logger.debug('Enter Paging constructor');
		if(arguments.length == 1) {
			if(('limit' in obj) && (obj.limit != null)) { this.setLimit(obj.limit); }
			if(('offset' in obj) && (obj.offset != null)) { this.setOffset(obj.offset); }
		}
		else {
			this.setLimit(null);
			this.setOffset(null);
		}
		logger.debug('Exit Paging constructor');
	}

	setLimit(p_limit) { this.limit = p_limit; }
	getLimit() { if('limit' in this) {return this.limit;} }
	setOffset(p_offset) { this.offset = p_offset; }
	getOffset() { if('offset' in this) {return this.offset;} }
}

module.exports.Paging = Paging;

class PayPalType {
	constructor(obj) {
		var logger = Logger.getLogger('PayPalType');
		logger.debug('Enter PayPalType constructor');
		if(arguments.length == 1) {
			if(('successUrl' in obj) && (obj.successUrl != null)) { this.setSuccessUrl(obj.successUrl); }
			if(('cancelUrl' in obj) && (obj.cancelUrl != null)) { this.setCancelUrl(obj.cancelUrl); }
			if(('paypalLc' in obj) && (obj.paypalLc != null)) { this.setPaypalLc(obj.paypalLc); }
			if(('paypalHdrImg' in obj) && (obj.paypalHdrImg != null)) { this.setPaypalHdrImg(obj.paypalHdrImg); }
			if(('paypalPayflowcolor' in obj) && (obj.paypalPayflowcolor != null)) { this.setPaypalPayflowcolor(obj.paypalPayflowcolor); }
			if(('payerID' in obj) && (obj.payerID != null)) { this.setPayerID(obj.payerID); }
		}
		else {
			this.setSuccessUrl(null);
			this.setCancelUrl(null);
			this.setPaypalLc(null);
			this.setPaypalHdrImg(null);
			this.setPaypalPayflowcolor(null);
			this.setPayerID(null);
		}
		logger.debug('Exit PayPalType constructor');
	}

	setSuccessUrl(p_successUrl) { this.successUrl = p_successUrl; }
	getSuccessUrl() { if('successUrl' in this) {return this.successUrl;} }
	setCancelUrl(p_cancelUrl) { this.cancelUrl = p_cancelUrl; }
	getCancelUrl() { if('cancelUrl' in this) {return this.cancelUrl;} }
	setPaypalLc(p_paypalLc) { this.paypalLc = p_paypalLc; }
	getPaypalLc() { if('paypalLc' in this) {return this.paypalLc;} }
	setPaypalHdrImg(p_paypalHdrImg) { this.paypalHdrImg = p_paypalHdrImg; }
	getPaypalHdrImg() { if('paypalHdrImg' in this) {return this.paypalHdrImg;} }
	setPaypalPayflowcolor(p_paypalPayflowcolor) { this.paypalPayflowcolor = p_paypalPayflowcolor; }
	getPaypalPayflowcolor() { if('paypalPayflowcolor' in this) {return this.paypalPayflowcolor;} }
	setPayerID(p_payerID) { this.payerID = p_payerID; }
	getPayerID() { if('payerID' in this) {return this.payerID;} }
}

module.exports.PayPalType = PayPalType;

class PaymentDetails {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentDetails');
		logger.debug('Enter PaymentDetails constructor');
		if(arguments.length == 1) {
			if(('currency' in obj) && (obj.currency != null)) { this.setCurrency(obj.currency); }
			if(('promoCode' in obj) && (obj.promoCode != null)) { this.setPromoCode(obj.promoCode); }
			if(('misc' in obj) && (obj.misc != null)) { this.setMisc(obj.misc); }
			if(('giftWrap' in obj) && (obj.giftWrap != null)) { this.setGiftWrap(obj.giftWrap); }
			if(('discount' in obj) && (obj.discount != null)) { this.setDiscount(obj.discount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(obj.tax); }
			if(('shippingHandling' in obj) && (obj.shippingHandling != null)) { this.setShippingHandling(obj.shippingHandling); }
			if(('subTotal' in obj) && (obj.subTotal != null)) { this.setSubTotal(obj.subTotal); }
			if(('orderID' in obj) && (obj.orderID != null)) { this.setOrderID(obj.orderID); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
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
		logger.debug('Exit PaymentDetails constructor');
	}

	setCurrency(p_currency) { this.currency = p_currency; }
	getCurrency() { if('currency' in this) {return this.currency;} }
	setPromoCode(p_promoCode) { this.promoCode = p_promoCode; }
	getPromoCode() { if('promoCode' in this) {return this.promoCode;} }
	setMisc(p_misc) { this.misc = p_misc; }
	getMisc() { if('misc' in this) {return this.misc;} }
	setGiftWrap(p_giftWrap) { this.giftWrap = p_giftWrap; }
	getGiftWrap() { if('giftWrap' in this) {return this.giftWrap;} }
	setDiscount(p_discount) { this.discount = p_discount; }
	getDiscount() { if('discount' in this) {return this.discount;} }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { if('tax' in this) {return this.tax;} }
	setShippingHandling(p_shippingHandling) { this.shippingHandling = p_shippingHandling; }
	getShippingHandling() { if('shippingHandling' in this) {return this.shippingHandling;} }
	setSubTotal(p_subTotal) { this.subTotal = p_subTotal; }
	getSubTotal() { if('subTotal' in this) {return this.subTotal;} }
	setOrderID(p_orderID) { this.orderID = p_orderID; }
	getOrderID() { if('orderID' in this) {return this.orderID;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
}

module.exports.PaymentDetails = PaymentDetails;

class PaymentEmvType {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentEmvType');
		logger.debug('Enter PaymentEmvType constructor');
		if(arguments.length == 1) {
			if(('emvData' in obj) && (obj.emvData != null)) { this.setEmvData(obj.emvData); }
			if(('emvDescriptor' in obj) && (obj.emvDescriptor != null)) { this.setEmvDescriptor(obj.emvDescriptor); }
			if(('emvVersion' in obj) && (obj.emvVersion != null)) { this.setEmvVersion(obj.emvVersion); }
		}
		else {
			this.setEmvData(null);
			this.setEmvDescriptor(null);
			this.setEmvVersion(null);
		}
		logger.debug('Exit PaymentEmvType constructor');
	}

	setEmvData(p_emvData) { this.emvData = p_emvData; }
	getEmvData() { if('emvData' in this) {return this.emvData;} }
	setEmvDescriptor(p_emvDescriptor) { this.emvDescriptor = p_emvDescriptor; }
	getEmvDescriptor() { if('emvDescriptor' in this) {return this.emvDescriptor;} }
	setEmvVersion(p_emvVersion) { this.emvVersion = p_emvVersion; }
	getEmvVersion() { if('emvVersion' in this) {return this.emvVersion;} }
}

module.exports.PaymentEmvType = PaymentEmvType;

class PaymentMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentMaskedType');
		logger.debug('Enter PaymentMaskedType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardMaskedType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountMaskedType(obj.bankAccount)); }
			if(('tokenInformation' in obj) && (obj.tokenInformation != null)) { this.setTokenInformation(new TokenMaskedType(obj.tokenInformation)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTokenInformation(null);
		}
		logger.debug('Exit PaymentMaskedType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { if('creditCard' in this) {return this.creditCard;} }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { if('bankAccount' in this) {return this.bankAccount;} }
	setTokenInformation(p_tokenInformation) { this.tokenInformation = p_tokenInformation; }
	getTokenInformation() { if('tokenInformation' in this) {return this.tokenInformation;} }
}

module.exports.PaymentMaskedType = PaymentMaskedType;

class PaymentProfile {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentProfile');
		logger.debug('Enter PaymentProfile constructor');
		if(arguments.length == 1) {
			if(('paymentProfileId' in obj) && (obj.paymentProfileId != null)) { this.setPaymentProfileId(obj.paymentProfileId); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
		}
		else {
			this.setPaymentProfileId(null);
			this.setCardCode(null);
		}
		logger.debug('Exit PaymentProfile constructor');
	}

	setPaymentProfileId(p_paymentProfileId) { this.paymentProfileId = p_paymentProfileId; }
	getPaymentProfileId() { if('paymentProfileId' in this) {return this.paymentProfileId;} }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { if('cardCode' in this) {return this.cardCode;} }
}

module.exports.PaymentProfile = PaymentProfile;

class PaymentScheduleType {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentScheduleType');
		logger.debug('Enter PaymentScheduleType constructor');
		if(arguments.length == 1) {
			if(('interval' in obj) && (obj.interval != null)) { this.setInterval(new PaymentScheduleType.Interval(obj.interval)); }
			if(('startDate' in obj) && (obj.startDate != null)) { this.setStartDate(obj.startDate); }
			if(('totalOccurrences' in obj) && (obj.totalOccurrences != null)) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(('trialOccurrences' in obj) && (obj.trialOccurrences != null)) { this.setTrialOccurrences(obj.trialOccurrences); }
		}
		else {
			this.setInterval(null);
			this.setStartDate(null);
			this.setTotalOccurrences(null);
			this.setTrialOccurrences(null);
		}
		logger.debug('Exit PaymentScheduleType constructor');
	}

	setInterval(p_interval) { this.interval = p_interval; }
	getInterval() { if('interval' in this) {return this.interval;} }
	setStartDate(p_startDate) { this.startDate = p_startDate; }
	getStartDate() { if('startDate' in this) {return this.startDate;} }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences() { if('totalOccurrences' in this) {return this.totalOccurrences;} }
	setTrialOccurrences(p_trialOccurrences) { this.trialOccurrences = p_trialOccurrences; }
	getTrialOccurrences() { if('trialOccurrences' in this) {return this.trialOccurrences;} }
}

module.exports.PaymentScheduleType = PaymentScheduleType;

class PaymentSimpleType {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentSimpleType');
		logger.debug('Enter PaymentSimpleType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardSimpleType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
		}
		logger.debug('Exit PaymentSimpleType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { if('creditCard' in this) {return this.creditCard;} }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { if('bankAccount' in this) {return this.bankAccount;} }
}

module.exports.PaymentSimpleType = PaymentSimpleType;

class PaymentType {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentType');
		logger.debug('Enter PaymentType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
			if(('trackData' in obj) && (obj.trackData != null)) { this.setTrackData(new CreditCardTrackType(obj.trackData)); }
			if(('encryptedTrackData' in obj) && (obj.encryptedTrackData != null)) { this.setEncryptedTrackData(new EncryptedTrackDataType(obj.encryptedTrackData)); }
			if(('payPal' in obj) && (obj.payPal != null)) { this.setPayPal(new PayPalType(obj.payPal)); }
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
			if(('emv' in obj) && (obj.emv != null)) { this.setEmv(new PaymentEmvType(obj.emv)); }
			if(('dataSource' in obj) && (obj.dataSource != null)) { this.setDataSource(obj.dataSource); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTrackData(null);
			this.setEncryptedTrackData(null);
			this.setPayPal(null);
			this.setOpaqueData(null);
			this.setEmv(null);
			this.setDataSource(null);
		}
		logger.debug('Exit PaymentType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { if('creditCard' in this) {return this.creditCard;} }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { if('bankAccount' in this) {return this.bankAccount;} }
	setTrackData(p_trackData) { this.trackData = p_trackData; }
	getTrackData() { if('trackData' in this) {return this.trackData;} }
	setEncryptedTrackData(p_encryptedTrackData) { this.encryptedTrackData = p_encryptedTrackData; }
	getEncryptedTrackData() { if('encryptedTrackData' in this) {return this.encryptedTrackData;} }
	setPayPal(p_payPal) { this.payPal = p_payPal; }
	getPayPal() { if('payPal' in this) {return this.payPal;} }
	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { if('opaqueData' in this) {return this.opaqueData;} }
	setEmv(p_emv) { this.emv = p_emv; }
	getEmv() { if('emv' in this) {return this.emv;} }
	setDataSource(p_dataSource) { this.dataSource = p_dataSource; }
	getDataSource() { if('dataSource' in this) {return this.dataSource;} }
}

module.exports.PaymentType = PaymentType;

class PermissionType {
	constructor(obj) {
		var logger = Logger.getLogger('PermissionType');
		logger.debug('Enter PermissionType constructor');
		if(arguments.length == 1) {
			if(('permissionName' in obj) && (obj.permissionName != null)) { this.setPermissionName(obj.permissionName); }
		}
		else {
			this.setPermissionName(null);
		}
		logger.debug('Exit PermissionType constructor');
	}

	setPermissionName(p_permissionName) { this.permissionName = p_permissionName; }
	getPermissionName() { if('permissionName' in this) {return this.permissionName;} }
}

module.exports.PermissionType = PermissionType;

class ProcessingOptions {
	constructor(obj) {
		var logger = Logger.getLogger('ProcessingOptions');
		logger.debug('Enter ProcessingOptions constructor');
		if(arguments.length == 1) {
			if(('isFirstRecurringPayment' in obj) && (obj.isFirstRecurringPayment != null)) { this.setIsFirstRecurringPayment(obj.isFirstRecurringPayment); }
			if(('isFirstSubsequentAuth' in obj) && (obj.isFirstSubsequentAuth != null)) { this.setIsFirstSubsequentAuth(obj.isFirstSubsequentAuth); }
			if(('isSubsequentAuth' in obj) && (obj.isSubsequentAuth != null)) { this.setIsSubsequentAuth(obj.isSubsequentAuth); }
			if(('isStoredCredentials' in obj) && (obj.isStoredCredentials != null)) { this.setIsStoredCredentials(obj.isStoredCredentials); }
		}
		else {
			this.setIsFirstRecurringPayment(null);
			this.setIsFirstSubsequentAuth(null);
			this.setIsSubsequentAuth(null);
			this.setIsStoredCredentials(null);
		}
		logger.debug('Exit ProcessingOptions constructor');
	}

	setIsFirstRecurringPayment(p_isFirstRecurringPayment) { this.isFirstRecurringPayment = p_isFirstRecurringPayment; }
	getIsFirstRecurringPayment() { if('isFirstRecurringPayment' in this) {return this.isFirstRecurringPayment;} }
	setIsFirstSubsequentAuth(p_isFirstSubsequentAuth) { this.isFirstSubsequentAuth = p_isFirstSubsequentAuth; }
	getIsFirstSubsequentAuth() { if('isFirstSubsequentAuth' in this) {return this.isFirstSubsequentAuth;} }
	setIsSubsequentAuth(p_isSubsequentAuth) { this.isSubsequentAuth = p_isSubsequentAuth; }
	getIsSubsequentAuth() { if('isSubsequentAuth' in this) {return this.isSubsequentAuth;} }
	setIsStoredCredentials(p_isStoredCredentials) { this.isStoredCredentials = p_isStoredCredentials; }
	getIsStoredCredentials() { if('isStoredCredentials' in this) {return this.isStoredCredentials;} }
}

module.exports.ProcessingOptions = ProcessingOptions;

class ProcessorType {
	constructor(obj) {
		var logger = Logger.getLogger('ProcessorType');
		logger.debug('Enter ProcessorType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('cardTypes' in obj) && (obj.cardTypes != null)) { this.setCardTypes(new ArrayOfCardType(obj.cardTypes)); }
		}
		else {
			this.setName(null);
			this.setId(null);
			this.setCardTypes(null);
		}
		logger.debug('Exit ProcessorType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setCardTypes(p_cardTypes) { this.cardTypes = p_cardTypes; }
	getCardTypes() { if('cardTypes' in this) {return this.cardTypes;} }
}

module.exports.ProcessorType = ProcessorType;

class ProfileTransAmountType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransAmountType');
		logger.debug('Enter ProfileTransAmountType constructor');
		if(arguments.length == 1) {
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if((obj.lineItems != undefined) && (obj.lineItems != null)) {
				var lineItemsList = [];
				obj.lineItems.forEach(function(item) {lineItemsList.push(new LineItemType(item));}); 
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
		logger.debug('Exit ProfileTransAmountType constructor');
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { if('tax' in this) {return this.tax;} }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { if('shipping' in this) {return this.shipping;} }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { if('duty' in this) {return this.duty;} }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { if('lineItems' in this) {return this.lineItems;} }
}

module.exports.ProfileTransAmountType = ProfileTransAmountType;

class ProfileTransVoidType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransVoidType');
		logger.debug('Enter ProfileTransVoidType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransVoidType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { if('customerShippingAddressId' in this) {return this.customerShippingAddressId;} }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
}

module.exports.ProfileTransVoidType = ProfileTransVoidType;

class ProfileTransactionType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransactionType');
		logger.debug('Enter ProfileTransactionType constructor');
		if(arguments.length == 1) {
			if(('profileTransAuthCapture' in obj) && (obj.profileTransAuthCapture != null)) { this.setProfileTransAuthCapture(new ProfileTransAuthCaptureType(obj.profileTransAuthCapture)); }
			if(('profileTransAuthOnly' in obj) && (obj.profileTransAuthOnly != null)) { this.setProfileTransAuthOnly(new ProfileTransAuthOnlyType(obj.profileTransAuthOnly)); }
			if(('profileTransPriorAuthCapture' in obj) && (obj.profileTransPriorAuthCapture != null)) { this.setProfileTransPriorAuthCapture(new ProfileTransPriorAuthCaptureType(obj.profileTransPriorAuthCapture)); }
			if(('profileTransCaptureOnly' in obj) && (obj.profileTransCaptureOnly != null)) { this.setProfileTransCaptureOnly(new ProfileTransCaptureOnlyType(obj.profileTransCaptureOnly)); }
			if(('profileTransRefund' in obj) && (obj.profileTransRefund != null)) { this.setProfileTransRefund(new ProfileTransRefundType(obj.profileTransRefund)); }
			if(('profileTransVoid' in obj) && (obj.profileTransVoid != null)) { this.setProfileTransVoid(new ProfileTransVoidType(obj.profileTransVoid)); }
		}
		else {
			this.setProfileTransAuthCapture(null);
			this.setProfileTransAuthOnly(null);
			this.setProfileTransPriorAuthCapture(null);
			this.setProfileTransCaptureOnly(null);
			this.setProfileTransRefund(null);
			this.setProfileTransVoid(null);
		}
		logger.debug('Exit ProfileTransactionType constructor');
	}

	setProfileTransAuthCapture(p_profileTransAuthCapture) { this.profileTransAuthCapture = p_profileTransAuthCapture; }
	getProfileTransAuthCapture() { if('profileTransAuthCapture' in this) {return this.profileTransAuthCapture;} }
	setProfileTransAuthOnly(p_profileTransAuthOnly) { this.profileTransAuthOnly = p_profileTransAuthOnly; }
	getProfileTransAuthOnly() { if('profileTransAuthOnly' in this) {return this.profileTransAuthOnly;} }
	setProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture) { this.profileTransPriorAuthCapture = p_profileTransPriorAuthCapture; }
	getProfileTransPriorAuthCapture() { if('profileTransPriorAuthCapture' in this) {return this.profileTransPriorAuthCapture;} }
	setProfileTransCaptureOnly(p_profileTransCaptureOnly) { this.profileTransCaptureOnly = p_profileTransCaptureOnly; }
	getProfileTransCaptureOnly() { if('profileTransCaptureOnly' in this) {return this.profileTransCaptureOnly;} }
	setProfileTransRefund(p_profileTransRefund) { this.profileTransRefund = p_profileTransRefund; }
	getProfileTransRefund() { if('profileTransRefund' in this) {return this.profileTransRefund;} }
	setProfileTransVoid(p_profileTransVoid) { this.profileTransVoid = p_profileTransVoid; }
	getProfileTransVoid() { if('profileTransVoid' in this) {return this.profileTransVoid;} }
}

module.exports.ProfileTransactionType = ProfileTransactionType;

class ReturnedItemType {
	constructor(obj) {
		var logger = Logger.getLogger('ReturnedItemType');
		logger.debug('Enter ReturnedItemType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('dateUTC' in obj) && (obj.dateUTC != null)) { this.setDateUTC(obj.dateUTC); }
			if(('dateLocal' in obj) && (obj.dateLocal != null)) { this.setDateLocal(obj.dateLocal); }
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setId(null);
			this.setDateUTC(null);
			this.setDateLocal(null);
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit ReturnedItemType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setDateUTC(p_dateUTC) { this.dateUTC = p_dateUTC; }
	getDateUTC() { if('dateUTC' in this) {return this.dateUTC;} }
	setDateLocal(p_dateLocal) { this.dateLocal = p_dateLocal; }
	getDateLocal() { if('dateLocal' in this) {return this.dateLocal;} }
	setCode(p_code) { this.code = p_code; }
	getCode() { if('code' in this) {return this.code;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
}

module.exports.ReturnedItemType = ReturnedItemType;

class SecurePaymentContainerErrorType {
	constructor(obj) {
		var logger = Logger.getLogger('SecurePaymentContainerErrorType');
		logger.debug('Enter SecurePaymentContainerErrorType constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit SecurePaymentContainerErrorType constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { if('code' in this) {return this.code;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
}

module.exports.SecurePaymentContainerErrorType = SecurePaymentContainerErrorType;

class SettingType {
	constructor(obj) {
		var logger = Logger.getLogger('SettingType');
		logger.debug('Enter SettingType constructor');
		if(arguments.length == 1) {
			if(('settingName' in obj) && (obj.settingName != null)) { this.setSettingName(obj.settingName); }
			if(('settingValue' in obj) && (obj.settingValue != null)) { this.setSettingValue(obj.settingValue); }
		}
		else {
			this.setSettingName(null);
			this.setSettingValue(null);
		}
		logger.debug('Exit SettingType constructor');
	}

	setSettingName(p_settingName) { this.settingName = p_settingName; }
	getSettingName() { if('settingName' in this) {return this.settingName;} }
	setSettingValue(p_settingValue) { this.settingValue = p_settingValue; }
	getSettingValue() { if('settingValue' in this) {return this.settingValue;} }
}

module.exports.SettingType = SettingType;

class SolutionType {
	constructor(obj) {
		var logger = Logger.getLogger('SolutionType');
		logger.debug('Enter SolutionType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('vendorName' in obj) && (obj.vendorName != null)) { this.setVendorName(obj.vendorName); }
		}
		else {
			this.setId(null);
			this.setName(null);
			this.setVendorName(null);
		}
		logger.debug('Exit SolutionType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setVendorName(p_vendorName) { this.vendorName = p_vendorName; }
	getVendorName() { if('vendorName' in this) {return this.vendorName;} }
}

module.exports.SolutionType = SolutionType;

class SubMerchantType {
	constructor(obj) {
		var logger = Logger.getLogger('SubMerchantType');
		logger.debug('Enter SubMerchantType constructor');
		if(arguments.length == 1) {
			if(('identifier' in obj) && (obj.identifier != null)) { this.setIdentifier(obj.identifier); }
			if(('doingBusinessAs' in obj) && (obj.doingBusinessAs != null)) { this.setDoingBusinessAs(obj.doingBusinessAs); }
			if(('paymentServiceProviderName' in obj) && (obj.paymentServiceProviderName != null)) { this.setPaymentServiceProviderName(obj.paymentServiceProviderName); }
			if(('paymentServiceFacilitator' in obj) && (obj.paymentServiceFacilitator != null)) { this.setPaymentServiceFacilitator(obj.paymentServiceFacilitator); }
			if(('streetAddress' in obj) && (obj.streetAddress != null)) { this.setStreetAddress(obj.streetAddress); }
			if(('phone' in obj) && (obj.phone != null)) { this.setPhone(obj.phone); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('postalCode' in obj) && (obj.postalCode != null)) { this.setPostalCode(obj.postalCode); }
			if(('city' in obj) && (obj.city != null)) { this.setCity(obj.city); }
			if(('regionCode' in obj) && (obj.regionCode != null)) { this.setRegionCode(obj.regionCode); }
			if(('countryCode' in obj) && (obj.countryCode != null)) { this.setCountryCode(obj.countryCode); }
		}
		else {
			this.setIdentifier(null);
			this.setDoingBusinessAs(null);
			this.setPaymentServiceProviderName(null);
			this.setPaymentServiceFacilitator(null);
			this.setStreetAddress(null);
			this.setPhone(null);
			this.setEmail(null);
			this.setPostalCode(null);
			this.setCity(null);
			this.setRegionCode(null);
			this.setCountryCode(null);
		}
		logger.debug('Exit SubMerchantType constructor');
	}

	setIdentifier(p_identifier) { this.identifier = p_identifier; }
	getIdentifier() { if('identifier' in this) {return this.identifier;} }
	setDoingBusinessAs(p_doingBusinessAs) { this.doingBusinessAs = p_doingBusinessAs; }
	getDoingBusinessAs() { if('doingBusinessAs' in this) {return this.doingBusinessAs;} }
	setPaymentServiceProviderName(p_paymentServiceProviderName) { this.paymentServiceProviderName = p_paymentServiceProviderName; }
	getPaymentServiceProviderName() { if('paymentServiceProviderName' in this) {return this.paymentServiceProviderName;} }
	setPaymentServiceFacilitator(p_paymentServiceFacilitator) { this.paymentServiceFacilitator = p_paymentServiceFacilitator; }
	getPaymentServiceFacilitator() { if('paymentServiceFacilitator' in this) {return this.paymentServiceFacilitator;} }
	setStreetAddress(p_streetAddress) { this.streetAddress = p_streetAddress; }
	getStreetAddress() { if('streetAddress' in this) {return this.streetAddress;} }
	setPhone(p_phone) { this.phone = p_phone; }
	getPhone() { if('phone' in this) {return this.phone;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setPostalCode(p_postalCode) { this.postalCode = p_postalCode; }
	getPostalCode() { if('postalCode' in this) {return this.postalCode;} }
	setCity(p_city) { this.city = p_city; }
	getCity() { if('city' in this) {return this.city;} }
	setRegionCode(p_regionCode) { this.regionCode = p_regionCode; }
	getRegionCode() { if('regionCode' in this) {return this.regionCode;} }
	setCountryCode(p_countryCode) { this.countryCode = p_countryCode; }
	getCountryCode() { if('countryCode' in this) {return this.countryCode;} }
}

module.exports.SubMerchantType = SubMerchantType;

class SubscriptionDetail {
	constructor(obj) {
		var logger = Logger.getLogger('SubscriptionDetail');
		logger.debug('Enter SubscriptionDetail constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
			if(('createTimeStampUTC' in obj) && (obj.createTimeStampUTC != null)) { this.setCreateTimeStampUTC(obj.createTimeStampUTC); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('totalOccurrences' in obj) && (obj.totalOccurrences != null)) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(('pastOccurrences' in obj) && (obj.pastOccurrences != null)) { this.setPastOccurrences(obj.pastOccurrences); }
			if(('paymentMethod' in obj) && (obj.paymentMethod != null)) { this.setPaymentMethod(obj.paymentMethod); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('invoice' in obj) && (obj.invoice != null)) { this.setInvoice(obj.invoice); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingProfileId' in obj) && (obj.customerShippingProfileId != null)) { this.setCustomerShippingProfileId(obj.customerShippingProfileId); }
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
		logger.debug('Exit SubscriptionDetail constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setStatus(p_status) { this.status = p_status; }
	getStatus() { if('status' in this) {return this.status;} }
	setCreateTimeStampUTC(p_createTimeStampUTC) { this.createTimeStampUTC = p_createTimeStampUTC; }
	getCreateTimeStampUTC() { if('createTimeStampUTC' in this) {return this.createTimeStampUTC;} }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { if('firstName' in this) {return this.firstName;} }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { if('lastName' in this) {return this.lastName;} }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences() { if('totalOccurrences' in this) {return this.totalOccurrences;} }
	setPastOccurrences(p_pastOccurrences) { this.pastOccurrences = p_pastOccurrences; }
	getPastOccurrences() { if('pastOccurrences' in this) {return this.pastOccurrences;} }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod() { if('paymentMethod' in this) {return this.paymentMethod;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setInvoice(p_invoice) { this.invoice = p_invoice; }
	getInvoice() { if('invoice' in this) {return this.invoice;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { if('currencyCode' in this) {return this.currencyCode;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingProfileId(p_customerShippingProfileId) { this.customerShippingProfileId = p_customerShippingProfileId; }
	getCustomerShippingProfileId() { if('customerShippingProfileId' in this) {return this.customerShippingProfileId;} }
}

module.exports.SubscriptionDetail = SubscriptionDetail;

class SubscriptionIdList {
	constructor(obj) {
		var logger = Logger.getLogger('SubscriptionIdList');
		logger.debug('Enter SubscriptionIdList constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var subscriptionIdList = [];
				obj.forEach(function(item) {subscriptionIdList.push(new String(item));}); 
				this.setSubscriptionId(subscriptionIdList);
			}
		}
		else {
			this.setSubscriptionId(null);
		}
		logger.debug('Exit SubscriptionIdList constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
}

module.exports.SubscriptionIdList = SubscriptionIdList;

class SubscriptionPaymentType {
	constructor(obj) {
		var logger = Logger.getLogger('SubscriptionPaymentType');
		logger.debug('Enter SubscriptionPaymentType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('payNum' in obj) && (obj.payNum != null)) { this.setPayNum(obj.payNum); }
		}
		else {
			this.setId(null);
			this.setPayNum(null);
		}
		logger.debug('Exit SubscriptionPaymentType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setPayNum(p_payNum) { this.payNum = p_payNum; }
	getPayNum() { if('payNum' in this) {return this.payNum;} }
}

module.exports.SubscriptionPaymentType = SubscriptionPaymentType;

class SubsequentAuthInformation {
	constructor(obj) {
		var logger = Logger.getLogger('SubsequentAuthInformation');
		logger.debug('Enter SubsequentAuthInformation constructor');
		if(arguments.length == 1) {
			if(('originalNetworkTransId' in obj) && (obj.originalNetworkTransId != null)) { this.setOriginalNetworkTransId(obj.originalNetworkTransId); }
			if(('originalAuthAmount' in obj) && (obj.originalAuthAmount != null)) { this.setOriginalAuthAmount(obj.originalAuthAmount); }
			if(('reason' in obj) && (obj.reason != null)) { this.setReason(obj.reason); }
		}
		else {
			this.setOriginalNetworkTransId(null);
			this.setOriginalAuthAmount(null);
			this.setReason(null);
		}
		logger.debug('Exit SubsequentAuthInformation constructor');
	}

	setOriginalNetworkTransId(p_originalNetworkTransId) { this.originalNetworkTransId = p_originalNetworkTransId; }
	getOriginalNetworkTransId() { if('originalNetworkTransId' in this) {return this.originalNetworkTransId;} }
	setOriginalAuthAmount(p_originalAuthAmount) { this.originalAuthAmount = p_originalAuthAmount; }
	getOriginalAuthAmount() { if('originalAuthAmount' in this) {return this.originalAuthAmount;} }
	setReason(p_reason) { this.reason = p_reason; }
	getReason() { if('reason' in this) {return this.reason;} }
}

module.exports.SubsequentAuthInformation = SubsequentAuthInformation;

class TokenMaskedType {
	constructor(obj) {
		var logger = Logger.getLogger('TokenMaskedType');
		logger.debug('Enter TokenMaskedType constructor');
		if(arguments.length == 1) {
			if(('tokenSource' in obj) && (obj.tokenSource != null)) { this.setTokenSource(obj.tokenSource); }
			if(('tokenNumber' in obj) && (obj.tokenNumber != null)) { this.setTokenNumber(obj.tokenNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
			if(('tokenRequestorId' in obj) && (obj.tokenRequestorId != null)) { this.setTokenRequestorId(obj.tokenRequestorId); }
		}
		else {
			this.setTokenSource(null);
			this.setTokenNumber(null);
			this.setExpirationDate(null);
			this.setTokenRequestorId(null);
		}
		logger.debug('Exit TokenMaskedType constructor');
	}

	setTokenSource(p_tokenSource) { this.tokenSource = p_tokenSource; }
	getTokenSource() { if('tokenSource' in this) {return this.tokenSource;} }
	setTokenNumber(p_tokenNumber) { this.tokenNumber = p_tokenNumber; }
	getTokenNumber() { if('tokenNumber' in this) {return this.tokenNumber;} }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { if('expirationDate' in this) {return this.expirationDate;} }
	setTokenRequestorId(p_tokenRequestorId) { this.tokenRequestorId = p_tokenRequestorId; }
	getTokenRequestorId() { if('tokenRequestorId' in this) {return this.tokenRequestorId;} }
}

module.exports.TokenMaskedType = TokenMaskedType;

class TransRetailInfoType {
	constructor(obj) {
		var logger = Logger.getLogger('TransRetailInfoType');
		logger.debug('Enter TransRetailInfoType constructor');
		if(arguments.length == 1) {
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('deviceType' in obj) && (obj.deviceType != null)) { this.setDeviceType(obj.deviceType); }
			if(('customerSignature' in obj) && (obj.customerSignature != null)) { this.setCustomerSignature(obj.customerSignature); }
			if(('terminalNumber' in obj) && (obj.terminalNumber != null)) { this.setTerminalNumber(obj.terminalNumber); }
		}
		else {
			this.setMarketType(null);
			this.setDeviceType(null);
			this.setCustomerSignature(null);
			this.setTerminalNumber(null);
		}
		logger.debug('Exit TransRetailInfoType constructor');
	}

	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { if('marketType' in this) {return this.marketType;} }
	setDeviceType(p_deviceType) { this.deviceType = p_deviceType; }
	getDeviceType() { if('deviceType' in this) {return this.deviceType;} }
	setCustomerSignature(p_customerSignature) { this.customerSignature = p_customerSignature; }
	getCustomerSignature() { if('customerSignature' in this) {return this.customerSignature;} }
	setTerminalNumber(p_terminalNumber) { this.terminalNumber = p_terminalNumber; }
	getTerminalNumber() { if('terminalNumber' in this) {return this.terminalNumber;} }
}

module.exports.TransRetailInfoType = TransRetailInfoType;

class TransactionDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionDetailsType');
		logger.debug('Enter TransactionDetailsType constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('refTransId' in obj) && (obj.refTransId != null)) { this.setRefTransId(obj.refTransId); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('submitTimeUTC' in obj) && (obj.submitTimeUTC != null)) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(('submitTimeLocal' in obj) && (obj.submitTimeLocal != null)) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(('transactionType' in obj) && (obj.transactionType != null)) { this.setTransactionType(obj.transactionType); }
			if(('transactionStatus' in obj) && (obj.transactionStatus != null)) { this.setTransactionStatus(obj.transactionStatus); }
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('responseReasonCode' in obj) && (obj.responseReasonCode != null)) { this.setResponseReasonCode(obj.responseReasonCode); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(('responseReasonDescription' in obj) && (obj.responseReasonDescription != null)) { this.setResponseReasonDescription(obj.responseReasonDescription); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('AVSResponse' in obj) && (obj.AVSResponse != null)) { this.setAVSResponse(obj.AVSResponse); }
			if(('cardCodeResponse' in obj) && (obj.cardCodeResponse != null)) { this.setCardCodeResponse(obj.cardCodeResponse); }
			if(('CAVVResponse' in obj) && (obj.CAVVResponse != null)) { this.setCAVVResponse(obj.CAVVResponse); }
			if(('FDSFilterAction' in obj) && (obj.FDSFilterAction != null)) { this.setFDSFilterAction(obj.FDSFilterAction); }
			if(('FDSFilters' in obj) && (obj.FDSFilters != null)) { this.setFDSFilters(new ArrayOfFDSFilter(obj.FDSFilters)); }
			if(('batch' in obj) && (obj.batch != null)) { this.setBatch(new BatchDetailsType(obj.batch)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('authAmount' in obj) && (obj.authAmount != null)) { this.setAuthAmount(obj.authAmount); }
			if(('settleAmount' in obj) && (obj.settleAmount != null)) { this.setSettleAmount(obj.settleAmount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(('lineItems' in obj) && (obj.lineItems != null)) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(('prepaidBalanceRemaining' in obj) && (obj.prepaidBalanceRemaining != null)) { this.setPrepaidBalanceRemaining(obj.prepaidBalanceRemaining); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('recurringBilling' in obj) && (obj.recurringBilling != null)) { this.setRecurringBilling(obj.recurringBilling); }
			if(('customerIP' in obj) && (obj.customerIP != null)) { this.setCustomerIP(obj.customerIP); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('entryMode' in obj) && (obj.entryMode != null)) { this.setEntryMode(obj.entryMode); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('customerSignature' in obj) && (obj.customerSignature != null)) { this.setCustomerSignature(obj.customerSignature); }
			if(('returnedItems' in obj) && (obj.returnedItems != null)) { this.setReturnedItems(new ArrayOfReturnedItem(obj.returnedItems)); }
			if(('solution' in obj) && (obj.solution != null)) { this.setSolution(new SolutionType(obj.solution)); }
			if(('emvDetails' in obj) && (obj.emvDetails != null)) { this.setEmvDetails(new TransactionDetailsType.EmvDetails(obj.emvDetails)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
			if(('surcharge' in obj) && (obj.surcharge != null)) { this.setSurcharge(new ExtendedAmountType(obj.surcharge)); }
			if(('employeeId' in obj) && (obj.employeeId != null)) { this.setEmployeeId(obj.employeeId); }
			if(('tip' in obj) && (obj.tip != null)) { this.setTip(new ExtendedAmountType(obj.tip)); }
			if(('otherTax' in obj) && (obj.otherTax != null)) { this.setOtherTax(new OtherTaxType(obj.otherTax)); }
			if(('shipFrom' in obj) && (obj.shipFrom != null)) { this.setShipFrom(new NameAndAddressType(obj.shipFrom)); }
			if(('networkTransId' in obj) && (obj.networkTransId != null)) { this.setNetworkTransId(obj.networkTransId); }
			if(('originalNetworkTransId' in obj) && (obj.originalNetworkTransId != null)) { this.setOriginalNetworkTransId(obj.originalNetworkTransId); }
			if(('originalAuthAmount' in obj) && (obj.originalAuthAmount != null)) { this.setOriginalAuthAmount(obj.originalAuthAmount); }
			if(('authorizationIndicator' in obj) && (obj.authorizationIndicator != null)) { this.setAuthorizationIndicator(obj.authorizationIndicator); }
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
			this.setEntryMode(null);
			this.setMarketType(null);
			this.setMobileDeviceId(null);
			this.setCustomerSignature(null);
			this.setReturnedItems(null);
			this.setSolution(null);
			this.setEmvDetails(null);
			this.setProfile(null);
			this.setSurcharge(null);
			this.setEmployeeId(null);
			this.setTip(null);
			this.setOtherTax(null);
			this.setShipFrom(null);
			this.setNetworkTransId(null);
			this.setOriginalNetworkTransId(null);
			this.setOriginalAuthAmount(null);
			this.setAuthorizationIndicator(null);
		}
		logger.debug('Exit TransactionDetailsType constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId() { if('refTransId' in this) {return this.refTransId;} }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { if('splitTenderId' in this) {return this.splitTenderId;} }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC() { if('submitTimeUTC' in this) {return this.submitTimeUTC;} }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal() { if('submitTimeLocal' in this) {return this.submitTimeLocal;} }
	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType() { if('transactionType' in this) {return this.transactionType;} }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus() { if('transactionStatus' in this) {return this.transactionStatus;} }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { if('responseCode' in this) {return this.responseCode;} }
	setResponseReasonCode(p_responseReasonCode) { this.responseReasonCode = p_responseReasonCode; }
	getResponseReasonCode() { if('responseReasonCode' in this) {return this.responseReasonCode;} }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { if('subscription' in this) {return this.subscription;} }
	setResponseReasonDescription(p_responseReasonDescription) { this.responseReasonDescription = p_responseReasonDescription; }
	getResponseReasonDescription() { if('responseReasonDescription' in this) {return this.responseReasonDescription;} }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { if('authCode' in this) {return this.authCode;} }
	setAVSResponse(p_AVSResponse) { this.AVSResponse = p_AVSResponse; }
	getAVSResponse() { if('AVSResponse' in this) {return this.AVSResponse;} }
	setCardCodeResponse(p_cardCodeResponse) { this.cardCodeResponse = p_cardCodeResponse; }
	getCardCodeResponse() { if('cardCodeResponse' in this) {return this.cardCodeResponse;} }
	setCAVVResponse(p_CAVVResponse) { this.CAVVResponse = p_CAVVResponse; }
	getCAVVResponse() { if('CAVVResponse' in this) {return this.CAVVResponse;} }
	setFDSFilterAction(p_FDSFilterAction) { this.FDSFilterAction = p_FDSFilterAction; }
	getFDSFilterAction() { if('FDSFilterAction' in this) {return this.FDSFilterAction;} }
	setFDSFilters(p_FDSFilters) { this.FDSFilters = p_FDSFilters; }
	getFDSFilters() { if('FDSFilters' in this) {return this.FDSFilters;} }
	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { if('batch' in this) {return this.batch;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { if('requestedAmount' in this) {return this.requestedAmount;} }
	setAuthAmount(p_authAmount) { this.authAmount = p_authAmount; }
	getAuthAmount() { if('authAmount' in this) {return this.authAmount;} }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount() { if('settleAmount' in this) {return this.settleAmount;} }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { if('tax' in this) {return this.tax;} }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { if('shipping' in this) {return this.shipping;} }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { if('duty' in this) {return this.duty;} }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { if('lineItems' in this) {return this.lineItems;} }
	setPrepaidBalanceRemaining(p_prepaidBalanceRemaining) { this.prepaidBalanceRemaining = p_prepaidBalanceRemaining; }
	getPrepaidBalanceRemaining() { if('prepaidBalanceRemaining' in this) {return this.prepaidBalanceRemaining;} }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { if('taxExempt' in this) {return this.taxExempt;} }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { if('customer' in this) {return this.customer;} }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { if('billTo' in this) {return this.billTo;} }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { if('shipTo' in this) {return this.shipTo;} }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling() { if('recurringBilling' in this) {return this.recurringBilling;} }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP() { if('customerIP' in this) {return this.customerIP;} }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { if('product' in this) {return this.product;} }
	setEntryMode(p_entryMode) { this.entryMode = p_entryMode; }
	getEntryMode() { if('entryMode' in this) {return this.entryMode;} }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { if('marketType' in this) {return this.marketType;} }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { if('mobileDeviceId' in this) {return this.mobileDeviceId;} }
	setCustomerSignature(p_customerSignature) { this.customerSignature = p_customerSignature; }
	getCustomerSignature() { if('customerSignature' in this) {return this.customerSignature;} }
	setReturnedItems(p_returnedItems) { this.returnedItems = p_returnedItems; }
	getReturnedItems() { if('returnedItems' in this) {return this.returnedItems;} }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution() { if('solution' in this) {return this.solution;} }
	setEmvDetails(p_emvDetails) { this.emvDetails = p_emvDetails; }
	getEmvDetails() { if('emvDetails' in this) {return this.emvDetails;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setSurcharge(p_surcharge) { this.surcharge = p_surcharge; }
	getSurcharge() { if('surcharge' in this) {return this.surcharge;} }
	setEmployeeId(p_employeeId) { this.employeeId = p_employeeId; }
	getEmployeeId() { if('employeeId' in this) {return this.employeeId;} }
	setTip(p_tip) { this.tip = p_tip; }
	getTip() { if('tip' in this) {return this.tip;} }
	setOtherTax(p_otherTax) { this.otherTax = p_otherTax; }
	getOtherTax() { if('otherTax' in this) {return this.otherTax;} }
	setShipFrom(p_shipFrom) { this.shipFrom = p_shipFrom; }
	getShipFrom() { if('shipFrom' in this) {return this.shipFrom;} }
	setNetworkTransId(p_networkTransId) { this.networkTransId = p_networkTransId; }
	getNetworkTransId() { if('networkTransId' in this) {return this.networkTransId;} }
	setOriginalNetworkTransId(p_originalNetworkTransId) { this.originalNetworkTransId = p_originalNetworkTransId; }
	getOriginalNetworkTransId() { if('originalNetworkTransId' in this) {return this.originalNetworkTransId;} }
	setOriginalAuthAmount(p_originalAuthAmount) { this.originalAuthAmount = p_originalAuthAmount; }
	getOriginalAuthAmount() { if('originalAuthAmount' in this) {return this.originalAuthAmount;} }
	setAuthorizationIndicator(p_authorizationIndicator) { this.authorizationIndicator = p_authorizationIndicator; }
	getAuthorizationIndicator() { if('authorizationIndicator' in this) {return this.authorizationIndicator;} }
}

module.exports.TransactionDetailsType = TransactionDetailsType;

class TransactionListSorting {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionListSorting');
		logger.debug('Enter TransactionListSorting constructor');
		if(arguments.length == 1) {
			if(('orderBy' in obj) && (obj.orderBy != null)) { this.setOrderBy(obj.orderBy); }
			if(('orderDescending' in obj) && (obj.orderDescending != null)) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit TransactionListSorting constructor');
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy() { if('orderBy' in this) {return this.orderBy;} }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending() { if('orderDescending' in this) {return this.orderDescending;} }
}

module.exports.TransactionListSorting = TransactionListSorting;

class TransactionRequestType {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionRequestType');
		logger.debug('Enter TransactionRequestType constructor');
		if(arguments.length == 1) {
			if(('transactionType' in obj) && (obj.transactionType != null)) { this.setTransactionType(obj.transactionType); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfilePaymentType(obj.profile)); }
			if(('solution' in obj) && (obj.solution != null)) { this.setSolution(new SolutionType(obj.solution)); }
			if(('callId' in obj) && (obj.callId != null)) { this.setCallId(obj.callId); }
			if(('terminalNumber' in obj) && (obj.terminalNumber != null)) { this.setTerminalNumber(obj.terminalNumber); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('refTransId' in obj) && (obj.refTransId != null)) { this.setRefTransId(obj.refTransId); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
			if(('lineItems' in obj) && (obj.lineItems != null)) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('poNumber' in obj) && (obj.poNumber != null)) { this.setPoNumber(obj.poNumber); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('customerIP' in obj) && (obj.customerIP != null)) { this.setCustomerIP(obj.customerIP); }
			if(('cardholderAuthentication' in obj) && (obj.cardholderAuthentication != null)) { this.setCardholderAuthentication(new CcAuthenticationType(obj.cardholderAuthentication)); }
			if(('retail' in obj) && (obj.retail != null)) { this.setRetail(new TransRetailInfoType(obj.retail)); }
			if(('employeeId' in obj) && (obj.employeeId != null)) { this.setEmployeeId(obj.employeeId); }
			if(('transactionSettings' in obj) && (obj.transactionSettings != null)) { this.setTransactionSettings(new ArrayOfSetting(obj.transactionSettings)); }
			if(('userFields' in obj) && (obj.userFields != null)) { this.setUserFields(new TransactionRequestType.UserFields(obj.userFields)); }
			if(('surcharge' in obj) && (obj.surcharge != null)) { this.setSurcharge(new ExtendedAmountType(obj.surcharge)); }
			if(('merchantDescriptor' in obj) && (obj.merchantDescriptor != null)) { this.setMerchantDescriptor(obj.merchantDescriptor); }
			if(('subMerchant' in obj) && (obj.subMerchant != null)) { this.setSubMerchant(new SubMerchantType(obj.subMerchant)); }
			if(('tip' in obj) && (obj.tip != null)) { this.setTip(new ExtendedAmountType(obj.tip)); }
			if(('processingOptions' in obj) && (obj.processingOptions != null)) { this.setProcessingOptions(new ProcessingOptions(obj.processingOptions)); }
			if(('subsequentAuthInformation' in obj) && (obj.subsequentAuthInformation != null)) { this.setSubsequentAuthInformation(new SubsequentAuthInformation(obj.subsequentAuthInformation)); }
			if(('otherTax' in obj) && (obj.otherTax != null)) { this.setOtherTax(new OtherTaxType(obj.otherTax)); }
			if(('shipFrom' in obj) && (obj.shipFrom != null)) { this.setShipFrom(new NameAndAddressType(obj.shipFrom)); }
			if(('authorizationIndicatorType' in obj) && (obj.authorizationIndicatorType != null)) { this.setAuthorizationIndicatorType(new AuthorizationIndicatorType(obj.authorizationIndicatorType)); }
		}
		else {
			this.setTransactionType(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setPayment(null);
			this.setProfile(null);
			this.setSolution(null);
			this.setCallId(null);
			this.setTerminalNumber(null);
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
			this.setSurcharge(null);
			this.setMerchantDescriptor(null);
			this.setSubMerchant(null);
			this.setTip(null);
			this.setProcessingOptions(null);
			this.setSubsequentAuthInformation(null);
			this.setOtherTax(null);
			this.setShipFrom(null);
			this.setAuthorizationIndicatorType(null);
		}
		logger.debug('Exit TransactionRequestType constructor');
	}

	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType() { if('transactionType' in this) {return this.transactionType;} }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { if('amount' in this) {return this.amount;} }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { if('currencyCode' in this) {return this.currencyCode;} }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution() { if('solution' in this) {return this.solution;} }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId() { if('callId' in this) {return this.callId;} }
	setTerminalNumber(p_terminalNumber) { this.terminalNumber = p_terminalNumber; }
	getTerminalNumber() { if('terminalNumber' in this) {return this.terminalNumber;} }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { if('authCode' in this) {return this.authCode;} }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId() { if('refTransId' in this) {return this.refTransId;} }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { if('splitTenderId' in this) {return this.splitTenderId;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { if('lineItems' in this) {return this.lineItems;} }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { if('tax' in this) {return this.tax;} }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { if('duty' in this) {return this.duty;} }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { if('shipping' in this) {return this.shipping;} }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { if('taxExempt' in this) {return this.taxExempt;} }
	setPoNumber(p_poNumber) { this.poNumber = p_poNumber; }
	getPoNumber() { if('poNumber' in this) {return this.poNumber;} }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { if('customer' in this) {return this.customer;} }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { if('billTo' in this) {return this.billTo;} }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { if('shipTo' in this) {return this.shipTo;} }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP() { if('customerIP' in this) {return this.customerIP;} }
	setCardholderAuthentication(p_cardholderAuthentication) { this.cardholderAuthentication = p_cardholderAuthentication; }
	getCardholderAuthentication() { if('cardholderAuthentication' in this) {return this.cardholderAuthentication;} }
	setRetail(p_retail) { this.retail = p_retail; }
	getRetail() { if('retail' in this) {return this.retail;} }
	setEmployeeId(p_employeeId) { this.employeeId = p_employeeId; }
	getEmployeeId() { if('employeeId' in this) {return this.employeeId;} }
	setTransactionSettings(p_transactionSettings) { this.transactionSettings = p_transactionSettings; }
	getTransactionSettings() { if('transactionSettings' in this) {return this.transactionSettings;} }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields() { if('userFields' in this) {return this.userFields;} }
	setSurcharge(p_surcharge) { this.surcharge = p_surcharge; }
	getSurcharge() { if('surcharge' in this) {return this.surcharge;} }
	setMerchantDescriptor(p_merchantDescriptor) { this.merchantDescriptor = p_merchantDescriptor; }
	getMerchantDescriptor() { if('merchantDescriptor' in this) {return this.merchantDescriptor;} }
	setSubMerchant(p_subMerchant) { this.subMerchant = p_subMerchant; }
	getSubMerchant() { if('subMerchant' in this) {return this.subMerchant;} }
	setTip(p_tip) { this.tip = p_tip; }
	getTip() { if('tip' in this) {return this.tip;} }
	setProcessingOptions(p_processingOptions) { this.processingOptions = p_processingOptions; }
	getProcessingOptions() { if('processingOptions' in this) {return this.processingOptions;} }
	setSubsequentAuthInformation(p_subsequentAuthInformation) { this.subsequentAuthInformation = p_subsequentAuthInformation; }
	getSubsequentAuthInformation() { if('subsequentAuthInformation' in this) {return this.subsequentAuthInformation;} }
	setOtherTax(p_otherTax) { this.otherTax = p_otherTax; }
	getOtherTax() { if('otherTax' in this) {return this.otherTax;} }
	setShipFrom(p_shipFrom) { this.shipFrom = p_shipFrom; }
	getShipFrom() { if('shipFrom' in this) {return this.shipFrom;} }
	setAuthorizationIndicatorType(p_authorizationIndicatorType) { this.authorizationIndicatorType = p_authorizationIndicatorType; }
	getAuthorizationIndicatorType() { if('authorizationIndicatorType' in this) {return this.authorizationIndicatorType;} }
}

module.exports.TransactionRequestType = TransactionRequestType;

class TransactionResponse {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse');
		logger.debug('Enter TransactionResponse constructor');
		if(arguments.length == 1) {
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('rawResponseCode' in obj) && (obj.rawResponseCode != null)) { this.setRawResponseCode(obj.rawResponseCode); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('avsResultCode' in obj) && (obj.avsResultCode != null)) { this.setAvsResultCode(obj.avsResultCode); }
			if(('cvvResultCode' in obj) && (obj.cvvResultCode != null)) { this.setCvvResultCode(obj.cvvResultCode); }
			if(('cavvResultCode' in obj) && (obj.cavvResultCode != null)) { this.setCavvResultCode(obj.cavvResultCode); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('refTransID' in obj) && (obj.refTransID != null)) { this.setRefTransID(obj.refTransID); }
			if(('transHash' in obj) && (obj.transHash != null)) { this.setTransHash(obj.transHash); }
			if(('testRequest' in obj) && (obj.testRequest != null)) { this.setTestRequest(obj.testRequest); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('entryMode' in obj) && (obj.entryMode != null)) { this.setEntryMode(obj.entryMode); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('prePaidCard' in obj) && (obj.prePaidCard != null)) { this.setPrePaidCard(new TransactionResponse.PrePaidCard(obj.prePaidCard)); }
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new TransactionResponse.Messages(obj.messages)); }
			if(('errors' in obj) && (obj.errors != null)) { this.setErrors(new TransactionResponse.Errors(obj.errors)); }
			if(('splitTenderPayments' in obj) && (obj.splitTenderPayments != null)) { this.setSplitTenderPayments(new TransactionResponse.SplitTenderPayments(obj.splitTenderPayments)); }
			if(('userFields' in obj) && (obj.userFields != null)) { this.setUserFields(new TransactionResponse.UserFields(obj.userFields)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('secureAcceptance' in obj) && (obj.secureAcceptance != null)) { this.setSecureAcceptance(new TransactionResponse.SecureAcceptance(obj.secureAcceptance)); }
			if(('emvResponse' in obj) && (obj.emvResponse != null)) { this.setEmvResponse(new TransactionResponse.EmvResponse(obj.emvResponse)); }
			if(('transHashSha2' in obj) && (obj.transHashSha2 != null)) { this.setTransHashSha2(obj.transHashSha2); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
			if(('networkTransId' in obj) && (obj.networkTransId != null)) { this.setNetworkTransId(obj.networkTransId); }
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
			this.setEntryMode(null);
			this.setAccountType(null);
			this.setSplitTenderId(null);
			this.setPrePaidCard(null);
			this.setMessages(null);
			this.setErrors(null);
			this.setSplitTenderPayments(null);
			this.setUserFields(null);
			this.setShipTo(null);
			this.setSecureAcceptance(null);
			this.setEmvResponse(null);
			this.setTransHashSha2(null);
			this.setProfile(null);
			this.setNetworkTransId(null);
		}
		logger.debug('Exit TransactionResponse constructor');
	}

	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { if('responseCode' in this) {return this.responseCode;} }
	setRawResponseCode(p_rawResponseCode) { this.rawResponseCode = p_rawResponseCode; }
	getRawResponseCode() { if('rawResponseCode' in this) {return this.rawResponseCode;} }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { if('authCode' in this) {return this.authCode;} }
	setAvsResultCode(p_avsResultCode) { this.avsResultCode = p_avsResultCode; }
	getAvsResultCode() { if('avsResultCode' in this) {return this.avsResultCode;} }
	setCvvResultCode(p_cvvResultCode) { this.cvvResultCode = p_cvvResultCode; }
	getCvvResultCode() { if('cvvResultCode' in this) {return this.cvvResultCode;} }
	setCavvResultCode(p_cavvResultCode) { this.cavvResultCode = p_cavvResultCode; }
	getCavvResultCode() { if('cavvResultCode' in this) {return this.cavvResultCode;} }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setRefTransID(p_refTransID) { this.refTransID = p_refTransID; }
	getRefTransID() { if('refTransID' in this) {return this.refTransID;} }
	setTransHash(p_transHash) { this.transHash = p_transHash; }
	getTransHash() { if('transHash' in this) {return this.transHash;} }
	setTestRequest(p_testRequest) { this.testRequest = p_testRequest; }
	getTestRequest() { if('testRequest' in this) {return this.testRequest;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setEntryMode(p_entryMode) { this.entryMode = p_entryMode; }
	getEntryMode() { if('entryMode' in this) {return this.entryMode;} }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { if('splitTenderId' in this) {return this.splitTenderId;} }
	setPrePaidCard(p_prePaidCard) { this.prePaidCard = p_prePaidCard; }
	getPrePaidCard() { if('prePaidCard' in this) {return this.prePaidCard;} }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { if('messages' in this) {return this.messages;} }
	setErrors(p_errors) { this.errors = p_errors; }
	getErrors() { if('errors' in this) {return this.errors;} }
	setSplitTenderPayments(p_splitTenderPayments) { this.splitTenderPayments = p_splitTenderPayments; }
	getSplitTenderPayments() { if('splitTenderPayments' in this) {return this.splitTenderPayments;} }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields() { if('userFields' in this) {return this.userFields;} }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { if('shipTo' in this) {return this.shipTo;} }
	setSecureAcceptance(p_secureAcceptance) { this.secureAcceptance = p_secureAcceptance; }
	getSecureAcceptance() { if('secureAcceptance' in this) {return this.secureAcceptance;} }
	setEmvResponse(p_emvResponse) { this.emvResponse = p_emvResponse; }
	getEmvResponse() { if('emvResponse' in this) {return this.emvResponse;} }
	setTransHashSha2(p_transHashSha2) { this.transHashSha2 = p_transHashSha2; }
	getTransHashSha2() { if('transHashSha2' in this) {return this.transHashSha2;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setNetworkTransId(p_networkTransId) { this.networkTransId = p_networkTransId; }
	getNetworkTransId() { if('networkTransId' in this) {return this.networkTransId;} }
}

module.exports.TransactionResponse = TransactionResponse;

class TransactionSummaryType {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionSummaryType');
		logger.debug('Enter TransactionSummaryType constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('submitTimeUTC' in obj) && (obj.submitTimeUTC != null)) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(('submitTimeLocal' in obj) && (obj.submitTimeLocal != null)) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(('transactionStatus' in obj) && (obj.transactionStatus != null)) { this.setTransactionStatus(obj.transactionStatus); }
			if(('invoiceNumber' in obj) && (obj.invoiceNumber != null)) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('settleAmount' in obj) && (obj.settleAmount != null)) { this.setSettleAmount(obj.settleAmount); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(('hasReturnedItems' in obj) && (obj.hasReturnedItems != null)) { this.setHasReturnedItems(obj.hasReturnedItems); }
			if(('fraudInformation' in obj) && (obj.fraudInformation != null)) { this.setFraudInformation(new FraudInformationType(obj.fraudInformation)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
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
			this.setFraudInformation(null);
			this.setProfile(null);
		}
		logger.debug('Exit TransactionSummaryType constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC() { if('submitTimeUTC' in this) {return this.submitTimeUTC;} }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal() { if('submitTimeLocal' in this) {return this.submitTimeLocal;} }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus() { if('transactionStatus' in this) {return this.transactionStatus;} }
	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber() { if('invoiceNumber' in this) {return this.invoiceNumber;} }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { if('firstName' in this) {return this.firstName;} }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { if('lastName' in this) {return this.lastName;} }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount() { if('settleAmount' in this) {return this.settleAmount;} }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { if('marketType' in this) {return this.marketType;} }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { if('product' in this) {return this.product;} }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { if('mobileDeviceId' in this) {return this.mobileDeviceId;} }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { if('subscription' in this) {return this.subscription;} }
	setHasReturnedItems(p_hasReturnedItems) { this.hasReturnedItems = p_hasReturnedItems; }
	getHasReturnedItems() { if('hasReturnedItems' in this) {return this.hasReturnedItems;} }
	setFraudInformation(p_fraudInformation) { this.fraudInformation = p_fraudInformation; }
	getFraudInformation() { if('fraudInformation' in this) {return this.fraudInformation;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
}

module.exports.TransactionSummaryType = TransactionSummaryType;

class UserField {
	constructor(obj) {
		var logger = Logger.getLogger('UserField');
		logger.debug('Enter UserField constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('value' in obj) && (obj.value != null)) { this.setValue(obj.value); }
		}
		else {
			this.setName(null);
			this.setValue(null);
		}
		logger.debug('Exit UserField constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { if('name' in this) {return this.name;} }
	setValue(p_value) { this.value = p_value; }
	getValue() { if('value' in this) {return this.value;} }
}

module.exports.UserField = UserField;

class WebCheckOutDataType {
	constructor(obj) {
		var logger = Logger.getLogger('WebCheckOutDataType');
		logger.debug('Enter WebCheckOutDataType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('token' in obj) && (obj.token != null)) { this.setToken(new WebCheckOutDataTypeToken(obj.token)); }
			if(('bankToken' in obj) && (obj.bankToken != null)) { this.setBankToken(new BankAccountType(obj.bankToken)); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setToken(null);
			this.setBankToken(null);
		}
		logger.debug('Exit WebCheckOutDataType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { if('type' in this) {return this.type;} }
	setId(p_id) { this.id = p_id; }
	getId() { if('id' in this) {return this.id;} }
	setToken(p_token) { this.token = p_token; }
	getToken() { if('token' in this) {return this.token;} }
	setBankToken(p_bankToken) { this.bankToken = p_bankToken; }
	getBankToken() { if('bankToken' in this) {return this.bankToken;} }
}

module.exports.WebCheckOutDataType = WebCheckOutDataType;

class WebCheckOutDataTypeToken {
	constructor(obj) {
		var logger = Logger.getLogger('WebCheckOutDataTypeToken');
		logger.debug('Enter WebCheckOutDataTypeToken constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('zip' in obj) && (obj.zip != null)) { this.setZip(obj.zip); }
			if(('fullName' in obj) && (obj.fullName != null)) { this.setFullName(obj.fullName); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardCode(null);
			this.setZip(null);
			this.setFullName(null);
		}
		logger.debug('Exit WebCheckOutDataTypeToken constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { if('cardNumber' in this) {return this.cardNumber;} }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { if('expirationDate' in this) {return this.expirationDate;} }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { if('cardCode' in this) {return this.cardCode;} }
	setZip(p_zip) { this.zip = p_zip; }
	getZip() { if('zip' in this) {return this.zip;} }
	setFullName(p_fullName) { this.fullName = p_fullName; }
	getFullName() { if('fullName' in this) {return this.fullName;} }
}

module.exports.WebCheckOutDataTypeToken = WebCheckOutDataTypeToken;

KeyManagementScheme.DUKPT = class {
	constructor(obj) {
		var logger = Logger.getLogger('KeyManagementScheme.DUKPT');
		logger.debug('Enter KeyManagementScheme.DUKPT constructor');
		if(arguments.length == 1) {
			if(('Operation' in obj) && (obj.Operation != null)) { this.setOperation(obj.Operation); }
			if(('Mode' in obj) && (obj.Mode != null)) { this.setMode(new KeyManagementScheme.DUKPT.Mode(obj.Mode)); }
			if(('DeviceInfo' in obj) && (obj.DeviceInfo != null)) { this.setDeviceInfo(new KeyManagementScheme.DUKPT.DeviceInfo(obj.DeviceInfo)); }
			if(('EncryptedData' in obj) && (obj.EncryptedData != null)) { this.setEncryptedData(new KeyManagementScheme.DUKPT.EncryptedData(obj.EncryptedData)); }
		}
		else {
			this.setOperation(null);
			this.setMode(null);
			this.setDeviceInfo(null);
			this.setEncryptedData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT constructor');
	}

	setOperation(p_Operation) { this.Operation = p_Operation; }
	getOperation() { if('Operation' in this) {return this.Operation;} }
	setMode(p_Mode) { this.Mode = p_Mode; }
	getMode() { if('Mode' in this) {return this.Mode;} }
	setDeviceInfo(p_DeviceInfo) { this.DeviceInfo = p_DeviceInfo; }
	getDeviceInfo() { if('DeviceInfo' in this) {return this.DeviceInfo;} }
	setEncryptedData(p_EncryptedData) { this.EncryptedData = p_EncryptedData; }
	getEncryptedData() { if('EncryptedData' in this) {return this.EncryptedData;} }
};

module.exports.KeyManagementScheme.DUKPT = KeyManagementScheme.DUKPT;

MessagesType.Message = class {
	constructor(obj) {
		var logger = Logger.getLogger('MessagesType.Message');
		logger.debug('Enter MessagesType.Message constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('text' in obj) && (obj.text != null)) { this.setText(obj.text); }
		}
		else {
			this.setCode(null);
			this.setText(null);
		}
		logger.debug('Exit MessagesType.Message constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { if('code' in this) {return this.code;} }
	setText(p_text) { this.text = p_text; }
	getText() { if('text' in this) {return this.text;} }
};

module.exports.MessagesType.Message = MessagesType.Message;

PaymentScheduleType.Interval = class {
	constructor(obj) {
		var logger = Logger.getLogger('PaymentScheduleType.Interval');
		logger.debug('Enter PaymentScheduleType.Interval constructor');
		if(arguments.length == 1) {
			if(('length' in obj) && (obj.length != null)) { this.setLength(obj.length); }
			if(('unit' in obj) && (obj.unit != null)) { this.setUnit(obj.unit); }
		}
		else {
			this.setLength(null);
			this.setUnit(null);
		}
		logger.debug('Exit PaymentScheduleType.Interval constructor');
	}

	setLength(p_length) { this.length = p_length; }
	getLength() { if('length' in this) {return this.length;} }
	setUnit(p_unit) { this.unit = p_unit; }
	getUnit() { if('unit' in this) {return this.unit;} }
};

module.exports.PaymentScheduleType.Interval = PaymentScheduleType.Interval;

TransactionDetailsType.EmvDetails = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionDetailsType.EmvDetails');
		logger.debug('Enter TransactionDetailsType.EmvDetails constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var tagList = [];
				obj.forEach(function(item) {tagList.push(new TransactionDetailsType.EmvDetails.Tag(item));}); 
				this.setTag(tagList);
			}
		}
		else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails constructor');
	}

	setTag(p_tag) { this.tag = p_tag; }
	getTag() { if('tag' in this) {return this.tag;} }
};

module.exports.TransactionDetailsType.EmvDetails = TransactionDetailsType.EmvDetails;

TransactionRequestType.UserFields = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionRequestType.UserFields');
		logger.debug('Enter TransactionRequestType.UserFields constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item));}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionRequestType.UserFields constructor');
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField() { if('userField' in this) {return this.userField;} }
};

module.exports.TransactionRequestType.UserFields = TransactionRequestType.UserFields;

TransactionResponse.EmvResponse = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.EmvResponse');
		logger.debug('Enter TransactionResponse.EmvResponse constructor');
		if(arguments.length == 1) {
			if(('tlvData' in obj) && (obj.tlvData != null)) { this.setTlvData(obj.tlvData); }
			if(('tags' in obj) && (obj.tags != null)) { this.setTags(new TransactionResponse.EmvResponse.Tags(obj.tags)); }
		}
		else {
			this.setTlvData(null);
			this.setTags(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse constructor');
	}

	setTlvData(p_tlvData) { this.tlvData = p_tlvData; }
	getTlvData() { if('tlvData' in this) {return this.tlvData;} }
	setTags(p_tags) { this.tags = p_tags; }
	getTags() { if('tags' in this) {return this.tags;} }
};

module.exports.TransactionResponse.EmvResponse = TransactionResponse.EmvResponse;

TransactionResponse.Errors = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.Errors');
		logger.debug('Enter TransactionResponse.Errors constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var errorList = [];
				obj.forEach(function(item) {errorList.push(new TransactionResponse.Errors.Error(item));}); 
				this.setError(errorList);
			}
		}
		else {
			this.setError(null);
		}
		logger.debug('Exit TransactionResponse.Errors constructor');
	}

	setError(p_error) { this.error = p_error; }
	getError() { if('error' in this) {return this.error;} }
};

module.exports.TransactionResponse.Errors = TransactionResponse.Errors;

TransactionResponse.Messages = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.Messages');
		logger.debug('Enter TransactionResponse.Messages constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var messageList = [];
				obj.forEach(function(item) {messageList.push(new TransactionResponse.Messages.Message(item));}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setMessage(null);
		}
		logger.debug('Exit TransactionResponse.Messages constructor');
	}

	setMessage(p_message) { this.message = p_message; }
	getMessage() { if('message' in this) {return this.message;} }
};

module.exports.TransactionResponse.Messages = TransactionResponse.Messages;

TransactionResponse.PrePaidCard = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.PrePaidCard');
		logger.debug('Enter TransactionResponse.PrePaidCard constructor');
		if(arguments.length == 1) {
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('approvedAmount' in obj) && (obj.approvedAmount != null)) { this.setApprovedAmount(obj.approvedAmount); }
			if(('balanceOnCard' in obj) && (obj.balanceOnCard != null)) { this.setBalanceOnCard(obj.balanceOnCard); }
		}
		else {
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
		logger.debug('Exit TransactionResponse.PrePaidCard constructor');
	}

	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { if('requestedAmount' in this) {return this.requestedAmount;} }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount() { if('approvedAmount' in this) {return this.approvedAmount;} }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard() { if('balanceOnCard' in this) {return this.balanceOnCard;} }
};

module.exports.TransactionResponse.PrePaidCard = TransactionResponse.PrePaidCard;

TransactionResponse.SecureAcceptance = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.SecureAcceptance');
		logger.debug('Enter TransactionResponse.SecureAcceptance constructor');
		if(arguments.length == 1) {
			if(('SecureAcceptanceUrl' in obj) && (obj.SecureAcceptanceUrl != null)) { this.setSecureAcceptanceUrl(obj.SecureAcceptanceUrl); }
			if(('PayerID' in obj) && (obj.PayerID != null)) { this.setPayerID(obj.PayerID); }
			if(('PayerEmail' in obj) && (obj.PayerEmail != null)) { this.setPayerEmail(obj.PayerEmail); }
		}
		else {
			this.setSecureAcceptanceUrl(null);
			this.setPayerID(null);
			this.setPayerEmail(null);
		}
		logger.debug('Exit TransactionResponse.SecureAcceptance constructor');
	}

	setSecureAcceptanceUrl(p_SecureAcceptanceUrl) { this.SecureAcceptanceUrl = p_SecureAcceptanceUrl; }
	getSecureAcceptanceUrl() { if('SecureAcceptanceUrl' in this) {return this.SecureAcceptanceUrl;} }
	setPayerID(p_PayerID) { this.PayerID = p_PayerID; }
	getPayerID() { if('PayerID' in this) {return this.PayerID;} }
	setPayerEmail(p_PayerEmail) { this.PayerEmail = p_PayerEmail; }
	getPayerEmail() { if('PayerEmail' in this) {return this.PayerEmail;} }
};

module.exports.TransactionResponse.SecureAcceptance = TransactionResponse.SecureAcceptance;

TransactionResponse.SplitTenderPayments = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.SplitTenderPayments');
		logger.debug('Enter TransactionResponse.SplitTenderPayments constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var splitTenderPaymentList = [];
				obj.forEach(function(item) {splitTenderPaymentList.push(new TransactionResponse.SplitTenderPayments.SplitTenderPayment(item));}); 
				this.setSplitTenderPayment(splitTenderPaymentList);
			}
		}
		else {
			this.setSplitTenderPayment(null);
		}
		logger.debug('Exit TransactionResponse.SplitTenderPayments constructor');
	}

	setSplitTenderPayment(p_splitTenderPayment) { this.splitTenderPayment = p_splitTenderPayment; }
	getSplitTenderPayment() { if('splitTenderPayment' in this) {return this.splitTenderPayment;} }
};

module.exports.TransactionResponse.SplitTenderPayments = TransactionResponse.SplitTenderPayments;

TransactionResponse.UserFields = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.UserFields');
		logger.debug('Enter TransactionResponse.UserFields constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item));}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionResponse.UserFields constructor');
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField() { if('userField' in this) {return this.userField;} }
};

module.exports.TransactionResponse.UserFields = TransactionResponse.UserFields;

KeyManagementScheme.DUKPT.DeviceInfo = class {
	constructor(obj) {
		var logger = Logger.getLogger('KeyManagementScheme.DUKPT.DeviceInfo');
		logger.debug('Enter KeyManagementScheme.DUKPT.DeviceInfo constructor');
		if(arguments.length == 1) {
			if(('Description' in obj) && (obj.Description != null)) { this.setDescription(obj.Description); }
		}
		else {
			this.setDescription(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.DeviceInfo constructor');
	}

	setDescription(p_Description) { this.Description = p_Description; }
	getDescription() { if('Description' in this) {return this.Description;} }
};

module.exports.KeyManagementScheme.DUKPT.DeviceInfo = KeyManagementScheme.DUKPT.DeviceInfo;

KeyManagementScheme.DUKPT.EncryptedData = class {
	constructor(obj) {
		var logger = Logger.getLogger('KeyManagementScheme.DUKPT.EncryptedData');
		logger.debug('Enter KeyManagementScheme.DUKPT.EncryptedData constructor');
		if(arguments.length == 1) {
			if(('Value' in obj) && (obj.Value != null)) { this.setValue(obj.Value); }
		}
		else {
			this.setValue(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.EncryptedData constructor');
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue() { if('Value' in this) {return this.Value;} }
};

module.exports.KeyManagementScheme.DUKPT.EncryptedData = KeyManagementScheme.DUKPT.EncryptedData;

KeyManagementScheme.DUKPT.Mode = class {
	constructor(obj) {
		var logger = Logger.getLogger('KeyManagementScheme.DUKPT.Mode');
		logger.debug('Enter KeyManagementScheme.DUKPT.Mode constructor');
		if(arguments.length == 1) {
			if(('PIN' in obj) && (obj.PIN != null)) { this.setPIN(obj.PIN); }
			if(('Data' in obj) && (obj.Data != null)) { this.setData(obj.Data); }
		}
		else {
			this.setPIN(null);
			this.setData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.Mode constructor');
	}

	setPIN(p_PIN) { this.PIN = p_PIN; }
	getPIN() { if('PIN' in this) {return this.PIN;} }
	setData(p_Data) { this.Data = p_Data; }
	getData() { if('Data' in this) {return this.Data;} }
};

module.exports.KeyManagementScheme.DUKPT.Mode = KeyManagementScheme.DUKPT.Mode;

TransactionDetailsType.EmvDetails.Tag = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionDetailsType.EmvDetails.Tag');
		logger.debug('Enter TransactionDetailsType.EmvDetails.Tag constructor');
		if(arguments.length == 1) {
			if(('tagId' in obj) && (obj.tagId != null)) { this.setTagId(obj.tagId); }
			if(('data' in obj) && (obj.data != null)) { this.setData(obj.data); }
		}
		else {
			this.setTagId(null);
			this.setData(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails.Tag constructor');
	}

	setTagId(p_tagId) { this.tagId = p_tagId; }
	getTagId() { if('tagId' in this) {return this.tagId;} }
	setData(p_data) { this.data = p_data; }
	getData() { if('data' in this) {return this.data;} }
};

module.exports.TransactionDetailsType.EmvDetails.Tag = TransactionDetailsType.EmvDetails.Tag;

TransactionResponse.EmvResponse.Tags = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.EmvResponse.Tags');
		logger.debug('Enter TransactionResponse.EmvResponse.Tags constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var tagList = [];
				obj.forEach(function(item) {tagList.push(new EmvTag(item));}); 
				this.setTag(tagList);
			}
		}
		else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse.Tags constructor');
	}

	setTag(p_tag) { this.tag = p_tag; }
	getTag() { if('tag' in this) {return this.tag;} }
};

module.exports.TransactionResponse.EmvResponse.Tags = TransactionResponse.EmvResponse.Tags;

TransactionResponse.Errors.Error = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.Errors.Error');
		logger.debug('Enter TransactionResponse.Errors.Error constructor');
		if(arguments.length == 1) {
			if(('errorCode' in obj) && (obj.errorCode != null)) { this.setErrorCode(obj.errorCode); }
			if(('errorText' in obj) && (obj.errorText != null)) { this.setErrorText(obj.errorText); }
		}
		else {
			this.setErrorCode(null);
			this.setErrorText(null);
		}
		logger.debug('Exit TransactionResponse.Errors.Error constructor');
	}

	setErrorCode(p_errorCode) { this.errorCode = p_errorCode; }
	getErrorCode() { if('errorCode' in this) {return this.errorCode;} }
	setErrorText(p_errorText) { this.errorText = p_errorText; }
	getErrorText() { if('errorText' in this) {return this.errorText;} }
};

module.exports.TransactionResponse.Errors.Error = TransactionResponse.Errors.Error;

TransactionResponse.Messages.Message = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.Messages.Message');
		logger.debug('Enter TransactionResponse.Messages.Message constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit TransactionResponse.Messages.Message constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { if('code' in this) {return this.code;} }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { if('description' in this) {return this.description;} }
};

module.exports.TransactionResponse.Messages.Message = TransactionResponse.Messages.Message;

TransactionResponse.SplitTenderPayments.SplitTenderPayment = class {
	constructor(obj) {
		var logger = Logger.getLogger('TransactionResponse.SplitTenderPayments.SplitTenderPayment');
		logger.debug('Enter TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('responseToCustomer' in obj) && (obj.responseToCustomer != null)) { this.setResponseToCustomer(obj.responseToCustomer); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('approvedAmount' in obj) && (obj.approvedAmount != null)) { this.setApprovedAmount(obj.approvedAmount); }
			if(('balanceOnCard' in obj) && (obj.balanceOnCard != null)) { this.setBalanceOnCard(obj.balanceOnCard); }
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
		logger.debug('Exit TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { if('responseCode' in this) {return this.responseCode;} }
	setResponseToCustomer(p_responseToCustomer) { this.responseToCustomer = p_responseToCustomer; }
	getResponseToCustomer() { if('responseToCustomer' in this) {return this.responseToCustomer;} }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { if('authCode' in this) {return this.authCode;} }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { if('accountNumber' in this) {return this.accountNumber;} }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { if('accountType' in this) {return this.accountType;} }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { if('requestedAmount' in this) {return this.requestedAmount;} }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount() { if('approvedAmount' in this) {return this.approvedAmount;} }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard() { if('balanceOnCard' in this) {return this.balanceOnCard;} }
};

module.exports.TransactionResponse.SplitTenderPayments.SplitTenderPayment = TransactionResponse.SplitTenderPayments.SplitTenderPayment;

class ARBCancelSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBCancelSubscriptionRequest');
		logger.debug('Enter ARBCancelSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCancelSubscriptionRequest' : this };
		logger.debug('Exit ARBCancelSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBCancelSubscriptionRequest');
		logger.debug('Enter ARBCancelSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBCancelSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
}

module.exports.ARBCancelSubscriptionRequest = ARBCancelSubscriptionRequest;

class ARBCancelSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBCancelSubscriptionResponse');
		logger.debug('Enter ARBCancelSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCancelSubscriptionResponse' : this };
		logger.debug('Exit ARBCancelSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ARBCancelSubscriptionResponse = ARBCancelSubscriptionResponse;

class ARBCreateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBCreateSubscriptionRequest');
		logger.debug('Enter ARBCreateSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCreateSubscriptionRequest' : this };
		logger.debug('Exit ARBCreateSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBCreateSubscriptionRequest');
		logger.debug('Enter ARBCreateSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
		logger.debug('Exit ARBCreateSubscriptionRequest constructor');
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { if('subscription' in this) {return this.subscription;} }
}

module.exports.ARBCreateSubscriptionRequest = ARBCreateSubscriptionRequest;

class ARBCreateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBCreateSubscriptionResponse');
		logger.debug('Enter ARBCreateSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCreateSubscriptionResponse' : this };
		logger.debug('Exit ARBCreateSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBCreateSubscriptionResponse');
		logger.debug('Enter ARBCreateSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setProfile(null);
		}
		logger.debug('Exit ARBCreateSubscriptionResponse constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
}

module.exports.ARBCreateSubscriptionResponse = ARBCreateSubscriptionResponse;

class ARBGetSubscriptionListRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionListRequest');
		logger.debug('Enter ARBGetSubscriptionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionListRequest' : this };
		logger.debug('Exit ARBGetSubscriptionListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionListRequest');
		logger.debug('Enter ARBGetSubscriptionListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('searchType' in obj) && (obj.searchType != null)) { this.setSearchType(obj.searchType); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new ARBGetSubscriptionListSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit ARBGetSubscriptionListRequest constructor');
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType() { if('searchType' in this) {return this.searchType;} }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { if('sorting' in this) {return this.sorting;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.ARBGetSubscriptionListRequest = ARBGetSubscriptionListRequest;

class ARBGetSubscriptionListResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionListResponse');
		logger.debug('Enter ARBGetSubscriptionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionListResponse' : this };
		logger.debug('Exit ARBGetSubscriptionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionListResponse');
		logger.debug('Enter ARBGetSubscriptionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('subscriptionDetails' in obj) && (obj.subscriptionDetails != null)) { this.setSubscriptionDetails(new ArrayOfSubscription(obj.subscriptionDetails)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setSubscriptionDetails(null);
		}
		logger.debug('Exit ARBGetSubscriptionListResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { if('totalNumInResultSet' in this) {return this.totalNumInResultSet;} }
	setSubscriptionDetails(p_subscriptionDetails) { this.subscriptionDetails = p_subscriptionDetails; }
	getSubscriptionDetails() { if('subscriptionDetails' in this) {return this.subscriptionDetails;} }
}

module.exports.ARBGetSubscriptionListResponse = ARBGetSubscriptionListResponse;

class ARBGetSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionRequest');
		logger.debug('Enter ARBGetSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionRequest' : this };
		logger.debug('Exit ARBGetSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionRequest');
		logger.debug('Enter ARBGetSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
			if(('includeTransactions' in obj) && (obj.includeTransactions != null)) { this.setIncludeTransactions(obj.includeTransactions); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setIncludeTransactions(null);
		}
		logger.debug('Exit ARBGetSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
	setIncludeTransactions(p_includeTransactions) { this.includeTransactions = p_includeTransactions; }
	getIncludeTransactions() { if('includeTransactions' in this) {return this.includeTransactions;} }
}

module.exports.ARBGetSubscriptionRequest = ARBGetSubscriptionRequest;

class ARBGetSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionResponse');
		logger.debug('Enter ARBGetSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionResponse' : this };
		logger.debug('Exit ARBGetSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionResponse');
		logger.debug('Enter ARBGetSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionMaskedType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
		logger.debug('Exit ARBGetSubscriptionResponse constructor');
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { if('subscription' in this) {return this.subscription;} }
}

module.exports.ARBGetSubscriptionResponse = ARBGetSubscriptionResponse;

class ARBGetSubscriptionStatusRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionStatusRequest');
		logger.debug('Enter ARBGetSubscriptionStatusRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionStatusRequest' : this };
		logger.debug('Exit ARBGetSubscriptionStatusRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionStatusRequest');
		logger.debug('Enter ARBGetSubscriptionStatusRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
}

module.exports.ARBGetSubscriptionStatusRequest = ARBGetSubscriptionStatusRequest;

class ARBGetSubscriptionStatusResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBGetSubscriptionStatusResponse');
		logger.debug('Enter ARBGetSubscriptionStatusResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionStatusResponse' : this };
		logger.debug('Exit ARBGetSubscriptionStatusResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBGetSubscriptionStatusResponse');
		logger.debug('Enter ARBGetSubscriptionStatusResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
		}
		else {
			super();
			this.setStatus(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusResponse constructor');
	}

	setStatus(p_status) { this.status = p_status; }
	getStatus() { if('status' in this) {return this.status;} }
}

module.exports.ARBGetSubscriptionStatusResponse = ARBGetSubscriptionStatusResponse;

class ARBUpdateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ARBUpdateSubscriptionRequest');
		logger.debug('Enter ARBUpdateSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBUpdateSubscriptionRequest' : this };
		logger.debug('Exit ARBUpdateSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBUpdateSubscriptionRequest');
		logger.debug('Enter ARBUpdateSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setSubscription(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { if('subscriptionId' in this) {return this.subscriptionId;} }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { if('subscription' in this) {return this.subscription;} }
}

module.exports.ARBUpdateSubscriptionRequest = ARBUpdateSubscriptionRequest;

class ARBUpdateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ARBUpdateSubscriptionResponse');
		logger.debug('Enter ARBUpdateSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBUpdateSubscriptionResponse' : this };
		logger.debug('Exit ARBUpdateSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ARBUpdateSubscriptionResponse');
		logger.debug('Enter ARBUpdateSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionResponse constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
}

module.exports.ARBUpdateSubscriptionResponse = ARBUpdateSubscriptionResponse;

class AuDeleteType extends AuDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('AuDeleteType');
		logger.debug('Enter AuDeleteType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardMaskedType(obj.creditCard)); }
		}
		else {
			super();
			this.setCreditCard(null);
		}
		logger.debug('Exit AuDeleteType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { if('creditCard' in this) {return this.creditCard;} }
}

module.exports.AuDeleteType = AuDeleteType;

class AuUpdateType extends AuDetailsType {
	constructor(obj) {
		var logger = Logger.getLogger('AuUpdateType');
		logger.debug('Enter AuUpdateType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('newCreditCard' in obj) && (obj.newCreditCard != null)) { this.setNewCreditCard(new CreditCardMaskedType(obj.newCreditCard)); }
			if(('oldCreditCard' in obj) && (obj.oldCreditCard != null)) { this.setOldCreditCard(new CreditCardMaskedType(obj.oldCreditCard)); }
		}
		else {
			super();
			this.setNewCreditCard(null);
			this.setOldCreditCard(null);
		}
		logger.debug('Exit AuUpdateType constructor');
	}

	setNewCreditCard(p_newCreditCard) { this.newCreditCard = p_newCreditCard; }
	getNewCreditCard() { if('newCreditCard' in this) {return this.newCreditCard;} }
	setOldCreditCard(p_oldCreditCard) { this.oldCreditCard = p_oldCreditCard; }
	getOldCreditCard() { if('oldCreditCard' in this) {return this.oldCreditCard;} }
}

module.exports.AuUpdateType = AuUpdateType;

class AuthenticateTestRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('AuthenticateTestRequest');
		logger.debug('Enter AuthenticateTestRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'authenticateTestRequest' : this };
		logger.debug('Exit AuthenticateTestRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestRequest = AuthenticateTestRequest;

class AuthenticateTestResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('AuthenticateTestResponse');
		logger.debug('Enter AuthenticateTestResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'authenticateTestResponse' : this };
		logger.debug('Exit AuthenticateTestResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestResponse = AuthenticateTestResponse;

class CreateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerPaymentProfileRequest');
		logger.debug('Enter CreateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerPaymentProfileRequest' : this };
		logger.debug('Exit CreateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerPaymentProfileRequest');
		logger.debug('Enter CreateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileType(obj.paymentProfile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { if('validationMode' in this) {return this.validationMode;} }
}

module.exports.CreateCustomerPaymentProfileRequest = CreateCustomerPaymentProfileRequest;

class CreateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerPaymentProfileResponse');
		logger.debug('Enter CreateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerPaymentProfileResponse' : this };
		logger.debug('Exit CreateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerPaymentProfileResponse');
		logger.debug('Enter CreateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('validationDirectResponse' in obj) && (obj.validationDirectResponse != null)) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setValidationDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse() { if('validationDirectResponse' in this) {return this.validationDirectResponse;} }
}

module.exports.CreateCustomerPaymentProfileResponse = CreateCustomerPaymentProfileResponse;

class CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerProfileFromTransactionRequest');
		logger.debug('Enter CreateCustomerProfileFromTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileFromTransactionRequest' : this };
		logger.debug('Exit CreateCustomerProfileFromTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerProfileFromTransactionRequest');
		logger.debug('Enter CreateCustomerProfileFromTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerProfileBaseType(obj.customer)); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('defaultPaymentProfile' in obj) && (obj.defaultPaymentProfile != null)) { this.setDefaultPaymentProfile(obj.defaultPaymentProfile); }
			if(('defaultShippingAddress' in obj) && (obj.defaultShippingAddress != null)) { this.setDefaultShippingAddress(obj.defaultShippingAddress); }
			if(('profileType' in obj) && (obj.profileType != null)) { this.setProfileType(obj.profileType); }
		}
		else {
			super();
			this.setTransId(null);
			this.setCustomer(null);
			this.setCustomerProfileId(null);
			this.setDefaultPaymentProfile(null);
			this.setDefaultShippingAddress(null);
			this.setProfileType(null);
		}
		logger.debug('Exit CreateCustomerProfileFromTransactionRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { if('customer' in this) {return this.customer;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setDefaultPaymentProfile(p_defaultPaymentProfile) { this.defaultPaymentProfile = p_defaultPaymentProfile; }
	getDefaultPaymentProfile() { if('defaultPaymentProfile' in this) {return this.defaultPaymentProfile;} }
	setDefaultShippingAddress(p_defaultShippingAddress) { this.defaultShippingAddress = p_defaultShippingAddress; }
	getDefaultShippingAddress() { if('defaultShippingAddress' in this) {return this.defaultShippingAddress;} }
	setProfileType(p_profileType) { this.profileType = p_profileType; }
	getProfileType() { if('profileType' in this) {return this.profileType;} }
}

module.exports.CreateCustomerProfileFromTransactionRequest = CreateCustomerProfileFromTransactionRequest;

class CreateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerProfileRequest');
		logger.debug('Enter CreateCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileRequest' : this };
		logger.debug('Exit CreateCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerProfileRequest');
		logger.debug('Enter CreateCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileType(obj.profile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerProfileRequest constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { if('validationMode' in this) {return this.validationMode;} }
}

module.exports.CreateCustomerProfileRequest = CreateCustomerProfileRequest;

class CreateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerProfileResponse');
		logger.debug('Enter CreateCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileResponse' : this };
		logger.debug('Exit CreateCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerProfileResponse');
		logger.debug('Enter CreateCustomerProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileIdList' in obj) && (obj.customerPaymentProfileIdList != null)) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(('customerShippingAddressIdList' in obj) && (obj.customerShippingAddressIdList != null)) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
			if(('validationDirectResponseList' in obj) && (obj.validationDirectResponseList != null)) { this.setValidationDirectResponseList(new ArrayOfString(obj.validationDirectResponseList)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
			this.setValidationDirectResponseList(null);
		}
		logger.debug('Exit CreateCustomerProfileResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList() { if('customerPaymentProfileIdList' in this) {return this.customerPaymentProfileIdList;} }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList() { if('customerShippingAddressIdList' in this) {return this.customerShippingAddressIdList;} }
	setValidationDirectResponseList(p_validationDirectResponseList) { this.validationDirectResponseList = p_validationDirectResponseList; }
	getValidationDirectResponseList() { if('validationDirectResponseList' in this) {return this.validationDirectResponseList;} }
}

module.exports.CreateCustomerProfileResponse = CreateCustomerProfileResponse;

class CreateCustomerProfileTransactionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerProfileTransactionRequest');
		logger.debug('Enter CreateCustomerProfileTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileTransactionRequest' : this };
		logger.debug('Exit CreateCustomerProfileTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerProfileTransactionRequest');
		logger.debug('Enter CreateCustomerProfileTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transaction' in obj) && (obj.transaction != null)) { this.setTransaction(new ProfileTransactionType(obj.transaction)); }
			if(('extraOptions' in obj) && (obj.extraOptions != null)) { this.setExtraOptions(obj.extraOptions); }
		}
		else {
			super();
			this.setTransaction(null);
			this.setExtraOptions(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionRequest constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { if('transaction' in this) {return this.transaction;} }
	setExtraOptions(p_extraOptions) { this.extraOptions = p_extraOptions; }
	getExtraOptions() { if('extraOptions' in this) {return this.extraOptions;} }
}

module.exports.CreateCustomerProfileTransactionRequest = CreateCustomerProfileTransactionRequest;

class CreateCustomerProfileTransactionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerProfileTransactionResponse');
		logger.debug('Enter CreateCustomerProfileTransactionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileTransactionResponse' : this };
		logger.debug('Exit CreateCustomerProfileTransactionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerProfileTransactionResponse');
		logger.debug('Enter CreateCustomerProfileTransactionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionResponse' in obj) && (obj.transactionResponse != null)) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(('directResponse' in obj) && (obj.directResponse != null)) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionResponse constructor');
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse() { if('transactionResponse' in this) {return this.transactionResponse;} }
	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse() { if('directResponse' in this) {return this.directResponse;} }
}

module.exports.CreateCustomerProfileTransactionResponse = CreateCustomerProfileTransactionResponse;

class CreateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerShippingAddressRequest');
		logger.debug('Enter CreateCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerShippingAddressRequest' : this };
		logger.debug('Exit CreateCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerShippingAddressRequest');
		logger.debug('Enter CreateCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressType(obj.address)); }
			if(('defaultShippingAddress' in obj) && (obj.defaultShippingAddress != null)) { this.setDefaultShippingAddress(obj.defaultShippingAddress); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
			this.setDefaultShippingAddress(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { if('address' in this) {return this.address;} }
	setDefaultShippingAddress(p_defaultShippingAddress) { this.defaultShippingAddress = p_defaultShippingAddress; }
	getDefaultShippingAddress() { if('defaultShippingAddress' in this) {return this.defaultShippingAddress;} }
}

module.exports.CreateCustomerShippingAddressRequest = CreateCustomerShippingAddressRequest;

class CreateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('CreateCustomerShippingAddressResponse');
		logger.debug('Enter CreateCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerShippingAddressResponse' : this };
		logger.debug('Exit CreateCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateCustomerShippingAddressResponse');
		logger.debug('Enter CreateCustomerShippingAddressResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { if('customerAddressId' in this) {return this.customerAddressId;} }
}

module.exports.CreateCustomerShippingAddressResponse = CreateCustomerShippingAddressResponse;

class CreateTransactionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('CreateTransactionRequest');
		logger.debug('Enter CreateTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createTransactionRequest' : this };
		logger.debug('Exit CreateTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateTransactionRequest');
		logger.debug('Enter CreateTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionRequest' in obj) && (obj.transactionRequest != null)) { this.setTransactionRequest(new TransactionRequestType(obj.transactionRequest)); }
		}
		else {
			super();
			this.setTransactionRequest(null);
		}
		logger.debug('Exit CreateTransactionRequest constructor');
	}

	setTransactionRequest(p_transactionRequest) { this.transactionRequest = p_transactionRequest; }
	getTransactionRequest() { if('transactionRequest' in this) {return this.transactionRequest;} }
}

module.exports.CreateTransactionRequest = CreateTransactionRequest;

class CreateTransactionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('CreateTransactionResponse');
		logger.debug('Enter CreateTransactionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createTransactionResponse' : this };
		logger.debug('Exit CreateTransactionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('CreateTransactionResponse');
		logger.debug('Enter CreateTransactionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionResponse' in obj) && (obj.transactionResponse != null)) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(('profileResponse' in obj) && (obj.profileResponse != null)) { this.setProfileResponse(new CreateProfileResponse(obj.profileResponse)); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setProfileResponse(null);
		}
		logger.debug('Exit CreateTransactionResponse constructor');
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse() { if('transactionResponse' in this) {return this.transactionResponse;} }
	setProfileResponse(p_profileResponse) { this.profileResponse = p_profileResponse; }
	getProfileResponse() { if('profileResponse' in this) {return this.profileResponse;} }
}

module.exports.CreateTransactionResponse = CreateTransactionResponse;

class CreditCardType extends CreditCardSimpleType {
	constructor(obj) {
		var logger = Logger.getLogger('CreditCardType');
		logger.debug('Enter CreditCardType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('isPaymentToken' in obj) && (obj.isPaymentToken != null)) { this.setIsPaymentToken(obj.isPaymentToken); }
			if(('cryptogram' in obj) && (obj.cryptogram != null)) { this.setCryptogram(obj.cryptogram); }
			if(('tokenRequestorName' in obj) && (obj.tokenRequestorName != null)) { this.setTokenRequestorName(obj.tokenRequestorName); }
			if(('tokenRequestorId' in obj) && (obj.tokenRequestorId != null)) { this.setTokenRequestorId(obj.tokenRequestorId); }
			if(('tokenRequestorEci' in obj) && (obj.tokenRequestorEci != null)) { this.setTokenRequestorEci(obj.tokenRequestorEci); }
		}
		else {
			super();
			this.setCardCode(null);
			this.setIsPaymentToken(null);
			this.setCryptogram(null);
			this.setTokenRequestorName(null);
			this.setTokenRequestorId(null);
			this.setTokenRequestorEci(null);
		}
		logger.debug('Exit CreditCardType constructor');
	}

	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { if('cardCode' in this) {return this.cardCode;} }
	setIsPaymentToken(p_isPaymentToken) { this.isPaymentToken = p_isPaymentToken; }
	getIsPaymentToken() { if('isPaymentToken' in this) {return this.isPaymentToken;} }
	setCryptogram(p_cryptogram) { this.cryptogram = p_cryptogram; }
	getCryptogram() { if('cryptogram' in this) {return this.cryptogram;} }
	setTokenRequestorName(p_tokenRequestorName) { this.tokenRequestorName = p_tokenRequestorName; }
	getTokenRequestorName() { if('tokenRequestorName' in this) {return this.tokenRequestorName;} }
	setTokenRequestorId(p_tokenRequestorId) { this.tokenRequestorId = p_tokenRequestorId; }
	getTokenRequestorId() { if('tokenRequestorId' in this) {return this.tokenRequestorId;} }
	setTokenRequestorEci(p_tokenRequestorEci) { this.tokenRequestorEci = p_tokenRequestorEci; }
	getTokenRequestorEci() { if('tokenRequestorEci' in this) {return this.tokenRequestorEci;} }
}

module.exports.CreditCardType = CreditCardType;

class CustomerAddressType extends NameAndAddressType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerAddressType');
		logger.debug('Enter CustomerAddressType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('faxNumber' in obj) && (obj.faxNumber != null)) { this.setFaxNumber(obj.faxNumber); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
		}
		else {
			super();
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setEmail(null);
		}
		logger.debug('Exit CustomerAddressType constructor');
	}

	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { if('phoneNumber' in this) {return this.phoneNumber;} }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber() { if('faxNumber' in this) {return this.faxNumber;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
}

module.exports.CustomerAddressType = CustomerAddressType;

class CustomerPaymentProfileMaskedType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileMaskedType');
		logger.debug('Enter CustomerPaymentProfileMaskedType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('defaultPaymentProfile' in obj) && (obj.defaultPaymentProfile != null)) { this.setDefaultPaymentProfile(obj.defaultPaymentProfile); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseMaskedType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
			if(('originalNetworkTransId' in obj) && (obj.originalNetworkTransId != null)) { this.setOriginalNetworkTransId(obj.originalNetworkTransId); }
			if(('originalAuthAmount' in obj) && (obj.originalAuthAmount != null)) { this.setOriginalAuthAmount(obj.originalAuthAmount); }
			if(('excludeFromAccountUpdater' in obj) && (obj.excludeFromAccountUpdater != null)) { this.setExcludeFromAccountUpdater(obj.excludeFromAccountUpdater); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setDefaultPaymentProfile(null);
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
			this.setSubscriptionIds(null);
			this.setOriginalNetworkTransId(null);
			this.setOriginalAuthAmount(null);
			this.setExcludeFromAccountUpdater(null);
		}
		logger.debug('Exit CustomerPaymentProfileMaskedType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setDefaultPaymentProfile(p_defaultPaymentProfile) { this.defaultPaymentProfile = p_defaultPaymentProfile; }
	getDefaultPaymentProfile() { if('defaultPaymentProfile' in this) {return this.defaultPaymentProfile;} }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { if('driversLicense' in this) {return this.driversLicense;} }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { if('taxId' in this) {return this.taxId;} }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { if('subscriptionIds' in this) {return this.subscriptionIds;} }
	setOriginalNetworkTransId(p_originalNetworkTransId) { this.originalNetworkTransId = p_originalNetworkTransId; }
	getOriginalNetworkTransId() { if('originalNetworkTransId' in this) {return this.originalNetworkTransId;} }
	setOriginalAuthAmount(p_originalAuthAmount) { this.originalAuthAmount = p_originalAuthAmount; }
	getOriginalAuthAmount() { if('originalAuthAmount' in this) {return this.originalAuthAmount;} }
	setExcludeFromAccountUpdater(p_excludeFromAccountUpdater) { this.excludeFromAccountUpdater = p_excludeFromAccountUpdater; }
	getExcludeFromAccountUpdater() { if('excludeFromAccountUpdater' in this) {return this.excludeFromAccountUpdater;} }
}

module.exports.CustomerPaymentProfileMaskedType = CustomerPaymentProfileMaskedType;

class CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileType');
		logger.debug('Enter CustomerPaymentProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
			if(('defaultPaymentProfile' in obj) && (obj.defaultPaymentProfile != null)) { this.setDefaultPaymentProfile(obj.defaultPaymentProfile); }
			if(('subsequentAuthInformation' in obj) && (obj.subsequentAuthInformation != null)) { this.setSubsequentAuthInformation(new SubsequentAuthInformation(obj.subsequentAuthInformation)); }
			if(('excludeFromAccountUpdater' in obj) && (obj.excludeFromAccountUpdater != null)) { this.setExcludeFromAccountUpdater(obj.excludeFromAccountUpdater); }
		}
		else {
			super();
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
			this.setDefaultPaymentProfile(null);
			this.setSubsequentAuthInformation(null);
			this.setExcludeFromAccountUpdater(null);
		}
		logger.debug('Exit CustomerPaymentProfileType constructor');
	}

	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { if('payment' in this) {return this.payment;} }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { if('driversLicense' in this) {return this.driversLicense;} }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { if('taxId' in this) {return this.taxId;} }
	setDefaultPaymentProfile(p_defaultPaymentProfile) { this.defaultPaymentProfile = p_defaultPaymentProfile; }
	getDefaultPaymentProfile() { if('defaultPaymentProfile' in this) {return this.defaultPaymentProfile;} }
	setSubsequentAuthInformation(p_subsequentAuthInformation) { this.subsequentAuthInformation = p_subsequentAuthInformation; }
	getSubsequentAuthInformation() { if('subsequentAuthInformation' in this) {return this.subsequentAuthInformation;} }
	setExcludeFromAccountUpdater(p_excludeFromAccountUpdater) { this.excludeFromAccountUpdater = p_excludeFromAccountUpdater; }
	getExcludeFromAccountUpdater() { if('excludeFromAccountUpdater' in this) {return this.excludeFromAccountUpdater;} }
}

module.exports.CustomerPaymentProfileType = CustomerPaymentProfileType;

class CustomerProfileExType extends CustomerProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileExType');
		logger.debug('Enter CustomerProfileExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit CustomerProfileExType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
}

module.exports.CustomerProfileExType = CustomerProfileExType;

class CustomerProfileType extends CustomerProfileBaseType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileType');
		logger.debug('Enter CustomerProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileType(item));}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressType(item));}); 
				this.setShipToList(shipToListList);
			}
			if(('profileType' in obj) && (obj.profileType != null)) { this.setProfileType(obj.profileType); }
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
			this.setProfileType(null);
		}
		logger.debug('Exit CustomerProfileType constructor');
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { if('paymentProfiles' in this) {return this.paymentProfiles;} }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList() { if('shipToList' in this) {return this.shipToList;} }
	setProfileType(p_profileType) { this.profileType = p_profileType; }
	getProfileType() { if('profileType' in this) {return this.profileType;} }
}

module.exports.CustomerProfileType = CustomerProfileType;

class DecryptPaymentDataRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('DecryptPaymentDataRequest');
		logger.debug('Enter DecryptPaymentDataRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'decryptPaymentDataRequest' : this };
		logger.debug('Exit DecryptPaymentDataRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('DecryptPaymentDataRequest');
		logger.debug('Enter DecryptPaymentDataRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
			if(('callId' in obj) && (obj.callId != null)) { this.setCallId(obj.callId); }
		}
		else {
			super();
			this.setOpaqueData(null);
			this.setCallId(null);
		}
		logger.debug('Exit DecryptPaymentDataRequest constructor');
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { if('opaqueData' in this) {return this.opaqueData;} }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId() { if('callId' in this) {return this.callId;} }
}

module.exports.DecryptPaymentDataRequest = DecryptPaymentDataRequest;

class DecryptPaymentDataResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('DecryptPaymentDataResponse');
		logger.debug('Enter DecryptPaymentDataResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'decryptPaymentDataResponse' : this };
		logger.debug('Exit DecryptPaymentDataResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('DecryptPaymentDataResponse');
		logger.debug('Enter DecryptPaymentDataResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('shippingInfo' in obj) && (obj.shippingInfo != null)) { this.setShippingInfo(new CustomerAddressType(obj.shippingInfo)); }
			if(('billingInfo' in obj) && (obj.billingInfo != null)) { this.setBillingInfo(new CustomerAddressType(obj.billingInfo)); }
			if(('cardInfo' in obj) && (obj.cardInfo != null)) { this.setCardInfo(new CreditCardMaskedType(obj.cardInfo)); }
			if(('paymentDetails' in obj) && (obj.paymentDetails != null)) { this.setPaymentDetails(new PaymentDetails(obj.paymentDetails)); }
		}
		else {
			super();
			this.setShippingInfo(null);
			this.setBillingInfo(null);
			this.setCardInfo(null);
			this.setPaymentDetails(null);
		}
		logger.debug('Exit DecryptPaymentDataResponse constructor');
	}

	setShippingInfo(p_shippingInfo) { this.shippingInfo = p_shippingInfo; }
	getShippingInfo() { if('shippingInfo' in this) {return this.shippingInfo;} }
	setBillingInfo(p_billingInfo) { this.billingInfo = p_billingInfo; }
	getBillingInfo() { if('billingInfo' in this) {return this.billingInfo;} }
	setCardInfo(p_cardInfo) { this.cardInfo = p_cardInfo; }
	getCardInfo() { if('cardInfo' in this) {return this.cardInfo;} }
	setPaymentDetails(p_paymentDetails) { this.paymentDetails = p_paymentDetails; }
	getPaymentDetails() { if('paymentDetails' in this) {return this.paymentDetails;} }
}

module.exports.DecryptPaymentDataResponse = DecryptPaymentDataResponse;

class DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerPaymentProfileRequest');
		logger.debug('Enter DeleteCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerPaymentProfileRequest' : this };
		logger.debug('Exit DeleteCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('DeleteCustomerPaymentProfileRequest');
		logger.debug('Enter DeleteCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit DeleteCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
}

module.exports.DeleteCustomerPaymentProfileRequest = DeleteCustomerPaymentProfileRequest;

class DeleteCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerPaymentProfileResponse');
		logger.debug('Enter DeleteCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerPaymentProfileResponse' : this };
		logger.debug('Exit DeleteCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerPaymentProfileResponse = DeleteCustomerPaymentProfileResponse;

class DeleteCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerProfileRequest');
		logger.debug('Enter DeleteCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerProfileRequest' : this };
		logger.debug('Exit DeleteCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('DeleteCustomerProfileRequest');
		logger.debug('Enter DeleteCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit DeleteCustomerProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
}

module.exports.DeleteCustomerProfileRequest = DeleteCustomerProfileRequest;

class DeleteCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerProfileResponse');
		logger.debug('Enter DeleteCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerProfileResponse' : this };
		logger.debug('Exit DeleteCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerProfileResponse = DeleteCustomerProfileResponse;

class DeleteCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerShippingAddressRequest');
		logger.debug('Enter DeleteCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerShippingAddressRequest' : this };
		logger.debug('Exit DeleteCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('DeleteCustomerShippingAddressRequest');
		logger.debug('Enter DeleteCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit DeleteCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { if('customerAddressId' in this) {return this.customerAddressId;} }
}

module.exports.DeleteCustomerShippingAddressRequest = DeleteCustomerShippingAddressRequest;

class DeleteCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('DeleteCustomerShippingAddressResponse');
		logger.debug('Enter DeleteCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerShippingAddressResponse' : this };
		logger.debug('Exit DeleteCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerShippingAddressResponse = DeleteCustomerShippingAddressResponse;

class EmailSettingsType extends ArrayOfSetting {
	constructor(obj) {
		var logger = Logger.getLogger('EmailSettingsType');
		logger.debug('Enter EmailSettingsType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('version' in obj) && (obj.version != null)) { this.setVersion(obj.version); }
		}
		else {
			super();
			this.setVersion(null);
		}
		logger.debug('Exit EmailSettingsType constructor');
	}

	setVersion(p_version) { this.version = p_version; }
	getVersion() { if('version' in this) {return this.version;} }
}

module.exports.EmailSettingsType = EmailSettingsType;

class GetAUJobDetailsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetAUJobDetailsRequest');
		logger.debug('Enter GetAUJobDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobDetailsRequest' : this };
		logger.debug('Exit GetAUJobDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetAUJobDetailsRequest');
		logger.debug('Enter GetAUJobDetailsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
			if(('modifiedTypeFilter' in obj) && (obj.modifiedTypeFilter != null)) { this.setModifiedTypeFilter(obj.modifiedTypeFilter); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setMonth(null);
			this.setModifiedTypeFilter(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetAUJobDetailsRequest constructor');
	}

	setMonth(p_month) { this.month = p_month; }
	getMonth() { if('month' in this) {return this.month;} }
	setModifiedTypeFilter(p_modifiedTypeFilter) { this.modifiedTypeFilter = p_modifiedTypeFilter; }
	getModifiedTypeFilter() { if('modifiedTypeFilter' in this) {return this.modifiedTypeFilter;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.GetAUJobDetailsRequest = GetAUJobDetailsRequest;

class GetAUJobDetailsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetAUJobDetailsResponse');
		logger.debug('Enter GetAUJobDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobDetailsResponse' : this };
		logger.debug('Exit GetAUJobDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetAUJobDetailsResponse');
		logger.debug('Enter GetAUJobDetailsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('auDetails' in obj) && (obj.auDetails != null)) { this.setAuDetails(new ListOfAUDetailsType(obj.auDetails)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setAuDetails(null);
		}
		logger.debug('Exit GetAUJobDetailsResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { if('totalNumInResultSet' in this) {return this.totalNumInResultSet;} }
	setAuDetails(p_auDetails) { this.auDetails = p_auDetails; }
	getAuDetails() { if('auDetails' in this) {return this.auDetails;} }
}

module.exports.GetAUJobDetailsResponse = GetAUJobDetailsResponse;

class GetAUJobSummaryRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetAUJobSummaryRequest');
		logger.debug('Enter GetAUJobSummaryRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobSummaryRequest' : this };
		logger.debug('Exit GetAUJobSummaryRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetAUJobSummaryRequest');
		logger.debug('Enter GetAUJobSummaryRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
		}
		else {
			super();
			this.setMonth(null);
		}
		logger.debug('Exit GetAUJobSummaryRequest constructor');
	}

	setMonth(p_month) { this.month = p_month; }
	getMonth() { if('month' in this) {return this.month;} }
}

module.exports.GetAUJobSummaryRequest = GetAUJobSummaryRequest;

class GetAUJobSummaryResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetAUJobSummaryResponse');
		logger.debug('Enter GetAUJobSummaryResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobSummaryResponse' : this };
		logger.debug('Exit GetAUJobSummaryResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetAUJobSummaryResponse');
		logger.debug('Enter GetAUJobSummaryResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('auSummary' in obj) && (obj.auSummary != null)) { this.setAuSummary(new ArrayOfAUResponseType(obj.auSummary)); }
		}
		else {
			super();
			this.setAuSummary(null);
		}
		logger.debug('Exit GetAUJobSummaryResponse constructor');
	}

	setAuSummary(p_auSummary) { this.auSummary = p_auSummary; }
	getAuSummary() { if('auSummary' in this) {return this.auSummary;} }
}

module.exports.GetAUJobSummaryResponse = GetAUJobSummaryResponse;

class GetBatchStatisticsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetBatchStatisticsRequest');
		logger.debug('Enter GetBatchStatisticsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getBatchStatisticsRequest' : this };
		logger.debug('Exit GetBatchStatisticsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetBatchStatisticsRequest');
		logger.debug('Enter GetBatchStatisticsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
		}
		else {
			super();
			this.setBatchId(null);
		}
		logger.debug('Exit GetBatchStatisticsRequest constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { if('batchId' in this) {return this.batchId;} }
}

module.exports.GetBatchStatisticsRequest = GetBatchStatisticsRequest;

class GetBatchStatisticsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetBatchStatisticsResponse');
		logger.debug('Enter GetBatchStatisticsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getBatchStatisticsResponse' : this };
		logger.debug('Exit GetBatchStatisticsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetBatchStatisticsResponse');
		logger.debug('Enter GetBatchStatisticsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batch' in obj) && (obj.batch != null)) { this.setBatch(new BatchDetailsType(obj.batch)); }
		}
		else {
			super();
			this.setBatch(null);
		}
		logger.debug('Exit GetBatchStatisticsResponse constructor');
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { if('batch' in this) {return this.batch;} }
}

module.exports.GetBatchStatisticsResponse = GetBatchStatisticsResponse;

class GetCustomerPaymentProfileListRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileListRequest');
		logger.debug('Enter GetCustomerPaymentProfileListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileListRequest' : this };
		logger.debug('Exit GetCustomerPaymentProfileListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileListRequest');
		logger.debug('Enter GetCustomerPaymentProfileListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('searchType' in obj) && (obj.searchType != null)) { this.setSearchType(obj.searchType); }
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new CustomerPaymentProfileSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setMonth(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListRequest constructor');
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType() { if('searchType' in this) {return this.searchType;} }
	setMonth(p_month) { this.month = p_month; }
	getMonth() { if('month' in this) {return this.month;} }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { if('sorting' in this) {return this.sorting;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.GetCustomerPaymentProfileListRequest = GetCustomerPaymentProfileListRequest;

class GetCustomerPaymentProfileListResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileListResponse');
		logger.debug('Enter GetCustomerPaymentProfileListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileListResponse' : this };
		logger.debug('Exit GetCustomerPaymentProfileListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileListResponse');
		logger.debug('Enter GetCustomerPaymentProfileListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('paymentProfiles' in obj) && (obj.paymentProfiles != null)) { this.setPaymentProfiles(new ArrayOfCustomerPaymentProfileListItemType(obj.paymentProfiles)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setPaymentProfiles(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { if('totalNumInResultSet' in this) {return this.totalNumInResultSet;} }
	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { if('paymentProfiles' in this) {return this.paymentProfiles;} }
}

module.exports.GetCustomerPaymentProfileListResponse = GetCustomerPaymentProfileListResponse;

class GetCustomerPaymentProfileNonceRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileNonceRequest');
		logger.debug('Enter GetCustomerPaymentProfileNonceRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileNonceRequest' : this };
		logger.debug('Exit GetCustomerPaymentProfileNonceRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileNonceRequest');
		logger.debug('Enter GetCustomerPaymentProfileNonceRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('connectedAccessToken' in obj) && (obj.connectedAccessToken != null)) { this.setConnectedAccessToken(obj.connectedAccessToken); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setConnectedAccessToken(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileNonceRequest constructor');
	}

	setConnectedAccessToken(p_connectedAccessToken) { this.connectedAccessToken = p_connectedAccessToken; }
	getConnectedAccessToken() { if('connectedAccessToken' in this) {return this.connectedAccessToken;} }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
}

module.exports.GetCustomerPaymentProfileNonceRequest = GetCustomerPaymentProfileNonceRequest;

class GetCustomerPaymentProfileNonceResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileNonceResponse');
		logger.debug('Enter GetCustomerPaymentProfileNonceResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileNonceResponse' : this };
		logger.debug('Exit GetCustomerPaymentProfileNonceResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileNonceResponse');
		logger.debug('Enter GetCustomerPaymentProfileNonceResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
		}
		else {
			super();
			this.setOpaqueData(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileNonceResponse constructor');
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { if('opaqueData' in this) {return this.opaqueData;} }
}

module.exports.GetCustomerPaymentProfileNonceResponse = GetCustomerPaymentProfileNonceResponse;

class GetCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileRequest');
		logger.debug('Enter GetCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileRequest' : this };
		logger.debug('Exit GetCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileRequest');
		logger.debug('Enter GetCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('unmaskExpirationDate' in obj) && (obj.unmaskExpirationDate != null)) { this.setUnmaskExpirationDate(obj.unmaskExpirationDate); }
			if(('includeIssuerInfo' in obj) && (obj.includeIssuerInfo != null)) { this.setIncludeIssuerInfo(obj.includeIssuerInfo); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setUnmaskExpirationDate(null);
			this.setIncludeIssuerInfo(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setUnmaskExpirationDate(p_unmaskExpirationDate) { this.unmaskExpirationDate = p_unmaskExpirationDate; }
	getUnmaskExpirationDate() { if('unmaskExpirationDate' in this) {return this.unmaskExpirationDate;} }
	setIncludeIssuerInfo(p_includeIssuerInfo) { this.includeIssuerInfo = p_includeIssuerInfo; }
	getIncludeIssuerInfo() { if('includeIssuerInfo' in this) {return this.includeIssuerInfo;} }
}

module.exports.GetCustomerPaymentProfileRequest = GetCustomerPaymentProfileRequest;

class GetCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerPaymentProfileResponse');
		logger.debug('Enter GetCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileResponse' : this };
		logger.debug('Exit GetCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerPaymentProfileResponse');
		logger.debug('Enter GetCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileResponse constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
}

module.exports.GetCustomerPaymentProfileResponse = GetCustomerPaymentProfileResponse;

class GetCustomerProfileIdsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerProfileIdsRequest');
		logger.debug('Enter GetCustomerProfileIdsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileIdsRequest' : this };
		logger.debug('Exit GetCustomerProfileIdsRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetCustomerProfileIdsRequest = GetCustomerProfileIdsRequest;

class GetCustomerProfileIdsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerProfileIdsResponse');
		logger.debug('Enter GetCustomerProfileIdsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileIdsResponse' : this };
		logger.debug('Exit GetCustomerProfileIdsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerProfileIdsResponse');
		logger.debug('Enter GetCustomerProfileIdsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('ids' in obj) && (obj.ids != null)) { this.setIds(new ArrayOfNumericString(obj.ids)); }
		}
		else {
			super();
			this.setIds(null);
		}
		logger.debug('Exit GetCustomerProfileIdsResponse constructor');
	}

	setIds(p_ids) { this.ids = p_ids; }
	getIds() { if('ids' in this) {return this.ids;} }
}

module.exports.GetCustomerProfileIdsResponse = GetCustomerProfileIdsResponse;

class GetCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerProfileRequest');
		logger.debug('Enter GetCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileRequest' : this };
		logger.debug('Exit GetCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerProfileRequest');
		logger.debug('Enter GetCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('merchantCustomerId' in obj) && (obj.merchantCustomerId != null)) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('unmaskExpirationDate' in obj) && (obj.unmaskExpirationDate != null)) { this.setUnmaskExpirationDate(obj.unmaskExpirationDate); }
			if(('includeIssuerInfo' in obj) && (obj.includeIssuerInfo != null)) { this.setIncludeIssuerInfo(obj.includeIssuerInfo); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setMerchantCustomerId(null);
			this.setEmail(null);
			this.setUnmaskExpirationDate(null);
			this.setIncludeIssuerInfo(null);
		}
		logger.debug('Exit GetCustomerProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId() { if('merchantCustomerId' in this) {return this.merchantCustomerId;} }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { if('email' in this) {return this.email;} }
	setUnmaskExpirationDate(p_unmaskExpirationDate) { this.unmaskExpirationDate = p_unmaskExpirationDate; }
	getUnmaskExpirationDate() { if('unmaskExpirationDate' in this) {return this.unmaskExpirationDate;} }
	setIncludeIssuerInfo(p_includeIssuerInfo) { this.includeIssuerInfo = p_includeIssuerInfo; }
	getIncludeIssuerInfo() { if('includeIssuerInfo' in this) {return this.includeIssuerInfo;} }
}

module.exports.GetCustomerProfileRequest = GetCustomerProfileRequest;

class GetCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerProfileResponse');
		logger.debug('Enter GetCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileResponse' : this };
		logger.debug('Exit GetCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerProfileResponse');
		logger.debug('Enter GetCustomerProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileMaskedType(obj.profile)); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
		}
		else {
			super();
			this.setProfile(null);
			this.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerProfileResponse constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { if('subscriptionIds' in this) {return this.subscriptionIds;} }
}

module.exports.GetCustomerProfileResponse = GetCustomerProfileResponse;

class GetCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerShippingAddressRequest');
		logger.debug('Enter GetCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerShippingAddressRequest' : this };
		logger.debug('Exit GetCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerShippingAddressRequest');
		logger.debug('Enter GetCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit GetCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { if('customerAddressId' in this) {return this.customerAddressId;} }
}

module.exports.GetCustomerShippingAddressRequest = GetCustomerShippingAddressRequest;

class GetCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetCustomerShippingAddressResponse');
		logger.debug('Enter GetCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerShippingAddressResponse' : this };
		logger.debug('Exit GetCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetCustomerShippingAddressResponse');
		logger.debug('Enter GetCustomerShippingAddressResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('defaultShippingAddress' in obj) && (obj.defaultShippingAddress != null)) { this.setDefaultShippingAddress(obj.defaultShippingAddress); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressExType(obj.address)); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
		}
		else {
			super();
			this.setDefaultShippingAddress(null);
			this.setAddress(null);
			this.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerShippingAddressResponse constructor');
	}

	setDefaultShippingAddress(p_defaultShippingAddress) { this.defaultShippingAddress = p_defaultShippingAddress; }
	getDefaultShippingAddress() { if('defaultShippingAddress' in this) {return this.defaultShippingAddress;} }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { if('address' in this) {return this.address;} }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { if('subscriptionIds' in this) {return this.subscriptionIds;} }
}

module.exports.GetCustomerShippingAddressResponse = GetCustomerShippingAddressResponse;

class GetHostedPaymentPageRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetHostedPaymentPageRequest');
		logger.debug('Enter GetHostedPaymentPageRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedPaymentPageRequest' : this };
		logger.debug('Exit GetHostedPaymentPageRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetHostedPaymentPageRequest');
		logger.debug('Enter GetHostedPaymentPageRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionRequest' in obj) && (obj.transactionRequest != null)) { this.setTransactionRequest(new TransactionRequestType(obj.transactionRequest)); }
			if(('hostedPaymentSettings' in obj) && (obj.hostedPaymentSettings != null)) { this.setHostedPaymentSettings(new ArrayOfSetting(obj.hostedPaymentSettings)); }
		}
		else {
			super();
			this.setTransactionRequest(null);
			this.setHostedPaymentSettings(null);
		}
		logger.debug('Exit GetHostedPaymentPageRequest constructor');
	}

	setTransactionRequest(p_transactionRequest) { this.transactionRequest = p_transactionRequest; }
	getTransactionRequest() { if('transactionRequest' in this) {return this.transactionRequest;} }
	setHostedPaymentSettings(p_hostedPaymentSettings) { this.hostedPaymentSettings = p_hostedPaymentSettings; }
	getHostedPaymentSettings() { if('hostedPaymentSettings' in this) {return this.hostedPaymentSettings;} }
}

module.exports.GetHostedPaymentPageRequest = GetHostedPaymentPageRequest;

class GetHostedPaymentPageResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetHostedPaymentPageResponse');
		logger.debug('Enter GetHostedPaymentPageResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedPaymentPageResponse' : this };
		logger.debug('Exit GetHostedPaymentPageResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetHostedPaymentPageResponse');
		logger.debug('Enter GetHostedPaymentPageResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('token' in obj) && (obj.token != null)) { this.setToken(obj.token); }
		}
		else {
			super();
			this.setToken(null);
		}
		logger.debug('Exit GetHostedPaymentPageResponse constructor');
	}

	setToken(p_token) { this.token = p_token; }
	getToken() { if('token' in this) {return this.token;} }
}

module.exports.GetHostedPaymentPageResponse = GetHostedPaymentPageResponse;

class GetHostedProfilePageRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetHostedProfilePageRequest');
		logger.debug('Enter GetHostedProfilePageRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedProfilePageRequest' : this };
		logger.debug('Exit GetHostedProfilePageRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetHostedProfilePageRequest');
		logger.debug('Enter GetHostedProfilePageRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('hostedProfileSettings' in obj) && (obj.hostedProfileSettings != null)) { this.setHostedProfileSettings(new ArrayOfSetting(obj.hostedProfileSettings)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setHostedProfileSettings(null);
		}
		logger.debug('Exit GetHostedProfilePageRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setHostedProfileSettings(p_hostedProfileSettings) { this.hostedProfileSettings = p_hostedProfileSettings; }
	getHostedProfileSettings() { if('hostedProfileSettings' in this) {return this.hostedProfileSettings;} }
}

module.exports.GetHostedProfilePageRequest = GetHostedProfilePageRequest;

class GetHostedProfilePageResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetHostedProfilePageResponse');
		logger.debug('Enter GetHostedProfilePageResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedProfilePageResponse' : this };
		logger.debug('Exit GetHostedProfilePageResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetHostedProfilePageResponse');
		logger.debug('Enter GetHostedProfilePageResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('token' in obj) && (obj.token != null)) { this.setToken(obj.token); }
		}
		else {
			super();
			this.setToken(null);
		}
		logger.debug('Exit GetHostedProfilePageResponse constructor');
	}

	setToken(p_token) { this.token = p_token; }
	getToken() { if('token' in this) {return this.token;} }
}

module.exports.GetHostedProfilePageResponse = GetHostedProfilePageResponse;

class GetMerchantDetailsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetMerchantDetailsRequest');
		logger.debug('Enter GetMerchantDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getMerchantDetailsRequest' : this };
		logger.debug('Exit GetMerchantDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetMerchantDetailsRequest = GetMerchantDetailsRequest;

class GetMerchantDetailsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetMerchantDetailsResponse');
		logger.debug('Enter GetMerchantDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getMerchantDetailsResponse' : this };
		logger.debug('Exit GetMerchantDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetMerchantDetailsResponse');
		logger.debug('Enter GetMerchantDetailsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('isTestMode' in obj) && (obj.isTestMode != null)) { this.setIsTestMode(obj.isTestMode); }
			if(('processors' in obj) && (obj.processors != null)) { this.setProcessors(new ArrayOfProcessorType(obj.processors)); }
			if(('merchantName' in obj) && (obj.merchantName != null)) { this.setMerchantName(obj.merchantName); }
			if(('gatewayId' in obj) && (obj.gatewayId != null)) { this.setGatewayId(obj.gatewayId); }
			if(('marketTypes' in obj) && (obj.marketTypes != null)) { this.setMarketTypes(new ArrayOfMarketType(obj.marketTypes)); }
			if(('productCodes' in obj) && (obj.productCodes != null)) { this.setProductCodes(new ArrayOfProductCode(obj.productCodes)); }
			if(('paymentMethods' in obj) && (obj.paymentMethods != null)) { this.setPaymentMethods(new ArrayOfPaymentMethod(obj.paymentMethods)); }
			if(('currencies' in obj) && (obj.currencies != null)) { this.setCurrencies(new ArrayOfCurrencyCode(obj.currencies)); }
			if(('publicClientKey' in obj) && (obj.publicClientKey != null)) { this.setPublicClientKey(obj.publicClientKey); }
			if(('businessInformation' in obj) && (obj.businessInformation != null)) { this.setBusinessInformation(new CustomerAddressType(obj.businessInformation)); }
			if(('merchantTimeZone' in obj) && (obj.merchantTimeZone != null)) { this.setMerchantTimeZone(obj.merchantTimeZone); }
			if(('contactDetails' in obj) && (obj.contactDetails != null)) { this.setContactDetails(new ArrayOfContactDetail(obj.contactDetails)); }
		}
		else {
			super();
			this.setIsTestMode(null);
			this.setProcessors(null);
			this.setMerchantName(null);
			this.setGatewayId(null);
			this.setMarketTypes(null);
			this.setProductCodes(null);
			this.setPaymentMethods(null);
			this.setCurrencies(null);
			this.setPublicClientKey(null);
			this.setBusinessInformation(null);
			this.setMerchantTimeZone(null);
			this.setContactDetails(null);
		}
		logger.debug('Exit GetMerchantDetailsResponse constructor');
	}

	setIsTestMode(p_isTestMode) { this.isTestMode = p_isTestMode; }
	getIsTestMode() { if('isTestMode' in this) {return this.isTestMode;} }
	setProcessors(p_processors) { this.processors = p_processors; }
	getProcessors() { if('processors' in this) {return this.processors;} }
	setMerchantName(p_merchantName) { this.merchantName = p_merchantName; }
	getMerchantName() { if('merchantName' in this) {return this.merchantName;} }
	setGatewayId(p_gatewayId) { this.gatewayId = p_gatewayId; }
	getGatewayId() { if('gatewayId' in this) {return this.gatewayId;} }
	setMarketTypes(p_marketTypes) { this.marketTypes = p_marketTypes; }
	getMarketTypes() { if('marketTypes' in this) {return this.marketTypes;} }
	setProductCodes(p_productCodes) { this.productCodes = p_productCodes; }
	getProductCodes() { if('productCodes' in this) {return this.productCodes;} }
	setPaymentMethods(p_paymentMethods) { this.paymentMethods = p_paymentMethods; }
	getPaymentMethods() { if('paymentMethods' in this) {return this.paymentMethods;} }
	setCurrencies(p_currencies) { this.currencies = p_currencies; }
	getCurrencies() { if('currencies' in this) {return this.currencies;} }
	setPublicClientKey(p_publicClientKey) { this.publicClientKey = p_publicClientKey; }
	getPublicClientKey() { if('publicClientKey' in this) {return this.publicClientKey;} }
	setBusinessInformation(p_businessInformation) { this.businessInformation = p_businessInformation; }
	getBusinessInformation() { if('businessInformation' in this) {return this.businessInformation;} }
	setMerchantTimeZone(p_merchantTimeZone) { this.merchantTimeZone = p_merchantTimeZone; }
	getMerchantTimeZone() { if('merchantTimeZone' in this) {return this.merchantTimeZone;} }
	setContactDetails(p_contactDetails) { this.contactDetails = p_contactDetails; }
	getContactDetails() { if('contactDetails' in this) {return this.contactDetails;} }
}

module.exports.GetMerchantDetailsResponse = GetMerchantDetailsResponse;

class GetSettledBatchListRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetSettledBatchListRequest');
		logger.debug('Enter GetSettledBatchListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getSettledBatchListRequest' : this };
		logger.debug('Exit GetSettledBatchListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetSettledBatchListRequest');
		logger.debug('Enter GetSettledBatchListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('includeStatistics' in obj) && (obj.includeStatistics != null)) { this.setIncludeStatistics(obj.includeStatistics); }
			if(('firstSettlementDate' in obj) && (obj.firstSettlementDate != null)) { this.setFirstSettlementDate(obj.firstSettlementDate); }
			if(('lastSettlementDate' in obj) && (obj.lastSettlementDate != null)) { this.setLastSettlementDate(obj.lastSettlementDate); }
		}
		else {
			super();
			this.setIncludeStatistics(null);
			this.setFirstSettlementDate(null);
			this.setLastSettlementDate(null);
		}
		logger.debug('Exit GetSettledBatchListRequest constructor');
	}

	setIncludeStatistics(p_includeStatistics) { this.includeStatistics = p_includeStatistics; }
	getIncludeStatistics() { if('includeStatistics' in this) {return this.includeStatistics;} }
	setFirstSettlementDate(p_firstSettlementDate) { this.firstSettlementDate = p_firstSettlementDate; }
	getFirstSettlementDate() { if('firstSettlementDate' in this) {return this.firstSettlementDate;} }
	setLastSettlementDate(p_lastSettlementDate) { this.lastSettlementDate = p_lastSettlementDate; }
	getLastSettlementDate() { if('lastSettlementDate' in this) {return this.lastSettlementDate;} }
}

module.exports.GetSettledBatchListRequest = GetSettledBatchListRequest;

class GetSettledBatchListResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetSettledBatchListResponse');
		logger.debug('Enter GetSettledBatchListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getSettledBatchListResponse' : this };
		logger.debug('Exit GetSettledBatchListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetSettledBatchListResponse');
		logger.debug('Enter GetSettledBatchListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchList' in obj) && (obj.batchList != null)) { this.setBatchList(new ArrayOfBatchDetailsType(obj.batchList)); }
		}
		else {
			super();
			this.setBatchList(null);
		}
		logger.debug('Exit GetSettledBatchListResponse constructor');
	}

	setBatchList(p_batchList) { this.batchList = p_batchList; }
	getBatchList() { if('batchList' in this) {return this.batchList;} }
}

module.exports.GetSettledBatchListResponse = GetSettledBatchListResponse;

class GetTransactionDetailsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetTransactionDetailsRequest');
		logger.debug('Enter GetTransactionDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionDetailsRequest' : this };
		logger.debug('Exit GetTransactionDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetTransactionDetailsRequest');
		logger.debug('Enter GetTransactionDetailsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setTransId(null);
		}
		logger.debug('Exit GetTransactionDetailsRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
}

module.exports.GetTransactionDetailsRequest = GetTransactionDetailsRequest;

class GetTransactionDetailsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetTransactionDetailsResponse');
		logger.debug('Enter GetTransactionDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionDetailsResponse' : this };
		logger.debug('Exit GetTransactionDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetTransactionDetailsResponse');
		logger.debug('Enter GetTransactionDetailsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transaction' in obj) && (obj.transaction != null)) { this.setTransaction(new TransactionDetailsType(obj.transaction)); }
			if(('clientId' in obj) && (obj.clientId != null)) { this.setClientId(obj.clientId); }
			if(('transrefId' in obj) && (obj.transrefId != null)) { this.setTransrefId(obj.transrefId); }
		}
		else {
			super();
			this.setTransaction(null);
			this.setClientId(null);
			this.setTransrefId(null);
		}
		logger.debug('Exit GetTransactionDetailsResponse constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { if('transaction' in this) {return this.transaction;} }
	setClientId(p_clientId) { this.clientId = p_clientId; }
	getClientId() { if('clientId' in this) {return this.clientId;} }
	setTransrefId(p_transrefId) { this.transrefId = p_transrefId; }
	getTransrefId() { if('transrefId' in this) {return this.transrefId;} }
}

module.exports.GetTransactionDetailsResponse = GetTransactionDetailsResponse;

class GetTransactionListForCustomerRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetTransactionListForCustomerRequest');
		logger.debug('Enter GetTransactionListForCustomerRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionListForCustomerRequest' : this };
		logger.debug('Exit GetTransactionListForCustomerRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetTransactionListForCustomerRequest');
		logger.debug('Enter GetTransactionListForCustomerRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new TransactionListSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetTransactionListForCustomerRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { if('sorting' in this) {return this.sorting;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.GetTransactionListForCustomerRequest = GetTransactionListForCustomerRequest;

class GetTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetTransactionListRequest');
		logger.debug('Enter GetTransactionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionListRequest' : this };
		logger.debug('Exit GetTransactionListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetTransactionListRequest');
		logger.debug('Enter GetTransactionListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new TransactionListSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setBatchId(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetTransactionListRequest constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { if('batchId' in this) {return this.batchId;} }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { if('sorting' in this) {return this.sorting;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.GetTransactionListRequest = GetTransactionListRequest;

class GetTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetTransactionListResponse');
		logger.debug('Enter GetTransactionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionListResponse' : this };
		logger.debug('Exit GetTransactionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetTransactionListResponse');
		logger.debug('Enter GetTransactionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactions' in obj) && (obj.transactions != null)) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
		}
		else {
			super();
			this.setTransactions(null);
			this.setTotalNumInResultSet(null);
		}
		logger.debug('Exit GetTransactionListResponse constructor');
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions() { if('transactions' in this) {return this.transactions;} }
	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { if('totalNumInResultSet' in this) {return this.totalNumInResultSet;} }
}

module.exports.GetTransactionListResponse = GetTransactionListResponse;

class GetUnsettledTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('GetUnsettledTransactionListRequest');
		logger.debug('Enter GetUnsettledTransactionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getUnsettledTransactionListRequest' : this };
		logger.debug('Exit GetUnsettledTransactionListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetUnsettledTransactionListRequest');
		logger.debug('Enter GetUnsettledTransactionListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new TransactionListSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setStatus(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetUnsettledTransactionListRequest constructor');
	}

	setStatus(p_status) { this.status = p_status; }
	getStatus() { if('status' in this) {return this.status;} }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { if('sorting' in this) {return this.sorting;} }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { if('paging' in this) {return this.paging;} }
}

module.exports.GetUnsettledTransactionListRequest = GetUnsettledTransactionListRequest;

class GetUnsettledTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('GetUnsettledTransactionListResponse');
		logger.debug('Enter GetUnsettledTransactionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getUnsettledTransactionListResponse' : this };
		logger.debug('Exit GetUnsettledTransactionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('GetUnsettledTransactionListResponse');
		logger.debug('Enter GetUnsettledTransactionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactions' in obj) && (obj.transactions != null)) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
		}
		else {
			super();
			this.setTransactions(null);
			this.setTotalNumInResultSet(null);
		}
		logger.debug('Exit GetUnsettledTransactionListResponse constructor');
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions() { if('transactions' in this) {return this.transactions;} }
	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { if('totalNumInResultSet' in this) {return this.totalNumInResultSet;} }
}

module.exports.GetUnsettledTransactionListResponse = GetUnsettledTransactionListResponse;

class IsAliveResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('IsAliveResponse');
		logger.debug('Enter IsAliveResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'isAliveResponse' : this };
		logger.debug('Exit IsAliveResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.IsAliveResponse = IsAliveResponse;

class LogoutRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('LogoutRequest');
		logger.debug('Enter LogoutRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'logoutRequest' : this };
		logger.debug('Exit LogoutRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutRequest = LogoutRequest;

class LogoutResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('LogoutResponse');
		logger.debug('Enter LogoutResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'logoutResponse' : this };
		logger.debug('Exit LogoutResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutResponse = LogoutResponse;

class MobileDeviceLoginRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('MobileDeviceLoginRequest');
		logger.debug('Enter MobileDeviceLoginRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceLoginRequest' : this };
		logger.debug('Exit MobileDeviceLoginRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceLoginRequest = MobileDeviceLoginRequest;

class MobileDeviceLoginResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('MobileDeviceLoginResponse');
		logger.debug('Enter MobileDeviceLoginResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceLoginResponse' : this };
		logger.debug('Exit MobileDeviceLoginResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('MobileDeviceLoginResponse');
		logger.debug('Enter MobileDeviceLoginResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('merchantContact' in obj) && (obj.merchantContact != null)) { this.setMerchantContact(new MerchantContactType(obj.merchantContact)); }
			if(('userPermissions' in obj) && (obj.userPermissions != null)) { this.setUserPermissions(new ArrayOfPermissionType(obj.userPermissions)); }
			if(('merchantAccount' in obj) && (obj.merchantAccount != null)) { this.setMerchantAccount(new TransRetailInfoType(obj.merchantAccount)); }
		}
		else {
			super();
			this.setMerchantContact(null);
			this.setUserPermissions(null);
			this.setMerchantAccount(null);
		}
		logger.debug('Exit MobileDeviceLoginResponse constructor');
	}

	setMerchantContact(p_merchantContact) { this.merchantContact = p_merchantContact; }
	getMerchantContact() { if('merchantContact' in this) {return this.merchantContact;} }
	setUserPermissions(p_userPermissions) { this.userPermissions = p_userPermissions; }
	getUserPermissions() { if('userPermissions' in this) {return this.userPermissions;} }
	setMerchantAccount(p_merchantAccount) { this.merchantAccount = p_merchantAccount; }
	getMerchantAccount() { if('merchantAccount' in this) {return this.merchantAccount;} }
}

module.exports.MobileDeviceLoginResponse = MobileDeviceLoginResponse;

class MobileDeviceRegistrationRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('MobileDeviceRegistrationRequest');
		logger.debug('Enter MobileDeviceRegistrationRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceRegistrationRequest' : this };
		logger.debug('Exit MobileDeviceRegistrationRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('MobileDeviceRegistrationRequest');
		logger.debug('Enter MobileDeviceRegistrationRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('mobileDevice' in obj) && (obj.mobileDevice != null)) { this.setMobileDevice(new MobileDeviceType(obj.mobileDevice)); }
		}
		else {
			super();
			this.setMobileDevice(null);
		}
		logger.debug('Exit MobileDeviceRegistrationRequest constructor');
	}

	setMobileDevice(p_mobileDevice) { this.mobileDevice = p_mobileDevice; }
	getMobileDevice() { if('mobileDevice' in this) {return this.mobileDevice;} }
}

module.exports.MobileDeviceRegistrationRequest = MobileDeviceRegistrationRequest;

class MobileDeviceRegistrationResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('MobileDeviceRegistrationResponse');
		logger.debug('Enter MobileDeviceRegistrationResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceRegistrationResponse' : this };
		logger.debug('Exit MobileDeviceRegistrationResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceRegistrationResponse = MobileDeviceRegistrationResponse;

class OrderExType extends OrderType {
	constructor(obj) {
		var logger = Logger.getLogger('OrderExType');
		logger.debug('Enter OrderExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('purchaseOrderNumber' in obj) && (obj.purchaseOrderNumber != null)) { this.setPurchaseOrderNumber(obj.purchaseOrderNumber); }
		}
		else {
			super();
			this.setPurchaseOrderNumber(null);
		}
		logger.debug('Exit OrderExType constructor');
	}

	setPurchaseOrderNumber(p_purchaseOrderNumber) { this.purchaseOrderNumber = p_purchaseOrderNumber; }
	getPurchaseOrderNumber() { if('purchaseOrderNumber' in this) {return this.purchaseOrderNumber;} }
}

module.exports.OrderExType = OrderExType;

class ProfileTransOrderType extends ProfileTransAmountType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransOrderType');
		logger.debug('Enter ProfileTransOrderType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('recurringBilling' in obj) && (obj.recurringBilling != null)) { this.setRecurringBilling(obj.recurringBilling); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('processingOptions' in obj) && (obj.processingOptions != null)) { this.setProcessingOptions(new ProcessingOptions(obj.processingOptions)); }
			if(('subsequentAuthInformation' in obj) && (obj.subsequentAuthInformation != null)) { this.setSubsequentAuthInformation(new SubsequentAuthInformation(obj.subsequentAuthInformation)); }
			if(('authorizationIndicatorType' in obj) && (obj.authorizationIndicatorType != null)) { this.setAuthorizationIndicatorType(new AuthorizationIndicatorType(obj.authorizationIndicatorType)); }
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
			this.setProcessingOptions(null);
			this.setSubsequentAuthInformation(null);
			this.setAuthorizationIndicatorType(null);
		}
		logger.debug('Exit ProfileTransOrderType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { if('customerShippingAddressId' in this) {return this.customerShippingAddressId;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { if('taxExempt' in this) {return this.taxExempt;} }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling() { if('recurringBilling' in this) {return this.recurringBilling;} }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { if('cardCode' in this) {return this.cardCode;} }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { if('splitTenderId' in this) {return this.splitTenderId;} }
	setProcessingOptions(p_processingOptions) { this.processingOptions = p_processingOptions; }
	getProcessingOptions() { if('processingOptions' in this) {return this.processingOptions;} }
	setSubsequentAuthInformation(p_subsequentAuthInformation) { this.subsequentAuthInformation = p_subsequentAuthInformation; }
	getSubsequentAuthInformation() { if('subsequentAuthInformation' in this) {return this.subsequentAuthInformation;} }
	setAuthorizationIndicatorType(p_authorizationIndicatorType) { this.authorizationIndicatorType = p_authorizationIndicatorType; }
	getAuthorizationIndicatorType() { if('authorizationIndicatorType' in this) {return this.authorizationIndicatorType;} }
}

module.exports.ProfileTransOrderType = ProfileTransOrderType;

class ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransPriorAuthCaptureType');
		logger.debug('Enter ProfileTransPriorAuthCaptureType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransPriorAuthCaptureType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { if('customerShippingAddressId' in this) {return this.customerShippingAddressId;} }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
}

module.exports.ProfileTransPriorAuthCaptureType = ProfileTransPriorAuthCaptureType;

class ProfileTransRefundType extends ProfileTransAmountType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransRefundType');
		logger.debug('Enter ProfileTransRefundType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('creditCardNumberMasked' in obj) && (obj.creditCardNumberMasked != null)) { this.setCreditCardNumberMasked(obj.creditCardNumberMasked); }
			if(('bankRoutingNumberMasked' in obj) && (obj.bankRoutingNumberMasked != null)) { this.setBankRoutingNumberMasked(obj.bankRoutingNumberMasked); }
			if(('bankAccountNumberMasked' in obj) && (obj.bankAccountNumberMasked != null)) { this.setBankAccountNumberMasked(obj.bankAccountNumberMasked); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
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
		logger.debug('Exit ProfileTransRefundType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { if('customerShippingAddressId' in this) {return this.customerShippingAddressId;} }
	setCreditCardNumberMasked(p_creditCardNumberMasked) { this.creditCardNumberMasked = p_creditCardNumberMasked; }
	getCreditCardNumberMasked() { if('creditCardNumberMasked' in this) {return this.creditCardNumberMasked;} }
	setBankRoutingNumberMasked(p_bankRoutingNumberMasked) { this.bankRoutingNumberMasked = p_bankRoutingNumberMasked; }
	getBankRoutingNumberMasked() { if('bankRoutingNumberMasked' in this) {return this.bankRoutingNumberMasked;} }
	setBankAccountNumberMasked(p_bankAccountNumberMasked) { this.bankAccountNumberMasked = p_bankAccountNumberMasked; }
	getBankAccountNumberMasked() { if('bankAccountNumberMasked' in this) {return this.bankAccountNumberMasked;} }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { if('order' in this) {return this.order;} }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
}

module.exports.ProfileTransRefundType = ProfileTransRefundType;

class SecurePaymentContainerRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('SecurePaymentContainerRequest');
		logger.debug('Enter SecurePaymentContainerRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'securePaymentContainerRequest' : this };
		logger.debug('Exit SecurePaymentContainerRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('SecurePaymentContainerRequest');
		logger.debug('Enter SecurePaymentContainerRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('data' in obj) && (obj.data != null)) { this.setData(new WebCheckOutDataType(obj.data)); }
		}
		else {
			super();
			this.setData(null);
		}
		logger.debug('Exit SecurePaymentContainerRequest constructor');
	}

	setData(p_data) { this.data = p_data; }
	getData() { if('data' in this) {return this.data;} }
}

module.exports.SecurePaymentContainerRequest = SecurePaymentContainerRequest;

class SecurePaymentContainerResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('SecurePaymentContainerResponse');
		logger.debug('Enter SecurePaymentContainerResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'securePaymentContainerResponse' : this };
		logger.debug('Exit SecurePaymentContainerResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('SecurePaymentContainerResponse');
		logger.debug('Enter SecurePaymentContainerResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
		}
		else {
			super();
			this.setOpaqueData(null);
		}
		logger.debug('Exit SecurePaymentContainerResponse constructor');
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { if('opaqueData' in this) {return this.opaqueData;} }
}

module.exports.SecurePaymentContainerResponse = SecurePaymentContainerResponse;

class SendCustomerTransactionReceiptRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('SendCustomerTransactionReceiptRequest');
		logger.debug('Enter SendCustomerTransactionReceiptRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'sendCustomerTransactionReceiptRequest' : this };
		logger.debug('Exit SendCustomerTransactionReceiptRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('SendCustomerTransactionReceiptRequest');
		logger.debug('Enter SendCustomerTransactionReceiptRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('customerEmail' in obj) && (obj.customerEmail != null)) { this.setCustomerEmail(obj.customerEmail); }
			if(('emailSettings' in obj) && (obj.emailSettings != null)) { this.setEmailSettings(new EmailSettingsType(obj.emailSettings)); }
		}
		else {
			super();
			this.setTransId(null);
			this.setCustomerEmail(null);
			this.setEmailSettings(null);
		}
		logger.debug('Exit SendCustomerTransactionReceiptRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { if('transId' in this) {return this.transId;} }
	setCustomerEmail(p_customerEmail) { this.customerEmail = p_customerEmail; }
	getCustomerEmail() { if('customerEmail' in this) {return this.customerEmail;} }
	setEmailSettings(p_emailSettings) { this.emailSettings = p_emailSettings; }
	getEmailSettings() { if('emailSettings' in this) {return this.emailSettings;} }
}

module.exports.SendCustomerTransactionReceiptRequest = SendCustomerTransactionReceiptRequest;

class SendCustomerTransactionReceiptResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('SendCustomerTransactionReceiptResponse');
		logger.debug('Enter SendCustomerTransactionReceiptResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'sendCustomerTransactionReceiptResponse' : this };
		logger.debug('Exit SendCustomerTransactionReceiptResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.SendCustomerTransactionReceiptResponse = SendCustomerTransactionReceiptResponse;

class UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerPaymentProfileRequest');
		logger.debug('Enter UpdateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerPaymentProfileRequest' : this };
		logger.debug('Exit UpdateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateCustomerPaymentProfileRequest');
		logger.debug('Enter UpdateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileExType(obj.paymentProfile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { if('validationMode' in this) {return this.validationMode;} }
}

module.exports.UpdateCustomerPaymentProfileRequest = UpdateCustomerPaymentProfileRequest;

class UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerPaymentProfileResponse');
		logger.debug('Enter UpdateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerPaymentProfileResponse' : this };
		logger.debug('Exit UpdateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateCustomerPaymentProfileResponse');
		logger.debug('Enter UpdateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('validationDirectResponse' in obj) && (obj.validationDirectResponse != null)) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setValidationDirectResponse(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileResponse constructor');
	}

	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse() { if('validationDirectResponse' in this) {return this.validationDirectResponse;} }
}

module.exports.UpdateCustomerPaymentProfileResponse = UpdateCustomerPaymentProfileResponse;

class UpdateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerProfileRequest');
		logger.debug('Enter UpdateCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerProfileRequest' : this };
		logger.debug('Exit UpdateCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateCustomerProfileRequest');
		logger.debug('Enter UpdateCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileInfoExType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
		logger.debug('Exit UpdateCustomerProfileRequest constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { if('profile' in this) {return this.profile;} }
}

module.exports.UpdateCustomerProfileRequest = UpdateCustomerProfileRequest;

class UpdateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerProfileResponse');
		logger.debug('Enter UpdateCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerProfileResponse' : this };
		logger.debug('Exit UpdateCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerProfileResponse = UpdateCustomerProfileResponse;

class UpdateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerShippingAddressRequest');
		logger.debug('Enter UpdateCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerShippingAddressRequest' : this };
		logger.debug('Exit UpdateCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateCustomerShippingAddressRequest');
		logger.debug('Enter UpdateCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressExType(obj.address)); }
			if(('defaultShippingAddress' in obj) && (obj.defaultShippingAddress != null)) { this.setDefaultShippingAddress(obj.defaultShippingAddress); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
			this.setDefaultShippingAddress(null);
		}
		logger.debug('Exit UpdateCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { if('address' in this) {return this.address;} }
	setDefaultShippingAddress(p_defaultShippingAddress) { this.defaultShippingAddress = p_defaultShippingAddress; }
	getDefaultShippingAddress() { if('defaultShippingAddress' in this) {return this.defaultShippingAddress;} }
}

module.exports.UpdateCustomerShippingAddressRequest = UpdateCustomerShippingAddressRequest;

class UpdateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateCustomerShippingAddressResponse');
		logger.debug('Enter UpdateCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerShippingAddressResponse' : this };
		logger.debug('Exit UpdateCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerShippingAddressResponse = UpdateCustomerShippingAddressResponse;

class UpdateHeldTransactionRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateHeldTransactionRequest');
		logger.debug('Enter UpdateHeldTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateHeldTransactionRequest' : this };
		logger.debug('Exit UpdateHeldTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateHeldTransactionRequest');
		logger.debug('Enter UpdateHeldTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('heldTransactionRequest' in obj) && (obj.heldTransactionRequest != null)) { this.setHeldTransactionRequest(new HeldTransactionRequestType(obj.heldTransactionRequest)); }
		}
		else {
			super();
			this.setHeldTransactionRequest(null);
		}
		logger.debug('Exit UpdateHeldTransactionRequest constructor');
	}

	setHeldTransactionRequest(p_heldTransactionRequest) { this.heldTransactionRequest = p_heldTransactionRequest; }
	getHeldTransactionRequest() { if('heldTransactionRequest' in this) {return this.heldTransactionRequest;} }
}

module.exports.UpdateHeldTransactionRequest = UpdateHeldTransactionRequest;

class UpdateHeldTransactionResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateHeldTransactionResponse');
		logger.debug('Enter UpdateHeldTransactionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateHeldTransactionResponse' : this };
		logger.debug('Exit UpdateHeldTransactionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateHeldTransactionResponse');
		logger.debug('Enter UpdateHeldTransactionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionResponse' in obj) && (obj.transactionResponse != null)) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
		}
		else {
			super();
			this.setTransactionResponse(null);
		}
		logger.debug('Exit UpdateHeldTransactionResponse constructor');
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse() { if('transactionResponse' in this) {return this.transactionResponse;} }
}

module.exports.UpdateHeldTransactionResponse = UpdateHeldTransactionResponse;

class UpdateMerchantDetailsRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateMerchantDetailsRequest');
		logger.debug('Enter UpdateMerchantDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateMerchantDetailsRequest' : this };
		logger.debug('Exit UpdateMerchantDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateMerchantDetailsRequest');
		logger.debug('Enter UpdateMerchantDetailsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('isTestMode' in obj) && (obj.isTestMode != null)) { this.setIsTestMode(obj.isTestMode); }
		}
		else {
			super();
			this.setIsTestMode(null);
		}
		logger.debug('Exit UpdateMerchantDetailsRequest constructor');
	}

	setIsTestMode(p_isTestMode) { this.isTestMode = p_isTestMode; }
	getIsTestMode() { if('isTestMode' in this) {return this.isTestMode;} }
}

module.exports.UpdateMerchantDetailsRequest = UpdateMerchantDetailsRequest;

class UpdateMerchantDetailsResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateMerchantDetailsResponse');
		logger.debug('Enter UpdateMerchantDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateMerchantDetailsResponse' : this };
		logger.debug('Exit UpdateMerchantDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateMerchantDetailsResponse = UpdateMerchantDetailsResponse;

class UpdateSplitTenderGroupRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('UpdateSplitTenderGroupRequest');
		logger.debug('Enter UpdateSplitTenderGroupRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateSplitTenderGroupRequest' : this };
		logger.debug('Exit UpdateSplitTenderGroupRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('UpdateSplitTenderGroupRequest');
		logger.debug('Enter UpdateSplitTenderGroupRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('splitTenderStatus' in obj) && (obj.splitTenderStatus != null)) { this.setSplitTenderStatus(obj.splitTenderStatus); }
		}
		else {
			super();
			this.setSplitTenderId(null);
			this.setSplitTenderStatus(null);
		}
		logger.debug('Exit UpdateSplitTenderGroupRequest constructor');
	}

	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { if('splitTenderId' in this) {return this.splitTenderId;} }
	setSplitTenderStatus(p_splitTenderStatus) { this.splitTenderStatus = p_splitTenderStatus; }
	getSplitTenderStatus() { if('splitTenderStatus' in this) {return this.splitTenderStatus;} }
}

module.exports.UpdateSplitTenderGroupRequest = UpdateSplitTenderGroupRequest;

class UpdateSplitTenderGroupResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('UpdateSplitTenderGroupResponse');
		logger.debug('Enter UpdateSplitTenderGroupResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateSplitTenderGroupResponse' : this };
		logger.debug('Exit UpdateSplitTenderGroupResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateSplitTenderGroupResponse = UpdateSplitTenderGroupResponse;

class ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		var logger = Logger.getLogger('ValidateCustomerPaymentProfileRequest');
		logger.debug('Enter ValidateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'validateCustomerPaymentProfileRequest' : this };
		logger.debug('Exit ValidateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ValidateCustomerPaymentProfileRequest');
		logger.debug('Enter ValidateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setCardCode(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { if('customerProfileId' in this) {return this.customerProfileId;} }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { if('customerShippingAddressId' in this) {return this.customerShippingAddressId;} }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { if('cardCode' in this) {return this.cardCode;} }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { if('validationMode' in this) {return this.validationMode;} }
}

module.exports.ValidateCustomerPaymentProfileRequest = ValidateCustomerPaymentProfileRequest;

class ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		var logger = Logger.getLogger('ValidateCustomerPaymentProfileResponse');
		logger.debug('Enter ValidateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'validateCustomerPaymentProfileResponse' : this };
		logger.debug('Exit ValidateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		var logger = Logger.getLogger('ValidateCustomerPaymentProfileResponse');
		logger.debug('Enter ValidateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('directResponse' in obj) && (obj.directResponse != null)) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setDirectResponse(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileResponse constructor');
	}

	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse() { if('directResponse' in this) {return this.directResponse;} }
}

module.exports.ValidateCustomerPaymentProfileResponse = ValidateCustomerPaymentProfileResponse;

class CustomerAddressExType extends CustomerAddressType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerAddressExType');
		logger.debug('Enter CustomerAddressExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerAddressExType constructor');
	}

	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { if('customerAddressId' in this) {return this.customerAddressId;} }
}

module.exports.CustomerAddressExType = CustomerAddressExType;

class CustomerPaymentProfileExType extends CustomerPaymentProfileType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerPaymentProfileExType');
		logger.debug('Enter CustomerPaymentProfileExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit CustomerPaymentProfileExType constructor');
	}

	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { if('customerPaymentProfileId' in this) {return this.customerPaymentProfileId;} }
}

module.exports.CustomerPaymentProfileExType = CustomerPaymentProfileExType;

class CustomerProfileInfoExType extends CustomerProfileExType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileInfoExType');
		logger.debug('Enter CustomerProfileInfoExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profileType' in obj) && (obj.profileType != null)) { this.setProfileType(obj.profileType); }
		}
		else {
			super();
			this.setProfileType(null);
		}
		logger.debug('Exit CustomerProfileInfoExType constructor');
	}

	setProfileType(p_profileType) { this.profileType = p_profileType; }
	getProfileType() { if('profileType' in this) {return this.profileType;} }
}

module.exports.CustomerProfileInfoExType = CustomerProfileInfoExType;

class CustomerProfileMaskedType extends CustomerProfileExType {
	constructor(obj) {
		var logger = Logger.getLogger('CustomerProfileMaskedType');
		logger.debug('Enter CustomerProfileMaskedType constructor');
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileMaskedType(item));}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressExType(item));}); 
				this.setShipToList(shipToListList);
			}
			if(('profileType' in obj) && (obj.profileType != null)) { this.setProfileType(obj.profileType); }
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
			this.setProfileType(null);
		}
		logger.debug('Exit CustomerProfileMaskedType constructor');
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { if('paymentProfiles' in this) {return this.paymentProfiles;} }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList() { if('shipToList' in this) {return this.shipToList;} }
	setProfileType(p_profileType) { this.profileType = p_profileType; }
	getProfileType() { if('profileType' in this) {return this.profileType;} }
}

module.exports.CustomerProfileMaskedType = CustomerProfileMaskedType;

class ProfileTransAuthCaptureType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthCaptureType = ProfileTransAuthCaptureType;

class ProfileTransAuthOnlyType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthOnlyType = ProfileTransAuthOnlyType;

class ProfileTransCaptureOnlyType extends ProfileTransOrderType {
	constructor(obj) {
		var logger = Logger.getLogger('ProfileTransCaptureOnlyType');
		logger.debug('Enter ProfileTransCaptureOnlyType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('approvalCode' in obj) && (obj.approvalCode != null)) { this.setApprovalCode(obj.approvalCode); }
		}
		else {
			super();
			this.setApprovalCode(null);
		}
		logger.debug('Exit ProfileTransCaptureOnlyType constructor');
	}

	setApprovalCode(p_approvalCode) { this.approvalCode = p_approvalCode; }
	getApprovalCode() { if('approvalCode' in this) {return this.approvalCode;} }
}

module.exports.ProfileTransCaptureOnlyType = ProfileTransCaptureOnlyType;

class SubscriptionCustomerProfileType extends CustomerProfileExType {
	constructor(obj) {
		var logger = Logger.getLogger('SubscriptionCustomerProfileType');
		logger.debug('Enter SubscriptionCustomerProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
			if(('shippingProfile' in obj) && (obj.shippingProfile != null)) { this.setShippingProfile(new CustomerAddressExType(obj.shippingProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
			this.setShippingProfile(null);
		}
		logger.debug('Exit SubscriptionCustomerProfileType constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { if('paymentProfile' in this) {return this.paymentProfile;} }
	setShippingProfile(p_shippingProfile) { this.shippingProfile = p_shippingProfile; }
	getShippingProfile() { if('shippingProfile' in this) {return this.shippingProfile;} }
}

module.exports.SubscriptionCustomerProfileType = SubscriptionCustomerProfileType;

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
};
module.exports.ARBGetSubscriptionListOrderFieldEnum = ARBGetSubscriptionListOrderFieldEnum;

const ARBGetSubscriptionListSearchTypeEnum = { 
	CARDEXPIRINGTHISMONTH : 'cardExpiringThisMonth',
	SUBSCRIPTIONACTIVE : 'subscriptionActive',
	SUBSCRIPTIONEXPIRINGTHISMONTH : 'subscriptionExpiringThisMonth',
	SUBSCRIPTIONINACTIVE : 'subscriptionInactive'
};
module.exports.ARBGetSubscriptionListSearchTypeEnum = ARBGetSubscriptionListSearchTypeEnum;

const ARBSubscriptionStatusEnum = { 
	ACTIVE : 'active',
	EXPIRED : 'expired',
	SUSPENDED : 'suspended',
	CANCELED : 'canceled',
	TERMINATED : 'terminated'
};
module.exports.ARBSubscriptionStatusEnum = ARBSubscriptionStatusEnum;

const ARBSubscriptionUnitEnum = { 
	DAYS : 'days',
	MONTHS : 'months'
};
module.exports.ARBSubscriptionUnitEnum = ARBSubscriptionUnitEnum;

const AUJobTypeEnum = { 
	ALL : 'all',
	UPDATES : 'updates',
	DELETES : 'deletes'
};
module.exports.AUJobTypeEnum = AUJobTypeEnum;

const AccountTypeEnum = { 
	VISA : 'Visa',
	MASTERCARD : 'MasterCard',
	AMERICANEXPRESS : 'AmericanExpress',
	DISCOVER : 'Discover',
	JCB : 'JCB',
	DINERSCLUB : 'DinersClub',
	ECHECK : 'eCheck'
};
module.exports.AccountTypeEnum = AccountTypeEnum;

const AfdsTransactionEnum = { 
	APPROVE : 'approve',
	DECLINE : 'decline'
};
module.exports.AfdsTransactionEnum = AfdsTransactionEnum;

const AuthIndicatorEnum = { 
	PRE : 'pre',
	FINAL : 'final'
};
module.exports.AuthIndicatorEnum = AuthIndicatorEnum;

const BankAccountTypeEnum = { 
	CHECKING : 'checking',
	SAVINGS : 'savings',
	BUSINESSCHECKING : 'businessChecking'
};
module.exports.BankAccountTypeEnum = BankAccountTypeEnum;

const CardTypeEnum = { 
	VISA : 'Visa',
	MASTERCARD : 'MasterCard',
	AMERICANEXPRESS : 'AmericanExpress',
	DISCOVER : 'Discover',
	JCB : 'JCB',
	DINERSCLUB : 'DinersClub'
};
module.exports.CardTypeEnum = CardTypeEnum;

const CustomerPaymentProfileOrderFieldEnum = { 
	ID : 'id'
};
module.exports.CustomerPaymentProfileOrderFieldEnum = CustomerPaymentProfileOrderFieldEnum;

const CustomerPaymentProfileSearchTypeEnum = { 
	CARDSEXPIRINGINMONTH : 'cardsExpiringInMonth'
};
module.exports.CustomerPaymentProfileSearchTypeEnum = CustomerPaymentProfileSearchTypeEnum;

const CustomerProfileTypeEnum = { 
	REGULAR : 'regular',
	GUEST : 'guest'
};
module.exports.CustomerProfileTypeEnum = CustomerProfileTypeEnum;

const CustomerTypeEnum = { 
	INDIVIDUAL : 'individual',
	BUSINESS : 'business'
};
module.exports.CustomerTypeEnum = CustomerTypeEnum;

const DeviceActivationEnum = { 
	ACTIVATE : 'Activate',
	DISABLE : 'Disable'
};
module.exports.DeviceActivationEnum = DeviceActivationEnum;

const EcheckTypeEnum = { 
	PPD : 'PPD',
	WEB : 'WEB',
	CCD : 'CCD',
	TEL : 'TEL',
	ARC : 'ARC',
	BOC : 'BOC'
};
module.exports.EcheckTypeEnum = EcheckTypeEnum;

const EncodingType = { 
	BASE64 : 'Base64',
	HEX : 'Hex'
};
module.exports.EncodingType = EncodingType;

const EncryptionAlgorithmType = { 
	TDES : 'TDES',
	AES : 'AES',
	RSA : 'RSA'
};
module.exports.EncryptionAlgorithmType = EncryptionAlgorithmType;

const FDSFilterActionEnum = { 
	REJECT : 'reject',
	DECLINE : 'decline',
	HOLD : 'hold',
	AUTHANDHOLD : 'authAndHold',
	REPORT : 'report'
};
module.exports.FDSFilterActionEnum = FDSFilterActionEnum;

const MerchantInitTransReasonEnum = { 
	RESUBMISSION : 'resubmission',
	DELAYEDCHARGE : 'delayedCharge',
	REAUTHORIZATION : 'reauthorization',
	NOSHOW : 'noShow'
};
module.exports.MerchantInitTransReasonEnum = MerchantInitTransReasonEnum;

const MessageTypeEnum = { 
	OK : 'Ok',
	ERROR : 'Error'
};
module.exports.MessageTypeEnum = MessageTypeEnum;

const OperationType = { 
	DECRYPT : 'DECRYPT'
};
module.exports.OperationType = OperationType;

const PaymentMethodEnum = { 
	CREDITCARD : 'creditCard',
	ECHECK : 'eCheck',
	PAYPAL : 'payPal'
};
module.exports.PaymentMethodEnum = PaymentMethodEnum;

const PaymentMethodsTypeEnum = { 
	VISA : 'Visa',
	MASTERCARD : 'MasterCard',
	DISCOVER : 'Discover',
	AMERICANEXPRESS : 'AmericanExpress',
	DINERSCLUB : 'DinersClub',
	JCB : 'JCB',
	ENROUTE : 'EnRoute',
	ECHECK : 'Echeck',
	PAYPAL : 'Paypal',
	VISACHECKOUT : 'VisaCheckout',
	APPLEPAY : 'ApplePay',
	ANDROIDPAY : 'AndroidPay',
	GOOGLEPAY : 'GooglePay'
};
module.exports.PaymentMethodsTypeEnum = PaymentMethodsTypeEnum;

const PermissionsEnum = { 
	API_MERCHANT_BASICREPORTING : 'API_Merchant_BasicReporting',
	SUBMIT_CHARGE : 'Submit_Charge',
	SUBMIT_REFUND : 'Submit_Refund',
	SUBMIT_UPDATE : 'Submit_Update',
	MOBILE_ADMIN : 'Mobile_Admin'
};
module.exports.PermissionsEnum = PermissionsEnum;

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
	HOSTEDPROFILECARDCODEREQUIRED : 'hostedProfileCardCodeRequired',
	HOSTEDPROFILEBILLINGADDRESSOPTIONS : 'hostedProfileBillingAddressOptions',
	HOSTEDPROFILEMANAGEOPTIONS : 'hostedProfileManageOptions',
	HOSTEDPAYMENTIFRAMECOMMUNICATORURL : 'hostedPaymentIFrameCommunicatorUrl',
	HOSTEDPAYMENTBUTTONOPTIONS : 'hostedPaymentButtonOptions',
	HOSTEDPAYMENTRETURNOPTIONS : 'hostedPaymentReturnOptions',
	HOSTEDPAYMENTORDEROPTIONS : 'hostedPaymentOrderOptions',
	HOSTEDPAYMENTPAYMENTOPTIONS : 'hostedPaymentPaymentOptions',
	HOSTEDPAYMENTBILLINGADDRESSOPTIONS : 'hostedPaymentBillingAddressOptions',
	HOSTEDPAYMENTSHIPPINGADDRESSOPTIONS : 'hostedPaymentShippingAddressOptions',
	HOSTEDPAYMENTSECURITYOPTIONS : 'hostedPaymentSecurityOptions',
	HOSTEDPAYMENTCUSTOMEROPTIONS : 'hostedPaymentCustomerOptions',
	HOSTEDPAYMENTSTYLEOPTIONS : 'hostedPaymentStyleOptions',
	TYPEEMAILRECEIPT : 'typeEmailReceipt',
	HOSTEDPROFILEPAYMENTOPTIONS : 'hostedProfilePaymentOptions',
	HOSTEDPROFILESAVEBUTTONTEXT : 'hostedProfileSaveButtonText',
	HOSTEDPAYMENTVISACHECKOUTOPTIONS : 'hostedPaymentVisaCheckoutOptions'
};
module.exports.SettingNameEnum = SettingNameEnum;

const SettlementStateEnum = { 
	SETTLEDSUCCESSFULLY : 'settledSuccessfully',
	SETTLEMENTERROR : 'settlementError',
	PENDINGSETTLEMENT : 'pendingSettlement'
};
module.exports.SettlementStateEnum = SettlementStateEnum;

const SplitTenderStatusEnum = { 
	COMPLETED : 'completed',
	HELD : 'held',
	VOIDED : 'voided'
};
module.exports.SplitTenderStatusEnum = SplitTenderStatusEnum;

const TransactionGroupStatusEnum = { 
	ANY : 'any',
	PENDINGAPPROVAL : 'pendingApproval'
};
module.exports.TransactionGroupStatusEnum = TransactionGroupStatusEnum;

const TransactionListOrderFieldEnum = { 
	ID : 'id',
	SUBMITTIMEUTC : 'submitTimeUTC'
};
module.exports.TransactionListOrderFieldEnum = TransactionListOrderFieldEnum;

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
};
module.exports.TransactionStatusEnum = TransactionStatusEnum;

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
};
module.exports.TransactionTypeEnum = TransactionTypeEnum;

const ValidationModeEnum = { 
	NONE : 'none',
	TESTMODE : 'testMode',
	LIVEMODE : 'liveMode',
	OLDLIVEMODE : 'oldLiveMode'
};
module.exports.ValidationModeEnum = ValidationModeEnum;

const WebCheckOutTypeEnum = { 
	PAN : 'PAN',
	TOKEN : 'TOKEN'
};
module.exports.WebCheckOutTypeEnum = WebCheckOutTypeEnum;

