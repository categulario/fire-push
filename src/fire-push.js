import RequestHelper from './request-helper';

export default class FirePush extends RequestHelper{
	constructor(config = {}) {
		config.url = 'https://fcm.googleapis.com/fcm/send';
		config.method = 'POST';
		config.headers = {
			'Content-Type' : 'application/json',
			'Authorization': 'key=' + config.apiKey
		};

		super(config)
	}
}