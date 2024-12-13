"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWorkout = void 0;
const pg_1 = require("pg");
// Skapa en pool av PostgreSQL-anslutningar
const pool = new pg_1.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
});
const postWorkout = async (req, res) => {
    const { title, description, date } = req.body;
    if (!title || !description || !date) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        // Skriv in träningspasset i databasen
        const result = await pool.query(`INSERT INTO workouts (date, title, description)
       VALUES ($1, $2, $3) RETURNING *`, [date, title, description]);
        // Skicka tillbaka det nyligen skapade träningspasset som svar
        return res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error("Error inserting workout:", err);
        return res.status(500).json({ message: "Error adding workout" });
    }
};
exports.postWorkout = postWorkout;
