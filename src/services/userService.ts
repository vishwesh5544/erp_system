import IUserService from "../interfaces/userService";
import {User} from "../models";
import {UserRole} from "../enums";
import ServiceResult from "../models/ServiceResult";

class UserService implements IUserService {
    async createUser(username: string, email: string, role: UserRole): Promise<ServiceResult<User | Error>> {
        try {
            const user = await User.create({username, email, role});
            return {success: true, data: user};
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async deleteUser(userId: number): Promise<ServiceResult<boolean | Error>> {
        try {
            await User.destroy({where: {id: userId}});
            return {success: true, data: true};
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async getAllUsers(): Promise<ServiceResult<User[] | Error>> {
        try {
            const users = await User.findAll();
            return {success: true, data: users};
        } catch (e) {
            return {success: false, error: (e as Error)};
        }
    }

    async getUser(userId: number): Promise<ServiceResult<User | Error>> {
        try {
            const user = await User.findByPk(userId);
            if (user) {
                return {success: true, data: user};
            } else {
                return {success: false, error: new Error("User not found")};
            }
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async updateUser(userId: number, username: string, email: string, role: UserRole): Promise<ServiceResult<User | Error>> {
        try {
            const user = await User.findByPk(userId);
            if (user) {
                user.username = username;
                user.email = email;
                user.role = role;
                await user.save();
                return {success: true, data: user};
            } else {
                return {success: false, error: new Error("User not found")};
            }
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }
}
