var winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');
var config = require('./config').config;

/**
 * FAIL-CLOSED DESIGN: Allow-list of fields that are SAFE to log.
 * All other leaf values are masked by default to prevent accidental
 * exposure of PCI/SAD/credential data (CWE-532).
 * 
 * Only add fields here if they are:
 * - Non-sensitive metadata (IDs, codes, timestamps, flags)
 * - Already public information
 * - Result/status indicators
 */
var safeFields = [
	// Result/status fields
	'resultcode', 'messagecode', 'code', 'errorcode', 'responsecode',
	'responsereasoncode', 'responsetext', 'responsereasontext',
	'status', 'statustext', 'state', 'successful',
	// Identifiers (non-sensitive)
	'transid', 'transactionid', 'refid', 'reftransid', 'authcode',
	'batchid', 'settlementtimeutc', 'settlementtimelocal',
	'customerprofileid', 'customerpaymentprofileid', 'customeraddressid',
	'subscriptionid', 'profileid', 'paymentprofileid', 'shippingprofileid',
	// Metadata
	'type', 'method', 'action', 'requesttype', 'responsetype',
	'version', 'timestamp', 'datetime', 'date', 'time',
	// Structure/format indicators
	'formatted', 'encoding', 'encryptionalgorithm', 'descriptor',
	'emvdescriptor', 'emvversion', 'datadescriptor',
	// Counts and amounts (non-sensitive numeric values)
	'totalcount', 'count', 'quantity', 'amount', 'settleamount',
	'taxamount', 'dutyamount', 'freightamount', 'discountamount',
	// Boolean flags
	'testrequest', 'taxexempt', 'recurringbilling', 'processingmode',
	// Message content (typically human-readable descriptions)
	'message', 'text', 'description', 'errormessage',
	// Order/invoice metadata
	'invoicenumber', 'ponumber', 'purchaseordernumber',
	// Card metadata (non-sensitive)
	'cardtype', 'entrymode', 'accounttype',
	// Network/device info
	'clientid', 'useragent', 'ipaddress', 'devicetype',
	// Pagination
	'offset', 'limit', 'pagenumber', 'pagesize', 'totalnuminsettlement',
	// AVS/CVV response codes (single char codes, not actual values)
	'avscode', 'cavvresponsecode', 'cvvresultcode',
	// Merchant info (public)
	'merchantcustomerid', 'merchantname'
];

// Create a Set for O(1) lookup with lowercase keys
var safeFieldsSet = new Set(safeFields);

const maskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
	// FAIL-CLOSED: Always mask messages, regardless of format
	var maskedMessage = maskMessage(message);
	return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${maskedMessage}`;
});

/**
 * Safely mask any message - handles both JSON and non-JSON formats.
 * Non-JSON messages are wrapped and masked to prevent bypass via string concatenation.
 */
function maskMessage(message) {
	if (isJson(message)) {
		return maskSensitiveFields(JSON.parse(message));
	} else {
		// Non-JSON messages: wrap in a safe structure and mask
		// This prevents sensitive data from leaking via string concatenation
		return maskNonJsonMessage(message);
	}
}

function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

/**
 * Mask non-JSON messages by detecting and redacting common sensitive patterns.
 * This ensures that string-concatenated log lines don't bypass masking.
 */
function maskNonJsonMessage(message) {
	if (typeof message !== 'string') {
		message = String(message);
	}
	
	// Patterns that may indicate sensitive data in string format
	var sensitivePatterns = [
		// Credit card numbers (13-19 digits, possibly with spaces/dashes)
		/\b(?:\d[ -]*?){13,19}\b/g,
		// CVV/CVC (3-4 digits preceded by common labels)
		/\b(cvv|cvc|cvv2|cvc2|cardcode)[:\s]*\d{3,4}\b/gi,
		// API keys, tokens (long alphanumeric strings)
		/\b(apikey|apiloginid|transactionkey|accesstoken|sessiontoken|token|key)[:\s]*[A-Za-z0-9+/=]{8,}\b/gi,
		// Email addresses
		/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
		// Phone numbers (various formats)
		/\b(\+?1?[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g,
		// SSN
		/\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/g,
		// Routing numbers (9 digits)
		/\b(routing|aba)[:\s]*\d{9}\b/gi,
		// Account numbers (variable length)
		/\b(account|acct)[:\s]*\d{4,17}\b/gi
	];
	
	var maskedMessage = message;
	for (var pattern of sensitivePatterns) {
		maskedMessage = maskedMessage.replace(pattern, function(match) {
			// Preserve labels but mask values
			var labelMatch = match.match(/^([a-zA-Z]+[:\s]*)/i);
			if (labelMatch) {
				return labelMatch[1] + 'XXXXXXXX';
			}
			return 'XXXXXXXX';
		});
	}
	
	return maskedMessage;
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

	var loggerCategoryRandomiser = Math.floor(Math.random() * (1000000000 - 100 + 1)) + 100;
	loggerCategory = loggerCategory + loggerCategoryRandomiser;

	var newLogger;

	if (enableLog) {
		var appTransports = createTransportFromConfig(loggerConfig);

		newLogger = winston.loggers.get(loggerCategory, {
			level: loggingLevel,
			format: combine(
				label({ label: loggerCategory }),
				timestamp(),
				maskedLoggingFormat
			),
			transports: appTransports
		});
	} else {
		newLogger = winston.loggers.get(loggerCategory, {
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
			if (!jsonMsg.hasOwnProperty(prop)) {
				continue;
			}
			
			var value = jsonMsg[prop];
			var propLower = prop.toLowerCase();
			
			// Check if this is a leaf value (not an object/array)
			if (value === null || value === undefined) {
				// Keep null/undefined as-is
				continue;
			} else if (typeof value === 'object' && !Array.isArray(value)) {
				// Recurse into nested objects
				maskSensitiveFields(value);
			} else if (Array.isArray(value)) {
				// Process each array element
				for (var i = 0; i < value.length; i++) {
					if (typeof value[i] === 'object' && value[i] !== null) {
						maskSensitiveFields(value[i]);
					} else if (!safeFieldsSet.has(propLower)) {
						// Mask array leaf values unless field is in safe list
						value[i] = maskValue(value[i]);
					}
				}
			} else {
				// FAIL-CLOSED: Mask leaf values UNLESS field is in safe allow-list
				if (!safeFieldsSet.has(propLower)) {
					jsonMsg[prop] = maskValue(value);
				}
			}
		}
	}

	return JSON.stringify(jsonMsg);
}

/**
 * Safely mask a value, handling various types.
 */
function maskValue(value) {
	if (value === null || value === undefined) {
		return value;
	}
	// Coerce to string and mask with X's
	var valueStr = String(value);
	if (valueStr.length === 0) {
		return '';
	}
	return new Array(valueStr.length + 1).join('X');
}

// Export maskSensitiveFields for use by other modules
exports.maskSensitiveFields = maskSensitiveFields;
exports.maskValue = maskValue;

