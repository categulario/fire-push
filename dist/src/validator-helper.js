'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _schemasJoi = require('./schemas-joi');

var _schemasJoi2 = _interopRequireDefault(_schemasJoi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateSchema(schemaName, object) {
	var schema = _schemasJoi2.default.loadSchema(schemaName);
	return _joi2.default.validate(object, schema);
}

exports.default = {

	validateSchema: validateSchema,

	validateNotification: validateSchema.bind(null, 'notification'),

	validateMessage: validateSchema.bind(null, 'message')
};