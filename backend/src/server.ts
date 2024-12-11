import app from "./app";

const PORT = Number(process.env.PORT) || 5004;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
