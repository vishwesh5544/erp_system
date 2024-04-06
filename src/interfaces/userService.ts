export default interface IUserService {
    getUser(userId: number): Promise<any>;

    createUser(username: string, email: string, role: string): Promise<any>;

    updateUser(userId: number, username: string, email: string, role: string): Promise<any>;

    deleteUser(userId: number): Promise<any>;

    getAllUsers(): Promise<any>;
}
