'use strict';

var assert = require('assert');
var winston = require('winston');
var ApiContracts = require('../lib/apicontracts.js');
var ApiControllers = require('../lib/apicontrollers.js');
var Logger = require('../lib/logger.js');

describe('Logger', function() {

	describe('getLogger', function () {

		it('reuses one logger per category instead of registering a new one on every call', function () {
			var request = new ApiContracts.GetTransactionDetailsRequest();
			request.setTransId('123');
			new ApiControllers.GetTransactionDetailsController(request.getJSON());

			var before = winston.loggers.loggers.size;

			for (var i = 0; i < 1000; i++) {
				var req = new ApiContracts.GetTransactionDetailsRequest();
				req.setTransId('123');
				new ApiControllers.GetTransactionDetailsController(req.getJSON());
			}

			assert.strictEqual(winston.loggers.loggers.size, before);
		});

		it('returns the same logger for the same category and settings', function () {
			assert.strictEqual(Logger.getLogger('TestCategory'), Logger.getLogger('TestCategory'));
		});

		it('returns a separate logger when the logger settings differ', function () {
			var quiet = { logger: { enabled: false, location: './', level: 'debug' } };
			var errorsOnly = { logger: { enabled: false, location: './', level: 'error' } };

			var a = Logger.getLogger('SettingsCategory', quiet);
			var b = Logger.getLogger('SettingsCategory', errorsOnly);

			assert.notStrictEqual(a, b);
			assert.strictEqual(a.level, 'debug');
			assert.strictEqual(b.level, 'error');
		});
	});
});
