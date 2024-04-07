import {Router} from "express";
import {UserController} from "../controllers";
import {validateUserCreation, validateUserId, validateUserUpdate} from "../validators";

const userRouter = Router();

userRouter.get('/users/:id', validateUserId, UserController.getUser);
userRouter.post('/users', validateUserCreation, UserController.createUser);
userRouter.put('/users/:id', validateUserId, validateUserUpdate, UserController.updateUser);
userRouter.delete('/users/:id', validateUserId, UserController.deleteUser);
userRouter.get('/users', UserController.getAllUsers);

export default userRouter;
