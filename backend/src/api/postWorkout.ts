import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: "database",
  database: process.env.PGDB,
  password: process.env.PGPASSWORD,
  port: 5432,
});

export const postWorkout = async (req: Request, res: Response) => {
  const { title, description, date } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO workouts (title, description, date) VALUES ($1, $2, $3) RETURNING *",
      [title, description, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding workout:", error);
    res.status(500).json({ error: "Error adding workout" });
  }
};
