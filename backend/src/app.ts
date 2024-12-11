import express from "express";
import cors from "cors";
import { logger } from "./middleware/logger";
import router from "./routes";

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/", router);

export default app;
