const expect = require('chai').expect;
const ValidatorHelper = require('../dist/src/validator-helper').default;


describe('#ValidatorHelper test', function(){

	describe('#validateSchema', function () {
		
		it('expected result dont have error if notification is valid',function () {
			let notification = {
				title : 'Ey',
				body : 'Make push notifications great again',
				sound : 'cielitolindo'
			};
			let result = ValidatorHelper.validateSchema('notification', notification);
			expect(result.error).to.be.null;
		});

		it('expected result have error if notification is not valid',function () {
			let notification = {
				title : 15262728,
				body : 'Make push notifications great again',
				sound : 'cielitolindo'
			};
			let result = ValidatorHelper.validateSchema('notification', notification);
			expect(result.error).to.not.be.null;
		});
	});

	describe('#validateNotification', function () {
		let notification = {}

		beforeEach(function () {
			notification = {
				title : 'Ey',
				body : 'Make push notifications great again',
				sound : 'cielitolindo'
			};
		});
		
		it('expected result dont have error if notification is valid',function () { 
			let result = ValidatorHelper.validateNotification(notification);
			expect(result.error).to.be.null;
		});

		it('expected result have error if notification is not valid',function () {
			notification.title = 15262728;
			let result = ValidatorHelper.validateNotification('notification', notification);
			expect(result.error).to.not.be.null;
		});
	});

	describe('#validateMessage', function () {

		let message = {}

		beforeEach(function () {
			message.notification = {
				title : 'Ey',
				body : 'Make push notifications great again',
				sound : 'cielitolindo'
			};
			message.to = '/topics/testing';
			message.data = {
				"info" : "everything is awesome"
			};
		});
		
		it('expected result dont have error if notification is valid',function () {
			let result = ValidatorHelper.validateMessage(message);
			expect(result.error).to.be.null;
		});

		it('expected result must have error when "to" property is a number',function () {
			message.to = 1272;
			let result = ValidatorHelper.validateMessage(message);
			expect(result.error).to.not.be.null;
		});

		it('expected result must have error when title property in notification is a number',function () {
			message.notification.title = 1221;
			let result = ValidatorHelper.validateMessage(message);
			expect(result.error).to.not.be.null;
		});

		it('expected result must have error when some property in data is a number',function () {
			message.data.info = 1221;
			let result = ValidatorHelper.validateMessage(message);
			expect(result.error).to.not.be.null;
		});
	});

});