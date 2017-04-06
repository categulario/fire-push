export default class FirePush {
	constructor(apiKey = '') {
		this._apiKey = apiKey;
	}

	get apiKey () {
		return this._apiKey;
	}

}