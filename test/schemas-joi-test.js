const expect = require('chai').expect;
const SchemasJoi = require('../dist/src/schemas-joi').default;


describe('#SchemasJoi test', function(){
	describe('#getSchema test', function(){
		it('expected schema be loaded if schemaName exist in SchemasJoi',function () {
			let schemaName = 'notification';
			let schema = SchemasJoi.loadSchema(schemaName);
			expect(schema).to.not.be.empty;
		});

		it('expected throws error if schema not exist',function () {
			let schemaName = 'invalid';
			let call = function(){ SchemasJoi.loadSchema(schemaName); };
			expect(call).to.throw(Error, `Schema ${schemaName} no exist or no is a valid string`);
		});

		it('expected throws error if schema name is missing',function () {
			let call = function(){ SchemasJoi.loadSchema(); };
			expect(call).to.throw(Error, 'Schema name is missing');
		});
	});

});