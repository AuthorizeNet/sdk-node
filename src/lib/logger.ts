import winston from "winston"
import {config} from "./config"

let logger: winston.LoggerInstance | undefined;

const sensitiveFields = ['cardCode', 'cardNumber', 'expirationDate', 'accountNumber', 'nameOnAccount', 'transactionKey', 'email', 'phoneNumber', 'faxNumber', 'dateOfBirth'];

function isJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

if(config.logger.enabled === true) {
	logger = new (winston.Logger)({
		transports: [
			new (winston.transports.File)({filename: config.logger.location + '/sdk-node.log', level: config.logger.level})
		]
	});

	//Adding filter for sensitive fields that should not be logged.
	logger.filters.push(function(level, msg, timestamp): string {
		if(isJson(msg))
		{
			try{
				return maskSensitiveFields(JSON.parse(msg));
			}
			catch (e)
			{
				return 'Error while logging the message.';
			}
		}
		else
			return msg;
	});
}
else {
	logger = new (winston.Logger)({
		transports: []
	});
}

function maskSensitiveFields(jsonMsg: any): string {

	if (jsonMsg instanceof Object) {

		let prop: string;

		for (prop in jsonMsg){
			const isFieldSensitive = (sensitiveFields.indexOf(prop) > -1);

			if(isFieldSensitive === true)
			{
				jsonMsg[prop] = new Array(jsonMsg[prop].length + 1).join('X');
			}
			else if (jsonMsg.hasOwnProperty(prop)){
				maskSensitiveFields(jsonMsg[prop]);  
			}
		}
	}
	
    return JSON.stringify(jsonMsg);
}

export {
	logger
}
