import Joi from 'joi';

const schemas = {
	notification : {
		title: Joi.string(),
		body: Joi.string(),
		sound: Joi.string()
	}
}
export default {
	loadSchema : function (schemaName) {
		if (schemaName === undefined){
			throw new Error('Schema name is missing');
		}

		if (typeof(schemaName) !== 'string' || !schemas[schemaName]){
			throw new Error(`Schema ${schemaName} no exist or no is a valid string`)
		}
		
		return schemas[schemaName];
	}
}