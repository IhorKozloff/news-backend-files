import Joi from 'joi';

const list = Joi.object({
    id: Joi.number().required(),
});

export default {
    list
}