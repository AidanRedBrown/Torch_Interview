import express from "express";
import bodyParser from 'body-parser';
import registerRoutes from "./routes.js";
import cors from 'cors';

export default (port) => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    registerRoutes(app);

    app.listen(port, () => console.log(`App started on port ${port}`));

    return app;
}