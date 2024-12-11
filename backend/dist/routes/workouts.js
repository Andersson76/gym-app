"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const workouts = [];
// GET all workouts
router.get("/", (req, res) => {
    res.json(workouts);
});
// POST a new workout
router.post("/", (req, res) => {
    const { name, duration, type } = req.body;
    if (!name || !duration || !type) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newWorkout = {
        id: workouts.length + 1,
        name,
        duration,
        type,
    };
    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
});
exports.default = router;
