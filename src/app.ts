import express from 'express';
import {Database} from "./database";

const app = express();
const port = 3000;

function importModels() {
    require('./models/Employee');
    require('./models/Invoice');
    require('./models/Payment');
}

function configureRoutes() {
    const {UserRoutes} = require('./routes');
    app.use(UserRoutes);
}

async function startServer() {
    // databaase configuration
    await Database.initialize();

    importModels();

    await Database.sync();

    configureRoutes();

    // middlewares
    app.use(express.json());

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer().catch(console.error);

export default app;
