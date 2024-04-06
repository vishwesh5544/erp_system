import ServiceResult from "../models/ServiceResult";
import {User} from "../models";
import {UserRole} from "../enums";

export default interface IUserService {
    getUser(userId: number): Promise<ServiceResult<User | Error>>;

    createUser(username: string, email: string, role: string): Promise<ServiceResult<User | Error>>;

    updateUser(userId: number, username: string, email: string, role: UserRole): Promise<ServiceResult<User | Error>>;

    deleteUser(userId: number): Promise<ServiceResult<boolean | Error>>;

    getAllUsers(): Promise<ServiceResult<User[] | Error>>;
}
