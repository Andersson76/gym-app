import express from "express";
import { logger } from "./middleware/logger";
import routes from "./routes";

const app = express();

app.use(logger);
app.use(express.json());

app.use("/", routes);

export default app;
