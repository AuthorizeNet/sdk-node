var winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');
var config = require('./config').config;

var sensitiveFields = ['cardCode', 'cardNumber', 'expirationDate', 'accountNumber', 'nameOnAccount', 'transactionKey', 'email', 'phoneNumber', 'faxNumber', 'dateOfBirth'];

const maskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
	if (isJson(message)) {
		return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${maskSensitiveFields(JSON.parse(message))}`;
	} else {
		return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${message}`;
	}
});

function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

function createTransportFromConfig(tempConfig) {
	var transports = [];

	var enableLog = tempConfig.logger.enabled;
	var loggingLevel = tempConfig.logger.level;
	var logDirectory = tempConfig.logger.location;

	transports.push(new winston.transports.DailyRotateFile({
		level: loggingLevel,
		filename: 'sdk-node-%DATE%.log',
		datePattern: 'YYYY-MM-DD',
		zippedArchive: true,
		dirname: logDirectory,
		silent: !enableLog
	}));

	return transports;
}

exports.getLogger = function (loggerCategory = 'LoggerInstance', mconfig = null) {
	var loggerConfig = mconfig ? mconfig : config;

	var enableLog = loggerConfig.logger.enabled;
	var loggingLevel = loggerConfig.logger.level;

	// winston.loggers keeps every id for the life of the process and ignores the
	// options passed to get() once an id exists. Key on the category plus the
	// logger settings, so the same settings reuse one logger and different
	// settings still get their own. A random id here leaked one logger per call.
	var loggerId = [loggerCategory, enableLog, loggingLevel, loggerConfig.logger.location].join('|');

	if (winston.loggers.has(loggerId)) {
		return winston.loggers.get(loggerId);
	}

	var newLogger;

	if (enableLog) {
		var appTransports = createTransportFromConfig(loggerConfig);

		newLogger = winston.loggers.get(loggerId, {
			level: loggingLevel,
			format: combine(
				label({ label: loggerCategory }),
				timestamp(),
				maskedLoggingFormat
			),
			transports: appTransports
		});
	} else {
		newLogger = winston.loggers.get(loggerId, {
			level: loggingLevel,
			format: combine(
				label({ label: loggerCategory }),
				timestamp(),
				maskedLoggingFormat
			),
			transports: [new winston.transports.Console({
				silent: !enableLog
			})]
		});
	}

	return newLogger;
}

function maskSensitiveFields(jsonMsg) {
	if (jsonMsg instanceof Object) {
		var prop;

		for (prop in jsonMsg) {
			var isFieldSensitive = (sensitiveFields.indexOf(prop) > -1);

			if (isFieldSensitive === true) {
				jsonMsg[prop] = new Array(jsonMsg[prop].length + 1).join('X');
			}
			else if (jsonMsg.hasOwnProperty(prop)) {
				maskSensitiveFields(jsonMsg[prop]);
			}
		}
	}

	return JSON.stringify(jsonMsg);
}

