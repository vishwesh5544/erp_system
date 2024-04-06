import {Sequelize} from 'sequelize';

export default class Database {
    private static _instance: Database;
    private static _sequelize: Sequelize;
    private static _logging = process.env.DB_LOGGING === 'true' ? console.log : false;

    private constructor() {
    }

    public static async initialize(): Promise<void> {
        if (!Database._instance) {
            const dbName = process.env.DB_NAME || 'erp';
            const dbUser = process.env.DB_USER || 'root';
            const dbPassword = process.env.DB_PASSWORD || 'root';
            const dbHost = process.env.DB_HOST || 'localhost';

            Database._instance = new Database();

            Database._sequelize = new Sequelize({
                database: dbName,
                username: dbUser,
                password: dbPassword,
                host: dbHost,
                dialect: 'mysql',
                logging: console.log,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });

            try {
                // test the connection
                await Database._sequelize.authenticate();
                console.log('Connection has been established successfully.');
            } catch (e) {
                console.error('Error initializing database:', e);
            }
        }
    }

    public static async close(): Promise<void> {
        if (Database._instance) {
            await Database._sequelize.close();
        }
    }

    public static async sync(): Promise<void> {
        if (Database._instance) {
            try {
                await Database._sequelize.sync({logging: Database._logging, force: false, alter: true});
            } catch (e) {
                console.error('Error synchronizing database:', e);
            }
        }
    }

    public static get instance() {
        if (!Database._instance) {
            throw new Error('Database not initialized. Call initialize() first.');
        }
        return Database._instance;
    }

    public static getSequelizeInstance(): Sequelize {
        if (!Database._sequelize) {
            throw new Error('Database not initialized. Call initialize() first.');
        }
        return Database._sequelize;
    }
}
