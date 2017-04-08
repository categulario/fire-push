import Joi from 'joi';

const notification = {
	title : Joi.string(),
	body : Joi.string(),
	icon : Joi.string(),
	sound : Joi.string(),
	badge : Joi.string(),
	tag	: Joi.string(),
	color : Joi.string(),
	click_action : Joi.string(),
	body_loc_key : Joi.string(),
	body_loc_args : Joi.array().items(Joi.string()),
	title_loc_key : Joi.string(),
	title_loc_args : Joi.array().items(Joi.string()),
};

const data = Joi.object().pattern(/.*/, Joi.string());

const message = {
	condition : Joi.string(),
	registration_ids : Joi.array().items(Joi.string()),
	collapse_key : Joi.string(),
	priority : Joi.string(),
	content_available : Joi.boolean(),
	delay_while_idle : Joi.boolean(),
	time_to_live : Joi.number(),
	restricted_package_name	: Joi.string(),
	dry_run	: Joi.boolean(),
	to : Joi.string(),
	notification : notification,
	data : data
};



const schemas = {
	notification : notification,
	message : message,	
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