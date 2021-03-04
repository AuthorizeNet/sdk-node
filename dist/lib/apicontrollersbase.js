"use strict";

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _logger = require("./logger");

var _config = require("./config");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class APIOperationBase {
  constructor(apiRequest) {
    _logger.logger.debug('Enter APIOperationBase constructor');

    this._request = null;
    this._response = null;
    this._endpoint = _constants.constants.endpoint.sandbox;
    if (null == apiRequest) _logger.logger.error('Input request cannot be null');
    this._request = apiRequest;

    _logger.logger.debug('Exit APIOperationBase constructor');
  } //abstract


  validateRequest() {
    return;
  }

  validate() {
    return;
  }

  getResponse() {
    return this._response;
  }

  getResultcode() {
    var resultcode = null;
    if (this._response) resultcode = this._response.resultCode;
    return resultcode;
  }

  getMessagetype() {
    var message = null;

    if (this._response) {
      message = this._response.message;
    }

    return message;
  }

  beforeExecute() {}

  setClientId() {
    for (var obj in this._request) {
      this._request[obj]['clientId'] = _config.config.clientId;
      break;
    }
  }

  setEnvironment(env) {
    this._endpoint = env;
  }

  execute(callback) {
    _logger.logger.debug('Enter APIOperationBase execute');

    _logger.logger.debug('Endpoint : ' + this._endpoint);

    this.beforeExecute();
    this.setClientId();
    var obj = this;

    _logger.logger.debug(JSON.stringify(this._request, 2, null));

    var reqOpts = {
      url: this._endpoint,
      method: 'POST',
      json: true,
      timeout: _config.config.timeout,
      body: this._request
    };

    if (_config.config.proxy.setProxy) {
      reqOpts['proxy'] = _config.config.proxy.proxyUrl;
    }

    (0, _request2.default)(reqOpts, function (error, response, body) {
      if (error) {
        _logger.logger.error(error);
      } else {
        //TODO: slice added due to BOM character. remove once BOM character is removed.
        if (typeof body !== 'undefined') {
          var responseObj = JSON.parse(body.slice(1));

          _logger.logger.debug(JSON.stringify(responseObj, 2, null));

          obj._response = responseObj;
          /*
          var jsonResponse = JSON.stringify(body);
          console.log("escaped body : '" + escape(jsonResponse) + "'");
          console.log("body : '" + jsonResponse + "'");
          logger.debug("Response: " + JSON.stringify(body, 2, null));
          obj._response = body;
          */

          callback();
        } else {
          _logger.logger.error("Undefined Response");
        }
      }
    });

    _logger.logger.debug('Exit APIOperationBase execute');
  }

}

module.exports.APIOperationBase = APIOperationBase;