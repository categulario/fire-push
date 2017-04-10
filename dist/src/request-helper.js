'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _validatorHelper = require('./validator-helper.js');

var _validatorHelper2 = _interopRequireDefault(_validatorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestHelper = function () {
	function RequestHelper() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, RequestHelper);

		this.configRequest = config;
	}

	_createClass(RequestHelper, [{
		key: 'sendMessage',
		value: function sendMessage(message) {
			var _this = this;

			var result = _validatorHelper2.default.validateMessage(message);
			if (result.error) {
				return _bluebird2.default.reject({ message: "Invalid message body", error: result.error });
			}
			this.configRequest.body = JSON.stringify(message);
			return new _bluebird2.default(function (resolve, reject) {
				(0, _request2.default)(_this.configRequest, function (error, response, body) {
					if (error) reject(error);else resolve(body);
				});
			});
		}
	}]);

	return RequestHelper;
}();

exports.default = RequestHelper;