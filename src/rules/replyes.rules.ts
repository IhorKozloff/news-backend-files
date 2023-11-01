import Joi from 'joi';

const add = Joi.object({
    text: Joi.string().required(),
    news_id: Joi.string().required(),
    parent_id: Joi.string().required(),
    img_urls: Joi.array().items(Joi.string()).optional(),
});

const getByNewsId = Joi.object({
    id: Joi.string().required(),
});

export default {
    add,
    getByNewsId,
}