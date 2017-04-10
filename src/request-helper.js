import request from 'request';
import Promise from 'bluebird';
import ValidatorHelper from './validator-helper.js';

export default class RequestHelper {
	constructor (config = {}) {
		this.configRequest = config;
	}

	sendMessage (message) {
		let result = ValidatorHelper.validateMessage(message)
		if (result.error) {
			return Promise.reject({ message : "Invalid message body", error : result.error })
		}
		this.configRequest.body = JSON.stringify(message);
		return new Promise((resolve, reject) => {
			request(this.configRequest, (error, response, body) =>{
				if (error)
					reject(error);
				else
					resolve(body);
			});
		});
	}
}