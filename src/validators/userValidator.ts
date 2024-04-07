import {Request, Response, NextFunction} from 'express';
import {createUserSchema, updateUserSchema, userIdSchema} from '../validations';

function validateUserCreation(req: Request, res: Response, next: NextFunction) {
    const {error} = createUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }
    next();
}

function validateUserUpdate(req: Request, res: Response, next: NextFunction) {
    const {error} = updateUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }
    next();
}

function validateUserId(req: Request, res: Response, next: NextFunction) {
    const {error} = userIdSchema.validate({id: req.params.id});
    if (error) {
        return res.status(400).json(error.details);
    }
    next();
}

export {validateUserCreation, validateUserUpdate, validateUserId};
