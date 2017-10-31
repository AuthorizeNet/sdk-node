'use strict';

var APIOperationBase = require('./apicontrollersbase.js').APIOperationBase;
var logger = require('./logger.js').logger;

class ANetApiController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ANetApiController constructor');
		super(apiRequest);
		logger.debug('Exit ANetApiController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ANetApiRequest';
	}
}

module.exports.ANetApiController = ANetApiController;

class ARBCancelSubscriptionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBCancelSubscriptionController constructor');
		super(apiRequest);
		logger.debug('Exit ARBCancelSubscriptionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBCancelSubscriptionRequest';
	}
}

module.exports.ARBCancelSubscriptionController = ARBCancelSubscriptionController;

class ARBCreateSubscriptionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBCreateSubscriptionController constructor');
		super(apiRequest);
		logger.debug('Exit ARBCreateSubscriptionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBCreateSubscriptionRequest';
	}
}

module.exports.ARBCreateSubscriptionController = ARBCreateSubscriptionController;

class ARBGetSubscriptionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBGetSubscriptionController constructor');
		super(apiRequest);
		logger.debug('Exit ARBGetSubscriptionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBGetSubscriptionRequest';
	}
}

module.exports.ARBGetSubscriptionController = ARBGetSubscriptionController;

class ARBGetSubscriptionListController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBGetSubscriptionListController constructor');
		super(apiRequest);
		logger.debug('Exit ARBGetSubscriptionListController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBGetSubscriptionListRequest';
	}
}

module.exports.ARBGetSubscriptionListController = ARBGetSubscriptionListController;

class ARBGetSubscriptionStatusController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBGetSubscriptionStatusController constructor');
		super(apiRequest);
		logger.debug('Exit ARBGetSubscriptionStatusController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBGetSubscriptionStatusRequest';
	}
}

module.exports.ARBGetSubscriptionStatusController = ARBGetSubscriptionStatusController;

class ARBUpdateSubscriptionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ARBUpdateSubscriptionController constructor');
		super(apiRequest);
		logger.debug('Exit ARBUpdateSubscriptionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ARBUpdateSubscriptionRequest';
	}
}

module.exports.ARBUpdateSubscriptionController = ARBUpdateSubscriptionController;

class AuthenticateTestController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter AuthenticateTestController constructor');
		super(apiRequest);
		logger.debug('Exit AuthenticateTestController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'AuthenticateTestRequest';
	}
}

module.exports.AuthenticateTestController = AuthenticateTestController;

class CreateCustomerPaymentProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateCustomerPaymentProfileController constructor');
		super(apiRequest);
		logger.debug('Exit CreateCustomerPaymentProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateCustomerPaymentProfileRequest';
	}
}

module.exports.CreateCustomerPaymentProfileController = CreateCustomerPaymentProfileController;

class CreateCustomerProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateCustomerProfileController constructor');
		super(apiRequest);
		logger.debug('Exit CreateCustomerProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateCustomerProfileRequest';
	}
}

module.exports.CreateCustomerProfileController = CreateCustomerProfileController;

class CreateCustomerProfileFromTransactionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateCustomerProfileFromTransactionController constructor');
		super(apiRequest);
		logger.debug('Exit CreateCustomerProfileFromTransactionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateCustomerProfileFromTransactionRequest';
	}
}

module.exports.CreateCustomerProfileFromTransactionController = CreateCustomerProfileFromTransactionController;

class CreateCustomerProfileTransactionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateCustomerProfileTransactionController constructor');
		super(apiRequest);
		logger.debug('Exit CreateCustomerProfileTransactionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateCustomerProfileTransactionRequest';
	}
}

module.exports.CreateCustomerProfileTransactionController = CreateCustomerProfileTransactionController;

class CreateCustomerShippingAddressController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateCustomerShippingAddressController constructor');
		super(apiRequest);
		logger.debug('Exit CreateCustomerShippingAddressController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateCustomerShippingAddressRequest';
	}
}

module.exports.CreateCustomerShippingAddressController = CreateCustomerShippingAddressController;

class CreateTransactionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter CreateTransactionController constructor');
		super(apiRequest);
		logger.debug('Exit CreateTransactionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'CreateTransactionRequest';
	}
}

module.exports.CreateTransactionController = CreateTransactionController;

class DecryptPaymentDataController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter DecryptPaymentDataController constructor');
		super(apiRequest);
		logger.debug('Exit DecryptPaymentDataController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'DecryptPaymentDataRequest';
	}
}

module.exports.DecryptPaymentDataController = DecryptPaymentDataController;

class DeleteCustomerPaymentProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter DeleteCustomerPaymentProfileController constructor');
		super(apiRequest);
		logger.debug('Exit DeleteCustomerPaymentProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'DeleteCustomerPaymentProfileRequest';
	}
}

module.exports.DeleteCustomerPaymentProfileController = DeleteCustomerPaymentProfileController;

class DeleteCustomerProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter DeleteCustomerProfileController constructor');
		super(apiRequest);
		logger.debug('Exit DeleteCustomerProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'DeleteCustomerProfileRequest';
	}
}

module.exports.DeleteCustomerProfileController = DeleteCustomerProfileController;

class DeleteCustomerShippingAddressController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter DeleteCustomerShippingAddressController constructor');
		super(apiRequest);
		logger.debug('Exit DeleteCustomerShippingAddressController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'DeleteCustomerShippingAddressRequest';
	}
}

module.exports.DeleteCustomerShippingAddressController = DeleteCustomerShippingAddressController;

class GetAUJobDetailsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetAUJobDetailsController constructor');
		super(apiRequest);
		logger.debug('Exit GetAUJobDetailsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetAUJobDetailsRequest';
	}
}

module.exports.GetAUJobDetailsController = GetAUJobDetailsController;

class GetAUJobSummaryController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetAUJobSummaryController constructor');
		super(apiRequest);
		logger.debug('Exit GetAUJobSummaryController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetAUJobSummaryRequest';
	}
}

module.exports.GetAUJobSummaryController = GetAUJobSummaryController;

class GetBatchStatisticsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetBatchStatisticsController constructor');
		super(apiRequest);
		logger.debug('Exit GetBatchStatisticsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetBatchStatisticsRequest';
	}
}

module.exports.GetBatchStatisticsController = GetBatchStatisticsController;

class GetCustomerPaymentProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetCustomerPaymentProfileController constructor');
		super(apiRequest);
		logger.debug('Exit GetCustomerPaymentProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetCustomerPaymentProfileRequest';
	}
}

module.exports.GetCustomerPaymentProfileController = GetCustomerPaymentProfileController;

class GetCustomerPaymentProfileListController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetCustomerPaymentProfileListController constructor');
		super(apiRequest);
		logger.debug('Exit GetCustomerPaymentProfileListController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetCustomerPaymentProfileListRequest';
	}
}

module.exports.GetCustomerPaymentProfileListController = GetCustomerPaymentProfileListController;

class GetCustomerProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetCustomerProfileController constructor');
		super(apiRequest);
		logger.debug('Exit GetCustomerProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetCustomerProfileRequest';
	}
}

module.exports.GetCustomerProfileController = GetCustomerProfileController;

class GetCustomerProfileIdsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetCustomerProfileIdsController constructor');
		super(apiRequest);
		logger.debug('Exit GetCustomerProfileIdsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetCustomerProfileIdsRequest';
	}
}

module.exports.GetCustomerProfileIdsController = GetCustomerProfileIdsController;

class GetCustomerShippingAddressController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetCustomerShippingAddressController constructor');
		super(apiRequest);
		logger.debug('Exit GetCustomerShippingAddressController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetCustomerShippingAddressRequest';
	}
}

module.exports.GetCustomerShippingAddressController = GetCustomerShippingAddressController;

class GetHostedPaymentPageController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetHostedPaymentPageController constructor');
		super(apiRequest);
		logger.debug('Exit GetHostedPaymentPageController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetHostedPaymentPageRequest';
	}
}

module.exports.GetHostedPaymentPageController = GetHostedPaymentPageController;

class GetHostedProfilePageController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetHostedProfilePageController constructor');
		super(apiRequest);
		logger.debug('Exit GetHostedProfilePageController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetHostedProfilePageRequest';
	}
}

module.exports.GetHostedProfilePageController = GetHostedProfilePageController;

class GetMerchantDetailsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetMerchantDetailsController constructor');
		super(apiRequest);
		logger.debug('Exit GetMerchantDetailsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetMerchantDetailsRequest';
	}
}

module.exports.GetMerchantDetailsController = GetMerchantDetailsController;

class GetSettledBatchListController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetSettledBatchListController constructor');
		super(apiRequest);
		logger.debug('Exit GetSettledBatchListController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetSettledBatchListRequest';
	}
}

module.exports.GetSettledBatchListController = GetSettledBatchListController;

class GetTransactionDetailsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetTransactionDetailsController constructor');
		super(apiRequest);
		logger.debug('Exit GetTransactionDetailsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetTransactionDetailsRequest';
	}
}

module.exports.GetTransactionDetailsController = GetTransactionDetailsController;

