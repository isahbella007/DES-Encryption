const Joi = require("joi")

const registerValidation = (data) => { 
    const schema = Joi.object({ 
        name: Joi.string().min(2).max(30).required(),
        lastname: Joi.string().min(2).max(30).required(),
        passport: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .min(6)
        .required(),
    })
    return schema.validate(data)
}

module.exports = registerValidation