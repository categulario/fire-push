const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require("sinon-chai"));
chai.use(require('chai-as-promised'));
const FirePush = require('..').default;
const RequestHelper = require('../dist/src/request-helper').default;


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

	describe('#sendMessage', function(){
		let firePush;
		let sandbox;

		before(() => {
			let apiKey = '17272829823';
			firePush = new FirePush(apiKey);
		});

		beforeEach(() => {
			sandbox = sinon.sandbox.create();
		});

		afterEach(()=>{
			sandbox.restore();
		});

		it('message method must be fullfilled', function () {
			let requestSenderStub = sandbox.stub(RequestHelper, 'sendRequest');
			requestSenderStub.returns(Promise.resolve({ message_id : 7926694608618042676 }));
			let message = {
				notification : {
					title : 'Ey',
					body : 'Make push notifications great again',
					sound : 'cielitolindo'
				},
				to : 'topics/user_1'
			};

			let promiseSended = firePush.sendMessage(message);
			expect(requestSenderStub).to.have.been.called;
			expect(promiseSended).to.be.fulfilled;
			expect(promiseSended).to.eventually.have.property("message_id");
		});
	});
});