class GetTransactionListController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetTransactionListController constructor');
		super(apiRequest);
		logger.debug('Exit GetTransactionListController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetTransactionListRequest';
	}
}

module.exports.GetTransactionListController = GetTransactionListController;

class GetTransactionListForCustomerController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetTransactionListForCustomerController constructor');
		super(apiRequest);
		logger.debug('Exit GetTransactionListForCustomerController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetTransactionListForCustomerRequest';
	}
}

module.exports.GetTransactionListForCustomerController = GetTransactionListForCustomerController;

class GetUnsettledTransactionListController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter GetUnsettledTransactionListController constructor');
		super(apiRequest);
		logger.debug('Exit GetUnsettledTransactionListController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'GetUnsettledTransactionListRequest';
	}
}

module.exports.GetUnsettledTransactionListController = GetUnsettledTransactionListController;

class IsAliveController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter IsAliveController constructor');
		super(apiRequest);
		logger.debug('Exit IsAliveController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'IsAliveRequest';
	}
}

module.exports.IsAliveController = IsAliveController;

class LogoutController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter LogoutController constructor');
		super(apiRequest);
		logger.debug('Exit LogoutController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'LogoutRequest';
	}
}

module.exports.LogoutController = LogoutController;

class MobileDeviceLoginController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter MobileDeviceLoginController constructor');
		super(apiRequest);
		logger.debug('Exit MobileDeviceLoginController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'MobileDeviceLoginRequest';
	}
}

module.exports.MobileDeviceLoginController = MobileDeviceLoginController;

class MobileDeviceRegistrationController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter MobileDeviceRegistrationController constructor');
		super(apiRequest);
		logger.debug('Exit MobileDeviceRegistrationController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'MobileDeviceRegistrationRequest';
	}
}

module.exports.MobileDeviceRegistrationController = MobileDeviceRegistrationController;

class SecurePaymentContainerController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter SecurePaymentContainerController constructor');
		super(apiRequest);
		logger.debug('Exit SecurePaymentContainerController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'SecurePaymentContainerRequest';
	}
}

module.exports.SecurePaymentContainerController = SecurePaymentContainerController;

class SendCustomerTransactionReceiptController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter SendCustomerTransactionReceiptController constructor');
		super(apiRequest);
		logger.debug('Exit SendCustomerTransactionReceiptController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'SendCustomerTransactionReceiptRequest';
	}
}

module.exports.SendCustomerTransactionReceiptController = SendCustomerTransactionReceiptController;

class UpdateCustomerPaymentProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateCustomerPaymentProfileController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateCustomerPaymentProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateCustomerPaymentProfileRequest';
	}
}

module.exports.UpdateCustomerPaymentProfileController = UpdateCustomerPaymentProfileController;

class UpdateCustomerProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateCustomerProfileController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateCustomerProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateCustomerProfileRequest';
	}
}

module.exports.UpdateCustomerProfileController = UpdateCustomerProfileController;

class UpdateCustomerShippingAddressController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateCustomerShippingAddressController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateCustomerShippingAddressController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateCustomerShippingAddressRequest';
	}
}

module.exports.UpdateCustomerShippingAddressController = UpdateCustomerShippingAddressController;

class UpdateHeldTransactionController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateHeldTransactionController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateHeldTransactionController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateHeldTransactionRequest';
	}
}

module.exports.UpdateHeldTransactionController = UpdateHeldTransactionController;

class UpdateMerchantDetailsController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateMerchantDetailsController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateMerchantDetailsController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateMerchantDetailsRequest';
	}
}

module.exports.UpdateMerchantDetailsController = UpdateMerchantDetailsController;

class UpdateSplitTenderGroupController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter UpdateSplitTenderGroupController constructor');
		super(apiRequest);
		logger.debug('Exit UpdateSplitTenderGroupController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'UpdateSplitTenderGroupRequest';
	}
}

module.exports.UpdateSplitTenderGroupController = UpdateSplitTenderGroupController;

class ValidateCustomerPaymentProfileController extends APIOperationBase {
	constructor(apiRequest) {
		logger.debug('Enter ValidateCustomerPaymentProfileController constructor');
		super(apiRequest);
		logger.debug('Exit ValidateCustomerPaymentProfileController constructor');
	}

	validateRequest(){
		logger.debug('Enter validateRequest');

		logger.debug('Exit validateRequest');
		return;
	}

	getRequestType(){
		return 'ValidateCustomerPaymentProfileRequest';
	}
}

module.exports.ValidateCustomerPaymentProfileController = ValidateCustomerPaymentProfileController;

