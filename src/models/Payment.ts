import {Model, DataTypes, Association} from 'sequelize';
import Database from '../database/database';
import {Invoice} from './Invoice';

export class Payment extends Model {
    public id!: number;
    public invoiceId!: number;
    public amountPaid!: number;
    public paymentDate!: Date;

    // Associations can be defined here
    public static associations: {
        invoice: Association<Payment, Invoice>;
    };
}

Payment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    invoiceId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'invoices',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    amountPaid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'payments',
    sequelize: Database.getSequelizeInstance(),
});

// Here you can define association (after all models are defined)
Payment.belongsTo(Invoice, {foreignKey: 'invoiceId', as: 'invoice'});
Invoice.hasMany(Payment, {foreignKey: 'invoiceId', as: 'payments'});
