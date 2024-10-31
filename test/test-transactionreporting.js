'use strict';

var assert = require('chai').assert;
var constants = require('./constants.js');
var ApiControllers = require('../lib/apicontrollers.js');
var ApiContracts = require('../lib/apicontracts.js');

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

class TransactionReportingTestData {
	constructor(){
		this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
		this.merchantAuthenticationType.setName(apiLoginKey);
		this.merchantAuthenticationType.setTransactionKey(transactionKey);
	}
}

describe('Transaction Reporting', function() {
	this.timeout(120000);
	var batchId;
	var transactionId;
	var testData = new TransactionReportingTestData();

	describe('get Settled Batch List', function () {
		var response;

		before(function(done){

			var createRequest = new ApiContracts.GetSettledBatchListRequest();
			createRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			createRequest.setIncludeStatistics(true);
			// createRequest.setFirstSettlementDate('2015-05-01T16:00:00Z');
			// createRequest.setLastSettlementDate('2015-05-31T16:00:00Z');

			createRequest.setFirstSettlementDate(new Date(new Date().setDate(new Date().getDate()-30)));
			createRequest.setLastSettlementDate(new Date());

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetSettledBatchListController(createRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetSettledBatchListResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null batch list when successful', function () {

			assert.isNotNull(response.getBatchList());
			assert.isDefined(response.getBatchList());
		});

		it('should return not null batch ids when successful', function () {

			var batchArray = response.getBatchList().getBatch();
			batchArray.forEach(function(batch) {
				batchId = batch.getBatchId();
				assert.isNotNull(batch.getBatchId());
				assert.isDefined(batch.getBatchId());
			});
		});

		it('should return not null batch statistics when successful', function () {

			var batchArray = response.getBatchList().getBatch();
			batchArray.forEach(function(batch) {
				assert.isNotNull(batch.getStatistics());
				assert.isDefined(batch.getStatistics());
			});
		});
	});

	describe('get Transaction List', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetTransactionListRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setBatchId(batchId);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetTransactionListController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetTransactionListResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction list when successful', function () {

			assert.isNotNull(response.getTransactions());
			assert.isDefined(response.getTransactions());
		});

		it('should return not null transaction ids when successful', function () {

			var transactionArray = response.getTransactions().getTransaction();
			transactionArray.forEach(function(transaction) {
				transactionId = transaction.getTransId();
				assert.isNotNull(transaction.getTransId());
				assert.isDefined(transaction.getTransId());
			});
		});
	});
	
	describe('get Transaction List For Customer', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetTransactionListForCustomerRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setCustomerProfileId('39931060');

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetTransactionListForCustomerController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetTransactionListResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction list when successful', function () {

			assert.isNotNull(response.getTransactions());
			assert.isDefined(response.getTransactions());
		});

		it('should return not null transaction ids when successful', function () {

			var transactionArray = response.getTransactions().getTransaction();
			transactionArray.forEach(function(transaction) {
				transactionId = transaction.getTransId();
				assert.isNotNull(transaction.getTransId());
				assert.isDefined(transaction.getTransId());
			});
		});
	});

	describe('get Transaction Details', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetTransactionDetailsRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setTransId(transactionId);

			//console.log(JSON.stringify(getRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetTransactionDetailsController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetTransactionDetailsResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction list when successful', function () {

			assert.isNotNull(response.getTransaction());
			assert.isDefined(response.getTransaction());
		});

		it('should return transaction id same as input when successful', function () {

			assert.equal(response.getTransaction().getTransId(), transactionId);
		});
	});

	describe('get unsettled Transaction list', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetUnsettledTransactionListRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetUnsettledTransactionListController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetUnsettledTransactionListResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null transaction list when successful', function () {

			assert.isNotNull(response.getTransactions());
			assert.isDefined(response.getTransactions());
		});

		it('should return not null transaction ids when successful', function () {

			var transactionArray = response.getTransactions().getTransaction();
			transactionArray.forEach(function(transaction) {
				transactionId = transaction.getTransId();
				assert.isNotNull(transaction.getTransId());
				assert.isDefined(transaction.getTransId());
			});
		});
	});

	describe('get batch statistics', function () {
		var response;

		before(function(done){

			var getRequest = new ApiContracts.GetBatchStatisticsRequest();
			getRequest.setMerchantAuthentication(testData.merchantAuthenticationType);
			getRequest.setBatchId(batchId);

			//console.log(JSON.stringify(createRequest.getJSON(), null, 2));
				
			var ctrl = new ApiControllers.GetBatchStatisticsController(getRequest.getJSON());

			ctrl.execute(function(){

				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.GetBatchStatisticsResponse(apiResponse);

				//console.log(JSON.stringify(response, null, 2));
				done();
			});
		});

		it('should return resultcode Ok when successful', function () {

			assert.equal(response.getMessages().getResultCode(), ApiContracts.MessageTypeEnum.OK);
		});

		it('should return not null batch details when successful', function () {

			assert.isNotNull(response.getBatch());
			assert.isDefined(response.getBatch());
		});

		it('should return batch id same as input when successful', function () {

			assert.equal(response.getBatch().getBatchId(), batchId);
		});
	});
});
