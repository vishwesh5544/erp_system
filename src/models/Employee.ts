import { Model, DataTypes } from 'sequelize';
import Database from '../database/database';


export class Employee extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public department!: string;
    public position!: string;
    public salary!: number;
}

Employee.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    lastName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'employees',
    sequelize: Database.getSequelizeInstance(),
});
