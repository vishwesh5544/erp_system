import UserRoutes from "./userRoutes";
import {Express} from "express";

const configureRoutes = (app: Express) => {
    app.use(UserRoutes);
}

export {
    configureRoutes
};
