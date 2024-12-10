"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = __importDefault(require("./test"));
const router = (0, express_1.Router)();
// Länka test-routes till "/test"
router.use("/test", test_1.default);
// Root-endpoint
router.get("/", (req, res) => {
    res.send("Hello from Index");
});
exports.default = router;
