import { Request, Response } from "express";
import { Pool } from "pg";

// Skapa en pool av PostgreSQL-anslutningar
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
});

export const postWorkout = async (req: Request, res: Response) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Skriv in träningspasset i databasen
    const result = await pool.query(
      `INSERT INTO workouts (date, title, description)
       VALUES ($1, $2, $3) RETURNING *`,
      [date, title, description]
    );

    // Skicka tillbaka det nyligen skapade träningspasset som svar
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting workout:", err);
    return res.status(500).json({ message: "Error adding workout" });
  }
};
