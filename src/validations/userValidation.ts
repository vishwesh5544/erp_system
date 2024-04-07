import Joi from 'joi';

export const createUserSchema = Joi.object({
    username: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    role: Joi.string().required()
});

export const updateUserSchema = Joi.object({
    username: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    role: Joi.string()
});

export const userIdSchema = Joi.object({
    id: Joi.number().integer().required()
});

