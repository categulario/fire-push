import RequestHelper from './request-helper';

export default class FirePush {
	constructor(apiKey = '') {
		this._apiKey = apiKey;
	}

	get apiKey () {
		return this._apiKey;
	}

	sendMessage ( message = {} ) {
		let config = RequestHelper.createNotificationRequestConfig({ apiKey : this.apiKey, message : message});
		return RequestHelper.sendRequest(config);
	}

}