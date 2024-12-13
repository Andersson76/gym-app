import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "database",
  database: process.env.PGDATABASE || "gymapp",
  password: process.env.PGPASSWORD || "extrajoss",
  port: Number(process.env.PGPORT) || 5432,
});

console.log(pool);

export const postWorkout = async (req: Request, res: Response) => {
  const { date, title, description } = req.body;
  console.log(req.body);

  if (!date || !title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO workouts (date, title, description) VALUES ($1, $2, $3) RETURNING *",
      [date, title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding workout:", error);
    res.status(500).json({ error: "Error adding workout" });
  }
};
