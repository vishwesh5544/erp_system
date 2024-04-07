import express from 'express';
import {Database} from "./database";

const app = express();
const port = 3000;

// import models
// move it to a separate function into models folder and import it here
async function importModels() {
    const {Employee, User, Invoice, Payment} = require('./models');
    await Employee.sync();
    await User.sync();
    await Invoice.sync();
    await Payment.sync();
}

function configureRoutes() {
    const {UserRoutes} = require('./routes');
    app.use(UserRoutes);
}

async function startServer() {
    // databaase configuration
    await Database.initialize();

    // import models
    await importModels();

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
