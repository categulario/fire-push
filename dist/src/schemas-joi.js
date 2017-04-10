'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notification = {
	title: _joi2.default.string(),
	body: _joi2.default.string(),
	icon: _joi2.default.string(),
	sound: _joi2.default.string(),
	badge: _joi2.default.string(),
	tag: _joi2.default.string(),
	color: _joi2.default.string(),
	click_action: _joi2.default.string(),
	body_loc_key: _joi2.default.string(),
	body_loc_args: _joi2.default.array().items(_joi2.default.string()),
	title_loc_key: _joi2.default.string(),
	title_loc_args: _joi2.default.array().items(_joi2.default.string())
};

var data = _joi2.default.object().pattern(/.*/, _joi2.default.string());

var message = {
	condition: _joi2.default.string(),
	registration_ids: _joi2.default.array().items(_joi2.default.string()),
	collapse_key: _joi2.default.string(),
	priority: _joi2.default.string(),
	content_available: _joi2.default.boolean(),
	delay_while_idle: _joi2.default.boolean(),
	time_to_live: _joi2.default.number(),
	restricted_package_name: _joi2.default.string(),
	dry_run: _joi2.default.boolean(),
	to: _joi2.default.string(),
	notification: notification,
	data: data
};

var schemas = {
	notification: notification,
	message: message
};
exports.default = {
	loadSchema: function loadSchema(schemaName) {
		if (schemaName === undefined) {
			throw new Error('Schema name is missing');
		}

		if (typeof schemaName !== 'string' || !schemas[schemaName]) {
			throw new Error('Schema ' + schemaName + ' no exist or no is a valid string');
		}

		return schemas[schemaName];
	}
};