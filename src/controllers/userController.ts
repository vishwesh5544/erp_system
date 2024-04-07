import {Request, Response} from 'express';
import {UserService} from '../services';

class UserController {
    async getUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const user = await UserService.getUser(userId);
            if (!user) {
                res.status(404).send({message: 'User not found'});
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).send({message: (error as Error).message});
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const {username, email, role} = req.body;
            const newUser = await UserService.createUser(username, email, role);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).send({message: (error as Error).message});
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const {username, email, role} = req.body;
            const updatedUser = await UserService.updateUser(userId, username, email, role);
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).send({message: 'User not found'});
            }
        } catch (error) {
            res.status(500).send({message: (error as Error).message});
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const result = await UserService.deleteUser(userId);
            if (result) {
                res.status(204).send();
            } else {
                res.status(404).send({message: 'User not found'});
            }
        } catch (error) {
            res.status(500).send({message: (error as Error).message});
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send({message: (error as Error).message});
        }
    }
}

export default new UserController();
