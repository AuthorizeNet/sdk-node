"use strict";

var APIOperationBase = require('./apicontrollersbase.js').APIOperationBase;
var ApiContracts = require('./apicontracts.js');

class ANetApiController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ANetApiRequest';
    }
}

module.exports.ANetApiController = ANetApiController;

class ARBCancelSubscriptionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBCancelSubscriptionRequest';
    }
}

module.exports.ARBCancelSubscriptionController = ARBCancelSubscriptionController;

class ARBCreateSubscriptionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBCreateSubscriptionRequest';
    }
}

module.exports.ARBCreateSubscriptionController = ARBCreateSubscriptionController;

class ARBGetSubscriptionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBGetSubscriptionRequest';
    }
}

module.exports.ARBGetSubscriptionController = ARBGetSubscriptionController;

class ARBGetSubscriptionListController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBGetSubscriptionListRequest';
    }
}

module.exports.ARBGetSubscriptionListController = ARBGetSubscriptionListController;

class ARBGetSubscriptionStatusController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBGetSubscriptionStatusRequest';
    }
}

module.exports.ARBGetSubscriptionStatusController = ARBGetSubscriptionStatusController;

class ARBUpdateSubscriptionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ARBUpdateSubscriptionRequest';
    }
}

module.exports.ARBUpdateSubscriptionController = ARBUpdateSubscriptionController;

class AuthenticateTestController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'AuthenticateTestRequest';
    }
}

module.exports.AuthenticateTestController = AuthenticateTestController;

class CreateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateCustomerPaymentProfileRequest';
    }
}

module.exports.CreateCustomerPaymentProfileController = CreateCustomerPaymentProfileController;

class CreateCustomerProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateCustomerProfileRequest';
    }
}

module.exports.CreateCustomerProfileController = CreateCustomerProfileController;

class CreateCustomerProfileFromTransactionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateCustomerProfileFromTransactionRequest';
    }
}

module.exports.CreateCustomerProfileFromTransactionController = CreateCustomerProfileFromTransactionController;

class CreateCustomerProfileTransactionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateCustomerProfileTransactionRequest';
    }
}

module.exports.CreateCustomerProfileTransactionController = CreateCustomerProfileTransactionController;

class CreateCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateCustomerShippingAddressRequest';
    }
}

module.exports.CreateCustomerShippingAddressController = CreateCustomerShippingAddressController;

class CreateTransactionController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'CreateTransactionRequest';
    }
}

module.exports.CreateTransactionController = CreateTransactionController;

class DecryptPaymentDataController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'DecryptPaymentDataRequest';
    }
}

module.exports.DecryptPaymentDataController = DecryptPaymentDataController;

class DeleteCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'DeleteCustomerPaymentProfileRequest';
    }
}

module.exports.DeleteCustomerPaymentProfileController = DeleteCustomerPaymentProfileController;

class DeleteCustomerProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'DeleteCustomerProfileRequest';
    }
}

module.exports.DeleteCustomerProfileController = DeleteCustomerProfileController;

class DeleteCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'DeleteCustomerShippingAddressRequest';
    }
}

module.exports.DeleteCustomerShippingAddressController = DeleteCustomerShippingAddressController;

class GetBatchStatisticsController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetBatchStatisticsRequest';
    }
}

module.exports.GetBatchStatisticsController = GetBatchStatisticsController;

class GetCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetCustomerPaymentProfileRequest';
    }
}

module.exports.GetCustomerPaymentProfileController = GetCustomerPaymentProfileController;

class GetCustomerPaymentProfileListController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetCustomerPaymentProfileListRequest';
    }
}

module.exports.GetCustomerPaymentProfileListController = GetCustomerPaymentProfileListController;

class GetCustomerProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetCustomerProfileRequest';
    }
}

module.exports.GetCustomerProfileController = GetCustomerProfileController;

class GetCustomerProfileIdsController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetCustomerProfileIdsRequest';
    }
}

module.exports.GetCustomerProfileIdsController = GetCustomerProfileIdsController;

class GetCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetCustomerShippingAddressRequest';
    }
}

module.exports.GetCustomerShippingAddressController = GetCustomerShippingAddressController;

class GetHostedProfilePageController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetHostedProfilePageRequest';
    }
}

module.exports.GetHostedProfilePageController = GetHostedProfilePageController;

class GetSettledBatchListController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetSettledBatchListRequest';
    }
}

module.exports.GetSettledBatchListController = GetSettledBatchListController;

class GetTransactionDetailsController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetTransactionDetailsRequest';
    }
}

module.exports.GetTransactionDetailsController = GetTransactionDetailsController;

class GetTransactionListController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetTransactionListRequest';
    }
}

module.exports.GetTransactionListController = GetTransactionListController;

class GetUnsettledTransactionListController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'GetUnsettledTransactionListRequest';
    }
}

module.exports.GetUnsettledTransactionListController = GetUnsettledTransactionListController;

class IsAliveController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'IsAliveRequest';
    }
}

module.exports.IsAliveController = IsAliveController;

class LogoutController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'LogoutRequest';
    }
}

module.exports.LogoutController = LogoutController;

class MobileDeviceLoginController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'MobileDeviceLoginRequest';
    }
}

module.exports.MobileDeviceLoginController = MobileDeviceLoginController;

class MobileDeviceRegistrationController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'MobileDeviceRegistrationRequest';
    }
}

module.exports.MobileDeviceRegistrationController = MobileDeviceRegistrationController;

class SecurePaymentContainerController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'SecurePaymentContainerRequest';
    }
}

module.exports.SecurePaymentContainerController = SecurePaymentContainerController;

class SendCustomerTransactionReceiptController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'SendCustomerTransactionReceiptRequest';
    }
}

module.exports.SendCustomerTransactionReceiptController = SendCustomerTransactionReceiptController;

class UpdateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'UpdateCustomerPaymentProfileRequest';
    }
}

module.exports.UpdateCustomerPaymentProfileController = UpdateCustomerPaymentProfileController;

class UpdateCustomerProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'UpdateCustomerProfileRequest';
    }
}

module.exports.UpdateCustomerProfileController = UpdateCustomerProfileController;

class UpdateCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'UpdateCustomerShippingAddressRequest';
    }
}

module.exports.UpdateCustomerShippingAddressController = UpdateCustomerShippingAddressController;

class UpdateSplitTenderGroupController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'UpdateSplitTenderGroupRequest';
    }
}

module.exports.UpdateSplitTenderGroupController = UpdateSplitTenderGroupController;

class ValidateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest) {
        super(apiRequest);
    }

    validateRequest(){
        console.log('performing custom validation..');
        return;
    }

    getRequestType(){
        return 'ValidateCustomerPaymentProfileRequest';
    }
}

module.exports.ValidateCustomerPaymentProfileController = ValidateCustomerPaymentProfileController;

