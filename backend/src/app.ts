import express from "express";
import { logger } from "./middleware/logger";
import routes from "./routes";

const app = express();

//Middleware
app.use(logger);
app.use(express.json());

//Routes
app.use("/", routes);

export default app;
