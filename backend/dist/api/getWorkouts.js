"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkouts = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.PGUSER,
    host: "database",
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
});
console.log(pool);
const getWorkouts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM workouts");
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error fetching workouts:", error);
        res.status(500).json({ error: "Error fetching workouts." });
    }
};
exports.getWorkouts = getWorkouts;
