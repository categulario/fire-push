import request from 'request';
import Promise from 'bluebird';

export default class RequestHelper {
	constructor (config = {}) {
		this.configRequest = config;
	}

	sendMessage (message) {
		this.configRequest.body = JSON.stringify(message);
		return new Promise(function (resolve, reject) {
			request(this.configRequest, function(error, response, body) {
				if (error)
					reject(error);
				else
					resolve(body);
			});
		});
	}
}