const expect = require('chai').expect;
require('chai').use(require('chai-as-promised'));
const RequestHelper = require('../dist/src/request-helper').default;


describe('#RequestHelper test', function(){

	describe('#createNotificationRequestConfig', function(){
		
		it('expected return object with api key in Authorization and message serialized in body', function () {
			let options = { apiKey : '123748', message : {} };
			let serializedMessage = JSON.stringify(options.message);
			let authorizationValue = "key=" + options.apiKey;
			let requestConfig = RequestHelper.createNotificationRequestConfig(options);
			expect(requestConfig).to.have.deep.property('headers.Authorization', authorizationValue);
			expect(requestConfig).to.have.deep.property('body', serializedMessage);
		});

		it('expected return object with empty Authorization and empty object serialized', function () {
			let serializedMessage = JSON.stringify({});
			let authorizationValue = "key=";
			let requestConfig = RequestHelper.createNotificationRequestConfig();
			expect(requestConfig).to.have.deep.property('headers.Authorization', authorizationValue);
			expect(requestConfig).to.have.deep.property('body', serializedMessage);
		});

	});

	describe('#sendRequest', function(){
		
		it('expected request will be sended and return a satisfactory status', function () {
			let config = { url : 'https://httpbin.org/get', method : 'GET' };
			let requestSended = RequestHelper.sendRequest(config);
			expect(requestSended).to.be.fulfilled
		});

	});
});