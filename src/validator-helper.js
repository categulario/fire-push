import Joi from 'joi';
import SchemasJoi from './schemas-joi';

function validateSchema(schemaName, object) {
	let schema = SchemasJoi.loadSchema(schemaName);
	return Joi.validate(object, schema);
}

export default {
	
	validateSchema : validateSchema,

	validateNotification : validateSchema.bind(null, 'notification'),

	validateMessage : validateSchema.bind(null, 'message'),
}