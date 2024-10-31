'use strict';

const crypto = require('crypto');

function getRandomString(text){
	const randomInt = crypto.randomBytes(4).readUInt32BE(0);
	return text + randomInt;
}

function getRandomInt(){
	return crypto.randomBytes(4).readUInt32BE(0);
}

function getRandomAmount(){
	const randomFloat = crypto.randomBytes(4).readUInt32BE(0) / 0xFFFFFFFF;
	return ((randomFloat * 1000) + 1).toFixed(2);
}

function getDate(){
	return (new Date()).toISOString().substring(0, 10) ;
}


module.exports.getRandomString = getRandomString;
module.exports.getRandomInt = getRandomInt;
module.exports.getRandomAmount = getRandomAmount;
module.exports.getDate = getDate;