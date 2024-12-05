import express from "express";
const app = express();
const port = 5004;

// Middleware för att logga alla inkommande förfrågningar
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.post("/test", (req, res) => {
  res.json({ message: "Post request received!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
