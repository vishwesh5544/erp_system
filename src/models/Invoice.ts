import { Model, DataTypes, Association } from 'sequelize';
import Database from '../database/database';
import {Payment} from "./Payment";

export class Invoice extends Model {
    public id!: number;
    public invoiceNumber!: string;
    public amount!: number;
    public dueDate!: Date;
    public status!: string;

    // Here you can add associations
    public readonly payments?: Payment[];

    public static associations: {
        payments: Association<Invoice, Payment>;
    };
}

Invoice.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    invoiceNumber: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'invoices',
    sequelize: Database.getSequelizeInstance(),
});
