const expect = require('chai').expect;
require('chai').use(require('chai-as-promised'));
const FirePush = require('..').default;

describe('#Fire-Push Test', function () {
	
	it('Api key equal when is setted in constructor and when is getted', function () {
		let apiKey = '17272829823';
		let firePush = new FirePush(apiKey);
		expect(apiKey).to.be.equal(firePush.apiKey);
	});

	it('Api key not equal when is setted directly in the object', function () {
		let apiKey = '17272829823';
		let firePush = new FirePush();
		firePush.apiKey = apiKey;
		expect(apiKey).to.not.equal(firePush.apiKey);
	});
});