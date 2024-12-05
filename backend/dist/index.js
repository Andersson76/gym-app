"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5003;
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
