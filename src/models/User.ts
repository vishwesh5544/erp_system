import { Model, DataTypes } from 'sequelize';
import Database from '../database/database';
import {UserRole} from "../enums";



export class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public role!: UserRole;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM,
        values: Object.values(UserRole),
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize: Database.getSequelizeInstance(),
});
