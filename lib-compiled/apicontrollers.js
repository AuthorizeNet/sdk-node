'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var APIOperationBase=require('./apicontrollersbase.js').APIOperationBase,logger=require('./logger.js').logger,ANetApiController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ANetApiController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ANetApiController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ANetApiRequest'}}]),b}(APIOperationBase);module.exports.ANetApiController=ANetApiController;var ARBCancelSubscriptionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBCancelSubscriptionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBCancelSubscriptionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBCancelSubscriptionRequest'}}]),b}(APIOperationBase);module.exports.ARBCancelSubscriptionController=ARBCancelSubscriptionController;var ARBCreateSubscriptionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBCreateSubscriptionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBCreateSubscriptionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBCreateSubscriptionRequest'}}]),b}(APIOperationBase);module.exports.ARBCreateSubscriptionController=ARBCreateSubscriptionController;var ARBGetSubscriptionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBGetSubscriptionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBGetSubscriptionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBGetSubscriptionRequest'}}]),b}(APIOperationBase);module.exports.ARBGetSubscriptionController=ARBGetSubscriptionController;var ARBGetSubscriptionListController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBGetSubscriptionListController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBGetSubscriptionListController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBGetSubscriptionListRequest'}}]),b}(APIOperationBase);module.exports.ARBGetSubscriptionListController=ARBGetSubscriptionListController;var ARBGetSubscriptionStatusController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBGetSubscriptionStatusController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBGetSubscriptionStatusController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBGetSubscriptionStatusRequest'}}]),b}(APIOperationBase);module.exports.ARBGetSubscriptionStatusController=ARBGetSubscriptionStatusController;var ARBUpdateSubscriptionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ARBUpdateSubscriptionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ARBUpdateSubscriptionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ARBUpdateSubscriptionRequest'}}]),b}(APIOperationBase);module.exports.ARBUpdateSubscriptionController=ARBUpdateSubscriptionController;var AuthenticateTestController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter AuthenticateTestController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit AuthenticateTestController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'AuthenticateTestRequest'}}]),b}(APIOperationBase);module.exports.AuthenticateTestController=AuthenticateTestController;var CreateCustomerPaymentProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateCustomerPaymentProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateCustomerPaymentProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateCustomerPaymentProfileRequest'}}]),b}(APIOperationBase);module.exports.CreateCustomerPaymentProfileController=CreateCustomerPaymentProfileController;var CreateCustomerProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateCustomerProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateCustomerProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateCustomerProfileRequest'}}]),b}(APIOperationBase);module.exports.CreateCustomerProfileController=CreateCustomerProfileController;var CreateCustomerProfileFromTransactionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateCustomerProfileFromTransactionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateCustomerProfileFromTransactionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateCustomerProfileFromTransactionRequest'}}]),b}(APIOperationBase);module.exports.CreateCustomerProfileFromTransactionController=CreateCustomerProfileFromTransactionController;var CreateCustomerProfileTransactionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateCustomerProfileTransactionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateCustomerProfileTransactionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateCustomerProfileTransactionRequest'}}]),b}(APIOperationBase);module.exports.CreateCustomerProfileTransactionController=CreateCustomerProfileTransactionController;var CreateCustomerShippingAddressController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateCustomerShippingAddressController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateCustomerShippingAddressController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateCustomerShippingAddressRequest'}}]),b}(APIOperationBase);module.exports.CreateCustomerShippingAddressController=CreateCustomerShippingAddressController;var CreateTransactionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter CreateTransactionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit CreateTransactionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'CreateTransactionRequest'}}]),b}(APIOperationBase);module.exports.CreateTransactionController=CreateTransactionController;var DecryptPaymentDataController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter DecryptPaymentDataController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit DecryptPaymentDataController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'DecryptPaymentDataRequest'}}]),b}(APIOperationBase);module.exports.DecryptPaymentDataController=DecryptPaymentDataController;var DeleteCustomerPaymentProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter DeleteCustomerPaymentProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit DeleteCustomerPaymentProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'DeleteCustomerPaymentProfileRequest'}}]),b}(APIOperationBase);module.exports.DeleteCustomerPaymentProfileController=DeleteCustomerPaymentProfileController;var DeleteCustomerProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter DeleteCustomerProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit DeleteCustomerProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'DeleteCustomerProfileRequest'}}]),b}(APIOperationBase);module.exports.DeleteCustomerProfileController=DeleteCustomerProfileController;var DeleteCustomerShippingAddressController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter DeleteCustomerShippingAddressController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit DeleteCustomerShippingAddressController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'DeleteCustomerShippingAddressRequest'}}]),b}(APIOperationBase);module.exports.DeleteCustomerShippingAddressController=DeleteCustomerShippingAddressController;var GetAUJobDetailsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetAUJobDetailsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetAUJobDetailsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetAUJobDetailsRequest'}}]),b}(APIOperationBase);module.exports.GetAUJobDetailsController=GetAUJobDetailsController;var GetAUJobSummaryController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetAUJobSummaryController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetAUJobSummaryController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetAUJobSummaryRequest'}}]),b}(APIOperationBase);module.exports.GetAUJobSummaryController=GetAUJobSummaryController;var GetBatchStatisticsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetBatchStatisticsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetBatchStatisticsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetBatchStatisticsRequest'}}]),b}(APIOperationBase);module.exports.GetBatchStatisticsController=GetBatchStatisticsController;var GetCustomerPaymentProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetCustomerPaymentProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetCustomerPaymentProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetCustomerPaymentProfileRequest'}}]),b}(APIOperationBase);module.exports.GetCustomerPaymentProfileController=GetCustomerPaymentProfileController;var GetCustomerPaymentProfileListController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetCustomerPaymentProfileListController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetCustomerPaymentProfileListController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetCustomerPaymentProfileListRequest'}}]),b}(APIOperationBase);module.exports.GetCustomerPaymentProfileListController=GetCustomerPaymentProfileListController;var GetCustomerProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetCustomerProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetCustomerProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetCustomerProfileRequest'}}]),b}(APIOperationBase);module.exports.GetCustomerProfileController=GetCustomerProfileController;var GetCustomerProfileIdsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetCustomerProfileIdsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetCustomerProfileIdsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetCustomerProfileIdsRequest'}}]),b}(APIOperationBase);module.exports.GetCustomerProfileIdsController=GetCustomerProfileIdsController;var GetCustomerShippingAddressController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetCustomerShippingAddressController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetCustomerShippingAddressController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetCustomerShippingAddressRequest'}}]),b}(APIOperationBase);module.exports.GetCustomerShippingAddressController=GetCustomerShippingAddressController;var GetHostedPaymentPageController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetHostedPaymentPageController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetHostedPaymentPageController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetHostedPaymentPageRequest'}}]),b}(APIOperationBase);module.exports.GetHostedPaymentPageController=GetHostedPaymentPageController;var GetHostedProfilePageController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetHostedProfilePageController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetHostedProfilePageController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetHostedProfilePageRequest'}}]),b}(APIOperationBase);module.exports.GetHostedProfilePageController=GetHostedProfilePageController;var GetMerchantDetailsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetMerchantDetailsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetMerchantDetailsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetMerchantDetailsRequest'}}]),b}(APIOperationBase);module.exports.GetMerchantDetailsController=GetMerchantDetailsController;var GetSettledBatchListController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetSettledBatchListController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetSettledBatchListController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetSettledBatchListRequest'}}]),b}(APIOperationBase);module.exports.GetSettledBatchListController=GetSettledBatchListController;var GetTransactionDetailsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetTransactionDetailsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetTransactionDetailsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetTransactionDetailsRequest'}}]),b}(APIOperationBase);module.exports.GetTransactionDetailsController=GetTransactionDetailsController;var GetTransactionListController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetTransactionListController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetTransactionListController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetTransactionListRequest'}}]),b}(APIOperationBase);module.exports.GetTransactionListController=GetTransactionListController;var GetTransactionListForCustomerController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetTransactionListForCustomerController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetTransactionListForCustomerController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetTransactionListForCustomerRequest'}}]),b}(APIOperationBase);module.exports.GetTransactionListForCustomerController=GetTransactionListForCustomerController;var GetUnsettledTransactionListController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter GetUnsettledTransactionListController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit GetUnsettledTransactionListController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'GetUnsettledTransactionListRequest'}}]),b}(APIOperationBase);module.exports.GetUnsettledTransactionListController=GetUnsettledTransactionListController;var IsAliveController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter IsAliveController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit IsAliveController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'IsAliveRequest'}}]),b}(APIOperationBase);module.exports.IsAliveController=IsAliveController;var LogoutController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter LogoutController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit LogoutController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'LogoutRequest'}}]),b}(APIOperationBase);module.exports.LogoutController=LogoutController;var MobileDeviceLoginController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter MobileDeviceLoginController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit MobileDeviceLoginController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'MobileDeviceLoginRequest'}}]),b}(APIOperationBase);module.exports.MobileDeviceLoginController=MobileDeviceLoginController;var MobileDeviceRegistrationController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter MobileDeviceRegistrationController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit MobileDeviceRegistrationController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'MobileDeviceRegistrationRequest'}}]),b}(APIOperationBase);module.exports.MobileDeviceRegistrationController=MobileDeviceRegistrationController;var SecurePaymentContainerController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter SecurePaymentContainerController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit SecurePaymentContainerController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'SecurePaymentContainerRequest'}}]),b}(APIOperationBase);module.exports.SecurePaymentContainerController=SecurePaymentContainerController;var SendCustomerTransactionReceiptController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter SendCustomerTransactionReceiptController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit SendCustomerTransactionReceiptController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'SendCustomerTransactionReceiptRequest'}}]),b}(APIOperationBase);module.exports.SendCustomerTransactionReceiptController=SendCustomerTransactionReceiptController;var UpdateCustomerPaymentProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateCustomerPaymentProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateCustomerPaymentProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateCustomerPaymentProfileRequest'}}]),b}(APIOperationBase);module.exports.UpdateCustomerPaymentProfileController=UpdateCustomerPaymentProfileController;var UpdateCustomerProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateCustomerProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateCustomerProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateCustomerProfileRequest'}}]),b}(APIOperationBase);module.exports.UpdateCustomerProfileController=UpdateCustomerProfileController;var UpdateCustomerShippingAddressController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateCustomerShippingAddressController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateCustomerShippingAddressController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateCustomerShippingAddressRequest'}}]),b}(APIOperationBase);module.exports.UpdateCustomerShippingAddressController=UpdateCustomerShippingAddressController;var UpdateHeldTransactionController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateHeldTransactionController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateHeldTransactionController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateHeldTransactionRequest'}}]),b}(APIOperationBase);module.exports.UpdateHeldTransactionController=UpdateHeldTransactionController;var UpdateMerchantDetailsController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateMerchantDetailsController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateMerchantDetailsController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateMerchantDetailsRequest'}}]),b}(APIOperationBase);module.exports.UpdateMerchantDetailsController=UpdateMerchantDetailsController;var UpdateSplitTenderGroupController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter UpdateSplitTenderGroupController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit UpdateSplitTenderGroupController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'UpdateSplitTenderGroupRequest'}}]),b}(APIOperationBase);module.exports.UpdateSplitTenderGroupController=UpdateSplitTenderGroupController;var ValidateCustomerPaymentProfileController=function(a){function b(c){_classCallCheck(this,b),logger.debug('Enter ValidateCustomerPaymentProfileController constructor');var d=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c));return logger.debug('Exit ValidateCustomerPaymentProfileController constructor'),d}return _inherits(b,a),_createClass(b,[{key:'validateRequest',value:function validateRequest(){return logger.debug('Enter validateRequest'),void logger.debug('Exit validateRequest')}},{key:'getRequestType',value:function getRequestType(){return'ValidateCustomerPaymentProfileRequest'}}]),b}(APIOperationBase);module.exports.ValidateCustomerPaymentProfileController=ValidateCustomerPaymentProfileController;
