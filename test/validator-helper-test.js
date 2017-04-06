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

});