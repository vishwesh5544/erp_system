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

    // import models
    importModels();

    // sync models
    await Database.sync();

    // configure routes
    configureRoutes();

    // middlewares
    app.use(express.json());

    // start server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer().catch(console.error);

export default app;
