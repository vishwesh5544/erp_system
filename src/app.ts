import express from 'express';
import {Database} from "./database";

const app = express();
const port = 3000;

async function startServer() {
    // databaase configuration
    await Database.initialize();

    // import models
    await require('./models').syncModels();

    app.use(express.json());

    // configure routes
    await require('./routes').configureRoutes(app);

    // middlewares

    // start server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer().catch(console.error);

export default app;
