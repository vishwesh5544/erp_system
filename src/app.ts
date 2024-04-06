import express from 'express';
import Database from "./database/database";

const app = express();
const port = 3000;

function importModels () {
    require('./models/Employee');
    require('./models/Invoice');
    require('./models/Payment');
}

async function startServer() {
    await Database.initialize();

    importModels();

    await Database.sync();

    app.use(express.json());

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

}

startServer().catch(console.error);

export default app;
