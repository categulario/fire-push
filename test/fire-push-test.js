const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
chai.use(require("sinon-chai"))
chai.use(require('chai-as-promised'))
const Promise = require('bluebird')
const FirePush = require('..').default
const RequestHelper = require('../dist/src/request-helper').default;

describe('#Fire-Push Test', function () {
	it('Api key equal when is setted in constructor and when is getted', function () {
		let apiKey = '17272829823'
		let firePush = new FirePush({apiKey})
		expect(apiKey).to.be.equal(firePush.configRequest.apiKey)
	})

	describe('#sendMessage', function() {
		let apiKey
		let firePush
		let sandbox
		let message

		beforeEach(() => {
			sandbox = sinon.sandbox.create();
			firePush = new FirePush({apiKey});
			apiKey = '17272829823';
			message = {
				notification : {
					title : 'Ey',
					body : 'Make push notifications great again',
					sound : 'cielitolindo'
				},
				to : 'topics/user_1'
			};
		});

		afterEach(()=>{
			sandbox.restore();
		});

		it('message method must be fullfilled', function () {
			let requestSenderStub = sandbox.stub(RequestHelper.prototype, 'sendMessage')
			requestSenderStub.returns(
				Promise.resolve({
					"multicast_id": 108,
					"success": 1,
					"failure": 0,
					"canonical_ids": 0,
					"results": [
						{ "message_id": "1:08" }
					]}
				)
			)
			let promiseSended = firePush.sendMessage(message)
			expect(requestSenderStub).to.have.been.called
			expect(promiseSended).to.be.fulfilled
			expect(promiseSended).to.eventually.have.property("success").to.equal(1);
		});

		it('message method must be reject when "to" property is number', function () {
			message.to = 28382292
			let promiseSended = firePush.sendMessage(message)
			expect(promiseSended).be.rejected
		});

		it('message method must be reject when notification property is null', function () {
			message.notification = null
			let promiseSended = firePush.sendMessage(message)
			expect(promiseSended).be.rejected
		});
	});
});