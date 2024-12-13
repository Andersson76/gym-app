import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.PORT) || 5004;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
