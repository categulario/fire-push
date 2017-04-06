import request from 'request';
import Promise from 'bluebird';

export default {
	createNotificationRequestConfig : function (config = {}) {
		let configRequest = {};
		let apiKey = config.apiKey || '';
		let message = config.message || {};
		configRequest.url = config.url || 'https://fcm.googleapis.com/fcm/send';
		configRequest.method = config.method || 'POST';
		configRequest.headers = {
			'Content-Type' : 'application/json',
			'Authorization': 'key=' + apiKey
		};
		configRequest.body = JSON.stringify(message);
		return configRequest;
	},

	sendRequest : function (config) {
		return new Promise(function (resolve, reject) {
			request(config, function(error, response, body) {
				if (error)
					reject(error);
				else
					resolve(body);
			});
		});
	}
}