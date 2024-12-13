"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWorkout = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.PGUSER,
    host: "database",
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
});
console.log(pool);
const postWorkout = async (req, res) => {
    const { user_id, date, title, description } = req.body;
    console.log(req.body);
    if (!user_id || !date || !title || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const result = await pool.query("INSERT INTO workouts (user_id, date, title, description) VALUES ($1, $2, $3, $4) RETURNING *", [user_id, date, title, description]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error("Error adding workout:", error);
        res.status(500).json({ error: "Error adding workout" });
    }
};
exports.postWorkout = postWorkout;
